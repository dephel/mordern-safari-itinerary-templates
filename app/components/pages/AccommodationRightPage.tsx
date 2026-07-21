'use client';
import React from 'react';
import RightPage from '../RightPage';
import Carousel from '../Carousel';

const ellermanImages = [
  'https://itineraries.safariportal.app/api/assets/9857/full',
];

const nettletonImages = [
  'https://media.safariportal.app/store/asset/46781/file/9afbcb9ac9472dd5d58589ed19887408.png',
  'https://media.safariportal.app/store/asset/46790/file/241ea00a650ecf15ff6a6883a4e344b9.png',
  'https://media.safariportal.app/store/asset/46782/file/cb56c53872ceeb019d5bbb740b2098ba.png',
];

const siloImages = [
  'https://media.safariportal.app/store/asset/362471/file/5512fa92f46cbd288553707ccd02577c.png',
  'https://itineraries.safariportal.app/api/assets/231117/full',
];

const moreImages = [
  'https://media.safariportal.app/store/asset/55518/file/aa305bbf35e04fc7a1be7e13e22e352c.png',
];

const cadoganImages = [
  'https://itineraries.safariportal.app/api/assets/393973/full',
  'https://media.safariportal.app/store/asset/55518/file/aa305bbf35e04fc7a1be7e13e22e352c.png',
];

interface HotelCardProps {
  number: string;
  name: string;
  price: string;
  location: string;
  description: string;
  images: string[];
  extraDescription?: string;
}

function HotelCard({
  number,
  name,
  price,
  location,
  description,
  images,
  extraDescription,
}: HotelCardProps) {
  return (
    <div
      style={{
        marginBottom: '28px',
        paddingBottom: '28px',
        borderBottom: '1px solid #dfdfdf',
      }}
    >
      <div className='hotel-name' style={{ marginBottom: '8px' }}>
        {number}. {name}
      </div>
      <div style={{ display: 'flex', gap: '16px', marginBottom: '10px' }}>
        <div
          style={{
            fontFamily: 'var(--font-hoefler)',
            fontSize: '12px',
            color: '#3f3c43',
          }}
        >
          <span style={{ fontWeight: 700 }}>Price:</span> {price}
        </div>
        <div
          style={{
            fontFamily: 'var(--font-hoefler)',
            fontSize: '12px',
            color: '#3f3c43',
          }}
        >
          <span style={{ fontWeight: 700 }}>Where:</span> {location}
        </div>
      </div>
      <p
        style={{
          fontFamily: 'var(--font-hoefler)',
          fontSize: '12px',
          color: '#3f3c43',
          lineHeight: 1.6,
          marginBottom: '10px',
        }}
      >
        {description}
      </p>
      {images.length > 0 && <Carousel images={images} height='160px' />}
      {extraDescription && (
        <p
          style={{
            fontFamily: 'var(--font-hoefler)',
            fontSize: '12px',
            color: '#3f3c43',
            lineHeight: 1.6,
            marginTop: '10px',
          }}
        >
          {extraDescription}
        </p>
      )}
    </div>
  );
}

export default function AccommodationRightPage() {
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
          Where To Stay
        </div>
        <div className='magazine-divider' />
      </div>

      <p className='magazine-body' style={{ marginBottom: '20px' }}>
        Here is a list of our top 5 favourite places to stay in beautiful Cape
        Town that offer stunning central accommodation that capture the city's
        natural beauty and vibrant atmosphere.
      </p>

      <HotelCard
        number='1'
        name='Ellerman House'
        price='From R14,000 per night'
        location='Bantry Bay, Cape Town'
        description='Ellerman House sets the benchmark in service excellence, luxury and refined living in Cape Town while giving visitors the feeling of a welcoming home space. In fact, you may never want to leave. Surround yourself with national treasures, exceptional flavours, uninterrupted views, sweet sounds and a refined atmosphere with sincere hospitality.'
        images={ellermanImages}
        extraDescription='With only 13 bedrooms and two private contemporary villas, Ellerman House excels at offering guests an intuitive and understated level of service. Enjoy the Spa, Contemporary Art Gallery, Wine Gallery, Wine and Champagne Cellar, brandy lounge, BAR ROC, library, dining rooms, lounges, guest pantry, solar-heated swimming pool, fitness centre and cascading terraces during your stay.'
      />

      <HotelCard
        number='2'
        name='21 Nettleton'
        price='From R14,000'
        location='Clifton, Cape Town'
        description='Perfectly placed just below the mountains and above some of the best beaches in Africa, 21 Nettleton is also 10 minutes from the major tourist attractions such as the city centre, Table Mountain and V&A Waterfront and 30 minutes from Cape Town International Airport.'
        images={nettletonImages}
        extraDescription='Providing uninterrupted privacy and 5-star service in a magnificent clifftop mansion, guests can choose from five suites or a spectacular penthouse. Each room is individually appointed with bespoke art, antique furniture and luxurious soft furnishings – styled in a modern fashion.'
      />

      <HotelCard
        number='3'
        name='The Silo Hotel'
        price='From R17,900 per room'
        location='V&A Waterfront, Cape Town'
        description="The Silo Hotel is an exclusive five star hotel towering above the V&A Waterfront, surrounded by the natural wonder of South Africa's Mother City. This magical hotel is a celebration of art, style, architecture, and design."
        images={siloImages}
        extraDescription='There are 28 rooms, including a spectacular one bedroom penthouse. Each room has been individually designed and decorated by the stylish wand of owner Liz Biden. Colourful and eclectic pieces juxtapose the modern, industrial architecture. Each room has a private balcony and a unique collection of contemporary African art.'
      />

      <HotelCard
        number='4'
        name='More Quarters'
        price='R8125'
        location='Kloof Street, Cape Town'
        description="MORE's collection of converted heritage townhouses with their entrances onto a cobbled lane adjoining the main hotel, create the feel of a secluded quarter in the suburb. Around the corner, the cafés, wine bars, boutiques and interior design shops of Kloof Street are giving our Gardens neighbourhood a fresh buzz."
        images={moreImages}
        extraDescription="More Quarters' 27 rooms have been individually designed for a chic yet comfortable living space. The look and feel is understatedly polished, with a retro edge, and there is always fresh coffee and flowers, crisp linen, and luxurious bath products."
      />

      <HotelCard
        number='5'
        name='Cape Cadogan Boutique Hotel'
        price='From R8125'
        location='Gardens, Cape Town'
        description='Cape Cadogan Boutique Hotel is part of the Kloof Street Neighbourhood and is a grand old dame (with National Monument status) dating back to the early 1800s. The hotel is elegantly styled in beautiful emerald green, classic black and white, and touches of gold.'
        images={cadoganImages}
        extraDescription='Each room is individually designed around her historic uniqueness. Enjoy relaxed guest areas that includes two pools for the warmer days. The hotel restaurant Upper Union has a buzz all of its own.'
      />
    </RightPage>
  );
}
