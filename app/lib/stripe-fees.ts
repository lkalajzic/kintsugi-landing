import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-10-29.clover',
});

export interface StripeFeeResult {
  grossAmount: number;  // Total charged (cents)
  stripeFee: number;    // Stripe fee (cents)
  netAmount: number;    // Net after fees (cents)
  currency: string;     // Currency code (e.g., 'eur')
}

/**
 * Get actual Stripe fees from a Payment Intent
 * Uses expand to get balance_transaction in one API call
 *
 * Note: Balance Transaction shows the amount in your Stripe account currency (EUR),
 * which is what we want for accurate ROAS calculation
 */
export async function getStripeFees(paymentIntentId: string): Promise<StripeFeeResult | null> {
  try {
    // Expand latest_charge.balance_transaction to get fee info
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId, {
      expand: ['latest_charge.balance_transaction'],
    });

    const charge = paymentIntent.latest_charge as Stripe.Charge | null;
    if (!charge) {
      console.warn(`[stripe-fees] No charge found for payment intent ${paymentIntentId}`);
      return null;
    }

    const balanceTransaction = charge.balance_transaction as Stripe.BalanceTransaction | null;
    if (!balanceTransaction) {
      console.warn(`[stripe-fees] No balance transaction found for charge ${charge.id}`);
      return null;
    }

    return {
      grossAmount: balanceTransaction.amount,
      stripeFee: balanceTransaction.fee,
      netAmount: balanceTransaction.net,
      currency: balanceTransaction.currency,
    };
  } catch (error) {
    console.error('[stripe-fees] Error fetching Stripe fees:', error);
    return null;
  }
}

/**
 * Fetch a Stripe checkout session with customer details and line items
 */
export async function getCheckoutSession(sessionId: string): Promise<Stripe.Checkout.Session | null> {
  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['customer_details', 'line_items'],
    });
    return session;
  } catch (error) {
    console.error('[stripe-fees] Error fetching checkout session:', error);
    return null;
  }
}
