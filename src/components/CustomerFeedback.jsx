import React from 'react';
import { Star, ExternalLink, Quote, ShieldCheck } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/restaurantData';

export default function CustomerFeedback() {
  const { feedback, links, rating } = BUSINESS_CONFIG;

  return (
    <section className="py-16 md:py-24 bg-cream-100/60 border-t border-chocolate-800/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with Zomato Rating Pill */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream-50 border border-chocolate-800/10 text-chocolate-800 text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
              <span className="flex items-center gap-1 text-caramel-600">
                <Star className="w-4 h-4 fill-caramel-500 text-caramel-500" />
                <span>{rating.score} / 5.0</span>
              </span>
              <span className="text-chocolate-400">•</span>
              <span className="text-chocolate-600 font-semibold">{rating.totalReviews}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-chocolate-900 tracking-tight">
              {feedback.heading}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-chocolate-600 max-w-xl">
              {feedback.subheading}
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <a
              href={links.zomato}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cream-50 hover:bg-cream-200 border border-chocolate-800/15 text-chocolate-900 font-bold text-xs sm:text-sm shadow-xs transition-colors"
            >
              <span>Read All Verified Reviews on Zomato</span>
              <ExternalLink className="w-3.5 h-3.5 text-terracotta-600" />
            </a>
          </div>
        </div>

        {/* Feedback Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {feedback.reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-cream-50 rounded-3xl p-6 sm:p-7 border border-chocolate-800/10 shadow-card hover:shadow-elevated transition-all flex flex-col justify-between"
            >
              <div>
                {/* Stars & Quote */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-caramel-500">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(rev.rating)
                            ? 'fill-caramel-500 text-caramel-500'
                            : 'text-chocolate-200'
                        }`}
                      />
                    ))}
                  </div>
                  <Quote className="w-7 h-7 text-caramel-500/20" />
                </div>

                <p className="text-sm text-chocolate-700 leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-chocolate-800/10 flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-sm text-chocolate-900">
                    {rev.author}
                  </h4>
                  <span className="text-[11px] text-chocolate-500 font-medium">
                    {rev.date}
                  </span>
                </div>
                <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  {rev.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Live Zomato Banner */}
        <div className="mt-10 rounded-2xl bg-gradient-to-r from-chocolate-900 to-chocolate-800 p-6 sm:p-8 text-cream-50 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-elevated">
          <div className="text-center sm:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-caramel-500">
              Community Love
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold mt-1 text-cream-50">
              Loved by Basavanagudi & Bengaluru Foodies
            </h3>
            <p className="text-xs sm:text-sm text-cream-200 mt-1 max-w-xl">
              Have you tried our crispy sandwiches or red sauce pasta? We’d love to hear your feedback on Zomato.
            </p>
          </div>

          <a
            href={links.zomato}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-caramel-500 hover:bg-caramel-600 text-cream-50 font-bold text-sm shadow-md transition-all whitespace-nowrap active:scale-95"
          >
            <span>Leave a Review on Zomato</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
