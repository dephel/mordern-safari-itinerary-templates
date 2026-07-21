'use client';
import React from 'react';
import RightPage from '../RightPage';

const planeIcon =
  'https://media.safariportal.app/store/asset/201766/file/618212971db3a85b227b4134d7b67941.png';
const clockIcon =
  'https://media.safariportal.app/store/asset/46785/file/2afb52d90405138ef6347f853d7b2829.png';
const carIcon =
  'https://media.safariportal.app/store/asset/305890/file/3455ac92d00a0fb11a778b94a92c5009.png';

export default function FlightsRightPage() {
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
          Itinerary details
        </div>
        <div
          className='magazine-section-title'
          style={{ fontSize: '22px', marginBottom: '16px' }}
        >
          How To Get Here
        </div>
        <div className='magazine-divider' />
      </div>

      {/* Flight Suggestions */}
      <div style={{ marginBottom: '20px' }}>
        <div className='magazine-heading' style={{ marginBottom: '16px' }}>
          Flight Suggestions
        </div>

        {/* New York */}
        <div
          style={{
            marginBottom: '16px',
            padding: '12px',
            background: '#f8f8f8',
            borderRadius: '4px',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-brandon)',
              fontWeight: 700,
              fontSize: '13px',
              textTransform: 'uppercase',
              letterSpacing: '0.3px',
              color: '#3f3c43',
              marginBottom: '8px',
            }}
          >
            New York To Cape Town
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div
              style={{
                fontFamily: 'var(--font-hoefler)',
                fontSize: '12px',
                color: '#3f3c43',
              }}
            >
              <span style={{ fontWeight: 700 }}>Airlines:</span> South African
              Airways, United Airlines, British Airways, American Airlines and
              KLM
            </div>
            <div
              style={{
                fontFamily: 'var(--font-hoefler)',
                fontSize: '12px',
                color: '#3f3c43',
              }}
            >
              <span style={{ fontWeight: 700 }}>Duration:</span> From 14h 45m
            </div>
          </div>
        </div>

        {/* London */}
        <div
          style={{
            marginBottom: '16px',
            padding: '12px',
            background: '#f8f8f8',
            borderRadius: '4px',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-brandon)',
              fontWeight: 700,
              fontSize: '13px',
              textTransform: 'uppercase',
              letterSpacing: '0.3px',
              color: '#3f3c43',
              marginBottom: '8px',
            }}
          >
            London To Cape Town
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div
              style={{
                fontFamily: 'var(--font-hoefler)',
                fontSize: '12px',
                color: '#3f3c43',
              }}
            >
              <span style={{ fontWeight: 700 }}>Airlines:</span> British
              Airways, Kenya Airways, KLM, Swiss Airways, Turkish Airlines,
              Ethiopian Airlines, Air France, Qatar, Emirates
            </div>
            <div
              style={{
                fontFamily: 'var(--font-hoefler)',
                fontSize: '12px',
                color: '#3f3c43',
              }}
            >
              <span style={{ fontWeight: 700 }}>Duration:</span> From 11.5 hours
            </div>
          </div>
        </div>

        {/* Netherlands */}
        <div
          style={{
            marginBottom: '16px',
            padding: '12px',
            background: '#f8f8f8',
            borderRadius: '4px',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-brandon)',
              fontWeight: 700,
              fontSize: '13px',
              textTransform: 'uppercase',
              letterSpacing: '0.3px',
              color: '#3f3c43',
              marginBottom: '8px',
            }}
          >
            Netherlands To Cape Town
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div
              style={{
                fontFamily: 'var(--font-hoefler)',
                fontSize: '12px',
                color: '#3f3c43',
              }}
            >
              <span style={{ fontWeight: 700 }}>Airlines:</span> KLM, Kenya
              Airways, Lufthansa, Qatar, Emirates, Turkish Airlines, Swiss
              Airways
            </div>
            <div
              style={{
                fontFamily: 'var(--font-hoefler)',
                fontSize: '12px',
                color: '#3f3c43',
              }}
            >
              <span style={{ fontWeight: 700 }}>Duration:</span> From 11 hours
            </div>
          </div>
        </div>

        {/* Getting Around */}
        <div
          style={{
            padding: '12px',
            background: '#f0ede8',
            borderRadius: '4px',
            borderLeft: '3px solid #8b7355',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-brandon)',
              fontWeight: 700,
              fontSize: '13px',
              textTransform: 'uppercase',
              letterSpacing: '0.3px',
              color: '#3f3c43',
              marginBottom: '8px',
            }}
          >
            Getting Around Cape Town
          </div>
          <div
            style={{
              fontFamily: 'var(--font-hoefler)',
              fontSize: '12px',
              color: '#3f3c43',
              lineHeight: 1.6,
            }}
          >
            The city center is reasonably compact and navigable on foot, but
            many highlights lie outside its limits. The best forms of transport
            are hire car, Uber, and MyCiTi buses.
          </div>
        </div>
      </div>
    </RightPage>
  );
}
