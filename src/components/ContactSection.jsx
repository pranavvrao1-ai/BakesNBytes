import React from 'react';
import { Phone, MessageSquare, MapPin, Clock, ExternalLink, Navigation, ShieldCheck } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/restaurantData';

export default function ContactSection() {
  const { contact, links } = BUSINESS_CONFIG;

  const whatsappDirectUrl = contact.whatsappNumber
    ? `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
        'Hello Bakes N Bytes! I would like to inquire about your menu and placing an order.'
      )}`
    : `https://api.whatsapp.com/send?text=${encodeURIComponent(
        'Hello Bakes N Bytes! I would like to inquire about your menu and placing an order.'
      )}`;

  return (
    <section id="contact" className="py-16 md:py-24 bg-cream-100/70 border-t border-chocolate-800/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-terracotta-600 block mb-2">
            Visit & Connect
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-chocolate-900 tracking-tight">
            Find Us in Basavanagudi
          </h2>
          <p className="mt-3 text-sm sm:text-base text-chocolate-700">
            Conveniently situated in Basavanagudi. Stop by for hot bites, call ahead for speedy pickup, or order directly via WhatsApp.
          </p>
        </div>

        {/* Contact Grid: Details on Left, Interactive Map on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Contact Details Card */}
          <div className="lg:col-span-5 bg-cream-50 rounded-3xl p-6 sm:p-8 border border-chocolate-800/10 shadow-card flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Address item */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-terracotta-50 text-terracotta-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-chocolate-900">
                    Kitchen & Store Location
                  </h4>
                  <p className="text-xs sm:text-sm text-chocolate-700 mt-1 leading-relaxed">
                    {contact.address.fullAddress}
                  </p>
                  <span className="inline-block mt-1 text-[11px] font-semibold text-chocolate-500">
                    Landmark: {contact.address.landmark}
                  </span>
                </div>
              </div>

              {/* Timings item */}
              <div className="flex items-start gap-3.5 pt-4 border-t border-chocolate-800/10">
                <div className="w-10 h-10 rounded-xl bg-caramel-100 text-caramel-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-chocolate-900">
                    Operating Hours
                  </h4>
                  <p className="text-xs sm:text-sm text-chocolate-800 font-bold mt-1">
                    {contact.timings.hours}
                  </p>
                  <p className="text-xs text-chocolate-600">
                    {contact.timings.days} (Open All 7 Days)
                  </p>
                </div>
              </div>

              {/* Phone item */}
              <div className="flex items-start gap-3.5 pt-4 border-t border-chocolate-800/10">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-chocolate-900">
                    Phone & WhatsApp Inquiries
                  </h4>
                  <p className="text-base font-extrabold text-chocolate-900 mt-0.5">
                    {contact.phoneDisplay}
                  </p>
                  <span className="text-xs text-emerald-700 font-medium">
                    Prompt response for takeaway orders & inquiries
                  </span>
                </div>
              </div>

              {/* FSSAI Badge */}
              <div className="p-3 bg-cream-100 rounded-2xl border border-chocolate-800/10 flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-sage-600 flex-shrink-0" />
                <span className="text-xs text-chocolate-700 font-semibold">
                  Food Safety: <strong className="text-chocolate-900">{contact.fssaiLicense}</strong>
                </span>
              </div>
            </div>

            {/* 4 Required Action Buttons */}
            <div className="grid grid-cols-2 gap-3 pt-6 mt-6 border-t border-chocolate-800/10">
              
              {/* 1. Call Now / Order Online */}
              {contact.phoneTel ? (
                <a
                  href={`tel:${contact.phoneTel}`}
                  className="py-3 px-3 rounded-xl bg-chocolate-900 hover:bg-chocolate-800 text-cream-50 font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all"
                >
                  <Phone className="w-3.5 h-3.5 text-caramel-500" />
                  <span>Call Now</span>
                </a>
              ) : (
                <a
                  href={links.zomato}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-3 rounded-xl bg-chocolate-900 hover:bg-chocolate-800 text-cream-50 font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all"
                >
                  <Phone className="w-3.5 h-3.5 text-caramel-500" />
                  <span>Call via Zomato</span>
                </a>
              )}

              {/* 2. WhatsApp */}
              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-white" />
                <span>WhatsApp</span>
              </a>

              {/* 3. Get Directions */}
              <a
                href={links.googleMapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-3 rounded-xl bg-cream-100 hover:bg-cream-200 border border-chocolate-800/15 text-chocolate-900 font-bold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition-all"
              >
                <Navigation className="w-3.5 h-3.5 text-terracotta-600" />
                <span>Get Directions</span>
              </a>

              {/* 4. Order on Zomato */}
              <a
                href={links.zomato}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-3 rounded-xl bg-cream-100 hover:bg-cream-200 border border-chocolate-800/15 text-chocolate-900 font-bold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition-all"
              >
                <ExternalLink className="w-3.5 h-3.5 text-caramel-600" />
                <span>Zomato Menu</span>
              </a>

            </div>
          </div>

          {/* Embedded Google Map Frame */}
          <div className="lg:col-span-7 bg-cream-50 rounded-3xl overflow-hidden border border-chocolate-800/10 shadow-card min-h-[380px] relative flex flex-col">
            <iframe
              title="Bakes N Bytes Basavanagudi Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.358252726715!2d77.56831037599025!3d12.956108600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15ed832e543b%3A0x6b74e1d9319c5222!2sBakes%20N%20Bytes!5e0!3m2!1sen!2sin!4v1715000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '360px', flex: 1 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
            
            <div className="p-4 bg-cream-50 border-t border-chocolate-800/10 flex items-center justify-between text-xs text-chocolate-700">
              <span className="font-semibold">
                Geo: 12.9561° N, 77.5709° E (Basavanagudi, Bengaluru)
              </span>
              <a
                href={links.googleMapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="text-terracotta-600 font-bold hover:underline flex items-center gap-1"
              >
                Open in Google Maps &rarr;
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
