'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import LeftPage from './LeftPage';
import CoverRightPage from './pages/CoverRightPage';
import MapRightPage from './pages/MapRightPage';
import DestinationRightPage from './pages/DestinationRightPage';
import FlightsRightPage from './pages/FlightsRightPage';
import AccommodationRightPage from './pages/AccommodationRightPage';
import ActivitiesRightPage from './pages/ActivitiesRightPage';
import DiningRightPage from './pages/DiningRightPage';
import PreTravelRightPage from './pages/PreTravelRightPage';

interface PageSpreadMeta {
  id: number;
  leftImage: string;
  leftTitle: string;
  leftLabelTop?: string;
  leftLabelMain?: string;
  leftSubtitle?: string;
  pageNumber: number;
}

const PAGE_SPREADS: PageSpreadMeta[] = [
  {
    id: 0,
    leftImage: 'https://itineraries.safariportal.app/api/assets/683/full',
    leftTitle: 'The Best Of The Cape',
    pageNumber: 1,
  },
  {
    id: 1,
    leftImage: 'https://itineraries.safariportal.app/api/assets/391899/full',
    leftTitle: 'Map',
    leftLabelTop: 'Itinerary details',
    leftLabelMain: 'Map',
    leftSubtitle: 'South Africa',
    pageNumber: 3,
  },
  {
    id: 2,
    leftImage: 'https://itineraries.safariportal.app/api/assets/668/full',
    leftTitle: 'Cape Town',
    leftLabelTop: 'Destination Spotlight',
    leftLabelMain: 'Cape Town',
    leftSubtitle: 'Cape Town, South Africa',
    pageNumber: 5,
  },
  {
    id: 3,
    leftImage: 'https://itineraries.safariportal.app/api/assets/372177/full',
    leftTitle: 'How To Get Here',
    leftLabelTop: 'Itinerary details',
    leftLabelMain: 'How To Get Here',
    pageNumber: 7,
  },
  {
    id: 4,
    leftImage: 'https://itineraries.safariportal.app/api/assets/9857/full',
    leftTitle: 'Where to Stay',
    leftLabelTop: 'Itinerary details',
    leftLabelMain: 'Where to Stay',
    pageNumber: 9,
  },
  {
    id: 5,
    leftImage: 'https://itineraries.safariportal.app/api/assets/350372/full',
    leftTitle: 'Things To Do',
    leftLabelTop: 'Itinerary details',
    leftLabelMain: 'Things To Do',
    pageNumber: 11,
  },
  {
    id: 6,
    leftImage: 'https://itineraries.safariportal.app/api/assets/231117/full',
    leftTitle: 'Where to Eat',
    leftLabelTop: 'Itinerary details',
    leftLabelMain: 'Where to Eat',
    pageNumber: 13,
  },
  {
    id: 7,
    leftImage: 'https://itineraries.safariportal.app/api/assets/393973/full',
    leftTitle: 'Pre Travel Information',
    leftLabelTop: 'Prepare for your trip',
    leftLabelMain: 'Pre Travel Information',
    pageNumber: 15,
  },
];

function getRightContent(index: number): React.ReactNode {
  switch (index) {
    case 0:
      return <CoverRightPage />;
    case 1:
      return <MapRightPage />;
    case 2:
      return <DestinationRightPage />;
    case 3:
      return <FlightsRightPage />;
    case 4:
      return <AccommodationRightPage />;
    case 5:
      return <ActivitiesRightPage />;
    case 6:
      return <DiningRightPage />;
    case 7:
      return <PreTravelRightPage />;
    default:
      return null;
  }
}

const TOTAL_PAGES = PAGE_SPREADS.length;

