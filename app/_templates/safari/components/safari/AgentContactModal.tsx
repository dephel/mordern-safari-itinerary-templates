'use client';
import React from 'react';

interface AgentContactModalProps {
  onClose: () => void;
}

export default function AgentContactModal({ onClose }: AgentContactModalProps) {
  return (
    <div className='agent-modal-backdrop' onClick={onClose}>
      <div
        className='agent-modal-content'
        onClick={(e) => e.stopPropagation()}
        style={{ fontFamily: "'EB Garamond', Georgia, serif" }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#000',
            padding: '4px',
          }}
          aria-label='Close modal'
        >
          <svg
            width='20'
            height='20'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
          >
            <line x1='18' y1='6' x2='6' y2='18' />
            <line x1='6' y1='6' x2='18' y2='18' />
          </svg>
        </button>

        <h4
          style={{
            fontFamily: "'Raleway', sans-serif",
            fontSize: '18px',
            fontWeight: 700,
            color: '#3f3c43',
            marginBottom: '16px',
          }}
        >
          Contact your Travel Consultant
        </h4>

        <div
          style={{ height: '1px', background: '#dfdfdf', marginBottom: '20px' }}
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div>
            <div
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: '18px',
                fontWeight: 500,
                color: '#3f3c43',
              }}
            >
              Rachel West
            </div>
            <div
              style={{
                fontFamily: "'EB Garamond', Georgia, serif",
                fontSize: '16px',
                color: '#3f3c43',
              }}
            >
              (Modern Safari)
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginTop: '12px',
            }}
          >
            <img
              src='https://assets.safariportal.app/fa6995f0/static/media/Email.516d453f.svg'
              alt='Email'
              style={{ width: '28px', height: '29px' }}
            />

            <div>
              <div
                style={{
                  fontFamily: "'EB Garamond', Georgia, serif",
                  fontSize: '14px',
                  color: '#757575',
                  fontWeight: 420,
                }}
              >
                Email
              </div>
              <a
                href='mailto:rachel@safariportal.app'
                style={{
                  fontFamily: "'EB Garamond', Georgia, serif",
                  fontSize: '16px',
                  fontWeight: 600,
                  color: '#3f3c43',
                  textDecoration: 'none',
                }}
              >
                rachel@safariportal.app
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
