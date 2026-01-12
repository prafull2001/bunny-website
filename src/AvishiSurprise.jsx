import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

// Photos
import photo1 from './assets/avishi-1.jpg';
import photo2 from './assets/avishi-2.jpg';
import photo3 from './assets/avishi-3.jpg';
import photo4 from './assets/avishi-4.jpg';

// Error Boundary Component
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Avishi Page Error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{ padding: '20px', color: 'red', textAlign: 'center' }}>
                    <h1>⚠️ Something went wrong</h1>
                    <pre>{this.state.error?.toString()}</pre>
                    <p>Please take a screenshot and send it to debugging.</p>
                </div>
            );
        }
        return this.props.children;
    }
}

const PHOTOS = [
    // isRotated: true for the first two images as requested
    { id: 1, src: photo1, rotate: -6, isUpsideDown: true },
    { id: 2, src: photo2, rotate: 4, isUpsideDown: true },
    { id: 3, src: photo3, rotate: -3, isUpsideDown: false },
    { id: 4, src: photo4, rotate: 5, isUpsideDown: false },
];

const PALETTE = {
    bgGradient: 'linear-gradient(to bottom, #F1F8E9, #DCEDC8)',
    primary: '#75866D',
    secondary: '#95A16D',
    accent: '#B0C291',
    highlight: '#9FBC9C'
};

const BALLOON_COLORS = ['#FF69B4', '#87CEEB', '#DDA0DD', '#FFD700', '#98FB98', '#FFA07A'];

