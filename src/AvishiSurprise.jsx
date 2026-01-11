import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Link } from 'react-router-dom';

// Placeholder images - in a real app, these would be the actual photos
// Using colors/placeholders for now to demonstrate the layout
const PHOTOS = [
    { id: 1, color: '#FF9A9E', rotate: -6 },
    { id: 2, color: '#FECFEF', rotate: 4 },
    { id: 3, color: '#A18CD1', rotate: -3 },
    { id: 4, color: '#FAD0C4', rotate: 5 },
];

const BALLOON_COLORS = ['#FF69B4', '#FFB6C1', '#FFC0CB', '#FF1493', '#DB7093'];

export default function AvishiSurprise() {
    const [flowersBloomed, setFlowersBloomed] = useState(false);

    useEffect(() => {
        // Fire confetti on mount
        const duration = 3000;
        const end = Date.now() + duration;

        const frame = () => {
            confetti({
                particleCount: 5,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ['#ff0000', '#ffa500', '#ffff00', '#008000', '#0000ff', '#4b0082', '#ee82ee']
            });
            confetti({
                particleCount: 5,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#ff0000', '#ffa500', '#ffff00', '#008000', '#0000ff', '#4b0082', '#ee82ee']
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        };
        frame();

        // Trigger flower bloom after a delay
        setTimeout(() => setFlowersBloomed(true), 1500);
    }, []);

    return (
        <div className="avishi-container" style={{
            minHeight: '100vh',
            background: 'linear-gradient(to bottom, #fff0f5, #e6e6fa)',
            overflow: 'hidden',
            position: 'relative',
            padding: '2rem'
        }}>
            {/* Floating Balloons Background */}
            {BALLOON_COLORS.map((color, i) => (
                <motion.div
                    key={i}
                    initial={{ y: '120vh', x: Math.random() * 100 - 50 }}
                    animate={{
                        y: '-20vh',
                        x: Math.random() * 100 - 50
                    }}
                    transition={{
                        duration: 10 + Math.random() * 5,
                        repeat: Infinity,
                        ease: 'linear',
                        delay: i * 2
                    }}
                    style={{
                        position: 'absolute',
                        left: `${10 + i * 20}%`,
                        width: '60px',
                        height: '70px',
                        backgroundColor: color,
                        borderRadius: '50%',
                        opacity: 0.6,
                        zIndex: 0
                    }}
                >
                    <div style={{
                        position: 'absolute',
                        bottom: '-15px',
                        left: '50%',
                        width: '2px',
                        height: '20px',
                        background: 'rgba(0,0,0,0.1)',
                        transform: 'translateX(-50%)'
                    }} />
                </motion.div>
            ))}

            <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto' }}>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    style={{ textAlign: 'center', marginBottom: '4rem', marginTop: '2rem' }}
                >
                    <h1 style={{
                        fontSize: '3.5rem',
                        marginBottom: '0.5rem',
                        background: 'linear-gradient(45deg, #FF69B4, #da70d6)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontFamily: '"Outfit", sans-serif', // Assuming Outfit is used or similar
                        fontWeight: 'bold'
                    }}>
                        Happy Birthday Avishi!
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: '#666' }}>
                        A little surprise for my favorite person ✨
                    </p>
                </motion.div>

                {/* Photo Gallery - Scattered Polaroids */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '2rem',
                    marginBottom: '5rem',
                    perspective: '1000px'
                }}>
                    {PHOTOS.map((photo, index) => (
                        <motion.div
                            key={photo.id}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 + index * 0.2 }}
                            whileHover={{
                                scale: 1.05,
                                rotate: 0,
                                zIndex: 10,
                                boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                            }}
                            style={{
                                backgroundColor: 'white',
                                padding: '1rem 1rem 3rem 1rem',
                                borderRadius: '4px',
                                boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                                transform: `rotate(${photo.rotate}deg)`,
                                cursor: 'pointer',
                                aspectRatio: '3/4'
                            }}
                        >
                            <div style={{
                                width: '100%',
                                height: '100%',
                                backgroundColor: photo.color,
                                borderRadius: '2px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                overflow: 'hidden'
                            }}>
                                {/* Real implementation would use <img> here */}
                                <span style={{ fontSize: '2rem' }}>📷 Photo {index + 1}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Flower Animation Text/Placeholder */}
                <motion.div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        height: '300px'
                    }}
                >
                    <FlowerBouquet visible={flowersBloomed} />

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: flowersBloomed ? 1 : 0 }}
                        transition={{ delay: 1, duration: 1 }}
                        style={{
                            marginTop: '2rem',
                            textAlign: 'center',
                            background: 'white',
                            padding: '2rem',
                            borderRadius: '20px',
                            boxShadow: '0 10px 30px rgba(255,182,193, 0.3)',
                            maxWidth: '500px'
                        }}
                    >
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#555', fontStyle: 'italic' }}>
                            "Just like these flowers, my love for you grows every single day.
                            Wishing you the most magical birthday ever!"
                        </p>
                        <p style={{ marginTop: '1rem', fontWeight: 'bold', color: '#FF69B4' }}>
                            - With Love ❤️
                        </p>
                    </motion.div>

                    {/* Back Home */}
                    <Link
                        to="/"
                        style={{
                            marginTop: '3rem',
                            textDecoration: 'none',
                            color: '#888',
                            fontSize: '0.9rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}
                    >
                        ← Back to Bunny Home
                    </Link>
                </motion.div>

            </div>
        </div>
    );
}

