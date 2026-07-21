'use client';
import React from 'react';

interface HeaderProps {
  onBurgerClick: () => void;
  onAgentClick: () => void;
}

export default function Header({ onBurgerClick, onAgentClick }: HeaderProps) {
  return (
    <div
      className='flex items-center justify-between px-4 bg-white'
      style={{
        height: '52px',
        borderBottom: '1px solid #f5f5f5',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        width: '100%',
      }}
    >
      {/* Left: Burger Menu */}
      <div className='flex items-center' style={{ width: '50%' }}>
        <button
          onClick={onBurgerClick}
          className='flex items-center justify-center rounded'
          style={{
            width: '36px',
            height: '36px',
            background: '#eeeeee',
            border: 'none',
            cursor: 'pointer',
            flexShrink: 0,
          }}
          aria-label='Open navigation menu'
        >
          <svg width='18' height='14' viewBox='0 0 18 14' fill='none'>
            <rect y='0' width='18' height='2' rx='1' fill='#3f3c43' />
            <rect y='6' width='18' height='2' rx='1' fill='#3f3c43' />
            <rect y='12' width='18' height='2' rx='1' fill='#3f3c43' />
          </svg>
        </button>
      </div>

      {/* Center: Logo */}
      <div
        className='flex items-center justify-center'
        style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <img
          src='https://media.safariportal.app/store/account/logo/4296/logo/8cd769c0a8fc20756517945807ca078f.png'
          alt='logo'
          style={{ height: '28px', width: 'auto', objectFit: 'contain' }}
        />
      </div>

      {/* Right: Action Icons */}
      <div className='flex items-center gap-3' style={{ marginLeft: 'auto' }}>
        {/* Share icon */}
        <button
          className='flex items-center justify-center'
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#3f3c43',
            padding: '4px',
          }}
          aria-label='Share'
        >
          <svg
            width='20'
            height='20'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='1.5'
          >
            <circle cx='18' cy='5' r='3' />
            <circle cx='6' cy='12' r='3' />
            <circle cx='18' cy='19' r='3' />
            <line x1='8.59' y1='13.51' x2='15.42' y2='17.49' />
            <line x1='15.41' y1='6.51' x2='8.59' y2='10.49' />
          </svg>
        </button>
        {/* Download icon */}
        <button
          className='flex items-center justify-center'
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#3f3c43',
            padding: '4px',
          }}
          aria-label='Download PDF'
        >
          <svg
            width='20'
            height='20'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='1.5'
          >
            <path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' />
            <polyline points='7 10 12 15 17 10' />
            <line x1='12' y1='15' x2='12' y2='3' />
          </svg>
        </button>
        {/* Phone/Contact icon */}
        <button
          onClick={onAgentClick}
          className='flex items-center justify-center'
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#3f3c43',
            padding: '4px',
          }}
          aria-label='Contact agent'
        >
          <svg
            width='20'
            height='20'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='1.5'
          >
            <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.81a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z' />
          </svg>
        </button>
      </div>
    </div>
  );
}
