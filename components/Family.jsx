'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';

export default function Couple() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="section-shell">
      <div className="section-inner">
        <div className="section-head">
          <p className="section-kicker">Meet the couple</p>
          <h2 className="section-title">A story of love & tradition</h2>
        </div>

        <div className="couple-grid">
          <motion.article
            className="profile-card card"
            initial={prefersReducedMotion ? false : { opacity: 0, x: -24 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
          >
            <div className="profile-image-wrap">
              <img src="/images/placeholder-family.svg" alt="Bride Bala Bhavya portrait placeholder" />
            </div>
            <div className="profile-copy">
              <div className="ornament"><span>✦</span></div>
              <h3>Bala Bhavya</h3>
              <p className="profile-label">The bride</p>
              <p className="profile-text">
                A graceful soul whose warmth, elegance, and kindness make every moment brighter.
                <span className="placeholder-text">[Replace with bride profile text and family introduction.]</span>
              </p>
            </div>
          </motion.article>

          <motion.article
            className="profile-card card"
            initial={prefersReducedMotion ? false : { opacity: 0, x: 24 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: 'easeOut', delay: 0.08 }}
          >
            <div className="profile-image-wrap">
              <img src="/images/placeholder-family.svg" alt="Groom Sri Ram portrait placeholder" />
            </div>
            <div className="profile-copy">
              <div className="ornament"><span>✦</span></div>
              <h3>Sri Ram</h3>
              <p className="profile-label">The groom</p>
              <p className="profile-text">
                A kind-hearted, confident and caring companion with a smile that feels like home.
                <span className="placeholder-text">[Replace with groom profile text and family introduction.]</span>
              </p>
            </div>
          </motion.article>
        </div>

        <div className="story-badge">
          <BadgeCheck size={18} />
          <span>Family blessings and a lifetime of togetherness</span>
        </div>
      </div>

      <style jsx>{`
        .couple-grid {
          display: grid;
          gap: 2rem;
        }

        .profile-card {
          overflow: hidden;
          display: grid;
        }

        .profile-image-wrap {
          overflow: hidden;
          min-height: 360px;
          background: linear-gradient(180deg, rgba(232, 198, 189, 0.5), rgba(255, 248, 240, 0.88));
        }

        .profile-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s ease;
        }

        .profile-card:hover .profile-image-wrap img {
          transform: scale(1.04);
        }

        .profile-copy {
          padding: 2rem 1.5rem 2.2rem;
          text-align: center;
        }

        .profile-copy h3 {
          font-family: var(--font-heading);
          font-size: clamp(2.2rem, 4vw, 3.5rem);
          line-height: 1;
          margin: 0.5rem 0 0.25rem;
          color: var(--burgundy);
        }

        .profile-label {
          margin: 0;
          color: var(--rose-gold);
          letter-spacing: 0.18rem;
          text-transform: uppercase;
          font-size: 0.74rem;
        }

        .profile-text {
          margin: 1.1rem auto 0;
          max-width: 420px;
          font-size: 1.02rem;
          line-height: 1.9;
          color: rgba(59, 18, 37, 0.8);
        }

        .placeholder-text {
          display: block;
          margin-top: 0.75rem;
          color: rgba(100, 31, 53, 0.72);
          font-size: 0.9rem;
          font-style: italic;
        }

        .story-badge {
          margin: 2.25rem auto 0;
          max-width: fit-content;
          display: inline-flex;
          align-items: center;
          gap: 0.7rem;
          border-radius: 999px;
          background: rgba(184, 149, 85, 0.08);
          border: 1px solid rgba(184, 149, 85, 0.4);
          padding: 0.8rem 1.2rem;
          color: var(--burgundy);
          letter-spacing: 0.04rem;
        }

        @media (min-width: 900px) {
          .couple-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
      `}</style>
    </section>
  );
}
