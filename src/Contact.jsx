import { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

function Contact() {
    const [copied, setCopied] = useState(false);
    const email = "prafull2001@gmail.com";

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="contact-page">
            <div className="contact-container">
                <Link to="/" className="back-link">
                    <ArrowLeft size={20} />
                    Back to Home
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="contact-card"
                >
                    <div className="contact-header">
                        <h2>Get in Touch</h2>
                        <p>We'd love to hear from you. Send us an email directly.</p>
                    </div>

                    <div className="email-box">
                        <span className="email-text">{email}</span>
                        <button onClick={handleCopy} className="copy-btn">
                            {copied ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}
                        </button>
                    </div>
                    {copied && <p className="copy-feedback">Email copied to clipboard!</p>}
                </motion.div>
            </div>
        </div>
    );
}

export default Contact;
