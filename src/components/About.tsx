'use client';

import { useTranslations } from 'next-intl';
import styles from './SectionHeading.module.scss';

export default function About() {
  const t = useTranslations('about');
  const paragraphs = t.raw('text') as string[];
  const stats = ['years', 'projects', 'mvp'] as const;
  const accents = ['border-cyan/55 text-cyan', 'border-pink/55 text-pink', 'border-accent/65 text-accent'];

  return (
    <section id="about" className="py-8">
      <div className="relative overflow-hidden rounded-2xl border border-white/[0.12] bg-gradient-to-b from-[#0e141e]/[0.72] to-[#080b12]/60 p-6 shadow-[0_0_60px_rgba(0,0,0,0.35)] backdrop-blur-sm">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-cyan via-pink/[0.55] to-transparent"
        />
        <div className="grid gap-4">
          <div className="flex items-baseline justify-between gap-4 border-b border-white/[0.12] pb-3">
            <h2 className={styles.heading}>
              {t('title')}
              <span className="text-pink">.</span>
            </h2>
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-cyan">
              // profile
            </span>
          </div>

          <h3 className="m-0 font-mono text-lg font-medium leading-[1.55] tracking-[0.01em] text-[#f4f6f8] tabular-nums">
            {t('textTitle')}
          </h3>

          <div className="grid max-w-[76ch] gap-4">
            {paragraphs.map((p) => (
              <p
                key={p}
                className="m-0 text-justify text-[17px] leading-[1.85] text-[#dbe2e9]"
                style={{ hyphens: 'auto' }}
              >
                {p}
              </p>
            ))}
          </div>

          <div className="mt-2 grid grid-cols-1 gap-4 border-t border-white/[0.12] pt-4 font-mono sm:grid-cols-3">
            {stats.map((key, i) => (
              <div key={key} className={`border-l pl-3 ${accents[i]}`}>
                <div className="text-[34px] font-bold tabular-nums">
                  {t(`stats.${key}.value`)}
                </div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-[#b8c2cd]">
                  {t(`stats.${key}.label`)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
