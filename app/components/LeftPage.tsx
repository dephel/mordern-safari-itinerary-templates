import React from 'react';

interface LeftPageProps {
  imageSrc: string;
  title?: string;
  subtitle?: string;
  labelTop?: string;
  labelMain?: string;
  children?: React.ReactNode;
  showTitle?: boolean;
}

export default function LeftPage({
  imageSrc,
  title,
  subtitle,
  labelTop,
  labelMain,
  children,
  showTitle = true,
}: LeftPageProps) {
  return (
    <div
      className='page-spine'
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        backgroundColor: '#1a1a1a',
      }}
    >
      {/* Background image */}
      <img
        src={imageSrc}
        alt={title || 'Page image'}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      />
      {/* Overlay */}
      <div className='left-page-overlay' />

      {/* Content */}
      {showTitle && title && (
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '32px 42px',
            zIndex: 2,
            background:
              'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)',
          }}
        >
          {labelTop && <div className='section-label-top'>{labelTop}</div>}
          {labelMain && <div className='section-label-main'>{labelMain}</div>}
          {!labelMain && (
            <h2
              className='magazine-title'
              style={{ fontSize: '60px', margin: 0 }}
            >
              {title}
            </h2>
          )}
          {subtitle && (
            <div
              style={{
                fontFamily: 'var(--font-hoefler)',
                fontSize: '13px',
                color: 'rgba(255,255,255,0.8)',
                marginTop: '6px',
              }}
            >
              {subtitle}
            </div>
          )}
        </div>
      )}

      {children}
    </div>
  );
}
