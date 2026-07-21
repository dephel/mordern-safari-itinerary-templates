import type { ComponentType } from 'react';
import SafariTemplatePage from './safari/page';
import MagazineTemplatePage from './magazine/page';

export interface Template {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  component: ComponentType;
}

export const TEMPLATES: Template[] = [
  {
    id: 'safari',
    title: 'Safari Itinerary',
    description: 'A classic safari itinerary layout with navigation menu and day-by-day details.',
    thumbnail: '/assets/images/safari.jpeg',
    component: SafariTemplatePage,
  },
  {
    id: 'magazine',
    title: 'Magazine Book',
    description: 'A magazine-style two-page book with swipe and flip page transitions.',
    thumbnail: '/assets/images/magazine.jpeg',
    component: MagazineTemplatePage,
  },
];

export function getTemplateById(id: string): Template | undefined {
  return TEMPLATES.find((t) => t.id === id);
}
