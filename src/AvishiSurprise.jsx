import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Link } from 'react-router-dom';

// Photos
import photo1 from './assets/avishi-1.jpg';
import photo2 from './assets/avishi-2.jpg';
import photo3 from './assets/avishi-3.jpg';
import photo4 from './assets/avishi-4.jpg';

const PHOTOS = [
    { id: 1, src: photo1, rotate: -6 },
    { id: 2, src: photo2, rotate: 4 },
    { id: 3, src: photo3, rotate: -3 },
    { id: 4, src: photo4, rotate: 5 },
];

// Laurel Green Palette
// #B0C291 (Laurel Green), #95A16D (Asparagus), #75866D (Camouflage Green), #9FBC9C (Light Laurel)
const PALETTE = {
    bgGradient: 'linear-gradient(to bottom, #F1F8E9, #DCEDC8)', // Very light green bg
    primary: '#75866D',
    secondary: '#95A16D',
    accent: '#B0C291',
    highlight: '#9FBC9C'
};

const BALLOON_COLORS = ['#B0C291', '#95A16D', '#75866D', '#9FBC9C', '#81C784'];

export default function AvishiSurprise() {
    const [flowersBloomed, setFlowersBloomed] = useState(false);

    useEffect(() => {
        // Fire confetti on mount - Green/Nature themed
        const duration = 3000;
        const end = Date.now() + duration;

        const frame = () => {
            confetti({
                particleCount: 5,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ['#B0C291', '#95A16D', '#75866D', '#ffffff', '#FFD700']
            });
            confetti({
                particleCount: 5,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#B0C291', '#95A16D', '#75866D', '#ffffff', '#FFD700']
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
            background: PALETTE.bgGradient,
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
                        duration: 12 + Math.random() * 5,
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
                        opacity: 0.4,
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
                        background: `linear-gradient(45deg, ${PALETTE.secondary}, ${PALETTE.primary})`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontFamily: '"Outfit", sans-serif',
                        fontWeight: 'bold'
                    }}>
                        Happy Birthday Avishi!
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: '#556B2F' }}>
                        The one and only Bunny 🐰 ❤️
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
                                backgroundColor: '#eee',
                                borderRadius: '2px',
                                overflow: 'hidden'
                            }}>
                                <img
                                    src={photo.src}
                                    alt={`Memory ${index + 1}`}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
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
                        height: '400px'
                    }}
                >
                    <LilyBouquet visible={flowersBloomed} />

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: flowersBloomed ? 1 : 0 }}
                        transition={{ delay: 1, duration: 1 }}
                        style={{
                            marginTop: '0rem', // Moved up slightly as the bouquet is tall
                            textAlign: 'center',
                            background: 'white',
                            padding: '2rem',
                            borderRadius: '20px',
                            boxShadow: `0 10px 30px ${PALETTE.accent}40`,
                            maxWidth: '500px'
                        }}
                    >
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#556B2F', fontStyle: 'italic' }}>
                            "I'm so happy I met you, words can't describe how much you mean to me. Happy bday Bunny!"
                        </p>
                        <p style={{ marginTop: '1rem', fontWeight: 'bold', color: PALETTE.secondary }}>
                            - With Love ❤️
                        </p>
                    </motion.div>

                    {/* Back Home */}
                    <Link
                        to="/"
                        style={{
                            marginTop: '3rem',
                            textDecoration: 'none',
                            color: '#6B8E23',
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

// SVG Lily Component
function LilyBouquet({ visible }) {
    const stemVariant = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: { pathLength: 1, opacity: 1, transition: { duration: 2, ease: "easeInOut" } }
    };

    const flowerVariant = {
        hidden: { scale: 0, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { delay: 1.8, duration: 0.8, type: "spring", stiffness: 50 } }
    };

    // Lily color: White with soft pink/green hints
    const lilyColor = "#FFFAF0"; // Floral White
    const lilyCenter = "#FFFACD"; // Lemon Chiffon

    return (
        <svg width="300" height="400" viewBox="0 0 300 400" overflow="visible">
            {/* Center Lily Stem */}
            <motion.path
                d="M150,400 Q150,250 150,150"
                stroke="#556B2F"
                strokeWidth="6"
                fill="none"
                variants={stemVariant}
                initial="hidden"
                animate={visible ? "visible" : "hidden"}
            />
            {/* Center Lily Head */}
            <motion.g
                initial="hidden"
                animate={visible ? "visible" : "hidden"}
                variants={flowerVariant}
                style={{ originX: '150px', originY: '150px' }}
            >
                {/* Petals */}
                {[0, 60, 120, 180, 240, 300].map((rot) => (
                    <path
                        key={rot}
                        d="M150,150 Q130,100 150,50 Q170,100 150,150"
                        fill={lilyColor}
                        stroke="#E6E6FA"
                        strokeWidth="1"
                        transform={`rotate(${rot}, 150, 150)`}
                    />
                ))}
                {/* Stamens */}
                {[30, 90, 150, 210, 270, 330].map((rot) => (
                    <line
                        key={rot}
                        x1="150" y1="150" x2="150" y2="100"
                        stroke="#FFD700"
                        strokeWidth="2"
                        transform={`rotate(${rot}, 150, 150)`}
                    />
                ))}
                <circle cx="150" cy="150" r="10" fill={lilyCenter} />
            </motion.g>

            {/* Left Lily Stem */}
            <motion.path
                d="M150,400 Q80,250 80,180"
                stroke="#6B8E23"
                strokeWidth="5"
                fill="none"
                variants={stemVariant}
                initial="hidden"
                animate={visible ? "visible" : "hidden"}
            />
            {/* Left Lily Head - Slightly Tilted */}
            <motion.g
                initial="hidden"
                animate={visible ? "visible" : "hidden"}
                variants={flowerVariant}
                style={{ originX: '80px', originY: '180px' }}
            >
                <g transform="rotate(-30, 80, 180)">
                    {[0, 60, 120, 180, 240, 300].map((rot) => (
                        <path
                            key={rot}
                            d="M80,180 Q60,130 80,80 Q100,130 80,180"
                            fill={lilyColor}
                            stroke="#E6E6FA"
                            strokeWidth="1"
                            transform={`rotate(${rot}, 80, 180)`}
                        />
                    ))}
                    <circle cx="80" cy="180" r="8" fill={lilyCenter} />
                </g>
            </motion.g>

            {/* Right Lily Stem */}
            <motion.path
                d="M150,400 Q220,250 220,180"
                stroke="#6B8E23"
                strokeWidth="5"
                fill="none"
                variants={stemVariant}
                initial="hidden"
                animate={visible ? "visible" : "hidden"}
            />
            {/* Right Lily Head - Slightly Tilted */}
            <motion.g
                initial="hidden"
                animate={visible ? "visible" : "hidden"}
                variants={flowerVariant}
                style={{ originX: '220px', originY: '180px' }}
            >
                <g transform="rotate(30, 220, 180)">
                    {[0, 60, 120, 180, 240, 300].map((rot) => (
                        <path
                            key={rot}
                            d="M220,180 Q200,130 220,80 Q240,130 220,180"
                            fill={lilyColor}
                            stroke="#E6E6FA"
                            strokeWidth="1"
                            transform={`rotate(${rot}, 220, 180)`}
                        />
                    ))}
                    <circle cx="220" cy="180" r="8" fill={lilyCenter} />
                </g>
            </motion.g>
        </svg>
    );
}
