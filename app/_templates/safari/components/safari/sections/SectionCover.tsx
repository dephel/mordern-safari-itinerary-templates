'use client';
import React from 'react';

export default function SectionCover() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '50% 50%',
        minHeight: '100vh',
      }}
    >
      {/* Left Panel - Sticky */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'url(https://itineraries.safariportal.app/api/assets/74302/full)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: '#dddbd d',
          }}
        />
        {/* Gradient overlay */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '55%',
            background:
              'linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 100%)',
          }}
        />
        {/* Headline */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '34px 37px',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span
              style={{
                display: 'inline-block',
                width: '24px',
                height: '2px',
                background: '#f7f31d',
                flexShrink: 0,
              }}
            />
            <span
              style={{
                color: 'white',
                fontFamily: "'EB Garamond', Georgia, serif",
                fontSize: '16px',
              }}
            >
              Prepared for The West Family
            </span>
          </div>
          <div
            style={{
              color: 'white',
              fontFamily: "'Raleway', sans-serif",
              fontSize: '46px',
              fontWeight: 600,
              lineHeight: 1.1,
            }}
          >
            The Best of Italy
          </div>
          <div
            style={{
              color: 'white',
              fontFamily: "'EB Garamond', Georgia, serif",
              fontSize: '16px',
            }}
          >
            July 2024
          </div>
        </div>
      </div>

      {/* Right Panel - Quote */}
      <div
        style={{
          background: 'white',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px 40px',
          position: 'relative',
          minHeight: '100vh',
        }}
      >
        <div style={{ maxWidth: '420px', textAlign: 'center' }}>
          <div
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: '28px',
              fontWeight: 900,
              textTransform: 'uppercase',
              color: '#3f3c43',
              lineHeight: 1.2,
              marginBottom: '24px',
              letterSpacing: '0.5px',
            }}
          >
            THE WORLD IS A BOOK AND THOSE WHO DO NOT TRAVEL READ ONLY ONE PAGE
          </div>
          <div
            style={{
              fontFamily: "'EB Garamond', Georgia, serif",
              fontSize: '16px',
              color: '#3f3c43',
            }}
          >
            - Saint Augustine
          </div>
        </div>

        {/* Scroll arrow */}
        <div className='scroll-arrow-bounce'>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='#3f3c43'
            strokeWidth='1.5'
          >
            <polyline points='6 9 12 15 18 9' />
          </svg>
        </div>
      </div>
    </div>
  );
}
