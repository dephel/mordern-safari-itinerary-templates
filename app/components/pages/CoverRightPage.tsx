'use client';
import React from 'react';
import RightPage from '../RightPage';

export default function CoverRightPage() {
  return (
    <RightPage padding='52px 48px 32px' scrollable={false}>
      {/* Header area */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '52px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          padding: '0 24px',
          zIndex: 10,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <img
            src='https://assets.safariportal.app/fa6995f0/static/media/safari_portal.8afb5d19.svg'
            alt='Safari Portal Logo'
            style={{ height: '24px', objectFit: 'contain' }}
          />

          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '4px',
                color: '#3f3c43',
              }}
            >
              <svg
                width='18'
                height='18'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='1.5'
              >
                <circle cx='18' cy='5' r='3' />
                <circle cx='6' cy='12' r='3' />
                <circle cx='18' cy='19' r='3' />
                <line x1='8.59' y1='13.51' x2='15.42' y2='17.49' />
                <line x1='15.41' y1='6.51' x2='8.59' y2='10.49' />
              </svg>
            </button>
            <button
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '4px',
                color: '#3f3c43',
              }}
            >
              <svg
                width='18'
                height='18'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='1.5'
              >
                <path d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z' />
                <polyline points='14 2 14 8 20 8' />
              </svg>
            </button>
            <button
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '4px',
                color: '#3f3c43',
              }}
            >
              <svg
                width='18'
                height='18'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='1.5'
              >
                <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z' />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Main content - centered */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          textAlign: 'center',
          paddingTop: '52px',
        }}
      >
        <div
          className='magazine-section-title'
          style={{ marginBottom: '12px', fontSize: '28px' }}
        >
          The Cape Town Collection
        </div>
        <div
          className='magazine-subtitle'
          style={{ fontSize: '14px', marginBottom: '40px' }}
        >
          A collection of suggestions
        </div>

        {/* Scroll indicator */}
        <div className='scroll-indicator' style={{ marginTop: '60px' }}>
          <svg
            width='15'
            height='36'
            viewBox='0 0 15 36'
            fill='currentColor'
            style={{ color: '#3f3c43' }}
          >
            <path
              d='M7.48657 34.3333L7.48657 1'
              stroke='#3f3c43'
              strokeWidth='1.33333'
              strokeMiterlimit='10'
              strokeLinecap='round'
              fill='none'
            />
            <path
              d='M13.98 28.0801L7.48665 34.5667L0.999981 28.0801'
              stroke='#3f3c43'
              strokeWidth='1.33333'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
              fill='none'
            />
          </svg>
        </div>
      </div>
    </RightPage>
  );
}
