'use client';
import React, { useState } from 'react';
import ImageSlider from '../../../components/safari/ImageSlider';
import { Day } from '../../../data/itineraryData';

interface SectionDayProps {
  day: Day;
  dayNumber: number;
}

function ActivityIcon({ type }: { type: string }) {
  const s = { width: 18, height: 18, flexShrink: 0 as const };
  if (type === 'plane')
    return (
      <svg
        style={s}
        viewBox='0 0 24 24'
        fill='none'
        stroke='#3f3c43'
        strokeWidth='1.5'
      >
        <path d='M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z' />
      </svg>
    );
  if (type === 'car')
    return (
      <svg
        style={s}
        viewBox='0 0 24 24'
        fill='none'
        stroke='#3f3c43'
        strokeWidth='1.5'
      >
        <path d='M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v9a2 2 0 0 1-2 2h-2' />
        <circle cx='7.5' cy='17.5' r='2.5' />
        <circle cx='17.5' cy='17.5' r='2.5' />
      </svg>
    );
  if (type === 'hotel')
    return (
      <svg
        style={s}
        viewBox='0 0 24 24'
        fill='none'
        stroke='#3f3c43'
        strokeWidth='1.5'
      >
        <path d='M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' />
        <polyline points='9 22 9 12 15 12 15 22' />
      </svg>
    );
  if (type === 'restaurant')
    return (
      <svg
        style={s}
        viewBox='0 0 24 24'
        fill='none'
        stroke='#3f3c43'
        strokeWidth='1.5'
      >
        <path d='M18 8h1a4 4 0 0 1 0 8h-1' />
        <path d='M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z' />
        <line x1='6' y1='1' x2='6' y2='4' />
        <line x1='10' y1='1' x2='10' y2='4' />
        <line x1='14' y1='1' x2='14' y2='4' />
      </svg>
    );
  if (type === 'checkout')
    return (
      <svg
        style={s}
        viewBox='0 0 24 24'
        fill='none'
        stroke='#3f3c43'
        strokeWidth='1.5'
      >
        <path d='M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4' />
        <polyline points='16 17 21 12 16 7' />
        <line x1='21' y1='12' x2='9' y2='12' />
      </svg>
    );
  if (type === 'overnight')
    return (
      <svg
        style={s}
        viewBox='0 0 24 24'
        fill='none'
        stroke='#3f3c43'
        strokeWidth='1.5'
      >
        <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z' />
      </svg>
    );
  return (
    <svg
      style={s}
      viewBox='0 0 24 24'
      fill='none'
      stroke='#3f3c43'
      strokeWidth='1.5'
    >
      <circle cx='12' cy='12' r='10' />
      <polyline points='12 6 12 12 16 14' />
    </svg>
  );
}

