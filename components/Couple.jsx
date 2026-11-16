'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { HeartHandshake, MapPin } from 'lucide-react';

export default function Welcome() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="section-shell welcome-shell">
      <div className="section-inner welcome-layout">
        <motion.div
          className="welcome-image-card card"
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <img src="/images/placeholder-couple.svg" alt="Bala Bhavya and Sri Ram portrait placeholder" />
        </motion.div>

        <motion.div
          className="welcome-copy"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="ornament"><span>✦</span></div>
          <p className="section-kicker">With love</p>
          <h1 className="section-title large-name">Bala Bhavya <span>&amp;</span> Sri Ram</h1>
          <p className="welcome-message">Together with the blessings of our families</p>
          <div className="date-pill">
            <MapPin size={16} />
            <span>13 December 2026</span>
          </div>
          <p className="section-subtitle welcome-text">
            We invite you to witness our union, surrounded by love, tradition, and cherished memories.
            Your presence will make our celebration truly unforgettable.
          </p>
          <div className="mini-badge">
            <HeartHandshake size={18} />
            <span>With joy and gratitude</span>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .welcome-shell {
          background: linear-gradient(180deg, rgba(255, 248, 240, 0.8), rgba(250, 236, 230, 0.58));
        }

        .welcome-layout {
          display: grid;
          gap: 2.2rem;
          align-items: center;
        }

        .welcome-image-card {
          overflow: hidden;
          border-radius: 32px;
          min-height: 420px;
        }

        .welcome-image-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.85s ease;
        }

        .welcome-image-card:hover img {
          transform: scale(1.03);
        }

        .welcome-copy {
          text-align: center;
          padding: 0.5rem 0;
        }

        .large-name {
          font-size: clamp(3rem, 7vw, 6rem);
          letter-spacing: 0.03em;
          line-height: 0.82;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .large-name span {
          font-family: var(--font-script);
          color: var(--rose-gold);
          font-size: 0.9em;
          display: inline-block;
          margin: 0 0.2rem;
        }

        .welcome-message {
          margin: 0 0 1rem;
          font-size: 1.2rem;
          letter-spacing: 0.06rem;
          text-transform: uppercase;
          color: var(--rose-gold);
        }

        .date-pill,
        .mini-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          border: 1px solid rgba(184, 149, 85, 0.55);
          border-radius: 999px;
          padding: 0.8rem 1.1rem;
          background: rgba(255, 255, 255, 0.35);
          color: var(--burgundy);
          font-size: 0.9rem;
          letter-spacing: 0.05rem;
          text-transform: uppercase;
        }

        .welcome-text {
          margin-top: 1.2rem;
        }

        .mini-badge {
          margin-top: 1.3rem;
          background: rgba(197, 142, 128, 0.08);
        }

        @media (min-width: 900px) {
          .welcome-layout {
            grid-template-columns: 1.15fr 1fr;
          }

          .welcome-copy {
            text-align: left;
          }

          .date-pill,
          .mini-badge {
            justify-content: flex-start;
          }
        }
      `}</style>
    </section>
  );
}
