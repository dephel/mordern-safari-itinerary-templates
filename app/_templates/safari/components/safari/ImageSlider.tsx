'use client';
import React, { useState } from 'react';

interface ImageSliderProps {
  images: string[];
  height?: number;
}

export default function ImageSlider({
  images,
  height = 280,
}: ImageSliderProps) {
  const [current, setCurrent] = useState(0);

  if (!images || images.length === 0) return null;

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  return (
    <div style={{ position: 'relative', width: '100%', marginBottom: '16px' }}>
      {/* Main Image */}
      <div
        style={{
          width: '100%',
          height: `${height}px`,
          overflow: 'hidden',
          background: '#f2f2f2',
          position: 'relative',
        }}
      >
        <img
          src={images[current]}
          alt={`Slide ${current + 1} of ${images.length}`}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </div>

      {/* Controls */}
      {images.length > 1 && (
        <>
          {/* Prev button */}
          <button
            onClick={prev}
            className='slider-control'
            style={{
              position: 'absolute',
              left: '8px',
              top: '50%',
              transform: 'translateY(-50%)',
            }}
            aria-label='Previous slide'
          >
            <svg
              width='16'
              height='16'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
            >
              <polyline points='15 18 9 12 15 6' />
            </svg>
          </button>

          {/* Next button */}
          <button
            onClick={next}
            className='slider-control'
            style={{
              position: 'absolute',
              right: '8px',
              top: '50%',
              transform: 'translateY(-50%)',
            }}
            aria-label='Next slide'
          >
            <svg
              width='16'
              height='16'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
            >
              <polyline points='9 18 15 12 9 6' />
            </svg>
          </button>

          {/* Dots */}
          <div
            style={{
              position: 'absolute',
              bottom: '10px',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: '6px',
              alignItems: 'center',
            }}
          >
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`paging-dot ${i === current ? 'active' : ''}`}
                aria-label={`Go to slide ${i + 1}`}
                style={{ border: 'none', padding: 0, cursor: 'pointer' }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
