import React from 'react';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { SEO } from '../components/SEO';

export function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Privacy Policy - Smart Parenting Guides"
        description="Your privacy is important to us. Read about how Smart Parenting Guides protects your information and handles your data."
        keywords="privacy policy, data protection, privacy policy smart parenting guides"
        canonicalUrl="https://smartparentingguides.com/privacy-policy"
      />
      <section className="relative bg-gradient-to-br from-peach/20 to-sky/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="category">Legal</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground">
              Your privacy is important to us. Read about how we protect your information.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Card className="mb-8">
          <div className="text-sm text-muted-foreground mb-6">
            <p>Last Updated: January 2, 2026</p>
          </div>

          <div className="space-y-8">
            {/* 1. Introduction */}
            <div>
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Smart Parenting Guides ("we", "us", "our", or "Company") operates the Smart Parenting Guides website (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
              </p>
            </div>

            {/* 2. Information Collection and Use */}
            <div>
              <h2 className="text-2xl font-bold mb-4">2. Information Collection and Use</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Email Address</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    When you subscribe to our newsletter or download our e-books, we collect your email address. This information is used solely to send you parenting tips, educational content, and updates about our resources. We will never share your email address with third parties without your explicit consent.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Usage Data</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We automatically collect certain information when you visit our website, including:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-3 ml-2">
                    <li>Pages you visit and time spent on each page</li>
                    <li>Device information (browser type, device type, operating system)</li>
                    <li>IP address and referral source</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Cookies</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We use cookies to enhance your browsing experience, remember your preferences, and understand how you use our site. You can control cookie settings through your browser preferences.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Use of Data */}
            <div>
              <h2 className="text-2xl font-bold mb-4">3. Use of Data</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Smart Parenting Guides uses the collected data for various purposes:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-2">
                <li>To provide and maintain our Service</li>
                <li>To notify you about changes to our Service or important updates</li>
                <li>To provide customer support and respond to your inquiries</li>
                <li>To gather analysis or valuable information to improve our Service</li>
                <li>To monitor the usage of our Service</li>
                <li>To detect, prevent, and address technical and security issues</li>
                <li>To send you marketing and promotional emails (with your consent)</li>
              </ul>
            </div>

            {/* 4. Data Security */}
            <div>
              <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                The security of your data is important to us. We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or method of electronic storage is 100% secure.
              </p>
            </div>

            {/* 5. Children's Privacy */}
            <div>
              <h2 className="text-2xl font-bold mb-4">5. Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our Service is not directed to anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If you become aware that a child has provided us with personal information, please contact us immediately at hello@parentcare.com. We are committed to complying with the Children's Online Privacy Protection Act (COPPA).
              </p>
            </div>

            {/* 6. Third-Party Links */}
            <div>
              <h2 className="text-2xl font-bold mb-4">6. Third-Party Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our Service may contain links to external websites and resources that are not operated by us. This Privacy Policy does not apply to third-party websites, and we are not responsible for their privacy practices. We encourage you to review the privacy policies of any third-party sites before providing your information.
              </p>
            </div>

            {/* 7. Your Rights */}
            <div>
              <h2 className="text-2xl font-bold mb-4">7. Your Rights and Choices</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Unsubscribe</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    You can unsubscribe from our newsletter at any time by clicking the "Unsubscribe" link in any email we send you.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Access and Correction</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    You have the right to access, update, or delete your personal information. To exercise these rights, please contact us at hello@parentcare.com.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Marketing Communications</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    If you no longer wish to receive promotional emails from us, you can opt out at any time by adjusting your preferences or contacting our support team.
                  </p>
                </div>
              </div>
            </div>

            {/* 8. Retention of Data */}
            <div>
              <h2 className="text-2xl font-bold mb-4">8. Retention of Data</h2>
              <p className="text-muted-foreground leading-relaxed">
                We will retain your personal data only for as long as necessary to provide our Service and fulfill the purposes outlined in this Privacy Policy. You can request deletion of your data at any time by contacting us, except where we are required to retain it by law.
              </p>
            </div>

            {/* 9. Changes to Privacy Policy */}
            <div>
              <h2 className="text-2xl font-bold mb-4">9. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by posting the new Privacy Policy on this page with an updated "Last Updated" date. Your continued use of the Service after any modifications constitutes your acceptance of the updated Privacy Policy.
              </p>
            </div>

            {/* 10. Contact Us */}
            <div>
              <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Email:</strong> hello@parentcare.com</p>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                <p><strong>Address:</strong> San Francisco, CA</p>
              </div>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}
