"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

const butterflyImage = 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8zEtWk8nK9MB3vFa1-mYzuJT2-XPvgjhM3yeoZHFL2MC0js39uGYG0Sjx8OnjYjYI4GBrpVbr2BMuvelpjoMYwxcY8yRcbFpuOvXdfQ4UKm2EMUhJfi4jQpF6wwP7As7VaXDB08srpoCgxDO0YEju8uDXq5t2gt4eATwsYXagNy1CGKRHnm54MeKZIBsR-J6qlXQQxaUguiXoLQuPAJ_tm9tCXHcCtjcf8dRdnO4fhvKzvLmEAkfIWumR3jqWzwCN-hk-P6daezk';

export default function Slide03Logistics() {
  const { t } = useLanguage();

  return (
    <section
      id="location"
      className="font-montserrat relative flex min-h-screen flex-col items-center overflow-x-hidden bg-[#FFF7F9] text-[#1D1B1C]"
    >
      <main className="relative flex min-h-screen w-full max-w-[600px] flex-col items-center justify-center px-6 pb-32 pt-12">
        <div className="floating-butterfly top-[15%] right-[5%] h-32 w-32">
          <img
            src={butterflyImage}
            alt="Butterfly"
            className="h-full w-full object-contain"
          />
        </div>

        <div className="floating-butterfly butterfly-slow top-[65%] left-[-5%] h-48 w-48 opacity-40">
          <img
            src={butterflyImage}
            alt="Butterfly"
            className="h-full w-full object-contain"
          />
        </div>

        <div className="floating-butterfly butterfly-reverse bottom-[10%] right-[10%] h-24 w-24">
          <img
            src={butterflyImage}
            alt="Butterfly"
            className="h-full w-full object-contain"
          />
        </div>

        <div className="fade-in-up z-20 w-full space-y-16 text-center">
          <section>
            <p className="font-dancing text-[32px] font-normal leading-[1.4] text-[#70566C]/80">
              {t.logistics.eyebrow}
            </p>

            <div className="mx-auto mt-6 h-px w-8 bg-[#70566C]/20" />
          </section>

          <section className="airy-glass space-y-12 rounded-[40px] px-6 py-12">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center">
                <span className="material-symbols-outlined mb-2 text-[#70566C]/60">
                  calendar_today
                </span>

                <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#4C444A]">
                  {t.logistics.dateLabel}
                </p>

                <p className="font-cinzel text-lg font-semibold leading-[1.5] tracking-[0.1em] text-[#70566C]">
                  August 29, 2026
                </p>
              </div>

              <div className="flex flex-col items-center border-l border-[#70566C]/10">
                <span className="material-symbols-outlined mb-2 text-[#70566C]/60">
                  schedule
                </span>

                <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#4C444A]">
                  {t.logistics.timeLabel}
                </p>

                <p className="font-cinzel text-lg font-semibold leading-[1.5] tracking-[0.1em] text-[#70566C]">
                  15:00
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <div className="mb-2 flex justify-center">
                <span className="material-symbols-outlined filled text-[#70566C]/60">
                  location_on
                </span>
              </div>

              <div className="space-y-1">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#4C444A]">
                  {t.logistics.locationLabel}
                </p>

                <h2 className="font-cinzel text-3xl font-normal leading-[1.2] text-[#70566C]">
                  Lopez House
                </h2>

                <p className="text-base font-light leading-[1.6] text-[#655E46]/80">
                  Lexington, NC
                </p>
              </div>
            </div>

            <div className="pt-6">
              <a
                href="https://maps.google.com/?q=Lexington%2C%20NC"
                target="_blank"
                rel="noreferrer"
                className="transition-soft group inline-flex items-center justify-center rounded-full border border-[#70566C]/30 bg-white/50 px-12 py-4 text-xs font-semibold tracking-widest text-[#70566C] hover:bg-[#70566C] hover:text-white active:scale-95"
              >
                {t.logistics.viewLocation}
                <span className="material-symbols-outlined ml-2 text-sm text-inherit transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </a>
            </div>
          </section>
        </div>
      </main>

      <SlideNav active="location" />
    </section>
  );
}

function SlideNav({ active }) {
  const items = [
    ["cover", "home"],
    ["blessing", "favorite"],
    ["location", "location_on"],
    ["rsvp", "event_available"],
    ["closing", "schedule"],
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 mx-auto flex w-full max-w-[600px] items-center justify-around rounded-t-3xl bg-white/70 px-6 pb-8 pt-4 backdrop-blur-lg">
      {items.map(([target, icon]) => (
        <a
          key={target}
          href={`#${target}`}
          className={
            active === target
              ? "flex items-center justify-center rounded-full bg-[#70566C]/10 p-3 text-[#70566C] shadow-sm"
              : "flex items-center justify-center p-3 text-[#4C444A]/40 transition-colors hover:text-[#70566C]"
          }
        >
          <span
            className={
              active === target
                ? "material-symbols-outlined filled"
                : "material-symbols-outlined"
            }
          >
            {icon}
          </span>
        </a>
      ))}
    </nav>
  );
}
