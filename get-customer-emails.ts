import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-10-29.clover',
});

async function getCustomerEmails() {
  console.log('Fetching all successful checkout sessions...\n');

  // Get all successful checkout sessions from the past 7 days
  const sessions = await stripe.checkout.sessions.list({
    limit: 100,
    created: {
      // Last 7 days in Unix timestamp
      gte: Math.floor(Date.now() / 1000) - (7 * 24 * 60 * 60),
    },
  });

  const customers = sessions.data
    .filter(session => session.payment_status === 'paid')
    .map(session => ({
      email: session.customer_details?.email || session.customer_email || 'No email',
      name: session.customer_details?.name || 'No name',
      amount: `$${(session.amount_total || 0) / 100}`,
      date: new Date((session.created || 0) * 1000).toLocaleString(),
      sessionId: session.id,
    }));

  console.log(`Found ${customers.length} successful purchases:\n`);
  console.log('---');

  customers.forEach((customer, index) => {
    console.log(`${index + 1}. ${customer.name} (${customer.email})`);
    console.log(`   Amount: ${customer.amount}`);
    console.log(`   Date: ${customer.date}`);
    console.log(`   Session ID: ${customer.sessionId}`);
    console.log('---');
  });

  console.log('\nEmails only (for copy-paste):');
  console.log(customers.map(c => c.email).join(', '));

  return customers;
}

getCustomerEmails().catch(console.error);
