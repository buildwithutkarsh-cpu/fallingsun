"use client";

import { FormEvent, useState } from "react";

const steps = [
  {
    number: "01",
    title: "SPARK",
    text: "Start with an idea or prompt. Dream big, then pick something you can actually ship.",
  },
  {
    number: "02",
    title: "SHIP",
    text: "Turn the idea into a prototype using web, mobile, AI, hardware, or anything you love.",
  },
  {
    number: "03",
    title: "LEVEL UP",
    text: "Learn from workshops and mentors while you build, debug, experiment and improve.",
  },
  {
    number: "04",
    title: "FLEX",
    text: "Demo your project live, publish it online, and leave with new skills and connections.",
  },
];

const faqs = [
  {
    question: "Can I join if I'm a beginner?",
    answer:
      "Absolutely! Falling Sun is beginner to elite friendly. Mentors and zero-judgment zones are available to help you build your first project.",
  },
  {
    question: "Can I work in teams?",
    answer:
      "Yes! You can participate solo or form a team of up to 4 members.",
  },
  {
    question: "Am I eligible?",
    answer:
      "Falling Sun is exclusively for high schoolers and teen hackers ages 13–18. Participants under 18 require signed parent/guardian consent.",
  },
  {
    question: "Is this free?",
    answer:
      "100% free. Venue access, Wi-Fi, hardware kits, meals, and merch are completely covered.",
  },
  {
    question: "What are the project requirements?",
    answer:
      "Projects must be original work created during the hackathon. Source code must be on a public GitHub. You retain 100% ownership.",
  },
  {
    question: "Can I use AI?",
    answer:
      "Yes, but AI-assisted work is limited to 40% of the project. Descriptions and submissions must be written by the participants themselves.",
  },
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email.trim()) return;

    setSubmitted(true);
  }

  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* NAVIGATION */}
      <header className="topbar">
        <div className="wrap">
          <nav className="nav">
            <a href="#top" className="brand">
              <span className="brand-mark">☀</span>
              <span>FALLING SUN</span>
            </a>

            <div className="navlinks">
              <a href="#about">ABOUT</a>
              <a href="#how">HOW IT WORKS</a>
              <a href="#faq">FAQ</a>

              <a href="#signup" className="nav-cta">
                SIGN UP →
              </a>
            </div>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero" id="top">
          <div className="hero-overlay" />

          <div className="wrap hero-inner">
            <div className="eyebrow">
              STUDENT HACKATHON · DELHI-NCR
            </div>

            <h1>
              FALLING
              <br />
              SUN
            </h1>

            <p className="hero-copy">
              India&apos;s under-19 retro-tech hackathon. Bring an idea, grab
              your friends, and build something awesome in 24 hours.
            </p>

            <form className="signup" onSubmit={handleSubmit}>
              <input
                type="email"
                aria-label="Email address"
                placeholder="you@example.com"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setSubmitted(false);
                }}
                required
              />

              <button className="button" type="submit">
                {submitted ? "YOU'RE IN! ✓" : "START NOW →"}
              </button>
            </form>

            <div className="hero-note">
              13–18 · BEGINNER FRIENDLY · 100% FREE
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="section" id="about">
          <div className="wrap">
            <div className="section-head">
              <div className="section-kicker">so... what&apos;s this?</div>

              <h2>
                BUILD. LEARN.
                <br />
                SHIP IT.
              </h2>

              <p className="lead">
                Falling Sun is a 24-hour, under-19 hackathon happening live in
                Delhi-NCR. Build with hardware, web, mobile, AI, or whatever
                weird idea you want to turn into a real prototype.
              </p>
            </div>

            <div className="intro">
              <article className="paper-card orange">
                <div className="stamp">THE MISSION</div>

                <div className="big-stat">24H</div>

                <h3>Make something real.</h3>

                <p>
                  Bring your idea to life during an intense sprint with
                  mentors, workshops, hardware and resources funded by us.
                </p>
              </article>

              <article className="paper-card green">
                <div className="stamp">WHO&apos;S INVITED?</div>

                <div className="big-stat">13–18</div>

                <h3>From first project to advanced builds.</h3>

                <p>
                  No previous hackathon experience needed. Beginners and
                  experienced builders are both welcome.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section" id="how">
          <div className="wrap">
            <div className="steps">
              <div className="section-kicker yellow-kicker">
                your adventure
              </div>

              <h2>HOW IT WORKS</h2>

              <div className="step-grid">
                {steps.map((step) => (
                  <article className="step" key={step.number}>
                    <div className="step-num">{step.number}</div>

                    <h3>{step.title}</h3>

                    <p>{step.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* LETTER / ABOUT */}
        <section className="section">
          <div className="wrap letter">
            <div
              className="letter-art"
              aria-label="Falling Sun artwork"
              role="img"
            />

            <article className="letter-copy">
              <h2>
                MAKE SOMETHING
                <br />
                YOU&apos;RE PROUD OF.
              </h2>

              <p>
                You don&apos;t need to be an expert hacker. You just need an
                idea and the willingness to make it real. Find teammates, learn
                something new, get unstuck with mentors, and ship before
                sunrise.
              </p>

              <p>
                As long as you build something during the 24 hours, you&apos;ll
                get a certificate and cool merch.
              </p>

              <div className="scribble">
                let&apos;s make something weird ✦
              </div>
            </article>
          </div>
        </section>

        {/* FAQ */}
        <section className="section" id="faq">
          <div className="wrap faq">
            <div className="section-head">
              <div className="section-kicker">
                questions, questions...
              </div>

              <h2>FAQ</h2>
            </div>

            <div className="faq-list">
              {faqs.map((faq) => (
                <details key={faq.question} className="faq-item">
                  <summary>
                    <span>{faq.question}</span>
                    <b>+</b>
                  </summary>

                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="section">
          <div className="wrap">
            <div className="final-cta">
              <div className="sparkle sparkle-one">✦</div>
              <div className="sparkle sparkle-two">✦</div>

              <div className="section-kicker white-kicker">ready?</div>

              <h2>
                COME BUILD
                <br />
                WITH US.
              </h2>

              <p>
                Grab your friends. Bring your laptop. Leave with a project.
              </p>

              <a href="#top" className="button final-button">
                SIGN UP →
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <div className="wrap">
          <strong>A project by the Falling Sun Team</strong>

          <div className="footer-links">
            <a href="#">Instagram</a>
            <a href="#">WhatsApp</a>
            <a href="#">GitHub</a>
          </div>

          <p>Build after dark. Ship before sunrise.</p>
        </div>
      </footer>
    </main>
  );
}
