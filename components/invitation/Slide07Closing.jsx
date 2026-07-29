"use client";

import { useEffect, useMemo, useState } from "react";

const floralTexture = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAusAit_wbEN3ZVsZsf2My6a2XwHX2ViImqZcfyTwvk7nZYqoyM3Si25cEaBe7N9ZRMbhY7bfY75R1qIEwAqRXVDFJhE_K5KoIhCiGH1Pkd4R4-LMgkuSrdP6ER5qz_qpMkkeldcvnvgR9JcSTvNO_TBq0cEvuQUVkvQzi3YxO6dQGbQusu6SNRIIxPNeHePFRFx-_T0BDyA_7K9PqM9VDRhjzPeEKtnwqHqc21zlHfZYCku4DGVWkPpfJC2DDVKsEY_ux0n0vJcgI';
const butterflyImage = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAeAUuXcUtH0iCthbwCM5XXtHBPu4dezEZnhSQlv0zIgbIBPZc-bnPSgr3N_4-i0ItG1V5cguuaGlfzzNo7bYWlP9NtrpCW4UZxGBWKQ7QgiQKX2R1e6yoQQCt3n3ZJ6LDJ3bFKKBfzhN1kjz0Bw-2ADOSrjSSr0Ri3WqTo8A4xOOkO8boxNT9zwt3jqwyhl4OkLx4MErgPL_RZwQY3ucinuqg8fyQ4wZDaKmxgStXlsAlRbxa8AQZChYlllsjJ0wnr4pHc3imzH4M';
const familyPhoto = 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4ZH-kfqC99C04iYrf-JAKlRuBOBhsMwF5hdDqd6tybCPHsllwrzHHhAU3Aam6OZHjD00iYiRO25n3gYN2mJ6BC-RKXWlXV1qObE27TfkP01goYPYwsW1cq29bpjFv0UAKKETAX8garHpuaXFeJ2K1PEAkS9xEvd9NqY38pZGiI33CF2HXF-mpTRhtWJ9QyJPmjhCPP9jt7LstJj-OpsVhljtzd7jGQO6zkI8iM4JxS7NKHOgrpe8_nDKpZcUywSokIynya_ATHPI';

function getTimeLeft() {
  const target = new Date("2026-08-29T15:00:00");
  const now = new Date();
  const total = Math.max(target.getTime() - now.getTime(), 0);

  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((total / (1000 * 60)) % 60);

  return { days, hours, minutes };
}

export default function Slide07Closing() {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 60000);

    return () => window.clearInterval(interval);
  }, []);

  const countdown = useMemo(
    () => [
      ["DAYS", timeLeft.days],
      ["HRS", timeLeft.hours],
      ["MINS", timeLeft.minutes],
    ],
    [timeLeft]
  );

  return (
    <section
      id="closing"
      className="flex min-h-screen items-center justify-center overflow-hidden bg-white"
    >
      <main className="relative flex h-screen w-full max-w-[600px] flex-col items-center justify-between overflow-hidden bg-white px-8 py-16 text-center">
        <div className="pointer-events-none absolute left-0 top-0 h-48 w-full rotate-180 opacity-20">
          <img
            src={floralTexture}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 h-48 w-full opacity-30">
          <img
            src={floralTexture}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        <div className="butterfly-closing butterfly-1">
          <img
            src={butterflyImage}
            alt=""
            className="h-full w-full object-contain"
          />
        </div>

        <div className="butterfly-closing butterfly-2">
          <img
            src={butterflyImage}
            alt=""
            className="h-full w-full object-contain"
          />
        </div>

        <div className="butterfly-closing butterfly-3">
          <img
            src={butterflyImage}
            alt=""
            className="h-full w-full object-contain"
          />
        </div>

        <section className="animate-fade-in relative z-10 mt-8">
          <div className="mx-auto mb-8 h-44 w-44 overflow-hidden rounded-full border-4 border-white shadow-[0_20px_50px_rgba(112,86,108,0.12)]">
            <img
              src={familyPhoto}
              alt="Family photo"
              className="h-full w-full object-cover"
            />
          </div>

          <h1 className="mb-2 font-cinzel text-2xl font-semibold leading-[1.5] tracking-[0.1em] text-[#70566C]">
            Baby Nohelia
          </h1>

          <p className="font-dancing text-[32px] font-normal italic leading-[1.4] text-[#70566C]">
            We can’t wait to see you there.
          </p>

          <span className="material-symbols-outlined mt-6 scale-125 text-[#D28892]">
            favorite
          </span>
        </section>

        <section className="glass-timer relative z-10 w-full rounded-[32px] px-6 py-8">
          <p className="mb-6 font-montserrat text-xs font-semibold uppercase leading-none tracking-widest text-[#4C444A]">
            Time left until the baby shower
          </p>

          <div className="grid grid-cols-3 gap-3">
            {countdown.map(([label, value]) => (
              <div key={label} className="rounded-2xl bg-white/60 px-3 py-4">
                <span className="block font-cinzel text-2xl font-semibold leading-[1.5] text-[#70566C]">
                  {String(value).padStart(2, "0")}
                </span>
                <span className="block font-montserrat text-[10px] font-semibold uppercase tracking-[0.2em] text-[#4C444A]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        <footer className="animate-fade-in relative z-10 mb-4">
          <span className="material-symbols-outlined text-[14px] text-[#7E747A]">
            flutter_dash
          </span>

          <p className="mb-1 font-montserrat text-xs font-semibold uppercase leading-none tracking-[0.2em] text-[#4C444A]">
            WITH LOVE,
          </p>

          <p className="font-cinzel text-2xl font-medium leading-[1.5] tracking-normal text-[#70566C]">
            Graciano &amp; Alejandra
          </p>
        </footer>
      </main>
    </section>
  );
}
