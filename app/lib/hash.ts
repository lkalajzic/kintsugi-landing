import { createHash } from 'crypto';

/**
 * Hash a value for Meta CAPI (SHA-256, lowercase hex)
 * Meta requires: lowercase, trimmed, then SHA-256 hashed
 */
export function hashForMeta(value: string | null | undefined): string | null {
  if (!value) return null;

  const normalized = value.toLowerCase().trim();
  return createHash('sha256').update(normalized).digest('hex');
}

/**
 * Normalize and hash phone number for Meta
 * Remove all non-digits, ensure country code prefix
 */
export function hashPhone(phone: string | null | undefined): string | null {
  if (!phone) return null;

  // Remove all non-digit characters
  let digits = phone.replace(/\D/g, '');

  // Remove leading zeros
  digits = digits.replace(/^0+/, '');

  // If no country code (10 digits for US), assume US (+1)
  if (digits.length === 10) {
    digits = '1' + digits;
  }

  return hashForMeta(digits);
}

/**
 * Split full name into first and last name
 */
export function splitName(fullName: string | null | undefined): { firstName: string | null; lastName: string | null } {
  if (!fullName) return { firstName: null, lastName: null };

  const parts = fullName.trim().split(/\s+/);
  if (parts.length === 1) {
    return { firstName: parts[0], lastName: null };
  }

  // First word is first name, rest is last name
  const firstName = parts[0];
  const lastName = parts.slice(1).join(' ');

  return { firstName, lastName };
}

/**
 * Normalize city for Meta (lowercase, letters only)
 */
export function normalizeCity(city: string | null | undefined): string | null {
  if (!city) return null;
  return city.toLowerCase().replace(/[^a-z]/g, '');
}

/**
 * Normalize state for Meta (lowercase, letters only)
 */
export function normalizeState(state: string | null | undefined): string | null {
  if (!state) return null;
  return state.toLowerCase().replace(/[^a-z]/g, '');
}

/**
 * Normalize zip for Meta (first 5 chars, lowercase, no spaces/dashes)
 */
export function normalizeZip(zip: string | null | undefined): string | null {
  if (!zip) return null;
  const cleaned = zip.toLowerCase().replace(/[\s-]/g, '');
  return cleaned.substring(0, 5);
}

/**
 * Normalize country to ISO 3166-1 alpha-2 (lowercase)
 */
export function normalizeCountry(country: string | null | undefined): string | null {
  if (!country) return null;
  return country.toLowerCase();
}
