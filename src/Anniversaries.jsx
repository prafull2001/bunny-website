import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Link } from 'react-router-dom';
import { ChevronDown, X } from 'lucide-react';

// Photos
import annPhoto1 from './assets/anniversary-1.jpg';
import annPhoto2 from './assets/anniversary-2.jpg';
import annPhoto3 from './assets/anniversary-3.jpg';
import annPhoto4 from './assets/anniversary-4.jpg';
import annPhoto5 from './assets/anniversary-5.jpg';

const PHOTOS = [
    { id: 1, src: annPhoto1, rotate: -5 },
    { id: 2, src: annPhoto2, rotate: 4 },
    { id: 3, src: annPhoto3, rotate: -3 },
    { id: 4, src: annPhoto4, rotate: 6 },
    { id: 5, src: annPhoto5, rotate: -2 },
];

// Error Boundary
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }
    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }
    componentDidCatch(error, errorInfo) {
        console.error("Anniversaries Page Error:", error, errorInfo);
    }
    render() {
        if (this.state.hasError) {
            return (
                <div style={{ padding: '20px', color: 'red', textAlign: 'center' }}>
                    <h1>Something went wrong</h1>
                    <pre>{this.state.error?.toString()}</pre>
                </div>
            );
        }
        return this.props.children;
    }
}

const PALETTE = {
    bgGradient: 'linear-gradient(to bottom, #F0F4F8, #E8EDE4, #FDF6EC)',
    primary: '#2D6A4F',
    secondary: '#B7791F',
    accent: '#D4A373',
    highlight: '#E07A5F',
    text: '#3A4735',
    textLight: '#6B7C61',
    glass: 'rgba(255, 255, 255, 0.65)',
    glassBorder: 'rgba(45, 106, 79, 0.15)',
};

const MAX_TRIES = 3;

const OBJECTS = [
    { emoji: '🛋️', label: 'Couch' },
    { emoji: '📦', label: 'Box' },
    { emoji: '🪴', label: 'Plant' },
    { emoji: '📚', label: 'Books' },
    { emoji: '🧸', label: 'Teddy Bear' },
    { emoji: '👟', label: 'Shoe' },
    { emoji: '🧺', label: 'Basket' },
    { emoji: '🛏️', label: 'Blanket' },
    { emoji: '💻', label: 'Laptop' },
];

const WRONG_QUIPS = [
    "Nope, not here!",
    "Try again!",
    "Cleo is sneakier than that!",
    "Keep looking...",
    "She's too clever!",
    "Not this one!",
    "Meow... (from somewhere else)",
    "Cold... very cold!",
];

const START_DATE = new Date('2025-10-12');

const PETAL_COLORS = ['#FADADD', '#FFB7C5', '#F4C2C2', '#E8ADAA', '#F8C8DC', '#D4A373', '#E07A5F'];

// =============================
// DECORATION COMPONENTS
// =============================

// --- Floating Petals ---
function FloatingPetals({ count = 16, isMobile }) {
    const petals = [];
    const actualCount = isMobile ? Math.floor(count * 0.5) : count;
    for (let i = 0; i < actualCount; i++) {
        const color = PETAL_COLORS[i % PETAL_COLORS.length];
        const size = 8 + Math.random() * 16;
        const startX = Math.random() * 100;
        const drift = (Math.random() - 0.5) * 140;
        const duration = 10 + Math.random() * 10;
        petals.push(
            <motion.div
                key={i}
                initial={{ y: -30, x: 0, rotate: 0, opacity: 0 }}
                animate={{
                    y: '110vh',
                    x: [0, drift * 0.3, drift * 0.7, drift],
                    rotate: [0, 180, 360, 540],
                    opacity: [0, 0.7, 0.7, 0],
                }}
                transition={{ duration, repeat: Infinity, ease: 'linear', delay: Math.random() * duration }}
                style={{
                    position: 'fixed',
                    left: `${startX}%`,
                    top: '-20px',
                    width: `${size}px`,
                    height: `${size * 1.4}px`,
                    borderRadius: '50% 0 50% 50%',
                    backgroundColor: color,
                    opacity: 0.6,
                    zIndex: 0,
                    pointerEvents: 'none',
                }}
            />
        );
    }
    return <>{petals}</>;
}

// --- SVG Flower ---
function FlowerSVG({ size = 60, color1 = '#FADADD', color2 = '#FFB7C5', petalCount = 5, style = {} }) {
    const petals = [];
    const angleStep = 360 / petalCount;
    for (let i = 0; i < petalCount; i++) {
        petals.push(
            <ellipse key={i} cx="30" cy="12" rx="8" ry="13" fill={color1} opacity="0.85" transform={`rotate(${i * angleStep}, 30, 30)`} />
        );
    }
    return (
        <svg width={size} height={size} viewBox="0 0 60 60" style={style}>
            {petals}
            <circle cx="30" cy="30" r="6" fill={color2} />
        </svg>
    );
}

// --- Animated Flower (blooms into view) ---
function BloomingFlower({ delay = 0, size = 60, color1 = '#FADADD', color2 = '#FFB7C5', petalCount = 5, style = {} }) {
    return (
        <motion.div
            initial={{ scale: 0, opacity: 0, rotate: -45 }}
            whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.7, type: 'spring', stiffness: 60 }}
            style={{ ...style, pointerEvents: 'none', display: 'inline-block' }}
        >
            <FlowerSVG size={size} color1={color1} color2={color2} petalCount={petalCount} />
        </motion.div>
    );
}

