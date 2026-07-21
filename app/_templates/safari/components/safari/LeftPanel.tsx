'use client';
import React from 'react';

interface LeftPanelProps {
  image: string;
  subheadline?: string;
  headline: string;
  date?: string;
}

export default function LeftPanel({
  image,
  subheadline,
  headline,
  date,
}: LeftPanelProps) {
  return (
    <div
      style={{
        position: 'sticky',
        top: 0,
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      {/* Background Image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#dddbd d',
        }}
      />

      {/* Gradient overlay */}
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

      {/* Headline Group */}
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
        {subheadline && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: 'white',
              fontFamily: "'EB Garamond', Georgia, serif",
              fontSize: '16px',
              lineHeight: 1.45,
            }}
          >
            <span
              style={{
                display: 'inline-block',
                width: '24px',
                height: '2px',
                background: '#f7f31d',
                flexShrink: 0,
              }}
            />
            <span>{subheadline}</span>
          </div>
        )}
        <div
          style={{
            color: 'white',
            fontFamily: "'Raleway', sans-serif",
            fontSize: '46px',
            fontWeight: 600,
            lineHeight: 1.1,
          }}
        >
          {headline}
        </div>
        {date && (
          <div
            style={{
              color: 'white',
              fontFamily: "'EB Garamond', Georgia, serif",
              fontSize: '16px',
            }}
          >
            {date}
          </div>
        )}
      </div>
    </div>
  );
}
