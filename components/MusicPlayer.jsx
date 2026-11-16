'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { weddingData } from '@/data/weddingData';

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const visibleImages = useMemo(() => weddingData.gallery, []);

  const openImage = (index) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const showPrevious = () => {
    setSelectedIndex((prev) => (prev === null ? 0 : (prev - 1 + visibleImages.length) % visibleImages.length));
  };

  const showNext = () => {
    setSelectedIndex((prev) => (prev === null ? 0 : (prev + 1) % visibleImages.length));
  };

  return (
    <section className="section-shell gallery-shell">
      <div className="section-inner">
        <div className="section-head">
          <p className="section-kicker">Gallery</p>
          <h2 className="section-title">Moments worth treasuring</h2>
        </div>

        <div className="gallery-grid">
          {visibleImages.map((image, index) => (
            <motion.button
              type="button"
              className="gallery-item"
              key={image.src}
              onClick={() => openImage(index)}
              whileHover={{ y: -4, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              aria-label={`Open gallery image ${index + 1}`}
            >
              <img src={image.src} alt={image.alt} />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="lightbox-content"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={(event) => event.stopPropagation()}
            >
              <button className="lightbox-close" onClick={closeLightbox} aria-label="Close gallery">
                <X size={20} />
              </button>

              <button className="lightbox-nav left" onClick={showPrevious} aria-label="Previous image">
                <ChevronLeft size={26} />
              </button>

              <img src={visibleImages[selectedIndex].src} alt={visibleImages[selectedIndex].alt} />

              <button className="lightbox-nav right" onClick={showNext} aria-label="Next image">
                <ChevronRight size={26} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .gallery-shell {
          background: linear-gradient(180deg, rgba(255, 248, 240, 0.7), rgba(244, 233, 226, 0.7));
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1rem;
        }

        .gallery-item {
          cursor: pointer;
          border: none;
          background: transparent;
          padding: 0;
          overflow: hidden;
          border-radius: 20px;
          height: 220px;
          box-shadow: 0 14px 26px rgba(59, 18, 37, 0.08);
        }

        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s ease;
        }

        .gallery-item:hover img {
          transform: scale(1.04);
        }

        .lightbox-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(20, 9, 15, 0.86);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 60;
          padding: 1.2rem;
        }

        .lightbox-content {
          position: relative;
          width: min(90vw, 900px);
          max-height: 85vh;
          background: rgba(255, 248, 240, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 18px;
          padding: 1rem;
        }

        .lightbox-content img {
          width: 100%;
          max-height: 80vh;
          object-fit: contain;
          border-radius: 12px;
        }

        .lightbox-close,
        .lightbox-nav {
          position: absolute;
          border: none;
          background: rgba(255, 248, 240, 0.15);
          color: white;
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          cursor: pointer;
        }

        .lightbox-close {
          top: 0.8rem;
          right: 0.8rem;
        }

        .lightbox-nav {
          top: 50%;
          transform: translateY(-50%);
        }

        .lightbox-nav.left {
          left: 0.8rem;
        }

        .lightbox-nav.right {
          right: 0.8rem;
        }

        @media (min-width: 768px) {
          .gallery-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
      `}</style>
    </section>
  );
}
