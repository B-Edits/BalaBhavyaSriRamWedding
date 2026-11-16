'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { MapPinned } from 'lucide-react';
import { weddingData } from '@/data/weddingData';

export default function Wedding() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="section-shell wedding-shell">
      <div className="section-inner">
        <div className="section-head">
          <p className="section-kicker">Wedding ceremony</p>
          <h2 className="section-title">The sacred vows</h2>
        </div>

        <motion.div
          className="wedding-card card"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="wedding-visual">
            <img src="/images/placeholder-gallery-1.svg" alt="Wedding ceremony visual placeholder" />
          </div>

          <div className="wedding-details">
            <div className="ornament"><span>✦</span></div>
            <h3>{weddingData.weddingTitle}</h3>
            <p className="wedding-date">{weddingData.weddingDateText}</p>
            <div className="detail-row">
              <span className="label">Muhurtham</span>
              <span>{weddingData.muhurtham}</span>
            </div>
            <div className="detail-row">
              <span className="label">Venue</span>
              <span>{weddingData.venue}</span>
            </div>
            <div className="detail-row">
              <span className="label">Address</span>
              <span>{weddingData.address}</span>
            </div>

            <a className="map-button" href={weddingData.mapLink} target="_blank" rel="noreferrer">
              <MapPinned size={18} />
              Get directions
            </a>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .wedding-shell {
          background: linear-gradient(180deg, rgba(245, 231, 226, 0.52), rgba(255, 248, 240, 0.88));
        }

        .wedding-card {
          display: grid;
          gap: 0;
          overflow: hidden;
          max-width: 1120px;
          margin: 0 auto;
        }

        .wedding-visual {
          min-height: 320px;
        }

        .wedding-visual img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .wedding-details {
          padding: 2rem 1.4rem 2.3rem;
          text-align: center;
          background: rgba(255, 248, 240, 0.8);
        }

        .wedding-details h3 {
          margin: 0.5rem 0 0.4rem;
          font-family: var(--font-heading);
          font-size: clamp(2.8rem, 5vw, 5rem);
          color: var(--burgundy);
          line-height: 0.9;
        }

        .wedding-date {
          margin: 0 0 1.5rem;
          font-size: 1.05rem;
          letter-spacing: 0.12rem;
          text-transform: uppercase;
          color: var(--rose-gold);
        }

        .detail-row {
          display: grid;
          gap: 0.25rem;
          padding: 0.75rem 0;
          border-bottom: 1px solid rgba(197, 142, 128, 0.27);
          font-size: 1rem;
          color: rgba(59, 18, 37, 0.82);
        }

        .detail-row .label {
          font-size: 0.75rem;
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

        @media (min-width: 900px) {
          .wedding-card {
            grid-template-columns: 1.15fr 1fr;
          }

          .wedding-details {
            text-align: left;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .wedding-details .ornament {
            justify-content: flex-start;
            margin: 0 0 1.3rem;
          }
        }
      `}</style>
    </section>
  );
}
