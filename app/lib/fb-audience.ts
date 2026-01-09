import { hashForMeta } from './hash';

const META_ADS_ACCESS_TOKEN = process.env.META_ADS_ACCESS_TOKEN!;
const META_API_VERSION = 'v21.0';

// Audience IDs
const PURCHASERS_AUDIENCE_ID = '120242733156750102';  // value-based
const REFUNDS_AUDIENCE_ID = '120243337444160102';     // regular (NEW)

interface AudienceResponse {
  audience_id?: string;
  session_id?: string;
  num_received?: number;
  num_invalid_entries?: number;
  invalid_entry_samples?: Record<string, unknown>;
  error?: {
    message: string;
    type: string;
    code: number;
  };
}

// Customer data for FB audience matching
export interface CustomerData {
  email: string;
  firstName?: string;
  lastName?: string;
  zip?: string;
  city?: string;
  state?: string;
  country?: string;
}

/**
 * Parse full name into first and last name
 */
function parseFullName(fullName?: string): { firstName?: string; lastName?: string } {
  if (!fullName) return {};
  const parts = fullName.trim().split(/\s+/);
  if (parts.length === 1) return { firstName: parts[0] };
  return {
    firstName: parts[0],
    lastName: parts.slice(1).join(' '),
  };
}

/**
 * Build schema and data arrays for FB audience API
 * Only includes fields that have values
 */
function buildAudiencePayload(customer: CustomerData): { schema: string[]; data: (string | null)[][] } {
  const schema: string[] = [];
  const values: (string | null)[] = [];

  // Email is always required
  schema.push('EMAIL_SHA256');
  values.push(hashForMeta(customer.email));

  if (customer.firstName) {
    schema.push('FN');
    values.push(hashForMeta(customer.firstName));
  }
  if (customer.lastName) {
    schema.push('LN');
    values.push(hashForMeta(customer.lastName));
  }
  if (customer.zip) {
    schema.push('ZIP');
    values.push(hashForMeta(customer.zip));
  }
  if (customer.city) {
    schema.push('CT');
    values.push(hashForMeta(customer.city));
  }
  if (customer.state) {
    schema.push('ST');
    values.push(hashForMeta(customer.state));
  }
  if (customer.country) {
    schema.push('COUNTRY');
    values.push(hashForMeta(customer.country));
  }

  return { schema, data: [values] };
}

/**
 * Add a user to a Facebook Custom Audience
 */
async function addToAudience(
  audienceId: string,
  customer: CustomerData
): Promise<{ success: boolean; error?: string }> {
  const hashedEmail = hashForMeta(customer.email);

  if (!hashedEmail) {
    return { success: false, error: 'Invalid email' };
  }

  const payload = buildAudiencePayload(customer);

  try {
    const response = await fetch(
      `https://graph.facebook.com/${META_API_VERSION}/${audienceId}/users?access_token=${META_ADS_ACCESS_TOKEN}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ payload }),
      }
    );

    const result: AudienceResponse = await response.json();

    if (!response.ok || result.error) {
      console.error('[fb-audience] API error:', result);
      return { success: false, error: result.error?.message || JSON.stringify(result) };
    }

    console.log(`[fb-audience] User added to audience ${audienceId}. num_received: ${result.num_received}`);
    return { success: true };
  } catch (error) {
    console.error('[fb-audience] Fetch error:', error);
    return { success: false, error: String(error) };
  }
}

export { parseFullName };

/**
 * Add a purchaser to the exclusion audience
 * Accepts full customer data for better FB match rates
 */
export async function addToPurchasersAudience(customer: CustomerData | string): Promise<{ success: boolean; error?: string }> {
  // Support both old (email only) and new (full data) signatures for backwards compatibility
  const customerData: CustomerData = typeof customer === 'string' ? { email: customer } : customer;
  console.log(`[fb-audience] Adding purchaser to audience: ${customerData.email}`);
  return addToAudience(PURCHASERS_AUDIENCE_ID, customerData);
}

/**
 * Add a refunder to the refunds audience (for lookalike exclusion)
 */
export async function addToRefundsAudience(customer: CustomerData | string): Promise<{ success: boolean; error?: string }> {
  const customerData: CustomerData = typeof customer === 'string' ? { email: customer } : customer;
  console.log(`[fb-audience] Adding refunder to audience: ${customerData.email}`);
  return addToAudience(REFUNDS_AUDIENCE_ID, customerData);
}

/**
 * Remove a user from the purchasers audience (when they refund)
 */
export async function removeFromPurchasersAudience(email: string): Promise<{ success: boolean; error?: string }> {
  const hashedEmail = hashForMeta(email);

  if (!hashedEmail) {
    return { success: false, error: 'Invalid email' };
  }

  try {
    const response = await fetch(
      `https://graph.facebook.com/${META_API_VERSION}/${PURCHASERS_AUDIENCE_ID}/users?access_token=${META_ADS_ACCESS_TOKEN}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          payload: {
            schema: ['EMAIL_SHA256'],
            data: [[hashedEmail]],
          },
        }),
      }
    );

    const result: AudienceResponse = await response.json();

    if (!response.ok || result.error) {
      console.error('[fb-audience] Remove API error:', result);
      return { success: false, error: result.error?.message || JSON.stringify(result) };
    }

    console.log(`[fb-audience] User removed from purchasers audience. num_received: ${result.num_received}`);
    return { success: true };
  } catch (error) {
    console.error('[fb-audience] Remove fetch error:', error);
    return { success: false, error: String(error) };
  }
}
