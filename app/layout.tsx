import type { Metadata, Viewport } from 'next';
import React from 'react';
// import '../styles/index.css';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'The Best Of The Cape - Safari Portal',
  description: 'The Cape Town Collection - A collection of suggestions',
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Raleway:wght@400;600;700;800;900&display=swap'
          rel='stylesheet'
        />

        <script
          type='module'
          async
          src='https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fcapebook2475back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.19'
        />
        <script
          type='module'
          defer
          src='https://static.rocket.new/rocket-shot.js?v=0.0.2'
        />
      </head>
      <body
        style={{
          margin: 0,
          padding: 0,
          overflow: 'hidden',
          background: '#1a1a1a',
        }}
      >
        {children}
      </body>
    </html>
  );
}
