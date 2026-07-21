'use client';
import React, { useState } from 'react';

type TabType = 'overview' | 'flights' | 'accommodation';

const overviewRows = [
  {
    day: 'Day 1',
    dayName: 'Friday',
    date: 'July 19, 2024',
    activities: [
      {
        icon: 'plane',
        text: '4:40 PM - Flight DL 182 departs New York (John F. Kennedy International Airport)',
        hasMore: true,
      },
    ],
  },
  {
    day: 'Day 2',
    dayName: 'Saturday',
    date: 'July 20, 2024',
    activities: [
      {
        icon: 'plane',
        text: '7:30 AM - Flight DL 182 arrives Rome (Leonardo da Vinci-Fiumicino Airport)',
        hasMore: true,
      },
      {
        icon: 'car',
        text: '8:30 AM - Transfer departs Rome airport\n9:30 AM - Transfer arrives your hotel',
        hasMore: true,
      },
      {
        icon: 'hotel',
        text: '9:30 AM - Check In at Hotel Eden Rome, Dorchester Collection',
        hasMore: true,
      },
    ],
  },
  {
    day: 'Day 3',
    dayName: 'Sunday',
    date: 'July 21, 2024',
    activities: [
      {
        icon: 'activity',
        text: '9:00 AM - 12:00 PM \u00b7 Half Day Activity - Private Tour of the Vatican',
        hasMore: false,
      },
      {
        icon: 'restaurant',
        text: '7:30 PM \u00b7 Restaurant Reservation',
        hasMore: true,
      },
      {
        icon: 'hotel',
        text: 'Overnight at Hotel Eden Rome, Dorchester Collection',
        hasMore: false,
      },
    ],
  },
  {
    day: 'Day 4',
    dayName: 'Monday',
    date: 'July 22, 2024',
    activities: [
      {
        icon: 'activity',
        text: '10:00 AM \u00b7 Tour Of The Spanish Steps',
        hasMore: true,
      },
      {
        icon: 'activity',
        text: 'Full Day Activity - The day is yours!',
        hasMore: false,
      },
      {
        icon: 'hotel',
        text: 'Overnight at Hotel Eden Rome, Dorchester Collection',
        hasMore: false,
      },
    ],
  },
  {
    day: 'Day 5',
    dayName: 'Tuesday',
    date: 'July 23, 2024',
    activities: [
      {
        icon: 'hotel',
        text: '9:00 AM - Check Out from Hotel Eden Rome, Dorchester Collection',
        hasMore: false,
      },
      {
        icon: 'car',
        text: 'Transfer departs your hotel\nTransfer arrives the airport',
        hasMore: false,
      },
      {
        icon: 'plane',
        text: '9:50 PM - Flight AZ 1473 departs Rome\n10:55 PM - Flight AZ 1473 arrives Venice',
        hasMore: false,
      },
      {
        icon: 'car',
        text: 'Transfer departs airport\nTransfer arrives your hotel',
        hasMore: false,
      },
      { icon: 'hotel', text: '10:00 AM - Check In at Cipriani', hasMore: true },
      {
        icon: 'activity',
        text: '3:00 PM - 5:00 PM \u00b7 Half Day Activity - Gondola Ride In Venice',
        hasMore: false,
      },
      {
        icon: 'restaurant',
        text: '8:00 PM \u00b7 Dinner Reservation at Trattoria Antiche Carampane',
        hasMore: false,
      },
    ],
  },
  {
    day: 'Day 6',
    dayName: 'Wednesday',
    date: 'July 24, 2024',
    activities: [
      {
        icon: 'activity',
        text: 'Half Day Activity - Enjoy the Afternoon At Leisure',
        hasMore: false,
      },
      { icon: 'hotel', text: 'Overnight at Cipriani', hasMore: false },
    ],
  },
  {
    day: 'Day 7',
    dayName: 'Thursday',
    date: 'July 25, 2024',
    activities: [
      { icon: 'hotel', text: 'Check Out from Cipriani', hasMore: false },
      {
        icon: 'plane',
        text: '1:35 PM - Flight DL 289 departs Venice\n5:19 PM - Flight DL 289 arrives New York',
        hasMore: true,
      },
      {
        icon: 'car',
        text: '11:00 AM - Transfer departs Cipriani\n11:30 PM - Transfer arrives the airport',
        hasMore: true,
      },
    ],
  },
];

const flightRows = [
  {
    from: 'New York (JFK)',
    to: 'Rome (FCO)',
    date: 'July 19, 2024',
    time: '4:40 PM',
    flight: 'DL 182',
    airline: 'Delta Air Lines',
  },
  {
    from: 'Rome (FCO)',
    to: 'Venice (VCE)',
    date: 'July 23, 2024',
    time: '9:50 PM',
    flight: 'AZ 1473',
    airline: 'ITA Airways',
  },
  {
    from: 'Venice (VCE)',
    to: 'New York (JFK)',
    date: 'July 25, 2024',
    time: '1:35 PM',
    flight: 'DL 289',
    airline: 'Delta Air Lines',
  },
];

const accommodationRows = [
  {
    name: 'Hotel Eden Rome, Dorchester Collection',
    dates: 'July 20 - 23',
    nights: 3,
    room: 'Penthouse x 1 (Breakfast Included)',
  },
  {
    name: 'Cipriani',
    dates: 'July 23 - 25',
    nights: 2,
    room: 'Double Rooms x 2 (Breakfast Included)',
  },
];

