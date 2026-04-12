'use client';

declare global {
 interface Window {
 fbq?: (
 action: string,
 event: string,
 params?: object,
 options?: { eventID: string }
 ) => void;
 }
}

// Payment Links (USD + EUR pricing)
const PAYMENT_LINKS = {
 default: 'https://buy.stripe.com/fZufZi4me5ntgINcvE43S0e',
 newYearSale: 'https://buy.stripe.com/5kQ5kE6um8zF3W1brA43S0d',
} as const;

interface PaymentLinkButtonProps {
 variant?: 'default' | 'newYearSale';
 displayPrice?: number;
 ctaText?: string;
 valueCapi?: number;
 className?: string;
}

export default function PaymentLinkButton({
 variant = 'default',
 displayPrice = 47,
 ctaText,
 valueCapi = 37.5,
 className,
}: PaymentLinkButtonProps) {
 const handleClick = () => {
 const eventId = crypto.randomUUID();

 if (window.fbq) {
 window.fbq(
 'track',
 'InitiateCheckout',
 {
 value: valueCapi,
 currency: 'EUR',
 content_name: 'Kintsugi Class',
 content_category: 'Online Course',
 },
 { eventID: eventId }
 );
 }

 navigator.sendBeacon('/api/track-checkout', JSON.stringify({ eventId }));

 window.location.href = PAYMENT_LINKS[variant];
 };

 const defaultClassName =
 'bg-gold hover:bg-darkGold text-charcoal px-14 py-5 rounded-xl text-2xl font-semibold transition-colors animate-pulse-glow';
 const defaultCtaText = `Begin Your Practice - $${displayPrice}`;

 return (
 <button
 onClick={handleClick}
 className={className || defaultClassName}
 >
 {ctaText || defaultCtaText}
 </button>
 );
}
