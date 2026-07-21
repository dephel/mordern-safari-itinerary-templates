import React from 'react';

interface FactBoxProps {
  icon?: string;
  label: string;
  value: string;
}

export function FactBox({ icon, label, value }: FactBoxProps) {
  return (
    <div className='fact-box'>
      {icon && <img src={icon} alt='fact image' className='fact-icon' />}
      <div>
        <span
          style={{
            fontFamily: 'var(--font-brandon)',
            fontWeight: 700,
            fontSize: '12px',
            textTransform: 'uppercase',
            letterSpacing: '0.3px',
            color: '#3f3c43',
          }}
        >
          {label}:{' '}
        </span>
        <span
          style={{
            fontFamily: 'var(--font-hoefler)',
            fontSize: '13px',
            color: '#3f3c43',
          }}
        >
          {value}
        </span>
      </div>
    </div>
  );
}

interface FactCardProps {
  icon?: string;
  title: string;
  children: React.ReactNode;
}

export function FactCard({ icon, title, children }: FactCardProps) {
  return (
    <div
      className='fact-box'
      style={{ alignItems: 'flex-start', padding: '10px 0' }}
    >
      {icon && (
        <img
          src={icon}
          alt='fact image'
          className='fact-icon'
          style={{ marginTop: '2px' }}
        />
      )}
      <div>
        <div
          style={{
            fontFamily: 'var(--font-brandon)',
            fontWeight: 700,
            fontSize: '12px',
            textTransform: 'uppercase',
            letterSpacing: '0.3px',
            color: '#3f3c43',
            marginBottom: '4px',
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontFamily: 'var(--font-hoefler)',
            fontSize: '13px',
            color: '#3f3c43',
            lineHeight: 1.6,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