// --- Daisy (6-petal, different shape) ---
function DaisySVG({ size = 50, color = '#fff', center = '#FFD700', style = {} }) {
    return (
        <svg width={size} height={size} viewBox="0 0 50 50" style={style}>
            {[0, 60, 120, 180, 240, 300].map(r => (
                <ellipse key={r} cx="25" cy="10" rx="6" ry="12" fill={color} opacity="0.9" transform={`rotate(${r}, 25, 25)`} />
            ))}
            <circle cx="25" cy="25" r="6" fill={center} />
        </svg>
    );
}

function BloomingDaisy({ delay = 0, size = 50, color = '#fff', center = '#FFD700', style = {} }) {
    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.6, type: 'spring', stiffness: 70 }}
            style={{ ...style, pointerEvents: 'none', display: 'inline-block' }}
        >
            <DaisySVG size={size} color={color} center={center} />
        </motion.div>
    );
}

// --- Cherry Blossom Branch (SVG decoration for sides) ---
function CherryBranch({ side = 'left', isMobile }) {
    if (isMobile) return null;
    const flip = side === 'right' ? 'scaleX(-1)' : 'none';
    return (
        <motion.svg
            width="120"
            height="200"
            viewBox="0 0 120 200"
            initial={{ opacity: 0, x: side === 'left' ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            style={{
                position: 'absolute',
                [side]: '0',
                top: '0',
                transform: flip,
                pointerEvents: 'none',
                zIndex: 0,
            }}
        >
            {/* Branch */}
            <motion.path
                d="M0,180 Q30,140 40,100 Q50,60 70,30"
                stroke="#8B7355"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
            />
            {/* Small sub-branch */}
            <motion.path
                d="M40,100 Q60,85 75,90"
                stroke="#8B7355"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.8 }}
            />
            {/* Blossoms */}
            {[
                { cx: 70, cy: 30, d: 0.8 },
                { cx: 75, cy: 90, d: 1.2 },
                { cx: 45, cy: 65, d: 1.0 },
                { cx: 55, cy: 45, d: 1.4 },
                { cx: 30, cy: 120, d: 0.6 },
            ].map((b, i) => (
                <motion.g key={i}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: b.d + 0.5, duration: 0.5, type: 'spring' }}
                    style={{ transformOrigin: `${b.cx}px ${b.cy}px` }}
                >
                    {[0, 72, 144, 216, 288].map(r => (
                        <ellipse key={r} cx={b.cx} cy={b.cy - 8} rx="4" ry="7" fill="#FADADD" opacity="0.8" transform={`rotate(${r}, ${b.cx}, ${b.cy})`} />
                    ))}
                    <circle cx={b.cx} cy={b.cy} r="3" fill="#FFB7C5" />
                </motion.g>
            ))}
        </motion.svg>
    );
}

// --- Flower Row Divider ---
function FlowerDivider({ isMobile }) {
    const items = isMobile ? 5 : 9;
    const allColors = [
        { c1: '#FADADD', c2: '#FFB7C5', type: 'flower' },
        { c1: '#fff', c2: '#FFD700', type: 'daisy' },
        { c1: '#F8C8DC', c2: '#E07A5F', type: 'flower' },
        { c1: '#fff', c2: '#FFA500', type: 'daisy' },
        { c1: '#F4C2C2', c2: '#D4A373', type: 'flower' },
        { c1: '#FFFAF0', c2: '#FFD700', type: 'daisy' },
        { c1: '#FFB7C5', c2: '#B7791F', type: 'flower' },
        { c1: '#fff', c2: '#E07A5F', type: 'daisy' },
        { c1: '#E8ADAA', c2: '#2D6A4F', type: 'flower' },
    ];
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: isMobile ? '8px' : '14px',
            padding: '1.5rem 0',
            flexWrap: 'wrap',
        }}>
            {Array.from({ length: items }, (_, i) => {
                const c = allColors[i % allColors.length];
                const sz = isMobile ? 24 : 32;
                if (c.type === 'daisy') {
                    return <BloomingDaisy key={i} delay={i * 0.08} size={sz} color={c.c1} center={c.c2} />;
                }
                return <BloomingFlower key={i} delay={i * 0.08} size={sz} color1={c.c1} color2={c.c2} />;
            })}
        </div>
    );
}

// --- Scattered Side Flowers (appear on left/right of sections) ---
function SideFlowers({ isMobile }) {
    if (isMobile) return null;
    return (
        <>
            <BloomingFlower style={{ position: 'absolute', top: '10%', left: '3%' }} delay={0.2} size={45} color1="#FADADD" color2="#FFB7C5" />
            <BloomingDaisy style={{ position: 'absolute', top: '25%', left: '5%' }} delay={0.5} size={35} color="#fff" center="#FFD700" />
            <BloomingFlower style={{ position: 'absolute', top: '60%', left: '2%' }} delay={0.8} size={38} color1="#F8C8DC" color2="#E07A5F" petalCount={6} />
            <BloomingFlower style={{ position: 'absolute', top: '15%', right: '3%' }} delay={0.3} size={42} color1="#F4C2C2" color2="#D4A373" />
            <BloomingDaisy style={{ position: 'absolute', top: '40%', right: '4%' }} delay={0.6} size={30} color="#FFFAF0" center="#FFA500" />
            <BloomingFlower style={{ position: 'absolute', top: '70%', right: '2%' }} delay={0.9} size={36} color1="#E8ADAA" color2="#B7791F" petalCount={7} />
        </>
    );
}

