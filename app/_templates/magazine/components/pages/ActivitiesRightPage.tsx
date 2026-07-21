'use client';
import React from 'react';
import RightPage from '../RightPage';
import Carousel from '../Carousel';

const tableMtnImages = [
  'https://media.safariportal.app/store/asset/214022/file/299190d657f6cf4b2f51193e1b3c3a7c.png',
  'https://media.safariportal.app/store/asset/317992/file/d9a5df740e41af2ba1986b328b9edaea.png',
  'https://itineraries.safariportal.app/api/assets/350372/full',
  'https://itineraries.safariportal.app/api/assets/668/full',
];

const boKaapImages = [
  'https://media.safariportal.app/store/asset/46781/file/9afbcb9ac9472dd5d58589ed19887408.png',
  'https://media.safariportal.app/store/asset/46790/file/241ea00a650ecf15ff6a6883a4e344b9.png',
  'https://media.safariportal.app/store/asset/46782/file/cb56c53872ceeb019d5bbb740b2098ba.png',
  'https://media.safariportal.app/store/asset/362471/file/5512fa92f46cbd288553707ccd02577c.png',
];

const peninsulaImages = [
  'https://media.safariportal.app/store/asset/305890/file/3455ac92d00a0fb11a778b94a92c5009.png',
  'https://media.safariportal.app/store/asset/55518/file/aa305bbf35e04fc7a1be7e13e22e352c.png',
  'https://itineraries.safariportal.app/api/assets/231117/full',
  'https://itineraries.safariportal.app/api/assets/393973/full',
];

