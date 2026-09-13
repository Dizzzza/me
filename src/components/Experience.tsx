'use client';

import { useTranslations } from 'next-intl';
import styles from './SectionHeading.module.scss';

const BORDER_COLORS = ['border-cyan/35', 'border-pink/35', 'border-accent/45'];
const PERIOD_COLORS = ['text-cyan', 'text-pink', 'text-accent'];

export default function Experience() {
  const t = useTranslations('experience');
  const items = t.raw('items') as { period: string; role: string; text: string }[];

  return (
    <section id="exp" className="border-t border-white/10 py-8">
      <div className="grid gap-6 sm:grid-cols-[minmax(140px,200px)_1fr]">
        <h2 className={styles.heading}>
          {t('title')}
          <span className="text-accent">.</span>
        </h2>
        <div className="grid gap-6">
          {items.map((item, i) => (
            <div
              key={item.role}
              className={`grid gap-4 border-l pl-4 sm:grid-cols-[130px_1fr] ${BORDER_COLORS[i % 3]}`}
            >
              <div className={`font-mono text-xs tracking-[0.12em] tabular-nums ${PERIOD_COLORS[i % 3]}`}>
                {item.period}
              </div>
              <div>
                <div className="font-heading text-2xl font-semibold text-[#f4f6f8]">
                  {item.role}
                </div>
                <p className="mt-2 max-w-[60ch] text-base leading-[1.8] text-[#ccd4dd]">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