function ActivityBlock({ activity }: { activity: Day['activities'][0] }) {
  const [expanded, setExpanded] = useState(false);

  const hasMoreDetails = !!(
    activity.moreDetails &&
    ((activity.moreDetails.items && activity.moreDetails.items.length > 0) ||
      (activity.moreDetails.images && activity.moreDetails.images.length > 0))
  );

  return (
    <div style={{ display: 'flex', gap: '14px', paddingBottom: '20px' }}>
      {/* Icon + line column */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          flexShrink: 0,
          width: '36px',
        }}
      >
        <div
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: '#f5f5f5',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <ActivityIcon type={activity.type} />
        </div>
        <div
          style={{
            width: '1px',
            flex: 1,
            background: '#eeeeee',
            marginTop: '4px',
            minHeight: '16px',
          }}
        />
      </div>

      {/* Content */}
      <div style={{ flex: 1, paddingTop: '6px', minWidth: 0 }}>
        {/* Title */}
        <div
          style={{
            fontFamily: "'EB Garamond', Georgia, serif",
            fontSize: '18px',
            fontWeight: 600,
            color: '#3f3c43',
            marginBottom: '8px',
            lineHeight: 1.3,
          }}
        >
          {activity.title}
        </div>

        {/* Checkpoints */}
        {activity.checkpoints && activity.checkpoints.length > 0 && (
          <div
            style={{
              background: '#f9f9f9',
              borderRadius: '4px',
              padding: '10px 14px',
              marginBottom: '8px',
              display: 'flex',
              flexDirection: 'column',
              gap: '3px',
            }}
          >
            {activity.checkpoints.map((cp, i) => (
              <div
                key={i}
                style={{
                  fontFamily: "'EB Garamond', Georgia, serif",
                  fontSize: '15px',
                  color: '#3f3c43',
                  lineHeight: 1.4,
                }}
              >
                {cp}
              </div>
            ))}
          </div>
        )}

        {/* Time (when no checkpoints) */}
        {activity.time && !activity.checkpoints && (
          <div
            style={{
              fontFamily: "'EB Garamond', Georgia, serif",
              fontSize: '15px',
              color: '#3f3c43',
              marginBottom: '6px',
            }}
          >
            {activity.time}
          </div>
        )}

        {/* Room type */}
        {activity.roomType && (
          <div
            style={{
              fontFamily: "'EB Garamond', Georgia, serif",
              fontSize: '15px',
              color: '#3f3c43',
              marginBottom: '4px',
            }}
          >
            {activity.roomType}
          </div>
        )}

        {/* Nights */}
        {activity.nights && (
          <div
            style={{
              fontFamily: "'EB Garamond', Georgia, serif",
              fontSize: '14px',
              color: '#757575',
              marginBottom: '4px',
            }}
          >
            {activity.nights} Nights
          </div>
        )}

        {/* Confirmation number */}
        {activity.confirmationNumber && (
          <div
            style={{
              fontFamily: "'EB Garamond', Georgia, serif",
              fontSize: '14px',
              color: '#757575',
              marginBottom: '4px',
            }}
          >
            Confirmation Number: {activity.confirmationNumber}
          </div>
        )}

        {/* Website */}
        {activity.website && (
          <div
            style={{
              fontFamily: "'EB Garamond', Georgia, serif",
              fontSize: '14px',
              color: '#3f3c43',
              marginBottom: '6px',
            }}
          >
            Website:{' '}
            <a
              href={activity.website}
              target='_blank'
              rel='noopener noreferrer'
              style={{ color: '#65adff' }}
            >
              {activity.website}
            </a>
          </div>
        )}

        {/* Details */}
        {activity.details && (
          <div
            style={{
              fontFamily: "'EB Garamond', Georgia, serif",
              fontSize: '15px',
              color: '#3f3c43',
              marginBottom: '6px',
            }}
          >
            {activity.details}
          </div>
        )}

        {/* Details2 */}
        {(activity as any).details2 && (
          <div
            style={{
              fontFamily: "'EB Garamond', Georgia, serif",
              fontSize: '15px',
              color: '#3f3c43',
              marginBottom: '8px',
            }}
          >
            {(activity as any).details2}
          </div>
        )}

        {/* More Details */}
        {hasMoreDetails && (
          <div>
            <button
              onClick={() => setExpanded(!expanded)}
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                color: '#65adff',
                fontSize: '14px',
                fontWeight: 600,
                fontFamily: "'EB Garamond', Georgia, serif",
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              {expanded ? 'Less Details' : 'More Details'}
              <svg
                width='12'
                height='12'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                style={{
                  transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s',
                }}
              >
                <polyline points='6 9 12 15 18 9' />
              </svg>
            </button>

            {expanded && activity.moreDetails && (
              <div
                style={{
                  marginTop: '12px',
                  padding: '16px',
                  background: '#fafafa',
                  borderRadius: '4px',
                  border: '1px solid #eeeeee',
                }}
              >
                {activity.moreDetails.overview && (
                  <div
                    style={{
                      fontFamily: "'Raleway', sans-serif",
                      fontSize: '15px',
                      fontWeight: 600,
                      color: '#3f3c43',
                      marginBottom: '10px',
                    }}
                  >
                    {activity.moreDetails.overview}
                  </div>
                )}

                {activity.moreDetails.items?.map((item, i) => (
                  <p
                    key={i}
                    style={{
                      fontFamily: "'EB Garamond', Georgia, serif",
                      fontSize: '15px',
                      color: '#3f3c43',
                      lineHeight: 1.6,
                      marginBottom: '10px',
                    }}
                  >
                    {item}
                  </p>
                ))}

                {activity.moreDetails.images &&
                  activity.moreDetails.images.length > 0 && (
                    <ImageSlider
                      images={activity.moreDetails.images}
                      height={200}
                    />
                  )}

                {(activity.moreDetails.highlights ||
                  activity.moreDetails.quickFacts) && (
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '16px',
                      marginTop: '12px',
                    }}
                  >
                    {activity.moreDetails.highlights && (
                      <div>
                        <div
                          style={{
                            fontFamily: "'Raleway', sans-serif",
                            fontSize: '13px',
                            fontWeight: 600,
                            color: '#3f3c43',
                            marginBottom: '8px',
                          }}
                        >
                          Highlights
                        </div>
                        <ul style={{ paddingLeft: '16px', margin: 0 }}>
                          {activity.moreDetails.highlights.map((h, i) => (
                            <li
                              key={i}
                              style={{
                                fontFamily: "'EB Garamond', Georgia, serif",
                                fontSize: '14px',
                                color: '#616161',
                                marginBottom: '4px',
                                lineHeight: 1.5,
                              }}
                            >
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {activity.moreDetails.quickFacts && (
                      <div>
                        <div
                          style={{
                            fontFamily: "'Raleway', sans-serif",
                            fontSize: '13px',
                            fontWeight: 600,
                            color: '#3f3c43',
                            marginBottom: '8px',
                          }}
                        >
                          Quick facts
                        </div>
                        <ul style={{ paddingLeft: '16px', margin: 0 }}>
                          {activity.moreDetails.quickFacts.map((f, i) => (
                            <li
                              key={i}
                              style={{
                                fontFamily: "'EB Garamond', Georgia, serif",
                                fontSize: '14px',
                                color: '#616161',
                                marginBottom: '4px',
                                lineHeight: 1.5,
                              }}
                            >
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {activity.moreDetails.accommodation && (
                  <div style={{ marginTop: '16px' }}>
                    <div
                      style={{
                        fontFamily: "'Raleway', sans-serif",
                        fontSize: '14px',
                        fontWeight: 600,
                        color: '#3f3c43',
                        marginBottom: '4px',
                      }}
                    >
                      Accommodations
                    </div>
                    <div
                      style={{
                        fontFamily: "'Raleway', sans-serif",
                        fontSize: '14px',
                        fontWeight: 600,
                        color: '#3f3c43',
                        marginBottom: '4px',
                      }}
                    >
                      {activity.moreDetails.accommodation.name}
                    </div>
                    <p
                      style={{
                        fontFamily: "'EB Garamond', Georgia, serif",
                        fontSize: '14px',
                        color: '#3f3c43',
                        lineHeight: 1.6,
                        marginBottom: '10px',
                      }}
                    >
                      {activity.moreDetails.accommodation.description}
                    </p>
                    {activity.moreDetails.accommodation.images && (
                      <ImageSlider
                        images={activity.moreDetails.accommodation.images}
                        height={160}
                      />
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function SectionDay({ day, dayNumber }: SectionDayProps) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '50% 50%',
        minHeight: '100vh',
      }}
    >
      {/* Left Panel - sticky */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${day.leftImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Gradient overlay */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '55%',
            background:
              'linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 100%)',
          }}
        />
        {/* Headline */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '34px 37px',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span
              style={{
                display: 'inline-block',
                width: '24px',
                height: '2px',
                background: '#f7f31d',
                flexShrink: 0,
              }}
            />
            <span
              style={{
                color: 'white',
                fontFamily: "'EB Garamond', Georgia, serif",
                fontSize: '16px',
              }}
            >
              {day.dayName} · {day.dateShort}
            </span>
          </div>
          <div
            style={{
              color: 'white',
              fontFamily: "'Raleway', sans-serif",
              fontSize: '40px',
              fontWeight: 600,
              lineHeight: 1.1,
            }}
          >
            Day {dayNumber}
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div style={{ background: 'white' }}>
        {/* Section Header */}
        <div
          style={{
            background: 'white',
            padding: '14px 16px',
            borderBottom: '1px solid #f5f5f5',
            position: 'sticky',
            top: 0,
            zIndex: 10,
          }}
        >
          <div
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: '16px',
              fontWeight: 900,
              textTransform: 'uppercase',
              color: '#3f3c43',
              letterSpacing: '0.4px',
            }}
          >
            DAY {dayNumber}
          </div>
          <div
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: '12px',
              fontWeight: 600,
              textTransform: 'uppercase',
              color: '#757575',
              letterSpacing: '0.5px',
              marginTop: '2px',
            }}
          >
            {day.dayName.toUpperCase()} · {day.dateShort.toUpperCase()}
          </div>
        </div>

        <div style={{ padding: '28px 48px 52px' }}>
          {day.activities.map((activity, i) => (
            <ActivityBlock key={i} activity={activity} />
          ))}
        </div>
      </div>
    </div>
  );
}
