"use client";

import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    q: "I've never coded before. Can I join?",
    a: "Absolutely. Falling Sun is beginner-friendly. You can learn as you go, build with teammates, and ask mentors for help.",
  },
  {
    q: "How big can my team be?",
    a: "Teams can have up to 4 people. You can also participate solo if you prefer.",
  },
  {
    q: "How old do I need to be?",
    a: "Falling Sun is for teens aged 13–18.",
  },
  {
    q: "Does it cost anything?",
    a: "Nope. Falling Sun is 100% free to attend.",
  },
  {
    q: "What can I build?",
    a: "Anything you can imagine — websites, games, apps, hardware projects, experiments, and more.",
  },
  {
    q: "Can I use AI?",
    a: "Yes! AI tools are allowed. Just make sure you understand your project and can explain how it works.",
  },
];

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <main className="faq-page">
      <nav className="faq-nav">
        <Link href="/" className="faq-brand">
          <span className="faq-sun">☀</span>
          FALLING SUN
        </Link>

        <div className="faq-nav-links">
          <Link href="/">HOME</Link>
          <Link href="/team">TEAM</Link>
          <Link href="/codeofconduct">CODE OF CONDUCT</Link>
        </div>

        <Link href="/register" className="faq-nav-cta">
          REGISTER ↗
        </Link>
      </nav>

      <section className="faq-hero">
        <div className="faq-hero-star">✦</div>

        <p className="faq-eyebrow">
          FALLING SUN · NEED TO KNOW
        </p>

        <h1>
          GOT
          <br />
          <span>QUESTIONS?</span>
        </h1>

        <p className="faq-intro">
          Everything you need to know before you step into the sun.
          If your question isn't here, reach out to the team.
        </p>
      </section>

      <section className="faq-list-section">
        <div className="faq-section-label">
          <span>01</span>
          THE BASICS
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = open === index;

            return (
              <div
                className={`faq-item ${isOpen ? "is-open" : ""}`}
                key={faq.q}
              >
                <button
                  className="faq-question"
                  onClick={() => setOpen(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-number">
                    0{index + 1}
                  </span>

                  <span className="faq-question-text">
                    {faq.q}
                  </span>

                  <span className="faq-plus">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="faq-bottom">
        <div className="faq-bottom-card">
          <span className="faq-bottom-icon">☀</span>

          <div>
            <p className="faq-bottom-kicker">
              STILL CURIOUS?
            </p>

            <h2>
              COME BUILD
              <br />
              <span>WITH US.</span>
            </h2>

            <p>
              The best way to understand Falling Sun is to
              experience it.
            </p>
          </div>

          <Link href="/register" className="faq-register">
            REGISTER NOW ↗
          </Link>
        </div>
      </section>

      <footer className="faq-footer">
        <Link href="/" className="faq-footer-brand">
          ☀ FALLING SUN
        </Link>

        <div className="faq-footer-links">
          <Link href="/team">TEAM ↗</Link>
          <Link href="/faq">FAQ ↗</Link>
          <Link href="/codeofconduct">CODE OF CONDUCT ↗</Link>
          <Link href="/register">REGISTER ↗</Link>
        </div>

        <p>© 2026 FALLING SUN · DELHI-NCR</p>
      </footer>
    </main>
  );
}