// --- Hero Wreath (flowers around the title) ---
function HeroWreath({ isMobile }) {
    if (isMobile) {
        return (
            <>
                <BloomingFlower style={{ position: 'absolute', top: -22, left: -18 }} delay={0.6} size={38} color1="#FADADD" color2="#FFB7C5" />
                <BloomingDaisy style={{ position: 'absolute', top: -18, right: -14 }} delay={0.8} size={32} color="#fff" center="#FFD700" />
                <BloomingFlower style={{ position: 'absolute', bottom: -16, left: '30%' }} delay={1.0} size={30} color1="#F8C8DC" color2="#E07A5F" />
                <BloomingDaisy style={{ position: 'absolute', bottom: -14, right: '25%' }} delay={1.1} size={28} color="#FFFAF0" center="#FFA500" />
            </>
        );
    }
    return (
        <>
            {/* Top arc */}
            <BloomingFlower style={{ position: 'absolute', top: -35, left: -45 }} delay={0.5} size={52} color1="#FADADD" color2="#FFB7C5" />
            <BloomingDaisy style={{ position: 'absolute', top: -40, left: '20%' }} delay={0.7} size={40} color="#fff" center="#FFD700" />
            <BloomingFlower style={{ position: 'absolute', top: -38, right: '18%' }} delay={0.9} size={44} color1="#F4C2C2" color2="#D4A373" petalCount={6} />
            <BloomingDaisy style={{ position: 'absolute', top: -35, right: -40 }} delay={1.1} size={38} color="#FFFAF0" center="#FFA500" />
            {/* Sides */}
            <BloomingFlower style={{ position: 'absolute', top: '30%', left: -50 }} delay={1.3} size={36} color1="#F8C8DC" color2="#E07A5F" />
            <BloomingFlower style={{ position: 'absolute', top: '30%', right: -48 }} delay={1.4} size={40} color1="#E8ADAA" color2="#B7791F" petalCount={7} />
            {/* Bottom */}
            <BloomingDaisy style={{ position: 'absolute', bottom: -20, left: '15%' }} delay={1.5} size={34} color="#fff" center="#E07A5F" />
            <BloomingFlower style={{ position: 'absolute', bottom: -22, left: '45%' }} delay={1.6} size={30} color1="#FFB7C5" color2="#2D6A4F" />
            <BloomingDaisy style={{ position: 'absolute', bottom: -18, right: '15%' }} delay={1.7} size={32} color="#FADADD" center="#B7791F" />
        </>
    );
}

// =============================
// PHOTO GALLERY
// =============================

