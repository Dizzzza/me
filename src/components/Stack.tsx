'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import styles from './SectionHeading.module.scss';
import tabStyles from './Stack.module.scss';

const GROUPS = [
  { key: 'frontend', rgb: '34,231,214' },
  { key: 'backend', rgb: '255,45,149' },
  { key: 'infra', rgb: '182,130,53' },
  { key: 'web3', rgb: '150,120,255' },
] as const;

export default function Stack() {
  const t = useTranslations('stack');
  const [tab, setTab] = useState(0);

  const active = GROUPS[tab];
  const items = t.raw(`groups.${active.key}.items`) as string[];

  return (
    <section id="stack" className="py-8">
      <div className="grid gap-6 sm:grid-cols-[minmax(140px,200px)_1fr]">
        <h2 className={styles.heading}>
          {t('title')}
          <span className="text-cyan">.</span>
        </h2>
        <div className="grid gap-4 font-mono">
          <div role="tablist" className="flex flex-wrap gap-2">
            {GROUPS.map((group, i) => {
              const on = i === tab;
              return (
                <button
                  key={group.key}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  onClick={() => setTab(i)}
                  className="rounded-sm border px-[18px] py-[10px] text-[11px] font-bold uppercase tracking-[0.22em] transition-colors hover:border-white/45"
                  style={{
                    background: on ? `rgba(${group.rgb},.1)` : 'transparent',
                    borderColor: on ? `rgb(${group.rgb})` : 'rgba(255,255,255,.18)',
                    color: on ? `rgb(${group.rgb})` : '#b8c2cd',
                    boxShadow: on ? `0 0 22px rgba(${group.rgb},.28)` : 'none',
                  }}
                >
                  {t(`groups.${group.key}.title`)}
                </button>
              );
            })}
          </div>

          <div
            className="relative overflow-hidden rounded-sm border p-4 transition-colors"
            style={{ borderColor: `rgba(${active.rgb},.45)`, background: 'rgba(10,14,22,.5)' }}
          >
            <div
              key={`sweep-${tab}`}
              aria-hidden="true"
              className={`pointer-events-none absolute inset-y-0 w-[38%] ${tabStyles.sweep}`}
              style={{
                background: `linear-gradient(to right, transparent, rgba(${active.rgb},.22), transparent)`,
              }}
            />
            <div key={`panel-${tab}`} className={`relative flex flex-wrap gap-2.5 ${tabStyles.panel}`}>
              {items.map((item) => (
                <span
                  key={item}
                  className="rounded-[2px] border px-3 py-1.5 text-xs text-[#e3e9ef]"
                  style={{ borderColor: `rgba(${active.rgb},.4)`, background: `rgba(${active.rgb},.05)` }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
