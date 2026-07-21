'use client';
import React from 'react';

export default function SectionIntroNote() {
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
              A Note About Your Itinerary
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
            An Introductory Note
          </div>
        </div>
      </div>
      {/* Right Panel */}
      <div style={{ background: 'white' }}>
        <div className='section-header'>AN INTRODUCTORY NOTE</div>
        <div className='blocks-content'>
          <p style={{ marginBottom: '16px' }}>Dear West Family,</p>
          <p style={{ marginBottom: '24px' }}>
            We are thrilled to share this exciting, custom trip plan with you.
          </p>

          {[
            {
              title: 'First rate travel',
              desc: "We have custom planned thousands of trips - and no two are ever the same! We pride ourselves on listening to our clients' needs and desires and to meticulously designing an itinerary to exceed all of your expectations.",
            },
            {
              title: 'Handpicked properties',
              desc: "We've selected hotels just for you. Specifically, we have chosen properties that are kid friendly and centrally located. We have personally vetted every place you are going, every restaurant booking, every activity provider - so we know that this will be the trip of w lifetime for your family!",
            },
            {
              title: 'Custom planned activities',
              desc: "We've organized activities to make the most of your time in Italy, based on the information you shared with us.",
            },
          ]?.map((item, i) => (
            <div key={i} className='list-block-item'>
              <div className='list-block-title'>{item?.title}</div>
              <div className='list-block-desc'>{item?.desc}</div>
            </div>
          ))}

          <div style={{ marginTop: '24px', lineHeight: 1.6 }}>
            <p style={{ marginBottom: '12px' }}>
              This itinerary plan has been designed to give you a taste of some
              of the properties and experiences on offer, and to showcase what
              Modern Safari is capable of as itinerary builder software.
            </p>
            <p style={{ marginBottom: '12px' }}>
              This will be an epic adventure, designed especially for you. We
              hope you enjoy the proposal and we will look forward to your
              thoughts and feedback.
            </p>
            <p style={{ marginBottom: '12px' }}>
              <a
                href='https://www.safariportal.app/request-demo'
                target='_blank'
                rel='noopener noreferrer'
                style={{ color: '#65adff', textDecoration: 'underline' }}
              >
                If you are interested in booking a one on one call to learn more
                about how Modern Safari works, and also ask any questions you
                might have, please click here.
              </a>
            </p>
            <p style={{ marginBottom: '12px' }}>
              We would be happy to set up a 14 day free trial for you.
            </p>
            <p style={{ marginBottom: '4px' }}>Warmly,</p>
            <p>The Modern Safari team</p>
          </div>
        </div>
      </div>
    </div>
  );
}
