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
    <nav className="fixed inset-x-0 top-0 z-20 flex flex-nowrap items-center justify-between gap-2 overflow-x-auto border-b border-divider bg-bg/65 px-4 py-2.5 backdrop-blur-md sm:gap-4 sm:px-10 sm:py-3">
      <span className="shrink-0 whitespace-nowrap font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-cyan sm:text-[13px] sm:tracking-[0.28em]">
        {t('brand')}
        <span className="text-pink">.dev</span>
      </span>
      <div className="flex shrink-0 flex-nowrap items-center gap-2 sm:gap-4">
        <span className="flex flex-nowrap gap-2 font-mono text-[9px] font-bold uppercase tracking-[0.1em] sm:gap-4 sm:text-[11px] sm:tracking-[0.24em]">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="!text-[#c3ccd6] hover:!text-cyan whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </span>
        <LocaleSwitcher />
      </div>
    </nav>
  );
}
