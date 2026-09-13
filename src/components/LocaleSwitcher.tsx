'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '../i18n/navigation';
import { routing } from '../i18n/routing';

export default function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
      {routing.locales.map((l, i) => (
        <span key={l} className="flex items-center gap-2">
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
