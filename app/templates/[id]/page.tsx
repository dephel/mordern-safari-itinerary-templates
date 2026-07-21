import React from 'react';
import { notFound } from 'next/navigation';
import { getTemplateById } from '../../_templates';

interface TemplatePageProps {
  params: Promise<{ id: string }>;
}

export default async function TemplatePage({ params }: TemplatePageProps) {
  const { id } = await params;
  const template = getTemplateById(id);

  if (!template) {
    notFound();
  }

  const TemplateComponent = template.component;

  return <TemplateComponent />;
}
