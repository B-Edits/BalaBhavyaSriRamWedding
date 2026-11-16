'use client';

import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, Repeat, Music2 } from 'lucide-react';

export default function MusicPlayer({ enabled = false }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioError, setAudioError] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    const audio = audioRef.current;
    if (!audio) return;

    const playPromise = audio.play();
    if (playPromise) {
      playPromise
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  }, [enabled]);

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio) {
      setAudioError(true);
      return;
    }

    if (audio.paused) {
      try {
        await audio.play();
        setIsPlaying(true);
        setAudioError(false);
      } catch {
        setAudioError(true);
      }
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const canRenderAudio = enabled && !audioError;

  return (
    <div className="music-player-wrap">
      {canRenderAudio && (
        <audio
          ref={audioRef}
          loop
          preload="auto"
          src="/audio/wedding-music.mp3"
          onError={() => setAudioError(true)}
          onEnded={() => setIsPlaying(false)}
        />
      )}

      {enabled ? (
        <button
          type="button"
          className={`music-player ${isPlaying ? 'playing' : 'paused'}`}
          onClick={togglePlayback}
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
        >
          <span className="music-icon">
            {audioError ? <VolumeX size={18} /> : isPlaying ? <Music2 size={18} /> : <Volume2 size={18} />}
          </span>
          <span className="music-label">{audioError ? 'Audio unavailable' : isPlaying ? 'Now playing' : 'Play music'}</span>
          <span className="music-loop"><Repeat size={14} /></span>
        </button>
      ) : (
        <div className="music-placeholder" aria-live="polite">
          <Music2 size={18} />
          <span>Music starts after opening the invitation</span>
        </div>
      )}

      <style jsx>{`
        .music-player-wrap {
          position: fixed;
          right: 1rem;
          bottom: 1rem;
          z-index: 50;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .music-player,
        .music-placeholder {
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          border: 1px solid rgba(184, 149, 85, 0.55);
          background: rgba(255, 248, 240, 0.9);
          backdrop-filter: blur(10px);
          color: var(--burgundy);
          border-radius: 999px;
          box-shadow: 0 16px 28px rgba(59, 18, 37, 0.12);
          padding: 0.8rem 1rem;
          max-width: min(80vw, 220px);
        }

        .music-player {
          cursor: pointer;
          border: none;
        }

        .music-icon {
          width: 2.2rem;
          height: 2.2rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(184, 149, 85, 0.2), rgba(197, 142, 128, 0.2));
        }

        .music-loop {
          display: inline-flex;
          opacity: 0.8;
        }

        .music-label {
          font-size: 0.72rem;
          letter-spacing: 0.08rem;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .music-placeholder {
          font-size: 0.7rem;
          letter-spacing: 0.08rem;
          text-transform: uppercase;
          color: rgba(59, 18, 37, 0.82);
        }

        @media (max-width: 640px) {
          .music-player-wrap {
            right: 0.75rem;
            bottom: 0.75rem;
          }

          .music-label,
          .music-placeholder {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
