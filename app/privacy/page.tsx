import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Kintsugi Class",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-cream py-16 px-6">
      <article className="max-w-3xl mx-auto prose prose-neutral">
        <h1>Privacy Policy</h1>
        <p><strong>Last updated: January 9, 2026</strong></p>

        <p>This Privacy Policy explains how we collect, use, and protect your information when you visit kintsugiclass.com ("Website") or purchase our products.</p>

        <p><strong>Contact:</strong> support@kintsugiclass.com</p>

        <hr />

        <h2>Summary</h2>
        <ul>
          <li>We collect your name, email, and payment info when you purchase</li>
          <li>We use Meta (Facebook) Pixel to improve our advertising</li>
          <li>We may add Google Ads tracking in the future</li>
          <li>We share data with payment processors (Stripe) and advertising platforms (Meta)</li>
          <li>You can request deletion of your data anytime</li>
          <li>We offer a 90-day money-back guarantee</li>
        </ul>

        <hr />

        <h2>1. Information We Collect</h2>

        <h3>Information You Provide</h3>
        <p>When you make a purchase or contact us, we collect:</p>
        <ul>
          <li>Name</li>
          <li>Email address</li>
          <li>Billing address</li>
          <li>Payment information (processed securely by Stripe)</li>
        </ul>

        <h3>Information Collected Automatically</h3>
        <p>When you visit our Website, we automatically collect:</p>
        <ul>
          <li>IP address</li>
          <li>Browser type and device information</li>
          <li>Pages visited and time spent</li>
          <li>Referring website</li>
          <li>Location (country/region level)</li>
        </ul>

        <hr />

        <h2>2. How We Use Your Information</h2>
        <p>We use your information to:</p>
        <ul>
          <li>Process your purchase and deliver digital products</li>
          <li>Send order confirmations and product access information</li>
          <li>Respond to your questions and support requests</li>
          <li>Improve our Website and products</li>
          <li>Send marketing emails (you can unsubscribe anytime)</li>
          <li>Create targeted advertising audiences on Meta (Facebook/Instagram)</li>
          <li>Measure advertising effectiveness</li>
        </ul>

        <hr />

        <h2>3. Advertising and Tracking</h2>

        <h3>Meta (Facebook) Pixel</h3>
        <p>We use Meta Pixel to:</p>
        <ul>
          <li>Track conversions from our Facebook/Instagram ads</li>
          <li>Create custom audiences for advertising</li>
          <li>Measure ad performance</li>
          <li>Show you relevant ads on Meta platforms</li>
        </ul>
        <p>Meta Pixel collects information about your browsing behavior on our site and shares it with Meta. This may include pages viewed, products purchased, and device information.</p>
        <p><strong>Meta's Privacy Policy:</strong> <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer">https://www.facebook.com/privacy/policy/</a></p>

        <h3>Future Advertising Platforms</h3>
        <p>We may implement additional advertising tracking (such as Google Ads, TikTok, Pinterest, or others) in the future. This policy will be updated accordingly.</p>

        <h3>Your Choices</h3>
        <ul>
          <li>You can opt out of Meta's targeted advertising at: <a href="https://www.facebook.com/settings/?tab=ads" target="_blank" rel="noopener noreferrer">facebook.com/settings</a></li>
          <li>You can use browser privacy settings to block cookies</li>
          <li>You can opt out of interest-based advertising at: <a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer">optout.aboutads.info</a></li>
        </ul>

        <hr />

        <h2>4. Who We Share Your Information With</h2>

        <h3>Payment Processor (Stripe)</h3>
        <ul>
          <li>To process your payment securely</li>
          <li>We use Stripe's managed payments service, which acts as the Merchant of Record</li>
          <li>Your bank statement may show "Stripe", "Lemon Squeezy", or similar</li>
          <li><a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">Stripe Privacy Policy</a></li>
        </ul>

        <h3>Advertising Platforms (Meta)</h3>
        <ul>
          <li>To measure and optimize advertising</li>
          <li>See Section 3 above</li>
        </ul>

        <h3>Email Service Provider</h3>
        <ul>
          <li>To send you purchase confirmations and updates</li>
        </ul>

        <p><strong>We do NOT sell your personal information to third parties.</strong></p>

        <hr />

        <h2>5. Data Retention</h2>
        <p>We keep your information for as long as:</p>
        <ul>
          <li>You have an account with us, OR</li>
          <li>Necessary to provide our services, OR</li>
          <li>Required by law (tax/accounting records)</li>
        </ul>
        <p>You can request deletion at any time.</p>

        <hr />

        <h2>6. Data Security</h2>
        <p>We implement reasonable security measures to protect your information:</p>
        <ul>
          <li>Secure HTTPS connections</li>
          <li>Payment processing through PCI-compliant Stripe</li>
          <li>Limited access to personal data</li>
        </ul>
        <p>However, no internet transmission is 100% secure. We cannot guarantee absolute security.</p>

        <hr />

        <h2>7. Your Rights</h2>

        <h3>For All Users</h3>
        <p>You have the right to:</p>
        <ul>
          <li><strong>Access</strong> your personal data</li>
          <li><strong>Correct</strong> inaccurate information</li>
          <li><strong>Delete</strong> your data (email us at support@kintsugiclass.com)</li>
          <li><strong>Opt out</strong> of marketing emails (unsubscribe link in every email)</li>
        </ul>

        <h3>For EU/UK Users (GDPR)</h3>
        <p>Additional rights include:</p>
        <ul>
          <li>Right to data portability</li>
          <li>Right to restrict processing</li>
          <li>Right to object to processing</li>
          <li>Right to lodge a complaint with your local data protection authority</li>
        </ul>
        <p><strong>Legal Basis for Processing:</strong></p>
        <ul>
          <li>Contract performance (to deliver your purchase)</li>
          <li>Legitimate interests (to improve our services and advertising)</li>
          <li>Consent (for marketing emails)</li>
        </ul>

        <h3>For California Users (CCPA)</h3>
        <p>You have the right to:</p>
        <ul>
          <li>Know what personal information we collect</li>
          <li>Request deletion of your information</li>
          <li>Non-discrimination for exercising your rights</li>
        </ul>
        <p>We do not sell personal information as defined by CCPA.</p>

        <hr />

        <h2>8. International Data Transfers</h2>
        <p>Your information may be transferred to and processed in:</p>
        <ul>
          <li>United States (Stripe, Meta)</li>
          <li>Other countries where our service providers operate</li>
        </ul>
        <p>We ensure appropriate safeguards are in place for such transfers.</p>

        <hr />

        <h2>9. Children's Privacy</h2>
        <p>Our Website is not intended for children under 18. We do not knowingly collect information from children. If you believe we have collected information from a child, please contact us immediately.</p>

        <hr />

        <h2>10. Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. The "Last updated" date at the top will reflect when changes were made. Continued use of our Website after changes constitutes acceptance.</p>

        <hr />

        <h2>11. Contact Us</h2>
        <p>For privacy-related questions or to exercise your rights:</p>
        <p><strong>Email:</strong> support@kintsugiclass.com</p>
        <p>
          ReturnOn<br />
          Omladinska 4, 51000 Rijeka, Croatia
        </p>
      </article>
    </main>
  );
}
