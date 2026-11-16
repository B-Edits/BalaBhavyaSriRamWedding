'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { MapPinned } from 'lucide-react';
import { weddingData } from '@/data/weddingData';

export default function Reception() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="section-shell">
      <div className="section-inner">
        <div className="section-head">
          <p className="section-kicker">Reception</p>
          <h2 className="section-title">Celebrate with us</h2>
        </div>

        <motion.div
          className="reception-card card"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="reception-copy">
            <div className="ornament"><span>✦</span></div>
            <h3>{weddingData.receptionTitle}</h3>
            <p className="reception-date">{weddingData.receptionDate}</p>
            <div className="detail-row">
              <span className="label">Time</span>
              <span>{weddingData.receptionTime}</span>
            </div>
            <div className="detail-row">
              <span className="label">Venue</span>
              <span>{weddingData.receptionVenue}</span>
            </div>
            <div className="detail-row">
              <span className="label">Address</span>
              <span>{weddingData.receptionAddress}</span>
            </div>
            <a className="map-button" href={weddingData.receptionMapLink} target="_blank" rel="noreferrer">
              <MapPinned size={18} />
              Get directions
            </a>
          </div>

          <div className="reception-photo">
            <img src="/images/placeholder-gallery-2.svg" alt="Couple placeholder for reception" />
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .reception-card {
          display: grid;
          gap: 0;
          max-width: 1120px;
          margin: 0 auto;
          overflow: hidden;
        }

        .reception-copy {
          padding: 2rem 1.4rem 2.3rem;
          text-align: center;
          background: linear-gradient(180deg, rgba(255, 248, 240, 0.86), rgba(247, 231, 223, 0.75));
        }

        .reception-copy h3 {
          margin: 0.5rem 0 0.4rem;
          font-family: var(--font-heading);
          font-size: clamp(2.7rem, 5vw, 4.8rem);
          color: var(--burgundy);
          line-height: 0.9;
        }

        .reception-date {
          margin: 0 0 1.5rem;
          color: var(--rose-gold);
          text-transform: uppercase;
          letter-spacing: 0.1rem;
        }

        .detail-row {
          display: grid;
          gap: 0.28rem;
          padding: 0.8rem 0;
          border-bottom: 1px solid rgba(197, 142, 128, 0.28);
          color: rgba(59, 18, 37, 0.82);
        }

        .detail-row .label {
          font-size: 0.72rem;
          letter-spacing: 0.15rem;
          text-transform: uppercase;
          color: var(--rose-gold);
        }

        .map-button {
          margin-top: 1.6rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.65rem;
          border-radius: 999px;
          padding: 0.9rem 1.3rem;
          background: linear-gradient(135deg, var(--burgundy), #8b3d50);
          color: var(--ivory);
          box-shadow: 0 14px 28px rgba(100, 31, 53, 0.18);
        }

        .reception-photo {
          min-height: 340px;
        }

        .reception-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @media (min-width: 900px) {
          .reception-card {
            grid-template-columns: 1fr 1.2fr;
          }

          .reception-copy {
            text-align: left;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .reception-copy .ornament {
            justify-content: flex-start;
            margin: 0 0 1rem;
          }
        }
      `}</style>
    </section>
  );
}
