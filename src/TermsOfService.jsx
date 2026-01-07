import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function TermsOfService() {
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
                    <h1>Terms of Service</h1>
                    <p className="last-updated">Last updated: January 2026</p>

                    <p>Welcome to Bunny. By accessing or using our application, you agree to be bound by these Terms of Service.</p>

                    <h3>1. Acceptance of Terms</h3>
                    <p>By accessing or using Bunny, you agree to these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use the application.</p>

                    <h3>2. Subscription and Payments</h3>
                    <p>Access to Bunny requires a paid subscription. By subscribing, you agree to pay all fees in accordance with the pricing displayed in the app. Subscriptions automatically renew unless cancelled at least 24 hours before the renewal date. You can manage and cancel your subscription through your device's app store settings.</p>
                    <p>Prices are subject to change. Any price changes will be communicated in advance. Refunds are handled in accordance with the app store's policies.</p>

                    <h3>3. Data Ownership</h3>
                    <p>You retain full ownership of all data you create within the application. All relationship data, love letters, and personal information are stored securely in our Firebase database, and we are committed to protecting your privacy as outlined in our Privacy Policy.</p>

                    <h3>4. Disclaimer of Warranties</h3>
                    <p>The app is provided "as is" without any warranties, expressed or implied. We do not warrant that the app will be error-free, uninterrupted, or free of harmful components. We are not responsible for any relationship decisions you make based on the app's features or content.</p>

                    <h3>5. Limitation of Liability</h3>
                    <p>To the maximum extent permitted by law, Bunny and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:</p>
                    <ul>
                        <li>Your use or inability to use the app</li>
                        <li>Any decisions made based on the app's features or content</li>
                        <li>Unauthorized access to or alteration of your data</li>
                        <li>Any other matter relating to the app</li>
                    </ul>

                    <h3>6. Relationship Disclaimer</h3>
                    <p>Bunny is not a substitute for professional relationship counseling, therapy, or advice. Always seek the advice of qualified professionals with any questions you may have regarding your relationship or emotional wellbeing.</p>

                    <h3>7. User Responsibilities</h3>
                    <p>You are responsible for:</p>
                    <ul>
                        <li>Maintaining the security of your device and account</li>
                        <li>All activities that occur under your account</li>
                        <li>Backing up your data regularly</li>
                        <li>Ensuring your use of the app complies with applicable laws</li>
                        <li>Respecting your partner's privacy and consent when sharing information</li>
                    </ul>

                    <h3>8. Changes to Terms</h3>
                    <p>We reserve the right to modify these terms at any time. Users will be notified of any changes via email and/or in-app notifications. Continued use of the app after changes constitutes acceptance of the new terms.</p>

                    <h3>9. Governing Law</h3>
                    <p>These terms shall be governed by and construed in accordance with the laws of Canada, without regard to its conflict of law provisions.</p>

                    <h3>10. Contact</h3>
                    <p>If you have any questions about these Terms of Service, please contact us at: prafull2001@gmail.com</p>
                </motion.div>
            </div>
        </div>
    );
}

export default TermsOfService;
