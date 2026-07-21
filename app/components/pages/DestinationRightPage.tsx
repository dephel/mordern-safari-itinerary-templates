'use client';
import React from 'react';
import RightPage from '../RightPage';
import Carousel from '../Carousel';

const capeTownImages = [
  'https://media.safariportal.app/store/asset/214022/file/299190d657f6cf4b2f51193e1b3c3a7c.png',
  'https://media.safariportal.app/store/asset/317992/file/d9a5df740e41af2ba1986b328b9edaea.png',
  'https://itineraries.safariportal.app/api/assets/668/full',
  'https://itineraries.safariportal.app/api/assets/372177/full',
];

export default function DestinationRightPage() {
  return (
    <RightPage padding='52px 48px 32px'>
      {/* Section header */}
      <div style={{ marginBottom: '20px' }}>
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
          Destination Spotlight
        </div>
        <div
          className='magazine-section-title'
          style={{ fontSize: '22px', marginBottom: '4px' }}
        >
          Cape Town
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            marginBottom: '16px',
          }}
        >
          <svg
            width='12'
            height='16'
            viewBox='0 0 24 24'
            fill='none'
            stroke='#999'
            strokeWidth='1.5'
          >
            <path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z' />
            <circle cx='12' cy='10' r='3' />
          </svg>
          <span
            style={{
              fontFamily: 'var(--font-hoefler)',
              fontSize: '12px',
              color: '#999',
            }}
          >
            Cape Town, South Africa
          </span>
        </div>
        <div className='magazine-divider' />
      </div>

      {/* Area Overview */}
      <div style={{ marginBottom: '20px' }}>
        <div className='magazine-heading' style={{ marginBottom: '12px' }}>
          Area Overview
        </div>
        <p className='magazine-body' style={{ marginBottom: '16px' }}>
          Cape Town is a true fan favorite, with its exciting Mediterranean
          vibe, amazing culinary scene, beautiful Cape Dutch architecture,
          thriving art community, and successful sports teams – all set to the
          backdrop of iconic Table Mountain and the turbulent waters of the
          Atlantic Ocean. It is no wonder it is called The Mother City.
        </p>
        <p className='magazine-body' style={{ marginBottom: '16px' }}>
          This vibrant, trendy city has broad appeal. Local attractions include
          Table Mountain, Robben Island, the V&A Waterfront, Bo-Kaap, boutique
          shops, numerous museums, wineries, and world famous restaurants. For
          those venturing beyond the city, the Cape Winelands and Cape Peninsula
          are a day trip away.
        </p>
      </div>

      {/* Carousel */}
      <Carousel images={capeTownImages} height='200px' />

      <p className='magazine-body' style={{ marginTop: '16px' }}>
        Cape Town's rich cultural heritage dates back more than 300 years and
        its diversity is evident in the city's architecture, art, and food. It
        is the second most populous city in South Africa and sits at the
        southwest tip of Africa.
      </p>
    </RightPage>
  );
}
