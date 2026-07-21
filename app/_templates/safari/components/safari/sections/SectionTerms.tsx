'use client';
import React from 'react';

const loremIpsum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ex sed tortor tempus rhoncus ac ut felis. Sed porttitor eu dui sed egestas. Aliquam tempor, ligula consequat sodales blandit, neque sapien condimentum risus, non maximus augue nisl vitae nisl. Etiam volutpat, orci sed mollis scelerisque, erat purus malesuada lorem, nec semper ante sem a quam. Integer ligula odio, condimentum ut augue vitae, tempus fermentum libero.';

export default function SectionTerms() {
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
            Terms &amp; Conditions
          </div>
        </div>
      </div>
      {/* Right Panel */}
      <div style={{ background: 'white' }}>
        <div className='section-header'>TERMS &amp; CONDITIONS</div>
        <div className='blocks-content'>
          {[
            { title: 'Booking Terms', content: loremIpsum },
            { title: 'Payment Instructions', content: loremIpsum },
            { title: 'Risks', content: loremIpsum },
          ]?.map((section, i) => (
            <div key={i} style={{ marginBottom: '28px' }}>
              <div
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  fontSize: '16px',
                  fontWeight: 600,
                  color: '#3f3c43',
                  marginBottom: '10px',
                }}
              >
                {section?.title}
              </div>
              <p
                style={{
                  fontFamily: "'EB Garamond', Georgia, serif",
                  fontSize: '16px',
                  color: '#3f3c43',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {section?.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
