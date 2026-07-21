'use client';
import React from 'react';

export default function SectionCosts() {
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
              'url(https://itineraries.safariportal.app/api/assets/75163/full)',
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
              The fine print
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
            Costs
          </div>
        </div>
      </div>
      {/* Right Panel */}
      <div style={{ background: 'white' }}>
        <div className='section-header'>COSTS</div>
        <div className='blocks-content'>
          <div
            style={{
              marginBottom: '20px',
              fontFamily: "'EB Garamond', Georgia, serif",
              fontSize: '16px',
              color: '#3f3c43',
            }}
          >
            <div style={{ fontWeight: 600, marginBottom: '8px' }}>
              Total per person based on 2 guests in shared accommodation: $500
            </div>
            <div style={{ color: '#616161', fontSize: '15px' }}>
              <div>Shannon &amp; Anthony - double room</div>
              <div>Catherine &amp; Chris - twin room</div>
            </div>
          </div>
          <div
            style={{
              marginBottom: '20px',
              fontFamily: "'EB Garamond', Georgia, serif",
              fontSize: '16px',
              color: '#3f3c43',
            }}
          >
            <div style={{ fontWeight: 700, marginBottom: '6px' }}>Notes:</div>
            <div>Optional extension to Positano is $500 per person.</div>
          </div>
          <div
            style={{
              marginBottom: '20px',
              fontFamily: "'EB Garamond', Georgia, serif",
              fontSize: '16px',
              color: '#3f3c43',
            }}
          >
            <div style={{ fontWeight: 700, marginBottom: '8px' }}>
              This cost includes:
            </div>
            <ul style={{ paddingLeft: '20px', margin: 0 }}>
              {[
                'All your drinks',
                'All your accommodation',
                'All activities as described in the itinerary',
              ]?.map((item, i) => (
                <li key={i} style={{ marginBottom: '4px', lineHeight: 1.6 }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div
            style={{
              fontFamily: "'EB Garamond', Georgia, serif",
              fontSize: '16px',
              color: '#3f3c43',
            }}
          >
            <div style={{ fontWeight: 700, marginBottom: '8px' }}>
              This cost does not include:
            </div>
            <div>International flights</div>
          </div>
        </div>
      </div>
    </div>
  );
}
