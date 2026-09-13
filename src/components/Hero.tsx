'use client';

import { useTranslations } from 'next-intl';
import styles from './Hero.module.scss';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <header className="flex min-h-[76vh] flex-col justify-center gap-4 py-8">
      <span className="font-mono text-xs uppercase tracking-[0.34em] text-cyan">
        {t('kicker')}
      </span>

      <div className="relative inline-block w-fit max-w-full sm:max-w-[820px]">
        <h1 className={styles.title}>{t('headline')}</h1>
        <span aria-hidden="true" className={`${styles.glitchLayer} ${styles.glitchCyan}`}>
          {t('headline')}
        </span>
        <span aria-hidden="true" className={`${styles.glitchLayer} ${styles.glitchPink}`}>
          {t('headline')}
        </span>
      </div>

      <div className="h-px max-w-[560px] bg-gradient-to-r from-cyan/80 via-pink/50 to-transparent" />

      <p className="max-w-[56ch] text-[19px] leading-[1.8] text-[#dbe2e9]">
        {t('lead')}
      </p>

      <div className="mt-2 flex flex-wrap gap-3 font-mono">
        <a
          href="#contact"
          className="rounded-sm border border-cyan px-7 py-3 text-xs uppercase tracking-[0.22em] text-cyan transition-all hover:bg-cyan/10 hover:shadow-[0_0_26px_rgba(34,231,214,0.3)]"
        >
          {t('ctaPrimary')}
        </a>
        <a
          href="#exp"
          className="rounded-sm border border-white/20 px-7 py-3 text-xs uppercase tracking-[0.22em] text-muted transition-all hover:border-pink hover:text-pink"
        >
          {t('ctaSecondary')}
        </a>
      </div>
    </header>
  );
}
