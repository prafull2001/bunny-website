import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Seo from './seo/Seo';
import { breadcrumbSchema } from './seo/schema';

function PrivacyPolicy() {
    return (
        <div className="legal-page">
            <Seo
                title="Privacy Policy | Bunny"
                description="How Bunny handles account information, shared content, purchases and notifications, and how to request access or deletion."
                path="/privacy"
                schema={breadcrumbSchema([
                    { name: 'Home', path: '/' },
                    { name: 'Privacy Policy', path: '/privacy' },
                ])}
            />
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
                    <p className="last-updated">Last updated: October 16, 2026</p>

                    <p>This policy explains how the Bunny iPhone app and bunnycouples.com handle your information.</p>

                    <h3>Data Collection and Storage</h3>
                    <p>Bunny uses Supabase for account authentication, its database, shared content storage and syncing between partners. Account and relationship records are linked to your user ID.</p>

                    <p>We collect and store the following types of data:</p>
                    <ul>
                        <li>Account information, such as your email address, display name and user ID. Supabase handles email/password authentication or the sign-in information provided through Sign in with Apple.</li>
                        <li>Partner pairing information, invite codes, relationship dates and shared progress.</li>
                        <li>Content you create, including love letters, drawings and drawing image copies, question-game answers, affections and gift messages.</li>
                        <li>Feature activity needed to save your experience, such as check-ins, hearts, game progress, and shared pet and plant care.</li>
                        <li>Your notification device token and platform, used to deliver push notifications.</li>
                        <li>Purchase and subscription information, as described below, and information you send when contacting support.</li>
                    </ul>
                    <p>A photo you choose as your whiteboard wallpaper is stored locally on your device. The app also keeps local settings and drawing snapshots for its Home Screen widget. The drawing itself is synced and drawing image copies are uploaded to Supabase.</p>

                    <h3>Website Analytics</h3>
                    <p>Our website currently has no configured behavioral analytics tracker. Hosting providers may process request information, such as an IP address, browser information, requested page and referrer, to serve and operate the website. This information is not necessarily anonymous.</p>

                    <h3>Subscription and Payment Data</h3>
                    <p>Apple processes purchases through the App Store. Bunny uses RevenueCat to validate purchases, restore access, manage Bunny Pro entitlements and understand purchase and subscription activity. RevenueCat receives your Bunny user ID and purchase history; Bunny stores the resulting access status and related purchase records.</p>
                    <p>Bunny does not receive your full payment card or bank account details from Apple. Apple and RevenueCat handle information under their respective privacy policies.</p>

                    <h3>Data Usage</h3>
                    <p>We use this information to:</p>
                    <ul>
                        <li>Sign you in and connect your account with your partner</li>
                        <li>Save and sync shared content, activities and relationship progress</li>
                        <li>Deliver notifications and manage purchased access</li>
                        <li>Operate the service, investigate errors and respond to support requests</li>
                    </ul>

                    <h3>Data Sharing</h3>
                    <p>Pairing makes shared content and relationship activity available to your partner. Your partner can also see your display name and account email in the app.</p>
                    <p>Service providers process information to run Bunny: Supabase handles accounts and shared data, RevenueCat handles purchase information, and Apple handles sign-in, purchases and push delivery. Information you send to support is available to the people handling your request.</p>
                    <p>Push notifications may include a sender name and message content or a preview. These pass through Apple's push notification service and may appear on the recipient's Lock Screen, depending on their device settings.</p>

                    <h3>Data Security</h3>
                    <p>Bunny uses the following protections:</p>
                    <ul>
                        <li>Supabase authentication for account sign-in</li>
                        <li>Server-side authorization for account and relationship features</li>
                        <li>HTTPS connections to Supabase, RevenueCat and Apple services</li>
                    </ul>
                    <p>Bunny does not provide end-to-end encryption. Its servers and service providers process shared content to store it, sync it and deliver notifications.</p>

                    <h3>Children's Privacy</h3>
                    <p>Bunny is not intended for children under 13. If you believe a child under 13 has provided personal information, please contact us using the address below.</p>

                    <h3>Your Rights</h3>
                    <p>You can:</p>
                    <ul>
                        <li>Contact us to request access to or correction of your personal information</li>
                        <li>Use Delete Account in Bunny's Settings to request removal of your login, profile and associated account data</li>
                        <li>Control notifications and notification previews through your iPhone's Settings</li>
                        <li>Remove a custom whiteboard wallpaper through the whiteboard settings</li>
                    </ul>
                    <p>Account deletion does not erase every copy of shared content. Shared relationship records, drawing images, copies already received by your partner, local device files and records held by Apple or RevenueCat may remain. Contact us with questions about information that remains after deletion.</p>
                    <p>Deleting a Bunny account does not cancel an App Store subscription. Manage or cancel it separately in your Apple account's subscription settings. <a href="https://support.apple.com/en-us/118428">Apple explains how to cancel a subscription.</a></p>

                    <h3>Changes to Privacy Policy</h3>
                    <p>Updates to this policy will be posted on this page with a revised date. Please review it when you want to check our current practices.</p>

                    <h3>Contact Information</h3>
                    <p>For privacy questions or data requests, contact <a href="mailto:prafull2001@gmail.com">prafull2001@gmail.com</a>.</p>
                </motion.div>
            </div>
        </div>
    );
}

export default PrivacyPolicy;
