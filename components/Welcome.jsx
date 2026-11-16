'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, Music2, Sparkles } from 'lucide-react';

export default function Opening({ isOpen, onOpen, onMusicStart }) {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [envelopeOpen, setEnvelopeOpen] = useState(false);
  const coverRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setEnvelopeOpen(true), 120);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleOpenInvitation = () => {
    if (prefersReducedMotion) {
      onOpen();
      onMusicStart?.();
      return;
    }

    setEnvelopeOpen(true);
    setTimeout(() => {
      onOpen();
      onMusicStart?.();
    }, 700);
  };

  return (
    <motion.div
      ref={coverRef}
      className={`invitation-cover ${isOpen ? 'hidden' : ''}`}
      initial={{ opacity: 1 }}
      animate={{ opacity: isOpen ? 0 : 1, pointerEvents: isOpen ? 'none' : 'auto' }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      aria-live="polite"
    >
      <div className="cover-glow" />
      <motion.div
        className="envelope-frame"
        animate={
          isOpen
            ? { scale: 1.08, opacity: 0.18 }
            : envelopeOpen
              ? { scale: 1.05, rotateX: 70 }
              : { scale: 1, rotateX: 0 }
        }
        transition={{ duration: 0.9, ease: 'easeInOut' }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="gold-border" />

        <motion.div
          className="envelope-card"
          animate={envelopeOpen ? { y: -18, scale: 0.96, opacity: 0.08 } : { y: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: 'easeInOut' }}
        >
          <div className="cover-ornament">✦</div>
          <p className="cover-tag">Wedding Invitation</p>
          <h1 className="cover-names">Bala Bhavya <span>&</span> Sri Ram</h1>
          <p className="cover-date">13 December 2026</p>
          <div className="cover-ornament lower">✦</div>
        </motion.div>
      </motion.div>

      <div className="cover-content">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="cover-intro"
        >
          <div className="monogram-wrap">
            <span>B</span>
            <span>&</span>
            <span>S</span>
          </div>
          <p className="invitation-callout">You are warmly invited</p>
          <h2>Bala Bhavya &amp; Sri Ram</h2>
          <p className="invitation-line">Request the pleasure of your company</p>
          <p className="invitation-date">on 13 December 2026</p>
          <button className="open-button" onClick={handleOpenInvitation} aria-label="Open invitation">
            <Sparkles size={16} />
            Open Invitation
          </button>
        </motion.div>
      </div>

      <div className="cover-footer">
        <Music2 size={18} />
        <span>Tap to begin the celebration</span>
        <ArrowDown size={16} />
      </div>

      <style jsx>{`
        .invitation-cover {
          position: fixed;
          inset: 0;
          z-index: 30;
          background:
            linear-gradient(180deg, rgba(34, 7, 16, 0.82), rgba(100, 31, 53, 0.9)),
            url('/images/placeholder-gallery-1.svg') center/cover no-repeat;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          min-height: 100vh;
        }

        .invitation-cover.hidden {
          display: none;
        }

        .cover-glow {
          position: absolute;
          inset: 2rem;
          border: 1px solid rgba(184, 149, 85, 0.75);
          border-radius: 30px;
          box-shadow: inset 0 0 40px rgba(184, 149, 85, 0.2), 0 0 50px rgba(197, 142, 128, 0.2);
        }

        .envelope-frame {
          position: absolute;
          inset: 10% 12%;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1200px;
          filter: drop-shadow(0 20px 40px rgba(10, 4, 8, 0.35));
        }

        .gold-border {
          position: absolute;
          inset: 1rem;
          border: 1px solid rgba(184, 149, 85, 0.9);
          border-radius: 22px;
          background: rgba(255, 248, 240, 0.04);
        }

        .envelope-card {
          width: min(72vw, 760px);
          min-height: 440px;
          background: linear-gradient(135deg, rgba(255, 248, 240, 0.94), rgba(232, 198, 189, 0.76));
          border: 1px solid rgba(184, 149, 85, 0.7);
          border-radius: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          text-align: center;
          position: relative;
          padding: 2rem;
          backdrop-filter: blur(8px);
        }

        .cover-ornament {
          font-size: 2.2rem;
          color: var(--gold);
          line-height: 1;
        }

        .cover-tag {
          margin: 0.5rem 0 1rem;
          color: var(--burgundy);
          font-size: 0.9rem;
          letter-spacing: 0.32rem;
          text-transform: uppercase;
        }

        .cover-names {
          font-family: var(--font-heading);
          font-size: clamp(2.5rem, 5vw, 5.4rem);
          line-height: 0.9;
          margin: 0.4rem 0;
          color: var(--deep-wine);
          font-weight: 600;
        }

        .cover-names span {
          font-family: var(--font-script);
          font-size: 0.8em;
          display: inline-block;
          margin: 0 0.2rem;
          color: var(--rose-gold);
        }

        .cover-date {
          font-size: 1.1rem;
          letter-spacing: 0.12rem;
          margin-top: 0.8rem;
          color: rgba(59, 18, 37, 0.9);
          text-transform: uppercase;
        }

        .cover-content {
          position: relative;
          z-index: 2;
          text-align: center;
          width: min(90vw, 700px);
        }

        .cover-intro {
          color: var(--ivory);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .monogram-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;
          font-size: clamp(1.8rem, 3vw, 3rem);
          font-family: var(--font-heading);
          color: var(--gold);
          letter-spacing: 0.12rem;
          border: 1px solid rgba(184, 149, 85, 0.75);
          border-radius: 50%;
          width: 170px;
          height: 170px;
          background: rgba(255, 255, 255, 0.04);
          box-shadow: inset 0 0 30px rgba(184, 149, 85, 0.12);
        }

        .invitation-callout {
          margin: 0;
          letter-spacing: 0.28rem;
          text-transform: uppercase;
          font-size: 0.74rem;
          opacity: 0.9;
        }

        .cover-intro h2 {
          margin: 0;
          font-family: var(--font-heading);
          font-size: clamp(2.6rem, 5vw, 5rem);
          line-height: 0.9;
          font-weight: 600;
          letter-spacing: 0.04em;
        }

        .invitation-line,
        .invitation-date {
          margin: 0;
          color: rgba(255, 248, 240, 0.88);
          font-size: 1.06rem;
          letter-spacing: 0.08rem;
        }

        .open-button {
          margin-top: 0.75rem;
          border: 1px solid rgba(184, 149, 85, 0.8);
          background: linear-gradient(135deg, rgba(184, 149, 85, 0.24), rgba(255, 248, 240, 0.1));
          color: var(--ivory);
          border-radius: 999px;
          padding: 0.95rem 2rem;
          font-size: 0.92rem;
          letter-spacing: 0.18rem;
          text-transform: uppercase;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.7rem;
          cursor: pointer;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12);
        }

        .open-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 18px 28px rgba(0, 0, 0, 0.18);
        }

        .cover-footer {
          position: fixed;
          left: 50%;
          bottom: 2rem;
          transform: translateX(-50%);
          z-index: 5;
          display: flex;
          align-items: center;
          gap: 0.7rem;
          color: rgba(255, 248, 240, 0.9);
          font-size: 0.82rem;
          letter-spacing: 0.1rem;
          text-transform: uppercase;
        }

        @media (max-width: 640px) {
          .envelope-card {
            min-height: 300px;
          }

          .cover-footer {
            gap: 0.5rem;
            letter-spacing: 0.05rem;
            font-size: 0.68rem;
          }

          .monogram-wrap {
            width: 130px;
            height: 130px;
          }
        }
      `}</style>
    </motion.div>
  );
}