export default function ActivitiesRightPage() {
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
          Things To Do
        </div>
        <div className='magazine-divider' />
      </div>
      {/* Intro */}
      <div style={{ marginBottom: '20px' }}>
        <div className='magazine-heading' style={{ marginBottom: '12px' }}>
          Our Top 3 Recommended Activities
        </div>
        <div
          style={{
            padding: '10px 12px',
            background: '#f0ede8',
            borderRadius: '4px',
            marginBottom: '16px',
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
              marginBottom: '4px',
            }}
          >
            Activity Options
          </div>
          <div
            style={{
              fontFamily: 'var(--font-hoefler)',
              fontSize: '12px',
              color: '#3f3c43',
              fontStyle: 'italic',
            }}
          >
            These are three of our favourite activities to do in the Mother
            City:
          </div>
        </div>
      </div>
      {/* Activity 1 */}
      <div
        style={{
          marginBottom: '24px',
          paddingBottom: '24px',
          borderBottom: '1px solid #dfdfdf',
        }}
      >
        <div className='activity-title' style={{ marginBottom: '8px' }}>
          1. Cape Town Urban &amp; Table Mountain Exploration
        </div>
        <div
          style={{
            fontFamily: 'var(--font-hoefler)',
            fontStyle: 'italic',
            fontSize: '12px',
            color: '#8b7355',
            marginBottom: '8px',
          }}
        >
          Escape + Explore
        </div>
        <p
          style={{
            fontFamily: 'var(--font-hoefler)',
            fontSize: '12px',
            color: '#3f3c43',
            lineHeight: 1.6,
            marginBottom: '12px',
          }}
        >
          Explore Cape Town via its inspirational people making a difference in
          people's lives, meet inspiring township artists along the way and
          exploring the meaning behind the art works, that in itself unravels
          the history of Cape Town and South Africa.
        </p>

        {/* General overview */}
        <div
          style={{
            background: '#f8f8f8',
            padding: '12px',
            borderRadius: '4px',
            marginBottom: '12px',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-brandon)',
              fontWeight: 700,
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              color: '#3f3c43',
              marginBottom: '8px',
            }}
          >
            General Overview
          </div>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
            {[
              'Explore Table Mountain the Easy Way - Via Return Cable Car',
              'Explore - Urban City Bowl History',
              'Explore - Urban Exploring the Colourful Streets of Bo Kaap',
              'Lunch – Local Lunch, Bree Street',
              'Bike - Cycle Between Art Installations on the Sea Point Promenade',
              'Explore – Township inspired designs at the Watershed Market',
              'Early Evening Sundowners - Secret Gin Bar',
            ]?.map((item, i) => (
              <li
                key={i}
                style={{
                  fontFamily: 'var(--font-hoefler)',
                  fontSize: '11px',
                  color: '#3f3c43',
                  lineHeight: 1.7,
                }}
              >
                • {item}
              </li>
            ))}
          </ul>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '8px',
            marginBottom: '12px',
          }}
        >
          <div
            style={{
              padding: '8px',
              background: '#f8f8f8',
              borderRadius: '4px',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-brandon)',
                fontWeight: 700,
                fontSize: '10px',
                textTransform: 'uppercase',
                letterSpacing: '0.3px',
                color: '#3f3c43',
                marginBottom: '4px',
              }}
            >
              Flexibility
            </div>
            <div
              style={{
                fontFamily: 'var(--font-hoefler)',
                fontSize: '10px',
                color: '#3f3c43',
                lineHeight: 1.5,
              }}
            >
              Adaptable on an hour to hour basis to suit your needs.
            </div>
          </div>
          <div
            style={{
              padding: '8px',
              background: '#f8f8f8',
              borderRadius: '4px',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-brandon)',
                fontWeight: 700,
                fontSize: '10px',
                textTransform: 'uppercase',
                letterSpacing: '0.3px',
                color: '#3f3c43',
                marginBottom: '4px',
              }}
            >
              AUV
            </div>
            <div
              style={{
                fontFamily: 'var(--font-hoefler)',
                fontSize: '10px',
                color: '#3f3c43',
                lineHeight: 1.5,
              }}
            >
              Equipped with paddles, bikes, hiking packs, surfboards and gourmet
              pantry.
            </div>
          </div>
          <div
            style={{
              padding: '8px',
              background: '#f8f8f8',
              borderRadius: '4px',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-brandon)',
                fontWeight: 700,
                fontSize: '10px',
                textTransform: 'uppercase',
                letterSpacing: '0.3px',
                color: '#3f3c43',
                marginBottom: '4px',
              }}
            >
              Guides
            </div>
            <div
              style={{
                fontFamily: 'var(--font-hoefler)',
                fontSize: '10px',
                color: '#3f3c43',
                lineHeight: 1.5,
              }}
            >
              Viewed as the best in Africa in their specialist fields.
            </div>
          </div>
        </div>

        <Carousel images={tableMtnImages} height='160px' />

        <p
          style={{
            fontFamily: 'var(--font-hoefler)',
            fontSize: '12px',
            color: '#3f3c43',
            lineHeight: 1.6,
            marginTop: '12px',
          }}
        >
          Your morning begins early as you make your way up to the top of the
          Iconic Table Mountain. Your ascending cable car reveals increasingly
          breath-taking views over the city and an endless sea until you stand
          atop iconic Table Mountain.
        </p>
      </div>
      {/* Activity 2 */}
      <div
        style={{
          marginBottom: '24px',
          paddingBottom: '24px',
          borderBottom: '1px solid #dfdfdf',
        }}
      >
        <div className='activity-title' style={{ marginBottom: '8px' }}>
          2. Cape Peninsula Wet &amp; Wild Adventure
        </div>
        <div
          style={{
            fontFamily: 'var(--font-hoefler)',
            fontStyle: 'italic',
            fontSize: '12px',
            color: '#8b7355',
            marginBottom: '8px',
          }}
        >
          Escape + Explore
        </div>
        <p
          style={{
            fontFamily: 'var(--font-hoefler)',
            fontSize: '12px',
            color: '#3f3c43',
            lineHeight: 1.6,
            marginBottom: '12px',
          }}
        >
          The aim of the day is to explore the highlights of the Cape Peninsula
          in a unique way off the beaten path, looking for any excuse to embrace
          the ocean and explore one of the most unique marine habitats in the
          world.
        </p>
        <Carousel images={boKaapImages} height='160px' />
        <p
          style={{
            fontFamily: 'var(--font-hoefler)',
            fontSize: '12px',
            color: '#3f3c43',
            lineHeight: 1.6,
            marginTop: '12px',
          }}
        >
          Accompanied by your private specialist guide and specially equipped
          Adventure Utility Vehicle (AUV), you will make your way along the
          stunning Cape Peninsula to the False Bay coastline. You will start the
          day by heading towards the Surfers Mecca beach of Muizenberg, before
          stopping in the bohemian feel Kalk Bay.
        </p>
        <p
          style={{
            fontFamily: 'var(--font-hoefler)',
            fontSize: '12px',
            color: '#3f3c43',
            lineHeight: 1.6,
            marginTop: '8px',
          }}
        >
          From here, you will be taken along the coast towards Simon's Town,
          where you will search for a special group of rogue penguins. You will
          then continue on to the Cape of Good Hope, enjoying a gentle hike
          exploring secluded beaches, shipwrecks and this region's unique
          wildlife while on the hunt for the Cape 5.
        </p>
      </div>
      {/* Activity 3 */}
      <div style={{ marginBottom: '24px' }}>
        <div className='activity-title' style={{ marginBottom: '8px' }}>
          3. Gin And Tonic On The Mountain
        </div>
        <p
          style={{
            fontFamily: 'var(--font-hoefler)',
            fontSize: '12px',
            color: '#3f3c43',
            lineHeight: 1.6,
            marginBottom: '12px',
          }}
        >
          Fly to the most unique place in the Peninsula to enjoy a Gin and Tonic
          or similar. Cape Town Helicopters will fly you from the V and A
          Waterfront to Baskloof Nature Reserve above Misty Cliffs.
        </p>
        <Carousel images={peninsulaImages} height='160px' />
        <p
          style={{
            fontFamily: 'var(--font-hoefler)',
            fontSize: '12px',
            color: '#3f3c43',
            lineHeight: 1.6,
            marginTop: '12px',
          }}
        >
          Here you will spend an hour enjoying a drink in the fynbos overlooking
          the crayfish factory. Your pilot will set out a custom made gin bar
          for you to select various options from our partner Six Dogs Gin.
        </p>
        <div
          style={{
            background: '#f0ede8',
            padding: '12px',
            borderRadius: '4px',
            marginTop: '12px',
            borderLeft: '3px solid #8b7355',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-brandon)',
              fontWeight: 700,
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              color: '#3f3c43',
              marginBottom: '8px',
            }}
          >
            Need To Know
          </div>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
            {[
              'Ideal for afternoon drinks.',
              'Starting & ending point: Cape Town Helicopters base, V&A Waterfront.',
              '20-minute flight to Misty Cliffs, 60 mins on the ground and 20 mins return flight',
              'Serving Six Dogs Gin and Tonic with a range of condiments and fruit.',
              'Alternative drinks menu available.',
              'Includes light snacks.',
              '48 hours lead time.',
              'Exclusive experience',
            ]?.map((item, i) => (
              <li
                key={i}
                style={{
                  fontFamily: 'var(--font-hoefler)',
                  fontSize: '11px',
                  color: '#3f3c43',
                  lineHeight: 1.7,
                }}
              >
                • {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </RightPage>
  );
}