// Simple SVG Flower Component
function FlowerBouquet({ visible }) {
    const stemVariant = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: { pathLength: 1, opacity: 1, transition: { duration: 1.5, ease: "easeInOut" } }
    };

    const flowerVariant = {
        hidden: { scale: 0, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { delay: 1.5, duration: 0.5, type: "spring" } }
    };

    return (
        <svg width="200" height="300" viewBox="0 0 200 300" overflow="visible">
            {/* Center Flower */}
            <motion.path
                d="M100,300 Q100,200 100,100"
                stroke="#4CAF50"
                strokeWidth="4"
                fill="none"
                variants={stemVariant}
                initial="hidden"
                animate={visible ? "visible" : "hidden"}
            />
            <motion.g
                initial="hidden"
                animate={visible ? "visible" : "hidden"}
                variants={flowerVariant}
                style={{ originX: '100px', originY: '100px' }}
            >
                <circle cx="100" cy="100" r="15" fill="#FFEB3B" />
                {[0, 60, 120, 180, 240, 300].map((rot) => (
                    <ellipse
                        key={rot}
                        cx="100" cy="70" rx="10" ry="25"
                        fill="#FF69B4"
                        transform={`rotate(${rot}, 100, 100)`}
                    />
                ))}
            </motion.g>

            {/* Left Flower */}
            <motion.path
                d="M100,300 Q60,200 60,120"
                stroke="#4CAF50"
                strokeWidth="4"
                fill="none"
                variants={stemVariant}
                initial="hidden"
                animate={visible ? "visible" : "hidden"}
            />
            <motion.g
                initial="hidden"
                animate={visible ? "visible" : "hidden"}
                variants={flowerVariant}
                style={{ originX: '60px', originY: '120px' }}
            >
                <circle cx="60" cy="120" r="12" fill="#FF9800" />
                {[0, 72, 144, 216, 288].map((rot) => (
                    <ellipse
                        key={rot}
                        cx="60" cy="95" rx="8" ry="20"
                        fill="#FFA07A"
                        transform={`rotate(${rot}, 60, 120)`}
                    />
                ))}
            </motion.g>

            {/* Right Flower */}
            <motion.path
                d="M100,300 Q140,200 140,120"
                stroke="#4CAF50"
                strokeWidth="4"
                fill="none"
                variants={stemVariant}
                initial="hidden"
                animate={visible ? "visible" : "hidden"}
            />
            <motion.g
                initial="hidden"
                animate={visible ? "visible" : "hidden"}
                variants={flowerVariant}
                style={{ originX: '140px', originY: '120px' }}
            >
                <circle cx="140" cy="120" r="12" fill="#FF9800" />
                {[0, 72, 144, 216, 288].map((rot) => (
                    <ellipse
                        key={rot}
                        cx="140" cy="95" rx="8" ry="20"
                        fill="#9370DB"
                        transform={`rotate(${rot}, 140, 120)`}
                    />
                ))}
            </motion.g>
        </svg>
    );
}
