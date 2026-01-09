import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy - Kintsugi Class",
};

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-cream py-16 px-6">
      <article className="max-w-3xl mx-auto prose prose-neutral">
        <h1>Cookie Policy</h1>
        <p><strong>Last updated: January 9, 2026</strong></p>

        <p>This Cookie Policy explains how kintsugiclass.com ("Website") uses cookies and similar tracking technologies.</p>

        <p><strong>Contact:</strong> support@kintsugiclass.com</p>

        <hr />

        <h2>What Are Cookies?</h2>
        <p>Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences, understand how you use the site, and enable certain features.</p>

        <hr />

        <h2>Types of Cookies We Use</h2>

        <h3>Essential Cookies</h3>
        <p><strong>Purpose:</strong> Required for the Website to function properly.</p>
        <p><strong>Examples:</strong></p>
        <ul>
          <li>Session cookies for navigation</li>
          <li>Security cookies</li>
          <li>Payment processing cookies</li>
        </ul>
        <p>These cookies cannot be disabled as they are necessary for basic functionality.</p>

        <h3>Analytics Cookies</h3>
        <p><strong>Purpose:</strong> Help us understand how visitors use our Website.</p>
        <table>
          <thead>
            <tr>
              <th>Cookie</th>
              <th>Provider</th>
              <th>Purpose</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>_ga</td>
              <td>Google Analytics</td>
              <td>Distinguishes users</td>
              <td>2 years</td>
            </tr>
            <tr>
              <td>_ga_*</td>
              <td>Google Analytics</td>
              <td>Stores session state</td>
              <td>2 years</td>
            </tr>
            <tr>
              <td>_gid</td>
              <td>Google Analytics</td>
              <td>Distinguishes users</td>
              <td>24 hours</td>
            </tr>
          </tbody>
        </table>

        <h3>Advertising Cookies</h3>
        <p><strong>Purpose:</strong> Used to track visitors for advertising purposes and measure ad effectiveness.</p>
        <table>
          <thead>
            <tr>
              <th>Cookie</th>
              <th>Provider</th>
              <th>Purpose</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>_fbp</td>
              <td>Meta (Facebook)</td>
              <td>Tracks visits for targeted ads</td>
              <td>3 months</td>
            </tr>
            <tr>
              <td>_fbc</td>
              <td>Meta (Facebook)</td>
              <td>Stores click identifier</td>
              <td>3 months</td>
            </tr>
            <tr>
              <td>fr</td>
              <td>Meta (Facebook)</td>
              <td>Advertising and tracking</td>
              <td>3 months</td>
            </tr>
          </tbody>
        </table>

        <hr />

        <h2>Third-Party Tracking Technologies</h2>

        <h3>Meta (Facebook) Pixel</h3>
        <p>We use Meta Pixel to:</p>
        <ul>
          <li>Track conversions from Facebook/Instagram ads</li>
          <li>Build custom audiences for advertising</li>
          <li>Measure ad performance</li>
          <li>Enable retargeting</li>
        </ul>
        <p><strong>What it collects:</strong></p>
        <ul>
          <li>Pages you visit on our site</li>
          <li>Actions you take (like purchases)</li>
          <li>Device and browser information</li>
          <li>IP address (for location targeting)</li>
        </ul>
        <p><a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer">Meta's Privacy Policy</a></p>

        <h3>Google Tag Manager</h3>
        <p>We use Google Tag Manager to manage tracking scripts on our Website. GTM itself does not collect personal data but enables other tracking tools.</p>

        <h3>Future Tracking</h3>
        <p>We may implement additional advertising platforms (such as Google Ads, TikTok, Pinterest, or others) in the future. This policy will be updated accordingly.</p>

        <hr />

        <h2>How to Control Cookies</h2>

        <h3>Browser Settings</h3>
        <p>Most browsers allow you to:</p>
        <ul>
          <li>View cookies stored on your device</li>
          <li>Delete cookies</li>
          <li>Block cookies from specific sites</li>
          <li>Block all cookies</li>
        </ul>
        <p><strong>Browser-specific instructions:</strong></p>
        <ul>
          <li>Chrome: chrome://settings/cookies</li>
          <li>Firefox: about:preferences#privacy</li>
          <li>Safari: Preferences → Privacy</li>
          <li>Edge: edge://settings/privacy</li>
        </ul>

        <h3>Opt-Out Links</h3>
        <ul>
          <li><a href="https://www.facebook.com/settings/?tab=ads" target="_blank" rel="noopener noreferrer">Meta advertising opt-out</a></li>
          <li><a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer">Google advertising opt-out</a></li>
          <li><a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer">General opt-out</a></li>
        </ul>

        <h3>Do Not Track</h3>
        <p>Our Website does not currently respond to "Do Not Track" browser signals, as there is no industry standard for this feature.</p>

        <hr />

        <h2>Impact of Blocking Cookies</h2>
        <p>If you block cookies:</p>
        <ul>
          <li><strong>Essential cookies:</strong> The Website may not function properly</li>
          <li><strong>Analytics cookies:</strong> We won't be able to improve our site based on usage data</li>
          <li><strong>Advertising cookies:</strong> You may still see ads, but they won't be personalized to your interests</li>
        </ul>

        <hr />

        <h2>Cookie Consent</h2>
        <p>By continuing to use our Website, you consent to our use of cookies as described in this policy.</p>
        <p>For users in the EU: You have the right to withdraw consent at any time by adjusting your browser settings or using the opt-out links above.</p>

        <hr />

        <h2>Changes to This Policy</h2>
        <p>We may update this Cookie Policy when we add new tracking technologies or change our practices. The "Last updated" date will reflect when changes were made.</p>

        <hr />

        <h2>Contact</h2>
        <p>For questions about cookies or this policy:</p>
        <p><strong>Email:</strong> support@kintsugiclass.com</p>
        <p>
          ReturnOn<br />
          Omladinska 4, 51000 Rijeka, Croatia
        </p>
      </article>
    </main>
  );
}
