"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const faqs = [
  {
    q: "I've never coded before. Can I join?",
    a: "Absolutely. Falling Sun is beginner-friendly. We'll have mentors, resources, and plenty of people around to help you get unstuck.",
  },
  {
    q: "How big can my team be?",
    a: "Teams can have up to 4 people. You can also build solo if that's your thing.",
  },
  {
    q: "How old do I need to be?",
    a: "Falling Sun is for students aged 13–18.",
  },
  {
    q: "Does it cost anything?",
    a: "Nope. Falling Sun is completely free.",
  },
  {
    q: "What can I build?",
    a: "Pretty much anything you can imagine: websites, games, apps, hardware projects, weird experiments, creative tools, or something nobody has thought of yet.",
  },
  {
    q: "Can I use AI?",
    a: "Yes. AI tools are allowed. We care about what you create, what you learn, and whether you understand and can explain your project.",
  },
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email.trim()) return;

    setSubmitted(true);
  }

  return (
    <div className="site-shell">
      {/* =========================================================
          NAVBAR
      ========================================================== */}
      <header className="topbar-wrap">
        <nav className="topbar">
          <a href="#" className="brand" aria-label="Falling Sun home">
            <span className="brand-sun">
              <span />
            </span>

            <span className="brand-text">
              FALLING
              <strong>SUN</strong>
            </span>
          </a>

          <div className="nav-links">
            <a href="#about">ABOUT</a>
            <a href="#adventure">HOW IT WORKS</a>
            <Link href="/team">TEAM</Link>
            <Link href="/faq">FAQ</Link>
          </div>

          <Link href="/register" className="nav-cta">
            REGISTER <span>↗</span>
          </Link>
        </nav>
      </header>

      <main>
        {/* =========================================================
            HERO
        ========================================================== */}
        <section className="hero" id="signup">
          <div className="hero-bg" />

          <div className="hero-noise" />

          <div className="hero-sun-glow" />

          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />

          <div className="hero-star star-one">✦</div>
          <div className="hero-star star-two">✶</div>
          <div className="hero-star star-three">✦</div>

          <div className="hero-content">
            <div className="eyebrow hero-eyebrow">
              <span>✦</span>
              STUDENT HACKATHON · DELHI-NCR
            </div>

            <div className="hero-title-wrap">
              <span className="hero-side-note">EST. 2026</span>

              <h1 className="hero-title">
                <span>FALLING</span>
                <span className="hero-title-sun">SUN</span>
              </h1>

              <span className="hero-side-note hero-side-note-right">
                24 HOURS
              </span>
            </div>

            <p className="hero-description">
              India&apos;s under-19 retro-tech hackathon.
              <br />
              Bring an idea, grab your friends, and
              <br className="desktop-only" />
              build something awesome in 24 hours.
            </p>

            <div className="hero-actions">
              <Link href="/register" className="big-button orange-button">
                REGISTER NOW <span>↗</span>
              </Link>

              <a href="#adventure" className="big-button white-button">
                HOW IT WORKS <span>↗</span>
              </a>
            </div>

            <div className="hero-note">
              <span>13–18</span>
              <i />
              BEGINNER FRIENDLY
              <i />
              100% FREE
            </div>
          </div>

          <div className="scroll-cue">
            <span>SCROLL TO DISCOVER</span>
            <div className="scroll-line" />
          </div>

          <div className="hero-sticker">
            <span>BUILD</span>
            <strong>YOUR</strong>
            <span>THING!</span>
            <b>↘</b>
          </div>
        </section>

        {/* =========================================================
            MARQUEE
        ========================================================== */}
        <section className="marquee">
          <div className="marquee-track">
            <span>BUILD SOMETHING WEIRD</span>
            <b>✦</b>
            <span>SHIP IT</span>
            <b>✦</b>
            <span>MAKE FRIENDS</span>
            <b>✦</b>
            <span>BREAK THE INTERNET</span>
            <b>✦</b>
            <span>BUILD SOMETHING WEIRD</span>
            <b>✦</b>
            <span>SHIP IT</span>
            <b>✦</b>
          </div>
        </section>

        {/* =========================================================
            VIDEO
        ========================================================== */}
        <section className="video-section">
          <div className="section-wrap">
            <div className="video-intro reveal">
              <div>
                <p className="hand-kicker">the falling sun feeling</p>
                <h2>
                  THIS ISN&apos;T
                  <br />
                  <span>JUST A HACKATHON.</span>
                </h2>
              </div>

              <p className="video-intro-copy">
                It&apos;s one night of ideas, caffeine, chaos, friendship,
                debugging, and that magical moment when your weird idea
                actually works.
              </p>
            </div>

            <div className="video-frame reveal">
              <div className="video-tape tape-left">FALLING SUN</div>
              <div className="video-tape tape-right">WATCH THIS</div>

              <div className="video-window">
                <video
                  src="/fallingsun.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />

                <div className="video-overlay">
                  <div className="video-corner top-left">FS / 001</div>
                  <div className="video-corner top-right">24H</div>
                  <div className="video-corner bottom-left">
                    DELHI-NCR / INDIA
                  </div>
                  <div className="video-corner bottom-right">REC ●</div>

                  <div className="video-play-mark">✦</div>
                </div>
              </div>

              <div className="video-caption">
                <span>01 — AFTER DARK</span>
                <strong>MAKE SOMETHING THAT DIDN&apos;T EXIST YESTERDAY.</strong>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            ABOUT
        ========================================================== */}
        <section className="section about-section" id="about">
          <div className="section-wrap">
            <div className="section-heading reveal">
              <div>
                <p className="hand-kicker">so... what&apos;s this?</p>
                <h2>
                  BUILD.
                  <br />
                  <span>LEARN.</span>
                  <br />
                  SHIP IT.
                </h2>
              </div>

              <div className="heading-side">
                <span>01 / ABOUT</span>
                <p>
                  A 24-hour creative coding adventure for the next generation
                  of builders.
                </p>
              </div>
            </div>

            <div className="about-grid">
              <article className="about-card about-card-main reveal">
                <div className="card-number">01</div>

                <div className="card-sun">
                  <span />
                </div>

                <p className="card-kicker">THE MISSION</p>

                <h3>
                  Make the thing
                  <br />
                  you&apos;ve been
                  <br />
                  thinking about.
                </h3>

                <p className="card-body">
                  Falling Sun is a place to stop overthinking and start
                  building. You bring the idea. We bring the people, energy,
                  mentors, and excuse to stay up way too late making it real.
                </p>

                <span className="card-arrow">↗</span>
              </article>

              <div className="about-stack">
                <article className="stat-card orange-card reveal">
                  <span className="stat-label">TIME TO BUILD</span>
                  <strong>24<span>H</span></strong>
                  <p>One ridiculous, wonderful day.</p>
                  <div className="scribble">NO SLEEP :)</div>
                </article>

                <article className="stat-card green-card reveal">
                  <span className="stat-label">WHO CAN JOIN</span>
                  <strong>13–18</strong>
                  <p>
                    Students from Delhi-NCR and beyond. Beginners absolutely
                    welcome.
                  </p>
                  <div className="green-stamp">OPEN<br />TO ALL</div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            BIG IMAGE BREAK
        ========================================================== */}
        <section className="image-break">
          <div className="image-break-bg" />

          <div className="image-break-content reveal">
            <span>THE SUN IS FALLING.</span>
            <strong>ARE YOU BUILDING?</strong>
            <a href="#adventure">LET&apos;S GO →</a>
          </div>

          <div className="image-break-number">02</div>
        </section>

        {/* =========================================================
            HOW IT WORKS
        ========================================================== */}
        <section className="adventure" id="adventure">
          <div className="adventure-bg-word">CAMP!</div>

          <div className="section-wrap">
            <div className="adventure-heading reveal">
              <div>
                <p className="hand-kicker cream-kicker">your adventure</p>
                <h2>
                  FROM
                  <br />
                  <span>ZERO</span>
                  <br />
                  TO SHIPPED.
                </h2>
              </div>

              <div className="adventure-copy">
                <span>02 / HOW IT WORKS</span>
                <p>
                  No lectures. No boring slides. Just a room full of curious
                  people building things together.
                </p>
              </div>
            </div>

            <div className="steps">
              <article className="step step-one reveal">
                <span className="step-number">01</span>
                <div className="step-icon">✦</div>
                <p>SPARK</p>
                <h3>GET<br />AN IDEA.</h3>
                <span className="step-note">
                  Something weird is usually better.
                </span>
              </article>

              <article className="step step-two reveal">
                <span className="step-number">02</span>
                <div className="step-icon">↗</div>
                <p>SHIP</p>
                <h3>BUILD<br />THE THING.</h3>
                <span className="step-note">
                  Code. Design. Experiment. Break stuff.
                </span>
              </article>

              <article className="step step-three reveal">
                <span className="step-number">03</span>
                <div className="step-icon">★</div>
                <p>LEVEL UP</p>
                <h3>ASK.<br />LEARN.</h3>
                <span className="step-note">
                  Mentors and friends have your back.
                </span>
              </article>

              <article className="step step-four reveal">
                <span className="step-number">04</span>
                <div className="step-icon">☀</div>
                <p>FLEX</p>
                <h3>SHOW<br />IT OFF.</h3>
                <span className="step-note">
                  Demo day. Big energy. Bigger bragging rights.
                </span>
              </article>
            </div>

            <div className="adventure-footer reveal">
              <span>THAT&apos;S IT.</span>
              <strong>NOW MAKE SOMETHING.</strong>
              <span>→</span>
            </div>
          </div>
        </section>

        {/* =========================================================
            LETTER
        ========================================================== */}
        <section className="letter-section">
          <div className="section-wrap">
            <div className="letter-grid">
              <div className="letter-art reveal">
                <div className="letter-art-image" />

                <div className="letter-art-overlay">
                  <span>DEAR</span>
                  <strong>HACKER</strong>
                  <small>WE SAVED YOU A SEAT.</small>
                </div>

                <div className="letter-sticker">✦<br />HELLO<br />WORLD</div>
              </div>

              <article className="letter-paper reveal">
                <span className="letter-label">DEAR HACKER,</span>

                <h2>
                  YOUR NEXT
                  <br />
                  <span>BIG IDEA</span>
                  <br />
                  STARTS HERE.
                </h2>

                <p>
                  Maybe you&apos;ve been coding for years. Maybe you&apos;ve
                  never opened a code editor. Maybe you have an idea at 2AM
                  that you can&apos;t stop thinking about.
                </p>

                <p>
                  That&apos;s exactly who Falling Sun is for.
                </p>

                <p>
                  Come with your friends. Come alone. Come with a half-baked
                  idea and a laptop at 2% battery. We&apos;ll figure out the
                  rest together.
                </p>

                <div className="signature">
                  <span>see you after sunset,</span>
                  <strong>— the falling sun team</strong>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* =========================================================
            FAQ
        ========================================================== */}
        <section className="faq-section" id="faq">
          <div className="section-wrap faq-wrap">
            <div className="faq-heading reveal">
              <p className="hand-kicker">you probably have questions</p>
              <h2>
                ASK
                <br />
                <span>AWAY.</span>
              </h2>
              <div className="faq-doodle">✦</div>
            </div>

            <div className="faq-list">
              {faqs.map((faq, index) => (
                <details
                  className="faq-item reveal"
                  key={faq.q}
                  open={index === 0}
                >
                  <summary>
                    <span className="faq-index">
                      0{index + 1}
                    </span>
                    <strong>{faq.q}</strong>
                    <span className="faq-plus">+</span>
                  </summary>

                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>

            <div className="home-faq-explore reveal">
              <p>Still got questions?</p>
              <Link href="/faq" className="home-faq-button">
                EXPLORE ALL QUESTIONS →
              </Link>
            </div>
          </div>
        </section>

        {/* =========================================================
            MEET THE TEAM
        ========================================================== */}
        <section className="home-team-section reveal">
          <div className="home-team-copy">
            <p className="home-team-label">THE HUMANS BEHIND THE SUN ✦</p>

            <h2>
              MEET THE
              <br />
              <span>TEAM.</span>
            </h2>

            <p>
              Falling Sun is built by a crew of students, organizers and
              mentors who believe hackathons should feel exciting, welcoming
              and a little bit weird.
            </p>

            <Link href="/team" className="home-team-button">
              MEET THE CREW →
            </Link>
          </div>

          <div className="home-team-stack">
            <div className="home-team-card home-team-card-one">
              <span>05</span>
              <strong>ORGANIZERS</strong>
              <p>Ideas · Planning · Chaos</p>
            </div>

            <div className="home-team-card home-team-card-two">
              <span>04</span>
              <strong>CO-ORGANIZERS</strong>
              <p>The extended crew</p>
            </div>

            <div className="home-team-card home-team-card-three">
              <span>02</span>
              <strong>MENTORS</strong>
              <p>Guidance · Experience · Support</p>
            </div>
          </div>
        </section>

        {/* =========================================================
            CODE OF CONDUCT
        ========================================================== */}
        <section className="home-code-section reveal">
          <div className="home-code-icon">✦</div>

          <div>
            <p className="home-code-kicker">BEFORE YOU JOIN THE SUN</p>

            <h3>
              GOOD HACKS START WITH
              <br />
              <span>GOOD PEOPLE.</span>
            </h3>

            <p>
              Falling Sun is committed to keeping the hackathon welcoming,
              respectful and safe for everyone. Everyone attending is expected
              to read and follow our Code of Conduct.
            </p>

            <Link href="/codeofconduct">
              READ THE CODE OF CONDUCT →
            </Link>
          </div>
        </section>

        {/* =========================================================
            FINAL CTA
        ========================================================== */}
        <section className="final-cta">
          <div className="cta-stars">
            <span>✦</span>
            <span>✶</span>
            <span>✦</span>
            <span>✷</span>
          </div>

          <div className="final-cta-inner reveal">
            <p className="hand-kicker dark-kicker">the sun is setting...</p>

            <h2>
              COME
              <br />
              BUILD
              <br />
              <span>WITH US.</span>
            </h2>

            <p>
              Bring a laptop.
              <br />
              Bring an idea.
              <br />
              Bring a friend.
            </p>

            <Link href="/register" className="home-register-button">
              GO TO REGISTRATION →
            </Link>

            <form className="final-form" onSubmit={handleSubmit}>
              {!submitted ? (
                <>
                  <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="your@email.com"
                    aria-label="Email address"
                    required
                  />

                  <button type="submit">
                    I&apos;M IN <span>→</span>
                  </button>
                </>
              ) : (
                <div className="success-message">
                  ✦ YOU&apos;RE ON THE LIST. ✦
                </div>
              )}
            </form>

            <span className="cta-free">
              13–18 · BEGINNER FRIENDLY · 100% FREE
            </span>
          </div>

          <div className="cta-scribble">LET&apos;S GOOOO →</div>
        </section>
      </main>

      {/* =========================================================
          FOOTER
      ========================================================== */}
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-sun">☀</span>
            <strong>FALLING SUN</strong>
          </div>

          <p>A project by the Falling Sun Team</p>

          <div className="footer-links">
            <Link href="/team">TEAM ↗</Link>
            <Link href="/faq">FAQ ↗</Link>
            <Link href="/codeofconduct">CODE OF CONDUCT ↗</Link>
            <Link href="/register">REGISTER ↗</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 FALLING SUN</span>
          <span>BUILD AFTER DARK. SHIP BEFORE SUNRISE.</span>
          <span>DELHI-NCR, INDIA</span>
        </div>
      </footer>
    </div>
  );
}
