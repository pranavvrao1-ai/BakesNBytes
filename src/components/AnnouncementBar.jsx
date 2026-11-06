import React, { useState } from 'react';
import { Sparkles, ArrowRight, X } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/restaurantData';

export default function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);
  const config = BUSINESS_CONFIG.announcement;

  if (!config?.enabled || dismissed) return null;

  return (
    <aside
      aria-label="Promotional announcement"
      className="bg-chocolate-900 text-cream-100 text-xs sm:text-sm py-2 px-4 transition-all duration-300 relative border-b border-chocolate-700/50"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex-1 flex items-center justify-center gap-2 text-center flex-wrap">
          <span className="inline-flex items-center gap-1 bg-caramel-500/20 text-caramel-500 border border-caramel-500/30 text-[11px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider">
            <Sparkles className="w-3 h-3 text-caramel-500" />
            {config.badge}
          </span>
          <span className="font-medium text-cream-100">
            {config.text}
          </span>
          {config.actionText && (
            <a
              href={config.actionLink}
              className="inline-flex items-center gap-1 text-caramel-500 hover:text-cream-50 font-semibold underline underline-offset-4 decoration-caramel-500/50 hover:decoration-cream-50 transition-colors ml-1"
            >
              {config.actionText}
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="text-cream-300 hover:text-cream-50 p-1 rounded-md transition-colors"
          aria-label="Dismiss announcement"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </aside>
  );
}
