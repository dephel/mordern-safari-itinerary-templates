'use client';
import React, { useState } from 'react';

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      {items.map((item, i) => (
        <div key={i} className='accordion-item'>
          <div
            className='accordion-header'
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span
              style={{
                fontFamily: 'var(--font-hoefler)',
                fontSize: '14px',
                color: '#3f3c43',
              }}
            >
              {item.title}
            </span>
            <span
              className={`accordion-toggle${openIndex === i ? ' open' : ''}`}
            >
              +
            </span>
          </div>
          {openIndex === i && (
            <div className='accordion-content'>{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
}
