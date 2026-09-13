'use client';

import { useTranslations } from 'next-intl';
import LocaleSwitcher from './LocaleSwitcher';

export default function Nav() {
  const t = useTranslations('nav');

  const links: { href: string; label: string }[] = [
    { href: '#about', label: t('about') },
    { href: '#stack', label: t('stack') },
    { href: '#exp', label: t('experience') },
    { href: '#contact', label: t('contact') },
  ];

  return (
    <nav className="sticky top-0 z-[5] flex items-center justify-between gap-4 border-b border-divider bg-bg/65 px-5 py-3 backdrop-blur-md sm:px-10">
      <span className="font-mono text-[13px] font-bold uppercase tracking-[0.28em] text-cyan">
        {t('brand')}
        <span className="text-pink">.dev</span>
      </span>
      <div className="flex flex-wrap items-center gap-4">
        <span className="flex flex-wrap gap-4 font-mono text-[11px] font-bold uppercase tracking-[0.24em]">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="!text-[#c3ccd6] hover:!text-cyan">
              {link.label}
            </a>
          ))}
        </span>
        <LocaleSwitcher />
      </div>
    </nav>
  );
}