function ActivityIcon({ type }: { type: string }) {
  const s = { width: 16, height: 16, flexShrink: 0 as const, marginTop: 2 };
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

export default function SectionTravelBrief() {
  const [activeTab, setActiveTab] = useState<TabType>('overview');

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '50% 50%',
        minHeight: '100vh',
      }}
    >
      {/* Left Panel - Sticky */}
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
            backgroundImage:
              'url(https://itineraries.safariportal.app/api/assets/74302/full)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
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
              Itinerary details
            </span>
          </div>
          <div
            style={{
              color: 'white',
              fontFamily: "'Raleway', sans-serif",
              fontSize: '46px',
              fontWeight: 600,
              lineHeight: 1.1,
            }}
          >
            Travel Brief
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div style={{ background: 'white' }}>
        <div className='section-header'>OVERVIEW</div>
        <div style={{ padding: '20px 24px' }}>
          {/* Sync to Calendar */}
          <div style={{ marginBottom: '16px' }}>
            <button
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'white',
                border: '1px solid #eeeeee',
                borderRadius: '20px',
                padding: '8px 16px',
                fontSize: '14px',
                color: '#3f3c43',
                cursor: 'pointer',
                fontFamily: "'EB Garamond', Georgia, serif",
              }}
            >
              <svg
                width='14'
                height='14'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='1.5'
              >
                <rect x='3' y='4' width='18' height='18' rx='2' ry='2' />
                <line x1='16' y1='2' x2='16' y2='6' />
                <line x1='8' y1='2' x2='8' y2='6' />
                <line x1='3' y1='10' x2='21' y2='10' />
              </svg>
              Sync to Calendar
            </button>
          </div>

          {/* Tabs */}
          <div
            style={{
              display: 'flex',
              borderBottom: '1px solid #eeeeee',
              marginBottom: '0',
            }}
          >
            {(['overview', 'flights', 'accommodation'] as TabType[]).map(
              (tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '10px 14px',
                    background: 'none',
                    border: 'none',
                    borderBottom:
                      activeTab === tab
                        ? '2px solid #3f3c43'
                        : '2px solid transparent',
                    cursor: 'pointer',
                    fontFamily: "'Raleway', sans-serif",
                    fontSize: '14px',
                    fontWeight: 500,
                    color: activeTab === tab ? '#212121' : '#616161',
                    textTransform: 'capitalize',
                    marginBottom: '-1px',
                  }}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              )
            )}
          </div>

          {/* Overview Table */}
          {activeTab === 'overview' && (
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th className='table-header' style={{ width: '28%' }}>
                    Day
                  </th>
                  <th className='table-header'>Activities</th>
                </tr>
              </thead>
              <tbody>
                {overviewRows.map((row, i) => (
                  <tr key={i}>
                    <td className='table-cell' style={{ width: '28%' }}>
                      <div
                        style={{
                          fontFamily: "'Raleway', sans-serif",
                          fontWeight: 600,
                          fontSize: '14px',
                        }}
                      >
                        {row.day}
                      </div>
                      <div style={{ color: '#757575', fontSize: '13px' }}>
                        <div>{row.dayName}</div>
                        <div>{row.date}</div>
                      </div>
                    </td>
                    <td
                      style={{
                        padding: 0,
                        borderBottom: '1px solid #eeeeee',
                        background: 'white',
                        verticalAlign: 'top',
                      }}
                    >
                      {row.activities.map((act, j) => (
                        <div
                          key={j}
                          style={{
                            padding: '8px 12px',
                            borderBottom:
                              j < row.activities.length - 1
                                ? '1px solid #f5f5f5'
                                : 'none',
                          }}
                        >
                          <div
                            style={{
                              display: 'flex',
                              gap: '8px',
                              alignItems: 'flex-start',
                            }}
                          >
                            <ActivityIcon type={act.icon} />
                            <div style={{ flex: 1 }}>
                              <div
                                style={{
                                  fontFamily: "'EB Garamond', Georgia, serif",
                                  fontSize: '13px',
                                  color: '#3f3c43',
                                  whiteSpace: 'pre-line',
                                  lineHeight: 1.4,
                                }}
                              >
                                {act.text}
                              </div>
                              {act.hasMore && (
                                <div
                                  className='more-details-btn'
                                  style={{ marginTop: '2px', fontSize: '12px' }}
                                >
                                  More Details
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {/* Flights Table */}
          {activeTab === 'flights' && (
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th className='table-header'>From</th>
                  <th className='table-header'>To</th>
                  <th className='table-header'>Date</th>
                  <th className='table-header'>Flight</th>
                </tr>
              </thead>
              <tbody>
                {flightRows.map((row, i) => (
                  <tr key={i}>
                    <td className='table-cell'>{row.from}</td>
                    <td className='table-cell'>{row.to}</td>
                    <td className='table-cell'>
                      {row.date}
                      <br />
                      <span style={{ color: '#757575', fontSize: '12px' }}>
                        {row.time}
                      </span>
                    </td>
                    <td className='table-cell'>
                      {row.flight}
                      <br />
                      <span style={{ color: '#757575', fontSize: '12px' }}>
                        {row.airline}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {/* Accommodation Table */}
          {activeTab === 'accommodation' && (
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th className='table-header'>Accommodation</th>
                  <th className='table-header'>Dates</th>
                  <th className='table-header'>Nights</th>
                </tr>
              </thead>
              <tbody>
                {accommodationRows.map((row, i) => (
                  <tr key={i}>
                    <td className='table-cell'>
                      {row.name}
                      <br />
                      <span
                        style={{
                          color: '#757575',
                          fontSize: '12px',
                          fontStyle: 'italic',
                        }}
                      >
                        {row.room}
                      </span>
                    </td>
                    <td className='table-cell'>{row.dates}</td>
                    <td className='table-cell'>{row.nights}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
