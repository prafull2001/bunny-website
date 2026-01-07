import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function PrivacyPolicy() {
    return (
        <div className="legal-page">
            <div className="container">
                <Link to="/" className="back-link">
                    <ArrowLeft size={20} />
                    Back to Home
                </Link>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="legal-content glass-panel"
                >
                    <h1>Privacy Policy</h1>
                    <p className="last-updated">Last updated: January 2026</p>

                    <p>At Bunny, we take your privacy seriously. This Privacy Policy outlines our practices concerning the handling of user data.</p>

                    <h3>Data Collection and Storage</h3>
                    <p>Bunny is designed with privacy at its core. Your relationship data, love letters, profile information, and personal content are stored securely in our Firebase database. We use industry-standard encryption and security measures to protect your data.</p>

                    <p>We collect and store the following types of data:</p>
                    <ul>
                        <li>Account information (email, password, profile details)</li>
                        <li>Love letters and messages between couples</li>
                        <li>Relationship statistics and heart points</li>
                        <li>Profile photos and couple information</li>
                        <li>App usage data to improve your experience</li>
                    </ul>

                    <h3>Website Analytics</h3>
                    <p>Our website uses privacy-focused analytics to collect anonymous usage data. This helps us understand how visitors interact with our website. The analytics data collected includes: page views, referring websites, and general location data. This data is anonymized and cannot be used to identify individual users.</p>

                    <h3>Subscription and Payment Data</h3>
                    <p>When you purchase a subscription, the payment processing is handled by our payment processor. We do not store your payment information. We only maintain necessary subscription status information to validate your access to premium features.</p>

                    <p>Payment data is processed securely through the App Store or Google Play Store, and we do not have access to your credit card or payment details.</p>

                    <h3>Data Usage</h3>
                    <p>Your relationship data is stored securely in our Firebase database and is used to:</p>
                    <ul>
                        <li>Provide and maintain the Bunny service</li>
                        <li>Enable communication between couples</li>
                        <li>Track relationship milestones and statistics</li>
                        <li>Improve app functionality and user experience</li>
                        <li>Provide customer support when needed</li>
                    </ul>
                    <p>You maintain complete control over your relationship data, and you can delete your account and all associated data at any time.</p>

                    <h3>Data Sharing</h3>
                    <p>We do not share your personal relationship data with third parties. Your love letters, photos, and personal information remain private between you and your partner.</p>
                    <p>Anonymous analytics data may be processed by our analytics provider under strict privacy agreements to help us improve the app.</p>

                    <h3>Data Security</h3>
                    <p>We implement industry-standard security measures to protect your data, including:</p>
                    <ul>
                        <li>End-to-end encryption for sensitive communications</li>
                        <li>Secure Firebase database with regular security updates</li>
                        <li>Secure authentication and authorization systems</li>
                        <li>Regular security audits and monitoring</li>
                        <li>Limited access controls for our development team</li>
                    </ul>

                    <h3>Children's Privacy</h3>
                    <p>Our service is not directed to children under 13 years of age. We do not knowingly collect any data from children under 13. If you are under 13, please do not use Bunny.</p>

                    <h3>Your Rights</h3>
                    <p>You have the right to:</p>
                    <ul>
                        <li>Access your personal data stored in our systems</li>
                        <li>Request correction of inaccurate data</li>
                        <li>Request deletion of your account and all associated data</li>
                        <li>Export your love letters and relationship data</li>
                        <li>Opt-out of analytics collection</li>
                        <li>Withdraw consent for data processing at any time</li>
                    </ul>

                    <h3>Changes to Privacy Policy</h3>
                    <p>Users will be notified of any changes to this privacy policy via email and/or in-app notifications. We encourage you to review this policy periodically for any updates.</p>

                    <h3>Contact Information</h3>
                    <p>If you have any questions about this Privacy Policy, please contact us at: prafull2001@gmail.com</p>
                </motion.div>
            </div>
        </div>
    );
}

export default PrivacyPolicy;
