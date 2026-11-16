'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Flower2 } from 'lucide-react';

export default function Family() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="section-shell family-section">
      <div className="section-inner">
        <div className="section-head">
          <p className="section-kicker">Family invitation</p>
          <h2 className="section-title">With the blessings of our families</h2>
        </div>

        <motion.div
          className="family-card card"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="family-grid">
            <div>
              <div className="family-label">Bride's Parents</div>
              <p className="family-name">[Bride's parents names]</p>
            </div>
            <div className="family-divider"><Flower2 size={20} /></div>
            <div>
              <div className="family-label">Groom's Parents</div>
              <p className="family-name">[Groom's parents names]</p>
            </div>
          </div>

          <div className="invitation-text">
            <p>
              With joy in our hearts and gratitude in our souls, we invite you to share in the celebration of our wedding.
            </p>
            <p>
              Your presence will bring us endless happiness as we begin this beautiful new chapter together.
            </p>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .family-section {
          background: linear-gradient(180deg, rgba(245, 231, 226, 0.7), rgba(255, 248, 240, 0.7));
        }

        .family-card {
          max-width: 980px;
          margin: 0 auto;
          padding: 2rem 1.4rem;
        }

        .family-grid {
          display: grid;
          gap: 1rem;
          align-items: center;
          text-align: center;
          padding-bottom: 1.8rem;
          border-bottom: 1px solid var(--separator);
        }

        .family-label {
          font-size: 0.8rem;
          letter-spacing: 0.2rem;
          text-transform: uppercase;
          color: var(--rose-gold);
          margin-bottom: 0.35rem;
        }

        .family-name {
          margin: 0;
          font-family: var(--font-heading);
          font-size: clamp(1.9rem, 3vw, 3rem);
          color: var(--burgundy);
        }

        .family-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--gold);
        }

        .invitation-text {
          margin-top: 1.5rem;
          text-align: center;
          max-width: 760px;
          margin-left: auto;
          margin-right: auto;
          font-size: 1.04rem;
          line-height: 1.9;
          color: rgba(59, 18, 37, 0.8);
        }

        @media (min-width: 768px) {
          .family-grid {
            grid-template-columns: 1fr auto 1fr;
          }
        }
      `}</style>
    </section>
  );
}
