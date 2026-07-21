'use client';
import React from 'react';
import RightPage from '../RightPage';

export default function MapRightPage() {
  return (
    <RightPage padding='52px 48px 32px'>
      {/* Section header */}
      <div style={{ marginBottom: '24px' }}>
        <div
          style={{
            fontFamily: 'var(--font-hoefler)',
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            color: '#999',
            marginBottom: '4px',
          }}
        >
          Itinerary details
        </div>
        <div
          className='magazine-section-title'
          style={{ fontSize: '22px', marginBottom: '16px' }}
        >
          Map
        </div>
        <div className='magazine-divider' />
      </div>

      {/* Location */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '24px',
        }}
      >
        <svg
          width='16'
          height='20'
          viewBox='0 0 24 24'
          fill='none'
          stroke='#3f3c43'
          strokeWidth='1.5'
        >
          <path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z' />
          <circle cx='12' cy='10' r='3' />
        </svg>
        <span
          style={{
            fontFamily: 'var(--font-hoefler)',
            fontSize: '14px',
            color: '#3f3c43',
          }}
        >
          South Africa
        </span>
      </div>

      {/* Overview section */}
      <div style={{ marginBottom: '24px' }}>
        <div
          style={{
            fontFamily: 'var(--font-brandon)',
            fontWeight: 700,
            fontSize: '13px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            color: '#3f3c43',
            marginBottom: '12px',
          }}
        >
          Overview
        </div>
        <div className='magazine-divider' />
      </div>

      {/* Visualize journey */}
      <div style={{ marginBottom: '20px' }}>
        <div
          style={{
            fontFamily: 'var(--font-hoefler)',
            fontStyle: 'italic',
            fontSize: '16px',
            color: '#3f3c43',
            marginBottom: '16px',
          }}
        >
          Visualize your journey
        </div>

        {/* Map placeholder */}
        <div
          className='map-placeholder'
          style={{
            height: '280px',
            marginBottom: '16px',
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '4px',
          }}
        >
          <img
            src='https://itineraries.safariportal.app/api/assets/391899/full'
            alt='Map of South Africa'
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Key areas */}
        <div style={{ marginTop: '16px' }}>
          <div
            style={{
              fontFamily: 'var(--font-brandon)',
              fontWeight: 700,
              fontSize: '12px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              color: '#3f3c43',
              marginBottom: '8px',
            }}
          >
            Key Areas of Interest
          </div>
          <div
            style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}
          >
            <strong
              style={{
                fontFamily: 'var(--font-brandon)',
                fontSize: '13px',
                color: '#3f3c43',
              }}
            >
              1)
            </strong>
            <span
              style={{
                fontFamily: 'var(--font-hoefler)',
                fontSize: '13px',
                color: '#3f3c43',
              }}
            >
              Cape Town, South Africa
            </span>
          </div>
        </div>
      </div>
    </RightPage>
  );
}
