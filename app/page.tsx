"use client";

import { useState } from "react";

const steps = [
  {
    number: "01",
    title: "SIGN UP",
    text: "Save your spot at Falling Sun and get ready for a weekend of building.",
    image: "/step-1.png",
  },
  {
    number: "02",
    title: "GRAB FRIENDS",
    text: "Bring your friends or meet new people and form a team of 2–3.",
    image: "/step-2.png",
  },
  {
    number: "03",
    title: "BUILD SOMETHING",
    text: "Learn, experiment, hack, design, and turn your idea into something real.",
    image: "/step-3.png",
  },
  {
    number: "04",
    title: "SHIP IT",
    text: "Show everyone what you made and celebrate what you built.",
    image: "/step-4.png",
  },
];

const faqs = [
  {
    q: "What is Falling Sun?",
    a: "Falling Sun is a free, beginner-friendly hackathon where teens come together to learn, build projects, and meet other young makers.",
  },
  {
    q: "Who can participate?",
    a: "Falling Sun is designed for teenagers. You don't need previous hackathon experience to join.",
  },
  {
    q: "I've never hacked before. Can I come?",
    a: "Absolutely. Beginners are welcome. You can learn as you build, ask questions, and work alongside other participants.",
  },
  {
    q: "How much does it cost?",
    a: "Falling Sun is completely free.",
  },
  {
    q: "What should I bring?",
    a: "Bring yourself, a laptop, a charger, and anything else you normally use when building projects.",
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen overflow-hidden bg-[#fff8e9] text-[#20170f]">

      {/* NAV */}
      <nav className="absolute left-0 right-0 top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-10">
          <a
            href="#top"
            className="font-display text-2xl font-black tracking-tight text-white drop-shadow-[3px_3px_0_#20170f]"
          >
            FALLING SUN
          </a>

          <div className="hidden items-center gap-8 text-sm font-bold text-white md:flex">
            <a href="#about" className="transition hover:-translate-y-0.5">
              ABOUT
            </a>
            <a href="#steps" className="transition hover:-translate-y-0.5">
              HOW IT WORKS
            </a>
            <a href="#schedule" className="transition hover:-translate-y-0.5">
              SCHEDULE
            </a>
            <a href="#faq" className="transition hover:-translate-y-0.5">
              FAQ
            </a>
          </div>

          <a
            href="#signup"
            className="rounded-full border-2 border-[#20170f] bg-[#ffcf4a] px-5 py-2.5 text-sm font-black shadow-[3px_3px_0_#20170f] transition hover:-translate-y-0.5 hover:shadow-[5px_5px_0_#20170f]"
          >
            SIGN UP
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="top"
        className="hero-bg relative flex min-h-[760px] items-end overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/35" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 md:px-10 md:pb-28">
          <div className="max-w-5xl">
            <p className="mb-5 inline-block rounded-full border-2 border-[#20170f] bg-[#fff8e9] px-4 py-2 text-sm font-black uppercase shadow-[3px_3px_0_#20170f]">
              A teen hackathon
            </p>

            <h1 className="font-display text-[clamp(5rem,17vw,13rem)] font-black leading-[0.76] tracking-[-0.07em] text-white [text-shadow:6px_6px_0_#20170f]">
              FALLING
              <br />
              SUN
            </h1>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="rounded-2xl border-2 border-[#20170f] bg-[#fff8e9] px-6 py-4 shadow-[5px_5px_0_#20170f]">
                <p className="text-xs font-black uppercase tracking-widest text-[#795d43]">
                  Build. Learn. Meet people.
                </p>
                <p className="mt-1 text-lg font-bold">
                  A weekend to make something awesome.
                </p>
              </div>

              <a
                id="signup"
                href="#register"
                className="inline-flex items-center justify-center rounded-2xl border-2 border-[#20170f] bg-[#ffcf4a] px-8 py-5 text-lg font-black shadow-[5px_5px_0_#20170f] transition hover:-translate-y-1 hover:shadow-[7px_7px_0_#20170f]"
              >
                I'M IN →
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 hidden rotate-3 rounded-xl border-2 border-[#20170f] bg-white px-4 py-3 text-center shadow-[4px_4px_0_#20170f] md:block">
          <p className="font-display text-xl font-black">13–18</p>
          <p className="text-xs font-bold uppercase">years old</p>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-5 py-28 md:px-10">
        <div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr] md:items-start">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#e06b35]">
              Dear hackers,
            </p>

            <h2 className="font-display text-6xl font-black leading-[0.85] tracking-tight md:text-8xl">
              MAKE
              <br />
              SOMETHING
              <br />
              COOL.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 md:text-xl">
            <p>
              Welcome to <strong>Falling Sun</strong>, a place for curious
              teenagers who want to turn ideas into real things.
            </p>

            <p>
              You don't have to be an expert. You don't have to know exactly
              what you're building. Just show up ready to learn, experiment,
              and make something you're proud of.
            </p>

            <p>
              Bring your friends. Meet new people. Spend a weekend building
              something that didn't exist before.
            </p>

            <p className="font-display text-3xl font-black">
              See you at Falling Sun. ☀️
            </p>
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section
        id="steps"
        className="border-y-2 border-[#20170f] bg-[#f2a93b] px-5 py-24 md:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-2xl">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.25em]">
              HOW IT WORKS
            </p>

            <h2 className="font-display text-6xl font-black leading-[0.85] tracking-tight md:text-8xl">
              FOUR STEPS.
              <br />
              ONE WEEKEND.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {steps.map((step) => (
              <article
                key={step.number}
                className="group overflow-hidden rounded-[2rem] border-2 border-[#20170f] bg-[#fff8e9] shadow-[6px_6px_0_#20170f]"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-[#e7d6b5]">
                  <img
                    src={step.image}
                    alt=""
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute left-5 top-5 flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#20170f] bg-[#ffcf4a] font-display text-xl font-black shadow-[3px_3px_0_#20170f]">
                    {step.number}
                  </div>
                </div>

                <div className="p-7 md:p-9">
                  <h3 className="font-display text-4xl font-black">
                    {step.title}
                  </h3>

                  <p className="mt-3 max-w-lg text-lg leading-7 text-[#604c3b]">
                    {step.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section id="schedule" className="px-5 py-28 md:px-10">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#e06b35]">
              THE PLAN
            </p>

            <h2 className="font-display text-7xl font-black leading-[0.8] md:text-9xl">
              SCHEDULE
            </h2>
          </div>

          <div className="space-y-3">
            {[
              ["09:00", "Doors open"],
              ["10:00", "Opening ceremony"],
              ["10:30", "Workshops"],
              ["12:30", "Lunch"],
              ["14:00", "Build time"],
              ["17:00", "Fun stuff"],
              ["18:00", "Show & tell"],
            ].map(([time, event], i) => (
              <div
                key={event}
                className={`grid grid-cols-[90px_1fr] items-center rounded-2xl border-2 border-[#20170f] px-5 py-5 shadow-[3px_3px_0_#20170f] md:grid-cols-[130px_1fr] md:px-7 ${
                  i % 2 === 0 ? "bg-[#fff8e9]" : "bg-[#f7e5c2]"
                }`}
              >
                <span className="font-display text-xl font-black md:text-2xl">
                  {time}
                </span>

                <span className="text-lg font-bold md:text-xl">
                  {event}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="register"
        className="relative overflow-hidden border-y-2 border-[#20170f] bg-[#e86f3d] px-5 py-28 text-center md:px-10"
      >
        <div className="relative z-10 mx-auto max-w-4xl">
          <p className="mb-5 text-sm font-black uppercase tracking-[0.3em]">
            READY?
          </p>

          <h2 className="font-display text-7xl font-black leading-[0.78] tracking-tight md:text-[9rem]">
            LET'S
            <br />
            BUILD.
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-lg font-bold leading-7 md:text-xl">
            Grab your laptop, bring your ideas, and come hang out with us.
          </p>

          <a
            href="#top"
            className="mt-8 inline-flex rounded-2xl border-2 border-[#20170f] bg-[#ffcf4a] px-9 py-5 text-lg font-black shadow-[5px_5px_0_#20170f] transition hover:-translate-y-1 hover:shadow-[7px_7px_0_#20170f]"
          >
            SIGN UP FOR FALLING SUN →
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-5 py-28 md:px-10">
        <div className="mx-auto max-w-4xl">
          <div className="mb-14">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#e06b35]">
              QUESTIONS?
            </p>

            <h2 className="font-display text-7xl font-black leading-[0.8] md:text-9xl">
              FAQ
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const open = openFaq === index;

              return (
                <button
                  key={faq.q}
                  onClick={() => setOpenFaq(open ? null : index)}
                  className="w-full rounded-2xl border-2 border-[#20170f] bg-[#fff8e9] p-6 text-left shadow-[3px_3px_0_#20170f] transition hover:-translate-y-0.5 md:p-7"
                >
                  <div className="flex items-center justify-between gap-6">
                    <span className="font-display text-2xl font-black md:text-3xl">
                      {faq.q}
                    </span>

                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ffcf4a] text-xl font-black">
                      {open ? "−" : "+"}
                    </span>
                  </div>

                  {open && (
                    <p className="mt-5 max-w-3xl text-lg leading-7 text-[#604c3b]">
                      {faq.a}
                    </p>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t-2 border-[#20170f] bg-[#20170f] px-5 py-12 text-[#fff8e9] md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-display text-5xl font-black">FALLING SUN</h2>
            <p className="mt-3 max-w-md text-sm leading-6 text-[#d7c6ae]">
              A teen hackathon built around learning, creativity, friendship,
              and shipping things you care about.
            </p>
          </div>

          <div className="text-sm text-[#d7c6ae]">
            <p>Made with ♥ by teenagers.</p>
            <p className="mt-1">© 2026 Falling Sun</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
