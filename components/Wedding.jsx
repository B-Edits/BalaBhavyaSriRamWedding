'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { CalendarDays, MapPin, Clock3 } from 'lucide-react';
import { weddingData } from '@/data/weddingData';

export default function Events() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="section-shell">
      <div className="section-inner">
        <div className="section-head">
          <p className="section-kicker">Pre-wedding ceremonies</p>
          <h2 className="section-title">Moments before the vows</h2>
        </div>

        <div className="events-grid">
          {weddingData.events.map((event, index) => (
            <motion.article
              className="event-card card"
              key={event.name}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
              whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.16 }}
              transition={{ duration: 0.7, delay: index * 0.08, ease: 'easeOut' }}
            >
              <div className="event-image-wrap">
                <img src={event.image} alt={`${event.name} placeholder`} />
              </div>
              <div className="event-content">
                <div className="event-tag">{event.name}</div>
                <h3>{event.name}</h3>
                <ul className="event-meta">
                  <li><CalendarDays size={16} /> {event.date}</li>
                  <li><Clock3 size={16} /> {event.time}</li>
                  <li><MapPin size={16} /> {event.venue}</li>
                </ul>
                <p>{event.description}</p>
                <a className="event-link" href={event.mapLink} target="_blank" rel="noreferrer">
                  View location
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .events-grid {
          display: grid;
          gap: 1.5rem;
        }

        .event-card {
          overflow: hidden;
          display: flex;
          flex-direction: column;
          min-height: 100%;
        }

        .event-image-wrap {
          position: relative;
          height: 230px;
          overflow: hidden;
        }

        .event-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.9s ease;
        }

        .event-card:hover .event-image-wrap img {
          transform: scale(1.04);
        }

        .event-content {
          padding: 1.4rem 1.25rem 1.5rem;
        }

        .event-tag {
          color: var(--rose-gold);
          letter-spacing: 0.16rem;
          text-transform: uppercase;
          font-size: 0.72rem;
          margin-bottom: 0.65rem;
        }

        .event-content h3 {
          margin: 0;
          font-family: var(--font-heading);
          font-size: clamp(2rem, 4vw, 3rem);
          color: var(--burgundy);
          line-height: 1;
        }

        .event-meta {
          list-style: none;
          padding: 0;
          margin: 1rem 0;
          display: grid;
          gap: 0.7rem;
          color: rgba(59, 18, 37, 0.82);
        }

        .event-meta li {
          display: flex;
          align-items: flex-start;
          gap: 0.45rem;
          line-height: 1.6;
        }

        .event-content p {
          margin: 0;
          color: rgba(59, 18, 37, 0.78);
          line-height: 1.8;
        }

        .event-link {
          display: inline-flex;
          margin-top: 1.1rem;
          color: var(--burgundy);
          border-bottom: 1px solid rgba(100, 31, 53, 0.4);
          padding-bottom: 0.12rem;
        }

        @media (min-width: 900px) {
          .events-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
      `}</style>
    </section>
  );
}
