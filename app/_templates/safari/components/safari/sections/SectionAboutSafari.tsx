'use client';
import React from 'react';

export default function SectionAboutSafari() {
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
              'url(https://itineraries.safariportal.app/api/assets/549478/full)',
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
              Who we are
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
            About Modern Safari
          </div>
        </div>
      </div>
      {/* Right Panel */}
      <div style={{ background: 'white' }}>
        <div className='section-header'>THE Modern Safari TEAM</div>
        <div className='blocks-content'>
          <p
            style={{
              marginBottom: '16px',
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 600,
              fontSize: '16px',
            }}
          >
            Who we are &amp; Why we do what we do
          </p>
          <p style={{ marginBottom: '12px' }}>
            Modern Safari is an itinerary builder which, in just minutes, allows
            travel advisors, DMCs, &amp; tour operators around the world to
            create beautifully designed itineraries and content.
          </p>
          <p style={{ marginBottom: '24px' }}>
            Don&apos;t let our name fool you - Modern Safari is <em>not</em>{' '}
            just for Africa - you can create itineraries and proposals for
            anywhere in the world!
          </p>
          <p
            style={{
              marginBottom: '8px',
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 600,
            }}
          >
            Our Team
          </p>
          <p style={{ marginBottom: '24px' }}>
            Proudly small but mighty, our team collectively represents over 100
            years of experience in sales, marketing, operations, and account
            management in the luxury travel industry. We are here because we
            couldn&apos;t imagine being anywhere else. Bringing a level of
            sophistication, beauty, and simplicity to our beloved travel
            industry is what excites us the most ✨
          </p>
          <p
            style={{
              marginBottom: '16px',
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 600,
            }}
          >
            Some Key Features of the Platform
          </p>

          {[
            {
              title: 'Get Your Time Back',
              desc: "Our goal is to empower you to create stunning itineraries with a fraction of the time & effort. Though we've simplified the process, our platform ensures that your personal touch, which we know is integral to your travel spirit, is easily maintained.",
            },
            {
              title: 'Curated Worldwide Imagery',
              desc: "We've created the first-ever comprehensive, ever-growing, hand-picked collection of gorgeous professional photos of all the major destinations across the world. Our Media Library helps you put travel's best foot forward (plus, amazing images go a long way in selling high-end travel).",
            },
            {
              title: 'Ultra-personalized Proposals',
              desc: 'With beautiful and completely customizable itineraries, your best vision of travel is easily communicated, while elevating your individual brand and, most importantly, getting people excited to travel. Showcase your own expertise & personality with ease and style!',
            },
            {
              title: 'Traveler-facing App + Mobile Friendly Platform',
              desc: "Travel Portal, our amazing and easy-to-use app, keeps itineraries and travel details at your guests' fingertips, and all itineraries and proposals are mobile friendly - both to view and create!",
            },
            {
              title: 'Super Committed Support Team',
              desc: 'Our team is committed to continuously responding to your needs, listening to your feedback, and pushing the envelope in terms of response time & thoroughness.',
            },
          ]?.map((f, i) => (
            <div key={i} className='list-block-item'>
              <div className='list-block-title'>{f?.title}</div>
              <div className='list-block-desc'>{f?.desc}</div>
            </div>
          ))}

          <div style={{ marginTop: '24px', lineHeight: 1.6 }}>
            <p>We hope you will join us on this journey!</p>
            <p>Yours in travel,</p>
            <p>The Modern Safari team</p>
          </div>
        </div>
      </div>
    </div>
  );
}
