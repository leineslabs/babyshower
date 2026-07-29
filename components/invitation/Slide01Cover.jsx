"use client";

import { useEffect, useState } from "react";
import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const flowerBouquet = `${basePath}/assets/images/tulip-bouquet-clean.png`;

const babyClothes =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCfbzijJlpWoVqlKWZpASv91gNZFQJEPbjtRdoU8slByAcqJJ9l7qCzLO7BoL7NkofKUtBBlBUVyPmciiGDE35U0Qx1SVkKkevhK_O6WhujyyD83o9GH9HoFbcNG-v86nMq4me08MoM_EMSguPEjvVD-FTaAsGe5qh4Wc1wEc1qpJUtZgxTWPbuQbpNB9AsVgISdu7Tm1q2OptHTfsBiIUkAhaIH0GmtFlBF1IscPCCYNY5QoGG1Yh1m67i5nCRay-P670K0O27jTg";

const butterflyAssets = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB4Vn_7sLs-xGVsGm76bDe9cu0oRtOKk1L_c2FARYrSZFCobYwewGK4WYLOH608unsWqYre_jrnyLlBQM6fUvc81IoJ26jzsVZRDBr0S3-vWiw6kYO0f-hlKjep9cTTlAbidvgtK6Wcv-9UF3LMFij3DAzKAjSHpAxTRNaagvQggT-Ou-84QEqaLorKKm27CD78VH9YQcreoUQzWLtZdbMYQCreDmzHHyXMLO05dxdexvXX2ynEBMQTUayHYtHkAfLQ5Zra_inZRnc",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCnhO_WkvrS_UrukAiaaXwhXvx73VBYR4qtgeRkyrrvpx58fe6TJXXUO-3R-vG6OF5FVdZy-3L30WBTmQxRLcbKzTay5hP3HZ2G53vWT8amcJXjv4y02bN44j9c6GN9uD9FWP9BhFBb_jclJ89hsU3hhXbTrXbRg8jOnBGja0mMyNANyTxE6saw2cYTPovr2TnFXCaTN63yGDGrx21h1W8ThG1D8i0W2QmTvmUdiZrpbM8LFvlSWF8y2eBVZX3FztyDHJd3Skb1xJg",
];

const SPOTIFY_TRACK_URL =
  "https://open.spotify.com/intl-es/track/6XDcPFkoOIq7HSYPPsISMK?si=81cfe9520fcb4b99";

export default function Slide01Cover() {
  const { t } = useLanguage();
  const [butterflies, setButterflies] = useState([]);

  useEffect(() => {
    const generatedButterflies = Array.from({ length: 4 }, (_, index) => {
      const startX = Math.random() * 30 - 10;
      const startY = window.innerHeight - (Math.random() * 60 + 40);
      const duration = 25 + Math.random() * 15;
      const delay = Math.random() * 10;
      const pathType =
        Math.random() > 0.5 ? "flightPathSideLeft" : "flightPathSideRight";

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
      id="cover"
      className="relative isolate min-h-[100svh] overflow-hidden bg-white text-[#1D1B1C] selection:bg-[#B193AB] selection:text-[#432C40]"
    >
      {/* Soft white background, no ShaderCanvas on cover to avoid gray/pink mobile artifacts */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-white" />

      {/* Very subtle romantic glow, kept white/pale so transitions remain smooth */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-white" />

      {/* Decorative elements are clipped inside cover only */}
      <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
        {/* Flowers: no mix-blend-multiply, no mask, no gray square */}
        <div
          className="fade-in-up absolute bottom-[6.5rem] left-[-1.25rem] w-40 sm:bottom-8 sm:left-0 sm:w-64"
          style={{ animationDelay: "0.5s" }}
        >
      <div
          className="overflow-hidden"
          style={{
            WebkitMaskImage:
              "linear-gradient(to top, black 0%, black 62%, transparent 100%)",
            maskImage:
              "linear-gradient(to top, black 0%, black 62%, transparent 100%)",
          }}
        >
          <img
            src={flowerBouquet}
            alt=""
            aria-hidden="true"
            className="h-auto w-full object-contain"
            style={{
              filter: "brightness(1.06) saturate(1.08)",
            }}
          />
        </div>
      </div>

        {butterflies.map((butterfly) => (
          <div
            key={butterfly.id}
            className="butterfly"
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
                aria-hidden="true"
                className="h-auto w-full object-contain opacity-70"
              />
            </div>
          </div>
        ))}
      </div>

      <main className="relative z-20 mx-auto flex min-h-[100svh] w-full max-w-[600px] flex-col items-center justify-start gap-10 px-6 pb-28 pt-6 text-center">
        <LanguageSelector />

        <section
          className="fade-in-up flex flex-col gap-2"
          style={{ animationDelay: "0.2s" }}
        >
          <h1 className="font-cinzel mb-2 text-4xl font-normal leading-[1.2] tracking-widest text-[#B193AB]">
            <span className="block">{t.cover.titleLine1}</span>
            <span className="block">{t.cover.titleLine2}</span>
          </h1>
        </section>

        <section
          className="fade-in-up relative flex aspect-[4/3] w-full max-w-[430px] items-center justify-center"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="absolute inset-0 -z-10 rounded-full bg-[#B193AB]/8 blur-3xl" />

          <img
            src={babyClothes}
            alt="Delicate baby clothes hanging on a clothesline"
            className="float-slow h-full w-full object-contain"
            style={{
              filter: "brightness(1.04) saturate(1.06)",
            }}
          />
        </section>

        <section
          className="fade-in-up flex flex-col gap-2"
          style={{ animationDelay: "0.8s" }}
        >
          <p className="font-dancing px-3 text-[32px] font-normal leading-relaxed text-[#D28892]">
            {t.cover.tagline}
          </p>

          <div className="mt-4 flex flex-col items-center gap-2">
            <div className="mb-2 h-px w-12 bg-[#CFC3CA]" />

            <time
              dateTime="2026-08-29"
              className="font-montserrat text-xs font-semibold uppercase leading-none tracking-[0.3em] text-[#655E46]"
            >
              August 29, 2026
            </time>

            <div className="mt-2 h-px w-12 bg-[#CFC3CA]" />
          </div>
        </section>

        <a
          href={SPOTIFY_TRACK_URL}
          target="_blank"
          rel="noreferrer"
          className="fade-in-up inline-flex items-center gap-2 rounded-full bg-[#F7EEF3]/80 px-6 py-3 shadow-[0_10px_30px_rgba(177,147,171,0.18)] backdrop-blur-md transition-colors hover:bg-[#F2E4EC]"
          style={{ animationDelay: "1.2s" }}
        >
          <span className="text-sm leading-none text-[#B193AB]">♫</span>
          <span className="font-montserrat text-[10px] font-semibold uppercase tracking-widest text-[#8F7088]">
            {t.cover.spotifyButton}
          </span>
        </a>
      </main>
    </section>
  );
}
