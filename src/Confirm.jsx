import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import bunnyHeartImg from './assets/bunny-pet.png'; // Using bunny-pet as placeholder

const Confirm = () => {
    return (
        <div className="min-h-screen bg-[var(--bg-color)] flex items-center justify-center p-4">
            <div className="max-w-md w-full text-center">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <img
                        src={bunnyHeartImg}
                        alt="Bunny with Heart"
                        className="w-64 h-64 object-contain mx-auto drop-shadow-xl"
                    />
                </motion.div>

                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-6 font-['Outfit']"
                >
                    Email Successfully Confirmed
                </motion.h1>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    <p className="text-[var(--text-secondary)] mb-8 text-lg">
                        You're all set! You can now return to the app and sign in.
                    </p>
                    <Link to="/" className="btn-primary inline-flex items-center justify-center px-8 py-3 text-lg">
                        Back to Home
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default Confirm;
