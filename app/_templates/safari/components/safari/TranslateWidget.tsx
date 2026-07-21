'use client';
import React, { useState } from 'react';

export default function TranslateWidget() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        background: 'white',
        borderTop: '1px solid #eeeeee',
        zIndex: 100,
        fontFamily: "'EB Garamond', Georgia, serif",
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '8px 16px',
        }}
      >
        {/* Globe icon */}
        <button
          onClick={() => setExpanded(!expanded)}
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: '#c4c4c4',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
          aria-label='Translate'
        >
          <svg
            width='18'
            height='18'
            viewBox='0 0 24 24'
            fill='none'
            stroke='white'
            strokeWidth='1.5'
          >
            <circle cx='12' cy='12' r='10' />
            <line x1='2' y1='12' x2='22' y2='12' />
            <path d='M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z' />
          </svg>
        </button>

        <span
          style={{ fontSize: '14px', color: '#3f3c43', cursor: 'pointer' }}
          onClick={() => setExpanded(!expanded)}
        >
          Need help translating? Click me!
        </span>

        {expanded && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginLeft: 'auto',
            }}
          >
            <div
              style={{
                border: '1px solid #cccccc',
                borderRadius: '4px',
                padding: '6px 12px',
                fontSize: '14px',
                color: '#c4c4c4',
                minWidth: '160px',
                background: 'white',
              }}
            >
              Select...
            </div>
            <button
              style={{
                background: '#e0e0e0',
                color: '#8c9196',
                border: 'none',
                borderRadius: '4px',
                padding: '8px 16px',
                fontSize: '14px',
                cursor: 'not-allowed',
              }}
              disabled
            >
              Translate
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