function PhotoGallery({ isMobile }) {
    const [selectedPhotoId, setSelectedPhotoId] = useState(null);
    const cardWidth = isMobile ? 160 : 240;
    const spread = isMobile ? 28 : 65;

    return (
        <>
            <div style={{
                height: isMobile ? '380px' : '480px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
            }}>
                {PHOTOS.map((photo, index) => {
                    const offset = (index - 2) * spread;
                    return (
                        <motion.div
                            key={photo.id}
                            layoutId={`ann-card-${photo.id}`}
                            initial={{ opacity: 0, y: 40, rotate: 0 }}
                            whileInView={{ opacity: 1, y: 0, rotate: photo.rotate }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.12 }}
                            whileHover={{ scale: 1.08, zIndex: 20, rotate: 0, transition: { duration: 0.2 } }}
                            onClick={() => setSelectedPhotoId(photo.id)}
                            style={{
                                position: 'absolute',
                                width: `${cardWidth}px`,
                                aspectRatio: '3/4',
                                backgroundColor: 'white',
                                padding: isMobile ? '0.5rem 0.5rem 2rem 0.5rem' : '0.8rem 0.8rem 3rem 0.8rem',
                                borderRadius: '12px',
                                boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
                                cursor: 'pointer',
                                zIndex: index,
                                transform: `rotate(${photo.rotate}deg) translateX(${offset}px)`,
                            }}
                            animate={{ rotate: photo.rotate, x: offset }}
                        >
                            <div style={{ width: '100%', height: '100%', backgroundColor: '#f0f0f0', borderRadius: '4px', overflow: 'hidden' }}>
                                <img src={photo.src} alt={`Memory ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                        </motion.div>
                    );
                })}
            </div>
            <AnimatePresence>
                {selectedPhotoId && (
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        onClick={() => setSelectedPhotoId(null)}
                        style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.85)', zIndex: 100, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}
                    >
                        <motion.div
                            layoutId={`ann-card-${selectedPhotoId}`}
                            style={{ width: '100%', maxWidth: '500px', aspectRatio: '3/4', backgroundColor: 'white', padding: '0.8rem 0.8rem 3rem 0.8rem', borderRadius: '12px', overflow: 'hidden', position: 'relative' }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button onClick={() => setSelectedPhotoId(null)} style={{ position: 'absolute', top: '0.8rem', right: '0.8rem', background: 'rgba(0,0,0,0.1)', border: 'none', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 20 }}>
                                <X size={20} color="#333" />
                            </button>
                            <div style={{ width: '100%', height: '100%', borderRadius: '6px', overflow: 'hidden' }}>
                                <img src={PHOTOS.find(p => p.id === selectedPhotoId)?.src} alt="Expanded Memory" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

// =============================
// GAMES
// =============================

// --- Game 1: Find Cleo ---
function FindCleoGame({ isMobile }) {
    const [cleoPosition, setCleoPosition] = useState(() => Math.floor(Math.random() * 9));
    const [revealedCells, setRevealedCells] = useState([]);
    const [found, setFound] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [attempts, setAttempts] = useState(0);
    const [activeQuip, setActiveQuip] = useState(null);

    const triesLeft = MAX_TRIES - attempts;

    const handleTap = (index) => {
        if (found || gameOver || revealedCells.includes(index)) return;
        const newAttempts = attempts + 1;
        setAttempts(newAttempts);
        if (index === cleoPosition) {
            setFound(true);
            setRevealedCells(prev => [...prev, index]);
            confetti({ particleCount: isMobile ? 60 : 100, spread: 70, origin: { y: 0.6 }, colors: ['#FFD700', '#2D6A4F', '#E07A5F', '#B7791F'] });
        } else {
            setRevealedCells(prev => [...prev, index]);
            if (newAttempts >= MAX_TRIES) {
                setGameOver(true);
                setRevealedCells(prev => [...prev, cleoPosition]);
            } else {
                const quip = WRONG_QUIPS[Math.floor(Math.random() * WRONG_QUIPS.length)];
                setActiveQuip({ text: quip });
                setTimeout(() => setActiveQuip(null), 1500);
            }
        }
    };

    const resetGame = () => {
        setCleoPosition(Math.floor(Math.random() * 9));
        setRevealedCells([]);
        setFound(false);
        setGameOver(false);
        setAttempts(0);
        setActiveQuip(null);
    };

    const getResultMessage = () => {
        if (attempts === 1) return "First try?! You know Cleo too well!";
        if (attempts === 2) return "So close to perfect! Great find!";
        return "Just in time! That was a close one!";
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '1.5rem' }}>
                {Array.from({ length: MAX_TRIES }, (_, i) => (
                    <motion.div key={i} animate={i < triesLeft ? {} : { scale: [1, 0.8], opacity: 0.3 }}
                        style={{ width: '12px', height: '12px', borderRadius: '50%', background: i < triesLeft ? PALETTE.highlight : '#ccc', transition: 'background 0.3s' }} />
                ))}
                <span style={{ fontSize: '0.85rem', color: PALETTE.textLight, fontFamily: '"Outfit", sans-serif', marginLeft: '4px' }}>
                    {found ? '' : gameOver ? 'No tries left!' : `${triesLeft} ${triesLeft === 1 ? 'try' : 'tries'} left`}
                </span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: isMobile ? '8px' : '12px', maxWidth: isMobile ? '300px' : '400px', margin: '0 auto' }}>
                {OBJECTS.map((obj, idx) => {
                    const isRevealed = revealedCells.includes(idx);
                    const isCleo = idx === cleoPosition;
                    const showCleo = (found && isCleo) || (gameOver && isCleo);
                    const isDisabled = found || gameOver;
                    return (
                        <motion.div key={idx} onClick={() => handleTap(idx)}
                            whileTap={!isRevealed && !isDisabled ? { scale: 0.93 } : {}}
                            whileHover={!isRevealed && !isDisabled ? { translateY: -4, boxShadow: '0 8px 24px rgba(0,0,0,0.12)' } : {}}
                            animate={isRevealed && !isCleo ? { x: [0, -4, 4, -4, 4, 0] } : {}}
                            transition={isRevealed && !isCleo ? { duration: 0.4 } : { type: 'spring', stiffness: 300 }}
                            role="button" tabIndex={0} aria-label={`Search under ${obj.label}`}
                            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleTap(idx); }}
                            style={{
                                background: showCleo ? (found ? PALETTE.primary : '#888') : isRevealed ? 'rgba(200,200,200,0.3)' : PALETTE.glass,
                                backdropFilter: 'blur(8px)', border: `1px solid ${showCleo ? (found ? PALETTE.primary : '#888') : PALETTE.glassBorder}`,
                                borderRadius: '16px', padding: isMobile ? '14px 8px' : '20px', cursor: isRevealed || isDisabled ? 'default' : 'pointer',
                                minHeight: isMobile ? '80px' : '100px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                                opacity: isRevealed && !isCleo ? 0.5 : 1, transition: 'background 0.3s, opacity 0.3s',
                            }}>
                            <motion.span style={{ fontSize: isMobile ? '2rem' : '2.5rem' }} animate={showCleo ? { scale: [1, 1.3, 1] } : {}} transition={{ duration: 0.5 }}>
                                {showCleo ? '🐈\u200D\u2B1B' : obj.emoji}
                            </motion.span>
                            <span style={{ fontSize: '0.7rem', marginTop: '4px', color: showCleo ? 'white' : PALETTE.textLight, fontFamily: '"Outfit", sans-serif' }}>
                                {showCleo ? 'Cleo!' : obj.label}
                            </span>
                        </motion.div>
                    );
                })}
            </div>
            <AnimatePresence>
                {activeQuip && (
                    <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                        style={{ marginTop: '1rem', color: PALETTE.highlight, fontFamily: '"Outfit", sans-serif', fontWeight: 500, fontSize: '1rem' }}>
                        {activeQuip.text}
                    </motion.p>
                )}
            </AnimatePresence>
            <AnimatePresence>
                {found && (
                    <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} style={{ marginTop: '1.5rem' }}>
                        <p style={{ fontSize: '1.3rem', fontWeight: 'bold', color: PALETTE.primary, fontFamily: '"Outfit", sans-serif' }}>You found Cleo!</p>
                        <p style={{ color: PALETTE.textLight, margin: '0.5rem 0', fontFamily: '"Outfit", sans-serif' }}>{getResultMessage()}</p>
                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={resetGame}
                            style={{ marginTop: '0.75rem', padding: '10px 28px', background: PALETTE.primary, color: '#fff', border: 'none', borderRadius: '999px', fontFamily: '"Outfit", sans-serif', fontWeight: 600, fontSize: '0.95rem', cursor: 'pointer' }}>
                            Play Again
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
            <AnimatePresence>
                {gameOver && !found && (
                    <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} style={{ marginTop: '1.5rem' }}>
                        <p style={{ fontSize: '1.3rem', fontWeight: 'bold', color: PALETTE.highlight, fontFamily: '"Outfit", sans-serif' }}>Cleo wins this round!</p>
                        <p style={{ color: PALETTE.textLight, margin: '0.5rem 0', fontFamily: '"Outfit", sans-serif' }}>She was hiding under the {OBJECTS[cleoPosition].label.toLowerCase()}!</p>
                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={resetGame}
                            style={{ marginTop: '0.75rem', padding: '10px 28px', background: PALETTE.highlight, color: '#fff', border: 'none', borderRadius: '999px', fontFamily: '"Outfit", sans-serif', fontWeight: 600, fontSize: '0.95rem', cursor: 'pointer' }}>
                            Try Again
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

// --- Game 2: Love Letter Scramble ---
const LOVE_PHRASES = [
    { scrambled: 'OYU REA YM ISBHUNNE', answer: 'YOU ARE MY SUNSHINE' },
    { scrambled: 'OFREVER NAD YWASLA', answer: 'FOREVER AND ALWAYS' },
    { scrambled: 'YM EAHRT SI RUOYS', answer: 'MY HEART IS YOURS' },
    { scrambled: 'OT EHT ONMO DNA CABK', answer: 'TO THE MOON AND BACK' },
    { scrambled: 'EBTRET TRGETHOE', answer: 'BETTER TOGETHER' },
];

function LoveLetterScramble({ isMobile }) {
    const [phraseIndex, setPhraseIndex] = useState(() => Math.floor(Math.random() * LOVE_PHRASES.length));
    const [guess, setGuess] = useState('');
    const [solved, setSolved] = useState(false);
    const [showHint, setShowHint] = useState(false);
    const [shaking, setShaking] = useState(false);

    const phrase = LOVE_PHRASES[phraseIndex];
    const hintText = phrase.answer.slice(0, Math.ceil(phrase.answer.length / 3)) + '...';

    const handleSubmit = (e) => {
        e.preventDefault();
        if (guess.trim().toUpperCase() === phrase.answer) {
            setSolved(true);
            confetti({ particleCount: 60, spread: 60, origin: { y: 0.7 }, colors: ['#FADADD', '#FFB7C5', '#FFD700', '#2D6A4F'] });
        } else {
            setShaking(true);
            setTimeout(() => setShaking(false), 500);
        }
    };

    const nextPuzzle = () => {
        const next = (phraseIndex + 1) % LOVE_PHRASES.length;
        setPhraseIndex(next);
        setGuess('');
        setSolved(false);
        setShowHint(false);
    };

    return (
        <div style={{ textAlign: 'center', maxWidth: '440px', margin: '0 auto' }}>
            <motion.div
                animate={shaking ? { x: [0, -8, 8, -8, 8, 0] } : {}}
                transition={{ duration: 0.4 }}
                style={{
                    background: PALETTE.glass, backdropFilter: 'blur(12px)', border: `1px solid ${PALETTE.glassBorder}`,
                    borderRadius: '20px', padding: isMobile ? '1.5rem' : '2rem', boxShadow: '0 8px 32px rgba(0,0,0,0.06)',
                }}
            >
                <p style={{ fontSize: '0.85rem', color: PALETTE.textLight, fontFamily: '"Outfit", sans-serif', marginBottom: '0.75rem' }}>
                    Unscramble this love message:
                </p>
                <p style={{
                    fontSize: isMobile ? '1.2rem' : '1.5rem', fontWeight: 700, color: PALETTE.primary,
                    fontFamily: '"Outfit", sans-serif', letterSpacing: '2px', marginBottom: '1.5rem',
                }}>
                    {phrase.scrambled}
                </p>

                {!solved ? (
                    <>
                        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px', flexDirection: isMobile ? 'column' : 'row' }}>
                            <input
                                type="text" value={guess} onChange={(e) => setGuess(e.target.value)}
                                placeholder="Type your answer..."
                                style={{
                                    flex: 1, padding: '10px 16px', borderRadius: '12px', border: `1px solid ${PALETTE.glassBorder}`,
                                    fontFamily: '"Outfit", sans-serif', fontSize: '1rem', outline: 'none', background: 'rgba(255,255,255,0.8)',
                                }}
                            />
                            <motion.button type="submit" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                                style={{
                                    padding: '10px 24px', background: PALETTE.primary, color: '#fff', border: 'none', borderRadius: '12px',
                                    fontFamily: '"Outfit", sans-serif', fontWeight: 600, cursor: 'pointer', fontSize: '0.95rem',
                                }}>
                                Check
                            </motion.button>
                        </form>
                        <button onClick={() => setShowHint(true)}
                            style={{
                                marginTop: '1rem', background: 'none', border: 'none', color: PALETTE.textLight,
                                fontFamily: '"Outfit", sans-serif', cursor: 'pointer', textDecoration: 'underline', fontSize: '0.85rem',
                            }}>
                            {showHint ? `Hint: ${hintText}` : 'Need a hint?'}
                        </button>
                    </>
                ) : (
                    <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}>
                        <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: PALETTE.primary, fontFamily: '"Outfit", sans-serif' }}>
                            You got it!
                        </p>
                        <p style={{ color: PALETTE.secondary, fontFamily: '"Outfit", sans-serif', fontStyle: 'italic', margin: '0.5rem 0' }}>
                            "{phrase.answer}"
                        </p>
                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={nextPuzzle}
                            style={{
                                marginTop: '0.75rem', padding: '10px 28px', background: PALETTE.secondary, color: '#fff', border: 'none',
                                borderRadius: '999px', fontFamily: '"Outfit", sans-serif', fontWeight: 600, fontSize: '0.95rem', cursor: 'pointer',
                            }}>
                            Next Puzzle
                        </motion.button>
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
}

// --- Game 3: Memory Match ---
const MATCH_EMOJIS = ['🐰', '🐱', '🌸', '💕', '🌙', '🎀'];

function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function MemoryMatch({ isMobile }) {
    const [cards, setCards] = useState(() => shuffleArray([...MATCH_EMOJIS, ...MATCH_EMOJIS].map((emoji, i) => ({ id: i, emoji, flipped: false, matched: false }))));
    const [flippedIds, setFlippedIds] = useState([]);
    const [moves, setMoves] = useState(0);
    const [locked, setLocked] = useState(false);
    const matchedCount = cards.filter(c => c.matched).length;
    const allMatched = matchedCount === cards.length;

    const handleFlip = useCallback((id) => {
        if (locked) return;
        const card = cards.find(c => c.id === id);
        if (!card || card.flipped || card.matched) return;

        const newCards = cards.map(c => c.id === id ? { ...c, flipped: true } : c);
        const newFlipped = [...flippedIds, id];
        setCards(newCards);
        setFlippedIds(newFlipped);

        if (newFlipped.length === 2) {
            setMoves(m => m + 1);
            setLocked(true);
            const [first, second] = newFlipped.map(fid => newCards.find(c => c.id === fid));
            if (first.emoji === second.emoji) {
                setTimeout(() => {
                    setCards(prev => prev.map(c => c.id === first.id || c.id === second.id ? { ...c, matched: true } : c));
                    setFlippedIds([]);
                    setLocked(false);
                    // Check if all matched
                    const willBeMatched = newCards.filter(c => c.matched).length + 2;
                    if (willBeMatched === newCards.length) {
                        confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 }, colors: ['#FADADD', '#FFB7C5', '#FFD700', '#2D6A4F'] });
                    }
                }, 600);
            } else {
                setTimeout(() => {
                    setCards(prev => prev.map(c => newFlipped.includes(c.id) ? { ...c, flipped: false } : c));
                    setFlippedIds([]);
                    setLocked(false);
                }, 900);
            }
        }
    }, [cards, flippedIds, locked]);

    const resetGame = () => {
        setCards(shuffleArray([...MATCH_EMOJIS, ...MATCH_EMOJIS].map((emoji, i) => ({ id: i, emoji, flipped: false, matched: false }))));
        setFlippedIds([]);
        setMoves(0);
        setLocked(false);
    };

    return (
        <div style={{ textAlign: 'center', maxWidth: '380px', margin: '0 auto' }}>
            <p style={{ fontSize: '0.85rem', color: PALETTE.textLight, fontFamily: '"Outfit", sans-serif', marginBottom: '1rem' }}>
                Moves: {moves}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: isMobile ? '6px' : '10px' }}>
                {cards.map((card) => (
                    <motion.div
                        key={card.id}
                        onClick={() => handleFlip(card.id)}
                        whileTap={!card.flipped && !card.matched ? { scale: 0.93 } : {}}
                        animate={card.matched ? { scale: [1, 1.15, 1] } : {}}
                        transition={{ duration: 0.3 }}
                        style={{
                            aspectRatio: '1',
                            borderRadius: '14px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: isMobile ? '1.6rem' : '2rem',
                            cursor: card.flipped || card.matched ? 'default' : 'pointer',
                            background: card.matched ? 'rgba(45,106,79,0.15)' : card.flipped ? PALETTE.glass : `linear-gradient(135deg, ${PALETTE.primary}, ${PALETTE.secondary})`,
                            border: `1px solid ${card.matched ? PALETTE.primary : PALETTE.glassBorder}`,
                            backdropFilter: 'blur(8px)',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                            transition: 'background 0.3s',
                        }}
                    >
                        {(card.flipped || card.matched) ? card.emoji : ''}
                    </motion.div>
                ))}
            </div>
            {allMatched && (
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} style={{ marginTop: '1.5rem' }}>
                    <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: PALETTE.primary, fontFamily: '"Outfit", sans-serif' }}>
                        Perfect match!
                    </p>
                    <p style={{ color: PALETTE.textLight, fontFamily: '"Outfit", sans-serif', margin: '0.5rem 0' }}>
                        Completed in {moves} moves
                    </p>
                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={resetGame}
                        style={{ marginTop: '0.75rem', padding: '10px 28px', background: PALETTE.primary, color: '#fff', border: 'none', borderRadius: '999px', fontFamily: '"Outfit", sans-serif', fontWeight: 600, fontSize: '0.95rem', cursor: 'pointer' }}>
                        Play Again
                    </motion.button>
                </motion.div>
            )}
        </div>
    );
}

// =============================
// GROWING VINES SVG
// =============================

function GrowingVines({ visible }) {
    const stemVariant = { hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 2.5, ease: 'easeInOut' } } };
    const leafVariant = (d) => ({ hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { delay: d, duration: 0.5, type: 'spring', stiffness: 80 } } });
    const flowerVar = (d) => ({ hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { delay: d, duration: 0.6, type: 'spring', stiffness: 60 } } });
    const heartVariant = { hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { delay: 2.5, duration: 0.8, type: 'spring', stiffness: 50 } } };

    return (
        <svg width="300" height="220" viewBox="0 0 300 220" overflow="visible" style={{ display: 'block', margin: '0 auto' }}>
            <motion.path d="M20,200 C40,160 50,140 70,120 C90,100 110,85 150,90" stroke={PALETTE.primary} strokeWidth="3" fill="none" strokeLinecap="round" variants={stemVariant} initial="hidden" animate={visible ? 'visible' : 'hidden'} />
            <motion.path d="M280,200 C260,160 250,140 230,120 C210,100 190,85 150,90" stroke={PALETTE.primary} strokeWidth="3" fill="none" strokeLinecap="round" variants={stemVariant} initial="hidden" animate={visible ? 'visible' : 'hidden'} />
            <motion.g variants={leafVariant(1.0)} initial="hidden" animate={visible ? 'visible' : 'hidden'}><ellipse cx="35" cy="175" rx="7" ry="13" fill={PALETTE.primary} opacity="0.5" transform="rotate(-35, 35, 175)" /></motion.g>
            <motion.g variants={leafVariant(1.4)} initial="hidden" animate={visible ? 'visible' : 'hidden'}><ellipse cx="80" cy="115" rx="6" ry="11" fill={PALETTE.primary} opacity="0.45" transform="rotate(25, 80, 115)" /></motion.g>
            <motion.g variants={leafVariant(1.2)} initial="hidden" animate={visible ? 'visible' : 'hidden'}><ellipse cx="265" cy="175" rx="7" ry="13" fill={PALETTE.primary} opacity="0.5" transform="rotate(35, 265, 175)" /></motion.g>
            <motion.g variants={leafVariant(1.6)} initial="hidden" animate={visible ? 'visible' : 'hidden'}><ellipse cx="220" cy="115" rx="6" ry="11" fill={PALETTE.primary} opacity="0.45" transform="rotate(-25, 220, 115)" /></motion.g>
            <motion.g variants={flowerVar(1.8)} initial="hidden" animate={visible ? 'visible' : 'hidden'}>
                {[0, 72, 144, 216, 288].map(r => <ellipse key={r} cx="55" cy="142" rx="4" ry="7" fill="#FADADD" opacity="0.8" transform={`rotate(${r}, 55, 142)`} />)}
                <circle cx="55" cy="142" r="3" fill="#FFB7C5" />
            </motion.g>
            <motion.g variants={flowerVar(2.0)} initial="hidden" animate={visible ? 'visible' : 'hidden'}>
                {[0, 72, 144, 216, 288].map(r => <ellipse key={r} cx="245" cy="142" rx="4" ry="7" fill="#F8C8DC" opacity="0.8" transform={`rotate(${r}, 245, 142)`} />)}
                <circle cx="245" cy="142" r="3" fill="#E07A5F" />
            </motion.g>
            <motion.g variants={heartVariant} initial="hidden" animate={visible ? 'visible' : 'hidden'}>
                <path d="M150,100 C150,90 140,80 130,80 C120,80 110,90 110,100 C110,120 150,140 150,140 C150,140 190,120 190,100 C190,90 180,80 170,80 C160,80 150,90 150,100 Z" fill={PALETTE.highlight} opacity="0.8" />
            </motion.g>
        </svg>
    );
}

// =============================
// DAYS COUNTER
// =============================

function DaysCounter() {
    const now = new Date();
    const diffDays = Math.floor(Math.abs(now - START_DATE) / (1000 * 60 * 60 * 24));
    return (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ textAlign: 'center', marginTop: '1rem' }}>
            <span style={{ fontSize: '2.5rem', fontWeight: 'bold', fontFamily: '"Outfit", sans-serif', background: `linear-gradient(135deg, ${PALETTE.primary}, ${PALETTE.secondary})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                {diffDays}
            </span>
            <p style={{ color: PALETTE.textLight, fontFamily: '"Outfit", sans-serif', fontSize: '0.95rem', marginTop: '0.25rem' }}>days together</p>
        </motion.div>
    );
}

// =============================
// SECTION TITLE HELPER
// =============================

function SectionTitle({ title, subtitle, isMobile }) {
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: isMobile ? '1.8rem' : '2.5rem', fontFamily: '"Outfit", sans-serif', fontWeight: 700, color: PALETTE.text }}>{title}</h2>
            {subtitle && <p style={{ color: PALETTE.textLight, fontFamily: '"Outfit", sans-serif', marginTop: '0.5rem', fontSize: '1rem' }}>{subtitle}</p>}
        </motion.div>
    );
}

// =============================
// MAIN PAGE
// =============================

function AnniversariesContent() {
    const [isMobile, setIsMobile] = useState(false);
    const [vinesVisible, setVinesVisible] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';
        window.scrollTo(0, 0);
        setTimeout(() => window.scrollTo(0, 0), 10);
    }, []);

    return (
        <div style={{ minHeight: '100vh', background: PALETTE.bgGradient, overflowX: 'hidden', position: 'relative' }}>
            <FloatingPetals count={18} isMobile={isMobile} />

            {/* ====== HERO ====== */}
            <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', padding: '2rem' }}>
                {/* Cherry blossom branches on sides */}
                <CherryBranch side="left" isMobile={isMobile} />
                <CherryBranch side="right" isMobile={isMobile} />

                <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                    <div style={{ position: 'relative', display: 'inline-block', padding: isMobile ? '1rem' : '2rem' }}>
                        <HeroWreath isMobile={isMobile} />
                        <h1 style={{
                            fontSize: isMobile ? '2.5rem' : '4rem', fontFamily: '"Outfit", sans-serif', fontWeight: 800, lineHeight: 1.1,
                            marginBottom: '1rem', background: `linear-gradient(135deg, ${PALETTE.primary}, ${PALETTE.secondary})`,
                            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                        }}>
                            6 Months of Us
                        </h1>
                    </div>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }}
                        style={{ fontSize: isMobile ? '1rem' : '1.2rem', color: PALETTE.textLight, fontFamily: '"Outfit", sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                        <span>October 12, 2025</span>
                        <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }} style={{ color: PALETTE.highlight, fontSize: '1.2rem' }}>&#10084;</motion.span>
                        <span>April 12, 2026</span>
                    </motion.p>
                </motion.div>
                <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }} style={{ position: 'absolute', bottom: '2rem', zIndex: 1 }}>
                    <ChevronDown size={28} color={PALETTE.textLight} strokeWidth={1.5} />
                </motion.div>
            </section>

            <FlowerDivider isMobile={isMobile} />

            {/* ====== PHOTOS ====== */}
            <section style={{ padding: isMobile ? '2rem 1rem' : '4rem 2rem', position: 'relative' }}>
                <SideFlowers isMobile={isMobile} />
                <SectionTitle title="Our Memories" subtitle="Tap a photo to see it up close" isMobile={isMobile} />
                <PhotoGallery isMobile={isMobile} />
            </section>

            <FlowerDivider isMobile={isMobile} />

            {/* ====== FIND CLEO ====== */}
            <section style={{ padding: isMobile ? '3rem 1rem' : '4rem 2rem', position: 'relative' }}>
                <CherryBranch side="left" isMobile={isMobile} />
                <CherryBranch side="right" isMobile={isMobile} />
                <SectionTitle title="Can You Find Cleo?" subtitle="She's hiding somewhere... you have 3 tries!" isMobile={isMobile} />
                <FindCleoGame isMobile={isMobile} />
            </section>

            <FlowerDivider isMobile={isMobile} />

            {/* ====== LOVE LETTER SCRAMBLE ====== */}
            <section style={{ padding: isMobile ? '3rem 1rem' : '4rem 2rem', position: 'relative' }}>
                <SideFlowers isMobile={isMobile} />
                <SectionTitle title="Love Letter Scramble" subtitle="Unscramble the secret love message!" isMobile={isMobile} />
                <LoveLetterScramble isMobile={isMobile} />
            </section>

            <FlowerDivider isMobile={isMobile} />

            {/* ====== MEMORY MATCH ====== */}
            <section style={{ padding: isMobile ? '3rem 1rem' : '4rem 2rem', position: 'relative' }}>
                <CherryBranch side="left" isMobile={isMobile} />
                <CherryBranch side="right" isMobile={isMobile} />
                <SectionTitle title="Memory Match" subtitle="Find all the matching pairs!" isMobile={isMobile} />
                <MemoryMatch isMobile={isMobile} />
            </section>

            <FlowerDivider isMobile={isMobile} />

            {/* ====== LOVE NOTE ====== */}
            <section style={{ padding: isMobile ? '3rem 1rem' : '4rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <SideFlowers isMobile={isMobile} />
                <motion.div onViewportEnter={() => setVinesVisible(true)} viewport={{ once: true }} style={{ width: '100%', maxWidth: '500px' }}>
                    <GrowingVines visible={vinesVisible} />
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: vinesVisible ? 1 : 0 }} transition={{ delay: 2.8, duration: 1 }}
                        style={{ marginTop: '1.5rem', textAlign: 'center', background: PALETTE.glass, backdropFilter: 'blur(12px)', border: `1px solid ${PALETTE.glassBorder}`, padding: isMobile ? '1.5rem' : '2rem', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.06)' }}>
                        <p style={{ fontSize: isMobile ? '1rem' : '1.15rem', lineHeight: 1.8, color: PALETTE.text, fontStyle: 'italic', fontFamily: '"Outfit", sans-serif' }}>
                            "Happy 6 months Bunny! Every day with you is my favorite day. Here's to a thousand more."
                        </p>
                        <p style={{ marginTop: '1rem', fontWeight: 'bold', color: PALETTE.secondary, fontFamily: '"Outfit", sans-serif' }}>- P &#10084;&#65039;</p>
                    </motion.div>
                </motion.div>
            </section>

            {/* ====== FOOTER ====== */}
            <section style={{ padding: isMobile ? '2rem 1rem 3rem' : '3rem 2rem 4rem', textAlign: 'center' }}>
                <FlowerDivider isMobile={isMobile} />
                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                    style={{ fontSize: isMobile ? '1.2rem' : '1.5rem', fontFamily: '"Outfit", sans-serif', fontWeight: 600, color: PALETTE.text, marginTop: '1rem' }}>
                    Here's to many more months
                </motion.p>
                <DaysCounter />
                <Link to="/" style={{ display: 'inline-block', marginTop: '2rem', textDecoration: 'none', color: PALETTE.primary, fontSize: '0.9rem', fontFamily: '"Outfit", sans-serif' }}>
                    &#8592; Back to Bunny Home
                </Link>
            </section>
        </div>
    );
}

export default function Anniversaries() {
    return (
        <ErrorBoundary>
            <AnniversariesContent />
        </ErrorBoundary>
    );
}