function AvishiSurpriseContent() {
    const [isMobile, setIsMobile] = useState(false);
    const [flowersBloomed, setFlowersBloomed] = useState(false);
    const [selectedPhotoId, setSelectedPhotoId] = useState(null);

    useEffect(() => {
        console.log("AvishiSurprise Mounted");
        // Check mobile on mount/resize
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        // Force scroll to top on refresh/mount
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
        window.scrollTo(0, 0);
        setTimeout(() => window.scrollTo(0, 0), 10);

        // Fire confetti on mount - reduced for mobile to save perf
        const duration = 3000;
        const end = Date.now() + duration;

        const frame = () => {
            // Safety check for confetti
            if (typeof confetti === 'function') {
                confetti({
                    particleCount: isMobile ? 3 : 5,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0 },
                    colors: BALLOON_COLORS
                });
                confetti({
                    particleCount: isMobile ? 3 : 5,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1 },
                    colors: BALLOON_COLORS
                });
            }

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        };
        frame();

        // Trigger flower bloom after a delay
        setTimeout(() => setFlowersBloomed(true), 1500);
    }, [isMobile]);

    return (
        <div className="avishi-container" style={{
            minHeight: '100vh',
            background: PALETTE.bgGradient,
            overflowX: 'hidden', // Prevent horizontal scroll
            position: 'relative',
            padding: isMobile ? '1rem' : '2rem',
            paddingBottom: '4rem' // Extra padding at bottom for scrolling
        }}>
            {/* Floating Balloons Background - Multi-color */}
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
                        left: `${10 + i * 15}%`,
                        width: isMobile ? '40px' : '60px',
                        height: isMobile ? '50px' : '70px',
                        backgroundColor: color,
                        borderRadius: '50%',
                        opacity: 0.6,
                        zIndex: 0
                    }}
                >
                    <div style={{
                        position: 'absolute',
                        bottom: isMobile ? '-10px' : '-15px',
                        left: '50%',
                        width: '2px',
                        height: isMobile ? '15px' : '20px',
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
                    style={{ textAlign: 'center', marginBottom: isMobile ? '2rem' : '3rem', marginTop: '2rem' }}
                >
                    <h1 style={{
                        fontSize: isMobile ? '2.5rem' : '3.5rem',
                        marginBottom: '0.5rem',
                        background: `linear-gradient(45deg, ${PALETTE.secondary}, #FF69B4)`, // Mix of green and pink
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontFamily: '"Outfit", sans-serif',
                        fontWeight: 'bold',
                        lineHeight: 1.2
                    }}>
                        Happy Birthday Avishi!
                    </h1>
                    <p style={{ fontSize: isMobile ? '1rem' : '1.2rem', color: '#556B2F' }}>
                        The one and only Bunny 🐰 ❤️
                    </p>
                </motion.div>

                {/* Photo Gallery - Deck of Cards Layout */}
                <div style={{
                    height: isMobile ? '400px' : '500px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: '4rem',
                    position: 'relative'
                }}>
                    {PHOTOS.map((photo, index) => {
                        // Responsive Spread & Size
                        // Mobile: 200px width, 40px spread
                        // Desktop: 280px width, 80px spread
                        const cardWidth = isMobile ? 180 : 280;
                        const spread = isMobile ? 35 : 80;

                        const randomX = (index - 1.5) * spread;
                        const randomRotate = photo.rotate;

                        return (
                            <motion.div
                                key={photo.id}
                                layoutId={`card-${photo.id}`}
                                onClick={() => setSelectedPhotoId(photo.id)}
                                whileHover={{ scale: 1.1, zIndex: 20, rotate: 0, transition: { duration: 0.2 } }}
                                style={{
                                    position: 'absolute',
                                    width: `${cardWidth}px`,
                                    aspectRatio: '3/4',
                                    backgroundColor: 'white',
                                    padding: isMobile ? '0.8rem 0.8rem 2.5rem 0.8rem' : '1.2rem 1.2rem 4rem 1.2rem',
                                    borderRadius: '12px',
                                    boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
                                    cursor: 'pointer',
                                    zIndex: index,
                                    transform: `rotate(${randomRotate}deg) translateX(${randomX}px)`,
                                }}
                                animate={{
                                    rotate: randomRotate,
                                    x: randomX,
                                    scale: 1,
                                    zIndex: index
                                }}
                            >
                                <div style={{
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: '#f0f0f0',
                                    borderRadius: '4px',
                                    overflow: 'hidden'
                                }}>
                                    <img
                                        src={photo.src}
                                        alt={`Memory ${index + 1}`}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            transform: photo.isUpsideDown ? 'rotate(180deg)' : 'none'
                                        }}
                                    />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Expanded Card View (Overlay) */}
                <AnimatePresence>
                    {selectedPhotoId && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedPhotoId(null)}
                            style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: 'rgba(0,0,0,0.8)',
                                zIndex: 100,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: '2rem'
                            }}
                        >
                            <motion.div
                                layoutId={`card-${selectedPhotoId}`}
                                style={{
                                    width: '100%',
                                    maxWidth: '500px',
                                    aspectRatio: '3/4',
                                    backgroundColor: 'white',
                                    padding: '1rem 1rem 3.5rem 1rem',
                                    borderRadius: '12px',
                                    overflow: 'hidden',
                                    position: 'relative'
                                }}
                                onClick={(e) => e.stopPropagation()} // Prevent clicking card from closing
                            >
                                {/* Close Button */}
                                <button
                                    onClick={() => setSelectedPhotoId(null)}
                                    style={{
                                        position: 'absolute',
                                        top: '1rem',
                                        right: '1rem',
                                        background: 'rgba(0,0,0,0.1)',
                                        border: 'none',
                                        borderRadius: '50%',
                                        width: '32px',
                                        height: '32px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer',
                                        zIndex: 20
                                    }}
                                >
                                    <X size={20} color="#333" />
                                </button>

                                {/* Expanded Image */}
                                <div style={{
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: '#f0f0f0',
                                    borderRadius: '6px',
                                    overflow: 'hidden'
                                }}>
                                    <img
                                        src={PHOTOS.find(p => p.id === selectedPhotoId)?.src}
                                        alt="Expanded Memory"
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            transform: PHOTOS.find(p => p.id === selectedPhotoId)?.isUpsideDown ? 'rotate(180deg)' : 'none'
                                        }}
                                    />
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Flower Animation & Message */}
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
                            marginTop: '0rem',
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
                            - P ❤️
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

// SVG Lily Component (Unchanged)
function LilyBouquet({ visible }) {
    const stemVariant = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: { pathLength: 1, opacity: 1, transition: { duration: 2, ease: "easeInOut" } }
    };

    const flowerVariant = {
        hidden: { scale: 0, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { delay: 1.8, duration: 0.8, type: "spring", stiffness: 50 } }
    };

    const lilyColor = "#FFFAF0";
    const lilyCenter = "#FFFACD";

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
            {/* Left Lily Head */}
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
            {/* Right Lily Head */}
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

// Default export wrapper
export default function AvishiSurprise() {
    return (
        <ErrorBoundary>
            <AvishiSurpriseContent />
        </ErrorBoundary>
    );
}
