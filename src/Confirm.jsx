import React from 'react';

import { motion } from 'framer-motion';
import bunnyHeartImg from './assets/bunny-pet.png'; // Using bunny-pet as placeholder

const Confirm = () => {
    return (
        <div className="confirm-page">
            <div className="confirm-container">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <img
                        src={bunnyHeartImg}
                        alt="Bunny with Heart"
                        className="confirm-image"
                    />
                </motion.div>

                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="confirm-title"
                >
                    Email Successfully Confirmed
                </motion.h1>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    <p className="confirm-text">
                        You're all set! Please return to the Bunny app to continue.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Confirm;
