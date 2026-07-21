import React from 'react';

interface RightPageProps {
  children: React.ReactNode;
  backgroundColor?: string;
  padding?: string;
  scrollable?: boolean;
}

export default function RightPage({
  children,
  backgroundColor = '#ffffff',
  padding = '52px 48px 32px',
  scrollable = true,
}: RightPageProps) {
  return (
    <div
      className={
        scrollable ? 'right-page-scroll page-spine-left' : 'page-spine-left'
      }
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundColor,
        padding,
        overflowY: scrollable ? 'auto' : 'hidden',
        overflowX: 'hidden',
      }}
    >
      {children}
    </div>
  );
}
