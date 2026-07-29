"use client";

import { useEffect, useState } from "react";
import ShaderCanvas from "./ShaderCanvas";

const paradeImage = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCobbP2KLndKjC4uSy895939OboL_JMAMhHN7I3hqUJmD4ketDrfoPu8FOdlE5IMFxjeWfRe1Lq5MSyouFG2uUzUccE75Gw73t7dm1MmBwpMigIH--JWNfc2EAqLJl8DPd53qP12Jj2AEiGMy0eG2P8qsntBEeCMfjQVNsknZZReRIy6BGMO9oSaB7uvAtK5CzE5Xi_QbzoLZA0wKlbm3KUIVBXG8Ru_7Qo2VKZRpKzvrOu4UW09OIgvl1z5CyhyX1QmOur5zZTL3w';

const butterflyAssets = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuB4Vn_7sLs-xGVsGm76bDe9cu0oRtOKk1L_c2FARYrSZFCobYwewGK4WYLOH608unsWqYre_jrnyLlBQM6fUvc81IoJ26jzsVZRDBr0S3-vWiw6kYO0f-hlKjep9cTTlAbidvgtK6Wcv-9UF3LMFij3DAzKAjSHpAxTRNaagvQggT-Ou-84QEqaLorKKm27CD78VH9YQcreoUQzWLtZdbMYQCreDmzHHyXMLO05dxdexvXX2ynEBMQTUayHYtHkAfLQ5Zra_inZRnc',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDObpSnm8wUKg2UNXbKFaYdpwufU8ek2TRi5Ob5RtrgI2PYPIqYdOdVvyZAn7inBq-316U3FHSlNYImhmns2axNCk-98kqeVZwuHUCxRKsmODxrsec1gdlFL75Fae2SNonDjIkqmuGDsjv2dHpu-6MsInrcR_rLEh06pkftWVu8J0ynHvtlIUgRniPZDxn_Vh4GnpcKT9ZdJO2ij2B7JGN5umX2QeqjYQpNCJEPsa35wgDIilEVW5TdkCvJ8J6htJVk9IpWwhezOOo',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCnhO_WkvrS_UrukAiaaXwhXvx73VBYR4qtgeRkyrrvpx58fe6TJXXUO-3R-vG6OF5FVdZy-3L30WBTmQxRLcbKzTay5hP3HZ2G53vWT8amcJXjv4y02bN44j9c6GN9uD9FWP9BhFBb_jclJ89hsU3hhXbTrXbRg8jOnBGja0mMyNANyTxE6saw2cYTPovr2TnFXCaTN63yGDGrx21h1W8ThG1D8i0W2QmTvmUdiZrpbM8LFvlSWF8y2eBVZX3FztyDHJd3Skb1xJg',
];

export default function Slide02Blessing() {
  const [butterflies, setButterflies] = useState([]);

  useEffect(() => {
    const generatedButterflies = Array.from({ length: 8 }, (_, index) => {
      const fromLeft = Math.random() > 0.5;
      const startX = fromLeft
        ? Math.random() * 20
        : window.innerWidth - 60 - Math.random() * 20;
      const startY = window.innerHeight - (Math.random() * 60 + 100);
      const duration = 25 + Math.random() * 15;
      const delay = Math.random() * 5;
      const pathType = fromLeft ? "flightPathSideLeft" : "flightPathSideRightReverse";

      return {
        id: index,
        src: butterflyAssets[Math.floor(Math.random() * butterflyAssets.length)],
        left: `${startX}px`,
        top: `${startY}px`,
        animation: `${pathType} ${duration}s linear ${delay}s infinite`,
      };
    });

    setButterflies(generatedButterflies);
  }, []);

  return (
    <section
      id="blessing"
      className="relative flex min-h-screen items-center justify-center overflow-x-hidden bg-[#FFF7F9]"
    >
      <ShaderCanvas />

      <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-[600px] flex-col justify-between overflow-hidden bg-transparent px-6 py-16 md:shadow-none">
        <div className="pointer-events-none absolute inset-0">
          {butterflies.map((butterfly) => (
            <div
              key={butterfly.id}
              className="butterfly slide-2-butterfly"
              style={{
                left: butterfly.left,
                top: butterfly.top,
                animation: butterfly.animation,
              }}
            >
              <div className="butterfly-inner">
                <img
                  src={butterfly.src}
                  alt=""
                  className="h-auto w-full object-contain opacity-70"
                />
              </div>
            </div>
          ))}
        </div>

        <section className="z-10 space-y-4 text-center">
          <h1 className="font-dancing animate-fade-in text-[32px] font-normal leading-[1.4] text-[#70566C]">
            &quot;With God&apos;s blessing, we are happy to celebrate a new bloom&quot;
          </h1>

          <p className="font-cinzel animate-fade-in delay-1 text-base font-light uppercase leading-[1.6] tracking-widest text-[#7E747A]">
            - Graciano &amp; Alejandra
          </p>
        </section>

        <section className="animate-fade-in delay-2 z-10 flex flex-grow items-center justify-center py-8">
          <div className="relative flex w-full justify-center">
            <img
              src={paradeImage}
              alt="Whimsical baby parade"
              className="animate-float h-auto max-w-full object-contain mix-blend-multiply"
            />

            <div className="absolute inset-0 -z-10 scale-75 rounded-full bg-[#70566C]/5 opacity-30 blur-3xl" />
          </div>
        </section>

        <section className="animate-fade-in delay-3 z-10 mb-12 text-center">
          <div className="relative inline-block px-8 py-4">
            <div className="absolute -top-4 left-1/2 h-1 w-8 -translate-x-1/2 rounded-full bg-[#70566C]/20" />

            <h2 className="font-montserrat text-lg font-light italic leading-[1.6] text-[#70566C]">
              A garden of love for our little girl
            </h2>
          </div>
        </section>

        <section className="animate-fade-in delay-3 z-10 -mt-8 mb-12 text-center">
          <h3 className="font-cinzel scale-110 text-5xl font-normal uppercase leading-[1.2] tracking-[0.3em] text-[#70566C]">
            <span className="font-montserrat mt-2 block text-lg font-light leading-[1.6] text-[#D28892]">
              NOHELIA
            </span>
          </h3>
        </section>
      </main>
    </section>
  );
}
