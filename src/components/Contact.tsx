'use client';

import type { CSSProperties } from 'react';
import { useTranslations } from 'next-intl';
import styles from './SectionHeading.module.scss';
import cardStyles from './Contact.module.scss';

const LINKS = [
  { key: 'telegram', href: 'https://telegram.me/tegdlyaAbyla', rgb: '34,231,214', hex: '#22e7d6' },
  { key: 'github', href: 'https://github.com/Dizzzza', rgb: '255,45,149', hex: '#ff2d95' },
  { key: 'linkedin', href: 'https://www.linkedin.com/in/dizzza', rgb: '182,130,53', hex: '#d9a84f' },
  { key: 'email', href: 'mailto:dias.svankulov@gmail.com', rgb: '255,255,255', hex: '#c3ccd6' },
] as const;

const ICONS: Record<(typeof LINKS)[number]['key'], React.ReactNode> = {
  telegram: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 2 11 13" />
      <path d="M22 2 15 22 11 13 2 9 22 2Z" />
    </svg>
  ),
  github: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m16 18 6-6-6-6" />
      <path d="m8 6-6 6 6 6" />
    </svg>
  ),
  linkedin: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  email: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 7 10-7" />
    </svg>
  ),
};

export default function Contact() {
  const t = useTranslations('contact');

  return (
    <section id="contact" className="border-t border-white/10 py-8">
      <div className="grid gap-6 sm:grid-cols-[minmax(140px,200px)_1fr]">
        <h2 className={styles.heading}>
          {t('title')}
          <span className="text-cyan">
            <span className="animate-[blink_1.1s_step-end_infinite]">_</span>
          </span>
        </h2>

        <div className="grid gap-4">
          <p className="m-0 max-w-[52ch] text-lg leading-[1.8] text-[#dbe2e9]">{t('intro')}</p>

          <div className="grid content-start gap-3 sm:grid-cols-[repeat(auto-fit,minmax(190px,1fr))]">
            {LINKS.map((link) => (
              <a
                key={link.key}
                href={link.href}
                target={link.key === 'email' ? undefined : '_blank'}
                rel={link.key === 'email' ? undefined : 'noopener'}
                className={`grid gap-2 rounded-sm border p-4 !text-[#e6ebf0] ${cardStyles.card}`}
                style={
                  {
                    '--rgb': link.rgb,
                    borderColor: `rgba(${link.rgb},.35)`,
                    background: `rgba(${link.rgb},.03)`,
                  } as CSSProperties
                }
              >
                <span style={{ color: link.hex }}>{ICONS[link.key]}</span>
                <span className="font-mono text-[15px] font-bold tracking-[0.06em]">
                  {t(`links.${link.key}`)}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
