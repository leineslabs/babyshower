"use client";

const butterflyImage = 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9d0AAre369hNO6glcp8DQTu3zdrI0ZHTSC1JkP4d6qIzrREwWWXEMLOHTaLWmQcJb-s_VmKflmdrRemnXY840r1Vy9Gh0aAS_pBrCXLI11HnjbzVS37P7RPQLdxr-D9cEuzSc1Fo-wxKJy2ZiQAN_8zJwc9eij2BEyAHJcqWcTOh90DFm9muv-odw1e0DdfYe8jzSdWOmYDkXqgXuZYwC1Ghltb4-eEGB4CWBAYH8sWdsiGhws-zzcakBZHDzs1n0rpA6y7z1keM';
const elephantGiftImage = 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3AH9iEYGmyW6hSNqEwSr1qBIkacEnz_ybKPQjGfN2Hj7thKHke8wXnNr0pIEVa-3wAPb-83Zw7KnWpvxjvFa38jP7lTfYhmfDauivGmRxatv-y-f0EP7UsoOzmsP-VR_4RamsBC7IvDakth0koLoVdhGczCsVTjEBQmMkGXL0ArTw9CSZqQyE10gNgPAtVAdH6sxdvYHL2BD4Eqa528-Kgw_5d0tCzhfz3Z8WTrYiuzco8wL0J3sgtRgl9UkkNtDz6WoOpW_q8L8';

export default function Slide05Gifts() {
  return (
    <section
      id="gifts"
      className="font-montserrat relative min-h-screen overflow-x-hidden bg-white text-[#1D1B1C]"
    >
      <div className="paper-texture pointer-events-none fixed inset-0 z-0 opacity-20" />

      <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-[600px] flex-col items-center bg-white px-6 pb-32">
        <header className="relative flex w-full justify-center pb-8 pt-12">
          <img
            src={butterflyImage}
            alt="Delicate lavender watercolor butterfly"
            className="animate-float-gifts h-32 w-32 object-contain"
          />
        </header>

        <section className="animate-fade-in text-center">
          <h1 className="mb-4 font-cinzel text-2xl font-semibold leading-[1.5] tracking-[0.3em] text-[#70566C]">
            GIFTS
          </h1>
          <div className="mx-auto h-0.5 w-12 rounded-full bg-[#B193AB] opacity-30" />
        </section>

        <section className="animate-fade-in delay-1 flex w-full justify-center py-16">
          <div className="group relative">
            <img
              src={elephantGiftImage}
              alt="Baby elephant in a basket surrounded by gifts"
              className="h-auto w-full max-w-[400px] object-contain drop-shadow-xl"
            />

            <div className="absolute -right-4 top-4 h-20 w-20 animate-float-gifts opacity-60">
              <img
                src={butterflyImage}
                alt="Small decorative butterfly"
                className="h-full w-full scale-50 object-contain"
              />
            </div>
          </div>
        </section>

        <section className="animate-fade-in delay-2 w-full text-center">
          <p className="mx-auto max-w-[320px] text-lg font-light leading-relaxed text-[#4C444A]">
            We appreciate your kindness. Click to check the baby list
          </p>

          <a
            href="#"
            className="watercolor-shadow group relative mt-10 block overflow-hidden rounded-xl border border-white bg-[#F9F2F4] p-8 transition-all hover:scale-[1.02]"
          >
            <span className="material-symbols-outlined mb-3 scale-110 text-[#70566C]">
              card_giftcard
            </span>

            <h3 className="mb-1 font-montserrat text-xs font-semibold uppercase leading-none tracking-widest text-[#70566C]">
              Amazon Baby registry
            </h3>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/70 px-5 py-3 text-[#70566C]">
              <span className="font-montserrat text-[10px] font-semibold tracking-widest">
                VER MESA DE REGALOS
              </span>
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </div>
          </a>
        </section>

        <section className="animate-fade-in delay-3 mt-16 text-center">
          <span className="material-symbols-outlined text-[#70566C]">
            favorite
          </span>

          <p className="font-dancing text-[32px] font-normal leading-tight text-[#70566C]">
            Thank you! We can’t wait to shower this baby and celebrate with you
          </p>
        </section>

        <img
          src={butterflyImage}
          alt="Decorative background butterfly"
          className="pointer-events-none absolute bottom-20 left-3 h-24 w-24 rotate-[-15deg] opacity-20"
        />

        <img
          src={butterflyImage}
          alt="Decorative background butterfly"
          className="pointer-events-none absolute right-6 top-1/2 h-20 w-20 rotate-[25deg] opacity-20"
        />
      </main>

      <nav className="fixed bottom-0 left-0 right-0 z-50 mx-auto flex w-full max-w-[600px] items-center justify-around bg-white/70 px-6 pb-8 pt-4 backdrop-blur-lg">
        {[
          ["cover", "home", false],
          ["location", "calendar_today", false],
          ["location", "location_on", false],
          ["gifts", "card_giftcard", true],
          ["closing", "schedule", false],
        ].map(([target, icon, active]) => (
          <a
            key={`${target}-${icon}`}
            href={`#${target}`}
            className={
              active
                ? "flex items-center justify-center rounded-full bg-[#B193AB] p-2 text-[#432C40] scale-110"
                : "flex items-center justify-center p-2 text-[#7E747A] transition-colors hover:text-[#70566C]"
            }
          >
            <span className="material-symbols-outlined">{icon}</span>
          </a>
        ))}
      </nav>
    </section>
  );
}
