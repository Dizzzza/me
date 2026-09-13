'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '../i18n/navigation';
import { routing } from '../i18n/routing';

export default function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex shrink-0 items-center gap-1 font-mono text-[9px] uppercase tracking-[0.1em] text-muted sm:gap-2 sm:text-[11px] sm:tracking-[0.2em]">
      {routing.locales.map((l, i) => (
        <span key={l} className="flex items-center gap-1 sm:gap-2">
          {i > 0 && <span className="text-divider">/</span>}
          <button
            type="button"
            onClick={() => router.replace(pathname, { locale: l })}
            className={
              l === locale
                ? 'text-cyan'
                : 'text-muted transition-colors hover:text-cyan'
            }
            aria-current={l === locale}
          >
            {l}
          </button>
        </span>
      ))}
    </div>
  );
}
