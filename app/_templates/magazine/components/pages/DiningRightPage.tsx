'use client';
import React from 'react';
import RightPage from '../RightPage';

interface Restaurant {
  number: string;
  name: string;
  location: string;
  foodType: string;
  hours: string;
  website?: string;
  bookUrl?: string;
  note?: string;
}

const restaurants: Restaurant[] = [
  {
    number: '1',
    name: "Chef's Warehouse, Beau Constantia",
    location: 'Constantia Nek',
    foodType:
      "Freshly harvested produce from the farm's gardens and added an inspired injection of global flavours.",
    hours: 'Monday – Saturday, 12pm – 8.30pm; Sunday, 12pm – 2pm',
    website: 'https://www.chefswarehouse.co.za/beau-constantia',
  },
  {
    number: '2',
    name: 'Pier',
    location: 'V&A Waterfront',
    foodType: 'Molecular gastronomy and classic French technique',
    hours: 'Monday – Sunday, 12pm – 3pm; 6.30pm – late',
    website: 'https://pier.restaurant/food',
  },
  {
    number: '3',
    name: 'Fyn',
    location: 'Church Square',
    foodType: 'African-inspired with an overarching Japanese aesthetic',
    hours: 'Monday – Saturday, 12pm – 2pm; 6pm – 8.30 pm',
    website: 'https://fynrestaurant.com/',
  },
  {
    number: '4',
    name: 'ëlgr',
    location: 'Kloof Street',
    foodType: 'Globally inspired shared-plates',
    hours: 'Tuesday – Friday, 5pm – 11pm',
    website: 'https://elgr.co.za/',
  },
  {
    number: '5',
    name: 'Salsify',
    location: 'Camps Bay',
    foodType: 'Seasonally driven, locally conscious fine-dining menu.',
    hours:
      'Tuesday – Saturday, 12.30pm – 2.30pm; 6pm – 8.30pm; Sunday, 12.30pm – 3pm',
    website: 'https://salsify.co.za/',
    bookUrl: 'https://account.dineplan.com/widgetframe/m0w4SxVp?partner=10',
  },
  {
    number: '6',
    name: 'Ramenhead',
    location: "Speaker's Corner",
    foodType: 'Japanese',
    hours: 'Tuesday – Saturday, 12pm – 3pm; 6pm – 10pm',
    website: 'https://www.ramenhead.co.za/',
    note: 'No booking and no cash venue',
  },
];

export default function DiningRightPage() {
  return (
    <RightPage padding='52px 48px 32px'>
      {/* Section header */}
      <div style={{ marginBottom: '20px' }}>
        <div
          style={{
            fontFamily: 'var(--font-hoefler)',
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            color: '#999',
            marginBottom: '4px',
          }}
        >
          Itinerary details
        </div>
        <div
          className='magazine-section-title'
          style={{ fontSize: '22px', marginBottom: '16px' }}
        >
          Dinner At Leisure
        </div>
        <div className='magazine-divider' />
      </div>

      <p className='magazine-body' style={{ marginBottom: '20px' }}>
        Amidst Cape Town's vibrant and eclectic culinary landscape, where
        flavors from around the world converge, we have chosen six exceptional
        restaurants that will tantalize the taste buds and captivate diners with
        their extraordinary creations.
      </p>

      {/* Restaurant grid */}
      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}
      >
        {restaurants.map((r) => (
          <div
            key={r.number}
            style={{
              padding: '14px',
              background: '#f8f8f8',
              borderRadius: '4px',
              borderTop: '2px solid #8b7355',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-brandon)',
                fontWeight: 700,
                fontSize: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.3px',
                color: '#3f3c43',
                marginBottom: '8px',
              }}
            >
              {r.number}. {r.name}
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                marginBottom: '8px',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-hoefler)',
                  fontSize: '11px',
                  color: '#3f3c43',
                }}
              >
                <span style={{ fontWeight: 700 }}>Location:</span> {r.location}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-hoefler)',
                  fontSize: '11px',
                  color: '#3f3c43',
                }}
              >
                <span style={{ fontWeight: 700 }}>Type:</span> {r.foodType}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-hoefler)',
                  fontSize: '11px',
                  color: '#3f3c43',
                }}
              >
                <span style={{ fontWeight: 700 }}>Hours:</span> {r.hours}
              </div>
              {r.note && (
                <div
                  style={{
                    fontFamily: 'var(--font-hoefler)',
                    fontSize: '11px',
                    color: '#8b7355',
                    fontStyle: 'italic',
                  }}
                >
                  {r.note}
                </div>
              )}
            </div>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              {r.bookUrl && (
                <a
                  href={r.bookUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='restaurant-link'
                >
                  Book here
                </a>
              )}
              {r.website && (
                <a
                  href={r.website}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='restaurant-link'
                >
                  Website
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </RightPage>
  );
}
