#!/usr/bin/env bun
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);

async function testReceiving() {
  console.log('Testing Resend Receiving API...\n');

  try {
    // Test 1: List inbound emails
    console.log('1. Fetching inbound emails...');
    const { data, error } = await resend.emails.receiving.list({ limit: 20 });

    if (error) {
      console.error('❌ Error:', error);
      return;
    }

    console.log('✅ Response:', JSON.stringify(data, null, 2));
    console.log(`\nFound ${data?.data?.length || 0} emails`);

    // Test 2: Try to get one email if any exist
    if (data?.data && data.data.length > 0) {
      const firstEmailId = data.data[0].email_id;
      console.log(`\n2. Fetching full email: ${firstEmailId}`);
      const { data: fullEmail, error: getError } = await resend.emails.receiving.get(firstEmailId);

      if (getError) {
        console.error('❌ Error getting email:', getError);
      } else {
        console.log('✅ Full email:', JSON.stringify(fullEmail, null, 2));
      }
    }

  } catch (err: any) {
    console.error('❌ Caught error:', err.message);
    console.error('Full error:', err);
  }
}

testReceiving();
