'use client';
import React from 'react';

interface Section {
  id: string;
  label: string;
  date?: string;
}

interface NavigationMenuProps {
  open: boolean;
  onClose: () => void;
  sections: Section[];
  activeSection: number;
  onSectionClick: (index: number) => void;
}

export default function NavigationMenu({
  open,
  onClose,
  sections,
  activeSection,
  onSectionClick,
}: NavigationMenuProps) {
  return (
    <>
      {/* Backdrop */}
      {open && <div className='nav-backdrop' onClick={onClose} />}

      {/* Navigation Panel */}
      <div
        className={`nav-container ${open ? 'open' : ''}`}
        style={{ fontFamily: "'Raleway', sans-serif" }}
      >
        {/* Header */}
        <div
          className='flex items-center justify-between px-6 py-5'
          style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}
        >
          <span
            style={{
              color: 'white',
              fontFamily: "'Raleway', sans-serif",
              fontSize: '24px',
              fontWeight: 800,
            }}
          >
            The Best of Italy
          </span>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'white',
              padding: '4px',
            }}
            aria-label='Close navigation'
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
        </div>

        {/* Navigation Links */}
        <nav>
          {sections.map((section, i) => (
            <div
              key={section.id}
              className='nav-link'
              onClick={() => onSectionClick(i)}
              style={{
                background:
                  activeSection === i
                    ? 'rgba(255,255,255,0.08)'
                    : 'transparent',
              }}
            >
              <div style={{ flex: 1 }}>
                <div
                  style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                  {activeSection === i && (
                    <div
                      style={{
                        width: '3px',
                        height: '16px',
                        background: 'white',
                        borderRadius: '2px',
                        flexShrink: 0,
                      }}
                    />
                  )}
                  <span>{section.label}</span>
                </div>
                {section.date && (
                  <div
                    className='nav-link-dates'
                    style={{ paddingLeft: activeSection === i ? '11px' : '0' }}
                  >
                    {section.date}
                  </div>
                )}
              </div>
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}
