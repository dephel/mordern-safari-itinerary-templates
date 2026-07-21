'use client';
import React from 'react';
import Link from 'next/link';
import { TEMPLATES } from './_templates';

export default function Home() {
  return (
    <div
      style={{
        width: '100vw',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2c2c2c 50%, #1a1a1a 100%)',
        color: '#fff',
        padding: '48px 24px',
        overflowY: 'auto',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1
          style={{
            fontSize: 'clamp(28px, 5vw, 48px)',
            fontWeight: 700,
            marginBottom: '12px',
            fontFamily: 'var(--font-hoefler), Georgia, serif',
          }}
        >
          Itinerary Templates
        </h1>
        <p
          style={{
            fontSize: '16px',
            color: 'rgba(255,255,255,0.6)',
            marginBottom: '40px',
            maxWidth: '600px',
          }}
        >
          Choose a template below to preview it. Add new templates by creating a folder in{' '}
          <code style={{ color: '#f7f31d' }}>app/_templates</code> and registering it in{' '}
          <code style={{ color: '#f7f31d' }}>app/_templates/index.ts</code>.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {TEMPLATES.map((template) => (
            <Link
              key={template.id}
              href={`/templates/${template.id}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '12px',
                padding: '24px',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'transform 0.2s, box-shadow 0.2s, background 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.4)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
              }}
            >
              <div
                style={{
                  width: '100%',
                  aspectRatio: '16/9',
                  background: 'rgba(0,0,0,0.3)',
                  borderRadius: '8px',
                  marginBottom: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '40px',
                }}
              >
                {template.id === 'safari' ? '🦁' : '📖'}
              </div>
              <h2
                style={{
                  fontSize: '20px',
                  fontWeight: 600,
                  marginBottom: '8px',
                  fontFamily: 'var(--font-brandon), sans-serif',
                }}
              >
                {template.title}
              </h2>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>
                {template.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
