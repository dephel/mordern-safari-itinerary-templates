'use client';
import React from 'react';
import RightPage from '../RightPage';
import Accordion from '../Accordion';

const accordionItems = [
  {
    title: 'Passport/s',
    content:
      'Ensure your passport is valid for at least 6 months beyond your travel dates. South Africa requires at least 2 blank pages in your passport for entry stamps. Citizens of most Western countries do not require a visa for stays up to 90 days.',
  },
  {
    title: 'Health & Vaccinations',
    content:
      'No vaccinations are required for entry into South Africa unless you are arriving from a yellow fever endemic country. However, it is recommended to be up to date on routine vaccines. Malaria is not present in Cape Town.',
  },
  {
    title: 'Travel Insurance',
    content:
      'We strongly recommend comprehensive travel insurance that covers medical evacuation, trip cancellation, and personal liability. Ensure your policy covers all activities you plan to undertake.',
  },
  {
    title: 'Cash & Cards',
    content:
      'The South African Rand (ZAR) is the local currency. Major credit cards are widely accepted in Cape Town. ATMs are readily available. It is advisable to carry some cash for smaller establishments and tips.',
  },
  {
    title: 'Valuables',
    content:
      'Exercise normal precautions with your valuables. Use hotel safes for passports and excess cash. Avoid displaying expensive jewelry or electronics in public areas.',
  },
  {
    title: 'Climate',
    content:
      'Cape Town has a Mediterranean climate. Summers (December-February) are warm and dry with temperatures reaching 26°C. Winters (June-August) are cool and wet. The famous Cape Doctor (south-easterly wind) can be strong in summer.',
  },
  {
    title: 'Language',
    content:
      'South Africa has 11 official languages. English is widely spoken in Cape Town and is the primary language of business and tourism. Afrikaans is also commonly spoken.',
  },
  {
    title: 'Etiquette',
    content:
      'South Africans are generally friendly and welcoming. Tipping is customary in restaurants (10-15%), for hotel staff, and for tour guides. Dress modestly when visiting religious sites.',
  },
  {
    title: 'Electricity',
    content:
      'South Africa uses Type M plugs (large 3-pin) at 230V/50Hz. Adapters are recommended for visitors from the US, UK, and Europe. Most hotels provide universal adapters on request.',
  },
  {
    title: 'Gratuities',
    content:
      'Tipping is an important part of the service culture in South Africa. Restaurant staff: 10-15% of the bill. Hotel porters: R10-20 per bag. Safari guides and trackers: $10-15 per person per day. Car guards: R5-10.',
  },
];

export default function PreTravelRightPage() {
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
          Prepare for your trip
        </div>
        <div
          className='magazine-section-title'
          style={{ fontSize: '22px', marginBottom: '16px' }}
        >
          Pre Travel Information
        </div>
        <div className='magazine-divider' />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <div className='magazine-heading' style={{ marginBottom: '16px' }}>
          Pre Travel Information - South Africa
        </div>
        <Accordion items={accordionItems} />
      </div>

      {/* Powered by */}
      <div className='powered-by'>
        <span>Powered by</span>
        Modern Safari
   
      </div>
    </RightPage>
  );
}
