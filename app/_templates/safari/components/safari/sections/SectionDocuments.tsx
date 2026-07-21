'use client';
import React from 'react';

export default function SectionDocuments() {
  const documents = [
    {
      name: 'Eticket',
      url: 'https://itineraries.safariportal.app/api/assets/509416/full',
    },
    {
      name: 'Checklist',
      url: 'https://itineraries.safariportal.app/api/assets/509411/full',
    },
    {
      name: 'Packing List',
      url: 'https://itineraries.safariportal.app/api/assets/509417/full',
    },
  ];

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
              'url(https://itineraries.safariportal.app/api/assets/162600/full)',
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
              Itinerary Details
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
            Your Travel Documents
          </div>
        </div>
      </div>
      {/* Right Panel */}
      <div style={{ background: 'white' }}>
        <div className='section-header'>DOCUMENTS</div>
        <div className='blocks-content'>
          <div
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: '16px',
              fontWeight: 600,
              color: '#3f3c43',
              marginBottom: '16px',
            }}
          >
            PDF Documents
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {documents?.map((doc, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 16px',
                  border: '1px solid #eeeeee',
                  borderRadius: '4px',
                }}
              >
                <a
                  href={doc?.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{
                    fontFamily: "'EB Garamond', Georgia, serif",
                    fontSize: '16px',
                    color: '#65adff',
                    textDecoration: 'none',
                  }}
                >
                  {doc?.name}
                </a>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: '#c4c4c4',
                      padding: '4px',
                    }}
                    aria-label='Preview'
                  >
                    <svg
                      width='18'
                      height='18'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='1.5'
                    >
                      <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z' />
                      <circle cx='12' cy='12' r='3' />
                    </svg>
                  </button>
                  <button
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: '#c4c4c4',
                      padding: '4px',
                    }}
                    aria-label='Download'
                  >
                    <svg
                      width='18'
                      height='18'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='1.5'
                    >
                      <path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' />
                      <polyline points='7 10 12 15 17 10' />
                      <line x1='12' y1='15' x2='12' y2='3' />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
