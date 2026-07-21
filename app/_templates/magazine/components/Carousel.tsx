'use client';
import React, { useState, useCallback } from 'react';

interface CarouselProps {
  images: string[];
  alts?: string[];
  height?: string;
}

export default function Carousel({
  images,
  alts = [],
  height = '200px',
}: CarouselProps) {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() => {
    setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  }, [images.length]);

  const next = useCallback(() => {
    setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
  }, [images.length]);

  if (!images.length) return null;

  return (
    <div className='carousel-container' style={{ height }}>
      <div
        className='carousel-track'
        style={{ transform: `translateX(-${current * 100}%)`, height: '100%' }}
      >
        {images.map((src, i) => (
          <div key={i} className='carousel-slide' style={{ height: '100%' }}>
            <img
              src={src}
              alt={alts[i] || `Slide ${i + 1}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>
      {images.length > 1 && (
        <>
          <button
            className='carousel-btn'
            style={{ left: '8px' }}
            onClick={prev}
            aria-label='Previous'
          >
            <svg width='10' height='16' viewBox='0 0 10 16' fill='none'>
              <path
                d='M8 2L2 8L8 14'
                stroke='#3f3c43'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
          <button
            className='carousel-btn'
            style={{ right: '8px' }}
            onClick={next}
            aria-label='Next'
          >
            <svg width='10' height='16' viewBox='0 0 10 16' fill='none'>
              <path
                d='M2 2L8 8L2 14'
                stroke='#3f3c43'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
          <div className='carousel-dots'>
            {images.map((_, i) => (
              <button
                key={i}
                className={`carousel-dot${i === current ? ' active' : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
