'use client';
import React, { useState } from 'react';

const preTravel = [
  {
    title: 'Passports & Visas',
    content:
      'Ensure all passports are valid for at least 6 months beyond your travel dates. EU citizens do not need a visa for Italy. US citizens can stay up to 90 days without a visa.',
  },
  {
    title: 'Health & Vaccines',
    content:
      'No specific vaccinations are required for Italy. Ensure routine vaccinations are up to date. Travel health insurance is recommended.',
  },
  {
    title: 'Cash & Cards',
    content:
      'Italy uses the Euro (€). Credit cards are widely accepted. It is advisable to carry some cash for smaller establishments and markets.',
  },
  {
    title: 'Suggested Packing List',
    content:
      'Comfortable walking shoes, light layers for summer evenings, sun protection, a small day bag, and a universal power adapter (Italy uses Type F/L plugs).',
  },
  {
    title: 'Gratuities',
    content:
      'Tipping is not mandatory in Italy but is appreciated. A 10% tip at restaurants is customary. Round up taxi fares. Hotel porters typically receive €1-2 per bag.',
  },
  {
    title: 'Travel Insurance',
    content:
      'We strongly recommend comprehensive travel insurance covering medical emergencies, trip cancellation, and lost luggage.',
  },
  {
    title: 'Suggested Reading List',
    content:
      'Under the Tuscan Sun by Frances Mayes, The Agony and the Ecstasy by Irving Stone, Italian Ways by Tim Parks.',
  },
  {
    title: 'Social Media',
    content:
      'Share your Italian adventure! Tag us @safariportal and use #BestOfItaly to connect with fellow travelers.',
  },
];

export default function SectionPreTravel() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
              'url(https://itineraries.safariportal.app/api/assets/343735/full)',
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
              Prepare For Your Trip
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
            Prepare For Your Trip
          </div>
        </div>
      </div>
      {/* Right Panel */}
      <div style={{ background: 'white' }}>
        <div className='section-header'>IMPORTANT INFORMATION</div>
        <div className='blocks-content'>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {preTravel?.map((item, i) => (
              <div key={i} className='accordion-item'>
                <div
                  className='accordion-head'
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <span className='accordion-title'>{item?.title}</span>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='#3f3c43'
                    strokeWidth='1.5'
                    style={{
                      transform:
                        openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s',
                      flexShrink: 0,
                    }}
                  >
                    <polyline points='6 9 12 15 18 9' />
                  </svg>
                </div>
                {openIndex === i && (
                  <div
                    style={{
                      padding: '0 20px 16px',
                      fontFamily: "'EB Garamond', Georgia, serif",
                      fontSize: '16px',
                      color: '#3f3c43',
                      lineHeight: 1.6,
                    }}
                  >
                    {item?.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
