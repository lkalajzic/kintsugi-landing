import {
  hashForMeta,
  hashPhone,
  normalizeCity,
  normalizeState,
  normalizeZip,
  normalizeCountry,
  splitName,
} from './hash';

const META_PIXEL_ID = process.env.META_PIXEL_ID || '1344457960748728';
const META_ACCESS_TOKEN = process.env.META_ACCESS_TOKEN!;
const META_API_VERSION = 'v21.0';

// ============================================================================
// Types
// ============================================================================

interface CustomerData {
  email: string | null;
  phone: string | null;
  name: string | null;
  address?: {
    city: string | null;
    state: string | null;
    postal_code: string | null;
    country: string | null;
  } | null;
}

interface BrowserData {
  clientIpAddress: string | null;
  clientUserAgent: string | null;
  fbc: string | null;  // Meta click ID cookie
  fbp: string | null;  // Meta browser ID cookie
}

interface PurchaseEventParams {
  eventId: string;
  eventTime: number;
  eventSourceUrl: string;
  customerData: CustomerData;
  browserData: BrowserData;
  value: number;        // In currency units (not cents!)
  currency: string;
  orderId?: string;
}

interface InitiateCheckoutParams {
  eventId: string;
  eventTime: number;
  eventSourceUrl: string;
  browserData: BrowserData;
  value: number;
  currency: string;
}

interface MetaApiResponse {
  events_received?: number;
  messages?: string[];
  fbtrace_id?: string;
  error?: {
    message: string;
    type: string;
    code: number;
  };
}

// ============================================================================
// Helper Functions
// ============================================================================

/**
 * Build user_data object for Meta CAPI with hashed PII
 */
function buildUserData(
  customerData: CustomerData | null,
  browserData: BrowserData
): Record<string, unknown> {
  const userData: Record<string, unknown> = {};

  // Browser data (not hashed)
  if (browserData.clientIpAddress) {
    userData.client_ip_address = browserData.clientIpAddress;
  }
  if (browserData.clientUserAgent) {
    userData.client_user_agent = browserData.clientUserAgent;
  }
  if (browserData.fbc) {
    userData.fbc = browserData.fbc;
  }
  if (browserData.fbp) {
    userData.fbp = browserData.fbp;
  }

  // Customer PII (hashed) - only for Purchase event
  if (customerData) {
    if (customerData.email) {
      userData.em = [hashForMeta(customerData.email)];
    }
    if (customerData.phone) {
      userData.ph = [hashPhone(customerData.phone)];
    }

    // Split name into first/last
    const { firstName, lastName } = splitName(customerData.name);
    if (firstName) {
      userData.fn = [hashForMeta(firstName)];
    }
    if (lastName) {
      userData.ln = [hashForMeta(lastName)];
    }

    // Address data
    if (customerData.address) {
      const { city, state, postal_code, country } = customerData.address;

      if (city) {
        userData.ct = [hashForMeta(normalizeCity(city))];
      }
      if (state) {
        userData.st = [hashForMeta(normalizeState(state))];
      }
      if (postal_code) {
        userData.zp = [hashForMeta(normalizeZip(postal_code))];
      }
      if (country) {
        userData.country = [hashForMeta(normalizeCountry(country))];
      }
    }
  }

  return userData;
}

/**
 * Send event to Meta Conversions API
 */
async function sendToMetaCAPI(eventPayload: unknown): Promise<{ success: boolean; error?: string }> {
  try {
    const response = await fetch(
      `https://graph.facebook.com/${META_API_VERSION}/${META_PIXEL_ID}/events?access_token=${META_ACCESS_TOKEN}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventPayload),
      }
    );

    const result: MetaApiResponse = await response.json();

    if (!response.ok || result.error) {
      console.error('[meta-capi] API error:', result);
      return { success: false, error: result.error?.message || JSON.stringify(result) };
    }

    console.log(`[meta-capi] Event sent successfully. events_received: ${result.events_received}, fbtrace_id: ${result.fbtrace_id}`);
    return { success: true };
  } catch (error) {
    console.error('[meta-capi] Fetch error:', error);
    return { success: false, error: String(error) };
  }
}

// ============================================================================
// Public API
// ============================================================================

/**
 * Send Purchase event to Meta CAPI
 */
export async function sendPurchaseEvent(params: PurchaseEventParams): Promise<{ success: boolean; error?: string }> {
  const {
    eventId,
    eventTime,
    eventSourceUrl,
    customerData,
    browserData,
    value,
    currency,
    orderId,
  } = params;

  const eventPayload = {
    data: [
      {
        event_name: 'Purchase',
        event_time: eventTime,
        event_id: eventId,
        action_source: 'website',
        event_source_url: eventSourceUrl,
        user_data: buildUserData(customerData, browserData),
        custom_data: {
          value: value.toFixed(2),
          currency: currency.toUpperCase(),
          content_name: 'Kintsugi Class',
          content_type: 'product',
          content_category: 'Online Course',
          num_items: 1,
          order_id: orderId,
        },
      },
    ],
  };

  console.log(`[meta-capi] Sending Purchase event (event_id: ${eventId}, value: ${value} ${currency})`);
  return sendToMetaCAPI(eventPayload);
}

/**
 * Send InitiateCheckout event to Meta CAPI
 */
export async function sendInitiateCheckoutEvent(params: InitiateCheckoutParams): Promise<{ success: boolean; error?: string }> {
  const {
    eventId,
    eventTime,
    eventSourceUrl,
    browserData,
    value,
    currency,
  } = params;

  const eventPayload = {
    data: [
      {
        event_name: 'InitiateCheckout',
        event_time: eventTime,
        event_id: eventId,
        action_source: 'website',
        event_source_url: eventSourceUrl,
        user_data: buildUserData(null, browserData),  // No customer data at IC time
        custom_data: {
          value: value.toFixed(2),
          currency: currency.toUpperCase(),
          content_name: 'Kintsugi Class',
          content_type: 'product',
          content_category: 'Online Course',
          num_items: 1,
        },
      },
    ],
  };

  console.log(`[meta-capi] Sending InitiateCheckout event (event_id: ${eventId})`);
  return sendToMetaCAPI(eventPayload);
}
