"use client";

import { useEffect, useState } from "react";
import ShaderCanvas from "./ShaderCanvas";

const flowerBouquet = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCE1UO8mAszJ16fSq3f0cqeEzJShQ4xa9fRJoo20N-ctOE1e-C93Rc5MIvvE98gSRkPsVoUVaQV1H-bFT7P1jZiXYxPRSeFKEbMGZ4F-VqkUcT4JIcu8o03B4IK62w3HG0GoF4VzA_P2ePaNx5d1Q9MnpxzBdAioIME5yjjL2AHWRo9Q360xIdBarfI34-60E-mCl_S8s3tNsIHhryEbaB6_AiCtYpPGOOessc6SI5RAv0Am8jSPXkZE76qNSvGst7lCtieQnbEKiY';
const babyClothes = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfbzijJlpWoVqlKWZpASv91gNZFQJEPbjtRdoU8slByAcqJJ9l7qCzLO7BoL7NkofKUtBBlBUVyPmciiGDE35U0Qx1SVkKkevhK_O6WhujyyD83o9GH9HoFbcNG-v86nMq4me08MoM_EMSguPEjvVD-FTaAsGe5qh4Wc1wEc1qpJUtZgxTWPbuQbpNB9AsVgISdu7Tm1q2OptHTfsBiIUkAhaIH0GmtFlBF1IscPCCYNY5QoGG1Yh1m67i5nCRay-P670K0O27jTg';

const butterflyAssets = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuB4Vn_7sLs-xGVsGm76bDe9cu0oRtOKk1L_c2FARYrSZFCobYwewGK4WYLOH608unsWqYre_jrnyLlBQM6fUvc81IoJ26jzsVZRDBr0S3-vWiw6kYO0f-hlKjep9cTTlAbidvgtK6Wcv-9UF3LMFij3DAzKAjSHpAxTRNaagvQggT-Ou-84QEqaLorKKm27CD78VH9YQcreoUQzWLtZdbMYQCreDmzHHyXMLO05dxdexvXX2ynEBMQTUayHYtHkAfLQ5Zra_inZRnc',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCnhO_WkvrS_UrukAiaaXwhXvx73VBYR4qtgeRkyrrvpx58fe6TJXXUO-3R-vG6OF5FVdZy-3L30WBTmQxRLcbKzTay5hP3HZ2G53vWT8amcJXjv4y02bN44j9c6GN9uD9FWP9BhFBb_jclJ89hsU3hhXbTrXbRg8jOnBGja0mMyNANyTxE6saw2cYTPovr2TnFXCaTN63yGDGrx21h1W8ThG1D8i0W2QmTvmUdiZrpbM8LFvlSWF8y2eBVZX3FztyDHJd3Skb1xJg',
];

export default function Slide01Cover() {
  const [isMusicPlaying, setIsMusicPlaying] = useState(true);
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
      className="relative min-h-screen overflow-x-hidden bg-[#FFF7F9] text-[#1D1B1C] selection:bg-[#B193AB] selection:text-[#432C40]"
    >
      <ShaderCanvas />

      <div className="pointer-events-none fixed inset-0 z-10">
        <div
          className="fade-in-up absolute bottom-0 left-0 w-48 opacity-80 sm:w-64"
          style={{ animationDelay: "0.5s" }}
        >
          <img
            src={flowerBouquet}
            alt="Flower bouquet"
            className="h-auto w-full opacity-95"
          />
        </div>

        <div>
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
                  className="h-auto w-full object-contain opacity-70"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <main className="relative z-20 mx-auto flex min-h-screen w-full max-w-[600px] flex-col items-center justify-start gap-12 px-6 pb-12 text-center">
        <section
          className="fade-in-up flex flex-col gap-2"
          style={{ animationDelay: "0.2s" }}
        >
          <h1 className="font-cinzel mb-4 text-4xl font-normal leading-[1.2] tracking-widest text-[#B193AB]">
            <br />
            Baby
            <span className="block">Nohelia</span>
          </h1>
        </section>

        <section
          className="fade-in-up relative flex aspect-[4/3] w-full items-center justify-center"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="absolute inset-0 -z-10 rounded-full bg-[#B193AB]/10 blur-3xl" />

          <img
            src={babyClothes}
            alt="Delicate baby clothes hanging on a clothesline"
            className="float-slow h-full w-full object-contain"
          />
        </section>

        <section
          className="fade-in-up flex flex-col gap-2"
          style={{ animationDelay: "0.8s" }}
        >
          <p className="font-dancing px-4 text-[32px] font-normal leading-relaxed text-[#D28892]">
            A beautiful baby girl is on the way
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

        <button
          type="button"
          onClick={() => setIsMusicPlaying((current) => !current)}
          className="fade-in-up mt-auto flex cursor-pointer items-center gap-3 rounded-full bg-[#EDE6E8]/60 px-6 py-3 backdrop-blur-md"
          style={{ animationDelay: "1.2s" }}
          aria-pressed={isMusicPlaying}
        >
          <div className="flex h-3 items-end gap-[2px] text-[#B193AB]">
            {[0.1, 0.3, 0.2, 0.4].map((delay) => (
              <div
                key={delay}
                className="music-bar"
                style={{
                  animationDelay: `${delay}s`,
                  animationPlayState: isMusicPlaying ? "running" : "paused",
                }}
              />
            ))}
          </div>

          <span className="font-montserrat text-[10px] font-semibold uppercase tracking-widest text-[#B193AB]">
            {isMusicPlaying ? "Lullaby Playing" : "Music Paused"}
          </span>
        </button>
      </main>
    </section>
  );
}
