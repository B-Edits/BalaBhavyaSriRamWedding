'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Clock3 } from 'lucide-react';

const weddingTarget = new Date('2026-12-13T00:00:00+05:30');

function getCountdownValues() {
  const now = new Date();
  const diff = weddingTarget.getTime() - now.getTime();

  if (diff <= 0) {
    return { expired: true, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { expired: false, days, hours, minutes, seconds };
}

export default function Countdown() {
  const [state, setState] = useState(getCountdownValues());

  useEffect(() => {
    const interval = setInterval(() => {
      setState(getCountdownValues());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-shell countdown-shell">
      <div className="section-inner">
        <div className="section-head">
          <p className="section-kicker">Countdown</p>
          <h2 className="section-title">Our big day is almost here</h2>
        </div>

        <motion.div
          className="countdown-card card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {!state.expired ? (
            <>
              <div className="countdown-header">
                <Clock3 size={22} />
                <span>Countdown to the Wedding</span>
              </div>
              <div className="timer-grid">
                <div className="timer-box">
                  <strong>{String(state.days).padStart(2, '0')}</strong>
                  <span>Days</span>
                </div>
                <div className="timer-box">
                  <strong>{String(state.hours).padStart(2, '0')}</strong>
                  <span>Hours</span>
                </div>
                <div className="timer-box">
                  <strong>{String(state.minutes).padStart(2, '0')}</strong>
                  <span>Minutes</span>
                </div>
                <div className="timer-box">
                  <strong>{String(state.seconds).padStart(2, '0')}</strong>
                  <span>Seconds</span>
                </div>
              </div>
            </>
          ) : (
            <div className="celebration-box">
              <h3>The celebration has begun</h3>
              <p>We are delighted to celebrate this beautiful wedding day with friends and family.</p>
            </div>
          )}
        </motion.div>
      </div>

      <style jsx>{`
        .countdown-shell {
          background: linear-gradient(180deg, rgba(255, 248, 240, 0.7), rgba(246, 236, 226, 0.7));
        }

        .countdown-card {
          max-width: 900px;
          margin: 0 auto;
          padding: 2rem 1.2rem;
        }

        .countdown-header {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--burgundy);
          letter-spacing: 0.08rem;
          text-transform: uppercase;
          font-size: 0.8rem;
          margin-bottom: 1.2rem;
        }

        .timer-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1rem;
        }

        .timer-box {
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.52), rgba(232, 198, 189, 0.12));
          border: 1px solid rgba(184, 149, 85, 0.36);
          border-radius: 22px;
          padding: 1.4rem 0.8rem;
          text-align: center;
          display: grid;
          gap: 0.3rem;
        }

        .timer-box strong {
          font-family: var(--font-heading);
          font-size: clamp(2.2rem, 5vw, 4rem);
          color: var(--burgundy);
          line-height: 1;
        }

        .timer-box span {
          color: rgba(59, 18, 37, 0.8);
          letter-spacing: 0.12rem;
          text-transform: uppercase;
          font-size: 0.76rem;
        }

        .celebration-box {
          text-align: center;
          padding: 1rem 0.5rem;
        }

        .celebration-box h3 {
          margin: 0;
          font-family: var(--font-heading);
          font-size: clamp(2.5rem, 4vw, 4rem);
          color: var(--burgundy);
        }

        .celebration-box p {
          margin: 0.9rem auto 0;
          max-width: 620px;
          line-height: 1.8;
          color: rgba(59, 18, 37, 0.78);
        }

        @media (min-width: 768px) {
          .timer-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }
        }
      `}</style>
    </section>
  );
}
