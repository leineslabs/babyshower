"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

const floralHeader = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkxo08CPWd0gdiD2ZhV9R3Ng9JQtGIcxma3aKK8q8z9TQI_kdzQ-d9HWznAlvqbglY4lRmwKtHapNoNM5PyLjj8Yi5ikV31EsG-0wWzyX2I75CqXu7PrEN_hXn_RBjj1z_eAgcQIhd2ExDHKyfjR9XdWTmvCJXrupBO4Ah3ksIkqrcPxOCnOW2cfeItrtYnYH8gELKvX-Ym40CisVW3V1MCCDU75SqqsP6mZoLvM9x97ijSFvLbwASKM1l4vCSm5TwoX0Fn454BIM';
const clothesImage = 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2ipKEJOWhnpoYiAR1SIZpC0xoSvCL125F1YJjd1Q-75LbIaKdDvo79nG7ZybGpT0hh8FHGxoDXgeV_JG0apgQeAguPFtaD_tz22lC4F-nLM1LVLBoR16VFm7tAM9SnInYVM8lJGYXBPvRwxMm2YVkhwurSg9AR0NVOD_p0xudpMEwJ9StmMWA5ghg9Np8kwomVCtxEc_11gm-gOlCXr9e2VwilzDwXCTP_uiijBkjwaBV_Ifg5y-Q4dJV3MFi-gz21hJFfY4UYKU';
const butterflyImage = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCB_j-IMYpwvAl6cCDKKqVJPZAMUzZjNnnBhlM9OLBfnoNldaeLfJ-pnsGB0qD7r6cCWUSSCcNvqSzjsQwmj3vx5iBQjeJM7EWzW2htyzxCIbFSlTCHR0wj30oJ__En78aVWeX7EwtcPpSJoIX4gJB_gOxJ_JB7bXibu854XMyaEuJ9VA5SDNmdWWyuJ8-dDuY9mABnn4WHyMIBRq0byU8bq7xvgjZBRTrICMURmlPfJnWWP347Wl1OvJC1wQ07BkVB2hlv4nuvdps';

const paletteColors = [
  { key: "softPink", color: "#F8D7DA" },
  { key: "lavender", color: "#B193AB" },
  { key: "sageGreen", color: "#A4A792" },
  { key: "paleYellow", color: "#F9EECF" },
];

export default function Slide04DressCode() {
  const { t } = useLanguage();

  return (
    <section
      id="dress-code"
      className="paper-texture relative flex min-h-[100svh] flex-col items-center overflow-hidden bg-white text-[#1D1B1C]"
    >
    
      <main className="relative z-10 flex w-full max-w-[600px] flex-1 flex-col items-center px-6 py-12">
        <div className="animate-sway mb-12 w-full">
          <img
            src={floralHeader}
            alt="Baby couture floral elements"
            className="mx-auto w-48 object-contain"
          />
        </div>

        <div className="mb-8 text-center">
          <h2 className="animate-fade-slide-up mb-4 font-cinzel text-4xl font-normal leading-[1.2] text-[#70566C]">
            {t.dressCode.title}
          </h2>

          <div className="animate-fade-slide-up-delay-1 my-8 flex w-full justify-center">
            <img
              src={clothesImage}
              alt="Baby clothes illustration"
              className="w-64 object-contain"
            />
          </div>

          <p className="animate-fade-slide-up-delay-2 mb-12 font-dancing text-[32px] font-normal leading-[1.4] text-[#D0C6A9]">
            {t.dressCode.body}
          </p>
        </div>

        <div className="grid w-full grid-cols-2 gap-6">
          {paletteColors.map((item, index) => (
            <div
              key={item.key}
              className="palette-reveal flex flex-col items-center gap-3"
              style={{ animationDelay: `${0.3 + index * 0.2}s` }}
            >
              <div
                className="h-20 w-20 rounded-full border border-white/80 shadow-[0_10px_30px_rgba(112,86,108,0.12)]"
                style={{ backgroundColor: item.color }}
              />
              <span className="font-montserrat text-xs font-semibold uppercase leading-none tracking-[0.2em] text-[#4C444A]/60">
                {t.dressCode.palette[item.key]}
              </span>
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute left-[-2rem] top-[30%] h-28 w-28 animate-flutter opacity-70">
          <img
            src={butterflyImage}
            alt="Watercolor butterfly illustration"
            className="h-full w-full object-contain"
          />
        </div>

        <div className="pointer-events-none absolute bottom-24 right-[-1rem] h-32 w-32 animate-flutter delay-2 opacity-70">
          <img
            src={butterflyImage}
            alt="Watercolor butterfly decoration"
            className="h-full w-full scale-x-[-1] object-contain opacity-70"
          />
        </div>

        <div className="mt-14 flex w-full items-center justify-center gap-2">
          <div className="h-px flex-1 bg-[#CFC3CA]" />
          <span className="material-symbols-outlined bg-white px-2 text-xl text-[#70566C]">
            favorite
          </span>
          <div className="h-px flex-1 bg-[#CFC3CA]" />
        </div>
      </main>
    </section>
  );
}