export default function BookMagazine() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [flipDirection, setFlipDirection] = useState<
    'forward' | 'backward' | null
  >(null);
  const [animatingPage, setAnimatingPage] = useState<number | null>(null);
  const [bookSize, setBookSize] = useState({ width: 1280, height: 720 });
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollAccumRef = useRef(0);
  const lastScrollTimeRef = useRef(0);
  const touchStartYRef = useRef(0);
  const touchStartXRef = useRef(0);

  // Responsive sizing
  useEffect(() => {
    const updateSize = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const maxW = Math.min(vw * 0.96, 1280);
      const maxH = Math.min(vh * 0.92, 720);
      const ratio = 16 / 9;
      let w = maxW;
      let h = w / ratio;
      if (h > maxH) {
        h = maxH;
        w = h * ratio;
      }
      setBookSize({ width: Math.floor(w), height: Math.floor(h) });
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const goToPage = useCallback(
    (direction: 'forward' | 'backward') => {
      if (isAnimating) return;
      if (direction === 'forward' && currentPage >= TOTAL_PAGES - 1) return;
      if (direction === 'backward' && currentPage <= 0) return;

      setIsAnimating(true);
      setFlipDirection(direction);
      setAnimatingPage(currentPage);

      setTimeout(() => {
        setCurrentPage((prev) =>
          direction === 'forward' ? prev + 1 : prev - 1
        );
        setIsAnimating(false);
        setFlipDirection(null);
        setAnimatingPage(null);
        scrollAccumRef.current = 0;
      }, 800);
    },
    [isAnimating, currentPage]
  );

  // Wheel handler
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const now = Date.now();
      if (now - lastScrollTimeRef.current < 100) return;

      scrollAccumRef.current += e.deltaY;

      if (Math.abs(scrollAccumRef.current) > 80) {
        const direction = scrollAccumRef.current > 0 ? 'forward' : 'backward';
        scrollAccumRef.current = 0;
        lastScrollTimeRef.current = now;
        goToPage(direction);
      }
    };

    const el = containerRef.current;
    if (el) {
      el.addEventListener('wheel', handleWheel, { passive: false });
    }
    return () => {
      if (el) el.removeEventListener('wheel', handleWheel);
    };
  }, [goToPage]);

  // Touch handler
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartYRef.current = e.touches[0].clientY;
      touchStartXRef.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const deltaY = touchStartYRef.current - e.changedTouches[0].clientY;
      const deltaX = touchStartXRef.current - e.changedTouches[0].clientX;
      const absDeltaY = Math.abs(deltaY);
      const absDeltaX = Math.abs(deltaX);

      if (absDeltaY > 40 || absDeltaX > 40) {
        if (absDeltaY > absDeltaX) {
          goToPage(deltaY > 0 ? 'forward' : 'backward');
        } else {
          goToPage(deltaX > 0 ? 'forward' : 'backward');
        }
      }
    };

    const el = containerRef.current;
    if (el) {
      el.addEventListener('touchstart', handleTouchStart, { passive: true });
      el.addEventListener('touchend', handleTouchEnd, { passive: true });
    }
    return () => {
      if (el) {
        el.removeEventListener('touchstart', handleTouchStart);
        el.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [goToPage]);

  // Keyboard handler
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (
        e.key === 'ArrowDown' ||
        e.key === 'ArrowRight' ||
        e.key === 'PageDown'
      ) {
        goToPage('forward');
      } else if (
        e.key === 'ArrowUp' ||
        e.key === 'ArrowLeft' ||
        e.key === 'PageUp'
      ) {
        goToPage('backward');
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [goToPage]);

  const pageW = bookSize.width / 2;
  const pageH = bookSize.height;

  const currentSpread = PAGE_SPREADS[currentPage];
  const prevSpread = currentPage > 0 ? PAGE_SPREADS[currentPage - 1] : null;

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background:
          'linear-gradient(135deg, #1a1a1a 0%, #2c2c2c 50%, #1a1a1a 100%)',
        overflow: 'hidden',
        position: 'relative',
      }}
      ref={containerRef}
    >
      {/* Background texture */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle at 20% 50%, rgba(139,115,85,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(139,115,85,0.08) 0%, transparent 50%)',
          pointerEvents: 'none',
        }}
      />

      {/* Book container */}
      <div
        className='book-scene'
        style={{
          width: `${bookSize.width}px`,
          height: `${pageH}px`,
          position: 'relative',
        }}
      >
        {/* Book shadow */}
        <div
          style={{
            position: 'absolute',
            bottom: '-20px',
            left: '5%',
            right: '5%',
            height: '40px',
            background: 'rgba(0,0,0,0.5)',
            filter: 'blur(20px)',
            borderRadius: '50%',
            zIndex: 0,
          }}
        />

        {/* Main book */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            display: 'flex',
            boxShadow:
              '0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05)',
            zIndex: 1,
          }}
        >
          {/* Spine */}
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: '4px',
              transform: 'translateX(-50%)',
              background:
                'linear-gradient(to right, rgba(0,0,0,0.4), rgba(0,0,0,0.1), rgba(0,0,0,0.4))',
              zIndex: 20,
              pointerEvents: 'none',
            }}
          />

          {/* Left page (current) */}
          <div
            style={{
              width: `${pageW}px`,
              height: `${pageH}px`,
              position: 'relative',
              overflow: 'hidden',
              flexShrink: 0,
            }}
          >
            <LeftPage
              imageSrc={currentSpread.leftImage}
              title={currentSpread.leftTitle}
              labelTop={currentSpread.leftLabelTop}
              labelMain={currentSpread.leftLabelMain}
              subtitle={currentSpread.leftSubtitle}
            />
          </div>

          {/* Right page (current) */}
          <div
            style={{
              width: `${pageW}px`,
              height: `${pageH}px`,
              position: 'relative',
              overflow: 'hidden',
              flexShrink: 0,
            }}
          >
            {getRightContent(currentPage)}
          </div>

          {/* Flip animation overlay - forward (left page flips) */}
          {isAnimating &&
            flipDirection === 'forward' &&
            animatingPage !== null && (
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: `${pageW}px`,
                  height: `${pageH}px`,
                  transformOrigin: 'right center',
                  transformStyle: 'preserve-3d',
                  animation:
                    'bookFlipForwardLeft 0.8s cubic-bezier(0.645, 0.045, 0.355, 1.000) forwards',
                  zIndex: 15,
                  overflow: 'hidden',
                  pointerEvents: 'none',
                }}
              >
                <LeftPage
                  imageSrc={PAGE_SPREADS[animatingPage].leftImage}
                  title={PAGE_SPREADS[animatingPage].leftTitle}
                  labelTop={PAGE_SPREADS[animatingPage].leftLabelTop}
                  labelMain={PAGE_SPREADS[animatingPage].leftLabelMain}
                  subtitle={PAGE_SPREADS[animatingPage].leftSubtitle}
                />
              </div>
            )}

          {/* Flip animation overlay - forward (right page flips) */}
          {isAnimating &&
            flipDirection === 'forward' &&
            animatingPage !== null && (
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: `${pageW}px`,
                  width: `${pageW}px`,
                  height: `${pageH}px`,
                  transformOrigin: 'left center',
                  transformStyle: 'preserve-3d',
                  animation:
                    'bookFlipForwardRight 0.8s cubic-bezier(0.645, 0.045, 0.355, 1.000) forwards',
                  zIndex: 15,
                  overflow: 'hidden',
                  pointerEvents: 'none',
                }}
              >
                {getRightContent(animatingPage)}
              </div>
            )}

          {/* Flip animation overlay - backward */}
          {isAnimating &&
            flipDirection === 'backward' &&
            animatingPage !== null &&
            prevSpread && (
              <>
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: `${pageW}px`,
                    height: `${pageH}px`,
                    transformOrigin: 'right center',
                    transformStyle: 'preserve-3d',
                    animation:
                      'bookFlipBackwardLeft 0.8s cubic-bezier(0.645, 0.045, 0.355, 1.000) forwards',
                    zIndex: 15,
                    overflow: 'hidden',
                    pointerEvents: 'none',
                  }}
                >
                  <LeftPage
                    imageSrc={prevSpread.leftImage}
                    title={prevSpread.leftTitle}
                    labelTop={prevSpread.leftLabelTop}
                    labelMain={prevSpread.leftLabelMain}
                    subtitle={prevSpread.leftSubtitle}
                  />
                </div>
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: `${pageW}px`,
                    width: `${pageW}px`,
                    height: `${pageH}px`,
                    transformOrigin: 'left center',
                    transformStyle: 'preserve-3d',
                    animation:
                      'bookFlipBackwardRight 0.8s cubic-bezier(0.645, 0.045, 0.355, 1.000) forwards',
                    zIndex: 15,
                    overflow: 'hidden',
                    pointerEvents: 'none',
                  }}
                >
                  {getRightContent(animatingPage - 1)}
                </div>
              </>
            )}
        </div>

        {/* Page dots navigation */}
        <div
          style={{
            position: 'absolute',
            bottom: '-36px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          {PAGE_SPREADS.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (!isAnimating && i !== currentPage) {
                  setCurrentPage(i);
                }
              }}
              style={{
                width: i === currentPage ? '20px' : '6px',
                height: '6px',
                borderRadius: '3px',
                background:
                  i === currentPage
                    ? 'rgba(255,255,255,0.8)'
                    : 'rgba(255,255,255,0.3)',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                transition: 'all 0.3s',
              }}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>

        {/* Page number display */}
        <div
          style={{
            position: 'absolute',
            bottom: '-56px',
            left: '50%',
            transform: 'translateX(-50%)',
            color: 'rgba(255,255,255,0.4)',
            fontFamily: 'var(--font-hoefler)',
            fontSize: '11px',
            letterSpacing: '1px',
            whiteSpace: 'nowrap',
          }}
        >
          {currentSpread.pageNumber} /{' '}
          {PAGE_SPREADS[TOTAL_PAGES - 1].pageNumber + 1}
        </div>
      </div>

      {/* Navigation buttons */}
      {currentPage > 0 && (
        <button
          className='book-nav-btn'
          style={{ left: '16px' }}
          onClick={() => goToPage('backward')}
          aria-label='Previous page'
        >
          <svg
            width='20'
            height='20'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
          >
            <polyline points='15 18 9 12 15 6' />
          </svg>
        </button>
      )}
      {currentPage < TOTAL_PAGES - 1 && (
        <button
          className='book-nav-btn'
          style={{ right: '16px' }}
          onClick={() => goToPage('forward')}
          aria-label='Next page'
        >
          <svg
            width='20'
            height='20'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
          >
            <polyline points='9 18 15 12 9 6' />
          </svg>
        </button>
      )}

      {/* Scroll hint on first page */}
      {currentPage === 0 && (
        <div
          style={{
            position: 'absolute',
            bottom: '16px',
            left: '50%',
            transform: 'translateX(-50%)',
            color: 'rgba(255,255,255,0.45)',
            fontFamily: 'var(--font-hoefler)',
            fontSize: '10px',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '6px',
            pointerEvents: 'none',
          }}
        >
          <span>Scroll to turn pages</span>
          <div className='scroll-indicator'>
            <svg width='12' height='18' viewBox='0 0 12 18' fill='none'>
              <path
                d='M6 1v16M1 12l5 5 5-5'
                stroke='rgba(255,255,255,0.45)'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
        </div>
      )}

      <style>{`
        @keyframes bookFlipForwardLeft {
          0% { transform: rotateY(0deg); }
          40% { transform: rotateY(-90deg); box-shadow: 15px 0 40px rgba(0,0,0,0.5); }
          100% { transform: rotateY(-180deg); }
        }
        @keyframes bookFlipForwardRight {
          0% { transform: rotateY(0deg); }
          40% { transform: rotateY(90deg); box-shadow: -15px 0 40px rgba(0,0,0,0.5); }
          100% { transform: rotateY(180deg); }
        }
        @keyframes bookFlipBackwardLeft {
          0% { transform: rotateY(-180deg); }
          60% { transform: rotateY(-90deg); box-shadow: 15px 0 40px rgba(0,0,0,0.5); }
          100% { transform: rotateY(0deg); }
        }
        @keyframes bookFlipBackwardRight {
          0% { transform: rotateY(180deg); }
          60% { transform: rotateY(90deg); box-shadow: -15px 0 40px rgba(0,0,0,0.5); }
          100% { transform: rotateY(0deg); }
        }
      `}</style>
    </div>
  );
}
