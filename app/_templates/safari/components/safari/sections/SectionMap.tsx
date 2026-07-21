'use client';
import React from 'react';

export default function SectionMap() {
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
              'url(https://itineraries.safariportal.app/api/assets/75162/full)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
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
              Itinerary details
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
            Map
          </div>
        </div>
      </div>
      {/* Right Panel */}
      <div style={{ background: 'white' }}>
        <div className='section-header'>MAP</div>
        <div className='blocks-content'>
          {/* Map placeholder */}
          <div
            style={{
              background: '#f3f3f3',
              height: '320px',
              borderRadius: '4px',
              marginBottom: '24px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <svg
              viewBox='0 0 500 320'
              width='100%'
              height='100%'
              style={{ position: 'absolute', inset: 0 }}
            >
              <rect width='500' height='320' fill='#e8f4f8' />
              {/* Water/sea */}
              <rect x='0' y='0' width='500' height='320' fill='#c8e6f5' />
              {/* Italy land mass simplified */}
              <path
                d='M 200 30 L 230 25 L 260 35 L 275 60 L 270 90 L 285 120 L 295 155 L 290 185 L 280 210 L 265 235 L 248 258 L 230 275 L 210 265 L 198 248 L 188 228 L 180 205 L 175 178 L 170 150 L 172 120 L 178 90 L 185 62 Z'
                fill='#c8d8a0'
                stroke='#a0b870'
                strokeWidth='1.5'
              />
              {/* Northern Italy */}
              <path
                d='M 160 50 L 200 30 L 260 35 L 290 50 L 310 70 L 300 85 L 285 80 L 270 90 L 255 75 L 230 65 L 200 70 L 178 90 L 165 80 Z'
                fill='#c8d8a0'
                stroke='#a0b870'
                strokeWidth='1'
              />
              {/* Sicily */}
              <ellipse
                cx='230'
                cy='295'
                rx='22'
                ry='14'
                fill='#c8d8a0'
                stroke='#a0b870'
                strokeWidth='1'
              />
              {/* Rome marker */}
              <circle cx='225' cy='175' r='10' fill='#e74c3c' opacity='0.9' />
              <circle cx='225' cy='175' r='5' fill='white' opacity='0.9' />
              <text
                x='240'
                y='179'
                fontSize='13'
                fill='#333'
                fontFamily='sans-serif'
                fontWeight='600'
              >
                Rome
              </text>
              {/* Venice marker */}
              <circle cx='248' cy='88' r='10' fill='#e74c3c' opacity='0.9' />
              <circle cx='248' cy='88' r='5' fill='white' opacity='0.9' />
              <text
                x='263'
                y='92'
                fontSize='13'
                fill='#333'
                fontFamily='sans-serif'
                fontWeight='600'
              >
                Venice
              </text>
              {/* Route line */}
              <line
                x1='225'
                y1='175'
                x2='248'
                y2='88'
                stroke='#e74c3c'
                strokeWidth='2'
                strokeDasharray='5,4'
                opacity='0.7'
              />
              {/* New York marker (off to the left) */}
              <circle cx='50' cy='100' r='8' fill='#3498db' opacity='0.9' />
              <circle cx='50' cy='100' r='4' fill='white' opacity='0.9' />
              <text
                x='62'
                y='104'
                fontSize='11'
                fill='#333'
                fontFamily='sans-serif'
              >
                New York
              </text>
              {/* Flight path */}
              <path
                d='M 58 100 Q 140 60 225 175'
                stroke='#3498db'
                strokeWidth='1.5'
                strokeDasharray='6,4'
                fill='none'
                opacity='0.5'
              />
            </svg>
          </div>

          {/* Key Dates */}
          <div
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: '13px',
              fontWeight: 700,
              color: '#3f3c43',
              marginBottom: '12px',
            }}
          >
            Key Dates
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              { num: '1)', dates: 'July 20 - 23:', place: 'Hotel Eden, Rome' },
              { num: '2)', dates: 'July 23 - 25:', place: 'Cipriani, Venice' },
            ]?.map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: "'EB Garamond', Georgia, serif",
                  fontSize: '16px',
                  color: '#3f3c43',
                }}
              >
                <strong
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                    fontWeight: 700,
                  }}
                >
                  {item?.num}
                </strong>
                <span>{item?.dates}</span>
                <span>{item?.place}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
