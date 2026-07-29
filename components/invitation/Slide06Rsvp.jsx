"use client";

const butterflyImage = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkr-2qkUq9uc-k4aHQXJDZQatpO402zyuYb0t6Nj3VTDs0n6ULNjvJgFXGbmFMGB58teBWLF2p_u2FZnQPJVb2GDMYUzkdzhWLyTer7qxGk7R60_c5yaHERZ8pqdbYwkUKmQUF5A6Ow7cMCGXf9NvmOCKUIsf7D1jT80DsN35JgNG4TmVxqlmkTGceES2lruTtRbGUy3EY4D90ElBVDuVSCw51wzJjUcgDlmkwSjyMRPXDGw-jfKayD0PTPNL4dqH5u1784pjVdJ0';

export default function Slide06Rsvp() {
  return (
    <section
      id="rsvp"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-x-hidden bg-white text-[#1D1B1C]"
    >
      <main className="relative z-20 mx-auto flex min-h-screen w-full max-w-[600px] flex-col items-center justify-center px-6 pb-40 text-center">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <img
            src={butterflyImage}
            alt="Butterfly"
            className="butterfly-rsvp float-animation-1 left-10 top-1/4 h-16 w-16 opacity-60"
          />
          <img
            src={butterflyImage}
            alt="Butterfly"
            className="butterfly-rsvp float-animation-2 right-8 top-1/2 h-12 w-12 opacity-40"
          />
          <img
            src={butterflyImage}
            alt="Butterfly"
            className="butterfly-rsvp float-animation-1 bottom-1/3 left-1/4 h-20 w-20 opacity-50"
          />
        </div>

        <section className="relative z-10">
          <h1 className="fade-in mb-6 font-cinzel text-5xl font-normal leading-[1.2] tracking-widest text-[#70566C]">
            RSVP
          </h1>

          <p className="fade-in-delayed mx-auto mb-8 max-w-md font-montserrat text-lg font-light leading-relaxed text-[#70566C]">
            Please click the RSVP button and kindly let us know if you can make
            it!
          </p>

          <div className="fade-in-delayed glass-timer mx-auto mt-6 inline-flex flex-col rounded-[32px] px-8 py-6">
            <span className="mb-1 font-montserrat text-xs font-semibold uppercase leading-none tracking-[0.2em] text-[#7E747A]">
              BY
            </span>
            <span className="font-montserrat text-lg font-semibold leading-[1.6] text-[#1D1B1C]">
              August 15, 2026
            </span>
          </div>

          <div className="button-fade mt-12">
            <a
              href="https://wa.me/19805791105"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#70566C] px-12 py-4 font-montserrat text-xs font-semibold uppercase tracking-widest text-white shadow-lg shadow-[#70566C]/20 transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Confirm RSVP
            </a>
          </div>

          <p className="button-fade mt-16 font-dancing text-[32px] font-normal leading-[1.4] text-[#70566C]/80">
            Thank you!
          </p>

          <div className="button-fade mt-8">
            <span className="mb-1 block font-montserrat text-xs font-semibold uppercase leading-none tracking-[0.2em] text-[#7E747A]">
              CONTACT
            </span>
            <a
              href="tel:+19805791105"
              className="font-montserrat text-base font-light leading-[1.6] text-[#70566C] transition-opacity hover:opacity-70"
            >
              +1 9805791105
            </a>
          </div>
        </section>
      </main>
    </section>
  );
}
