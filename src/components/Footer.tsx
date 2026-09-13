'use client';

import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const year = new Date().getFullYear();

  return (
    <footer className="flex justify-between border-t border-white/10 py-6 font-mono text-[11px] uppercase tracking-[0.18em] text-[#c3ccd6]">
      <span>{t('copyright', { year })}</span>
      <span className="animate-[drift_3s_ease-in-out_infinite]">{t('status')}</span>
    </footer>
  );
}
