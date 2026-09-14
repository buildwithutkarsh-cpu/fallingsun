"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function RegisterPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <main className="register-page">
        <nav className="register-nav">
          <Link href="/" className="register-brand">
            <span>☀</span> FALLING SUN
          </Link>

          <Link href="/" className="register-back">
            ← BACK HOME
          </Link>
        </nav>

        <section className="register-success">
          <div className="register-success-card">
            <div className="register-success-sun">☀</div>

            <p className="register-kicker">REGISTRATION RECEIVED ✦</p>

            <h1>
              YOU&apos;RE
              <br />
              <span>IN THE SUN.</span>
            </h1>

            <p>
              Thanks for registering for Falling Sun. Keep an eye on the
              details shared by the organizers for what comes next.
            </p>

            <Link href="/" className="register-button">
              BACK TO FALLING SUN →
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="register-page">
      <nav className="register-nav">
        <Link href="/" className="register-brand">
          <span>☀</span> FALLING SUN
        </Link>

        <Link href="/" className="register-back">
          ← BACK HOME
        </Link>
      </nav>

      <section className="register-hero">
        <p className="register-kicker">STUDENT HACKATHON · DELHI-NCR</p>

        <h1>
          READY TO
          <br />
          <span>BUILD?</span>
        </h1>

        <p>
          Tell us a little about yourself and your team.
          Falling Sun is for curious builders aged 13–18.
        </p>
      </section>

      <section className="register-form-wrap">
        <form
          className="register-form"
          onSubmit={handleSubmit}
        >
          <div className="register-form-heading">
            <span>01</span>
            YOUR DETAILS
          </div>

          <div className="register-grid">
            <label>
              <span>FULL NAME *</span>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
              />
            </label>

            <label>
              <span>AGE *</span>
              <input
                type="number"
                name="age"
                placeholder="13–18"
                min="13"
                max="18"
                required
              />
            </label>

            <label>
              <span>EMAIL *</span>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                required
              />
            </label>

            <label>
              <span>PHONE NUMBER *</span>
              <input
                type="tel"
                name="phone"
                placeholder="Your phone number"
                required
              />
            </label>
          </div>

          <div className="register-form-heading register-team-heading">
            <span>02</span>
            YOUR TEAM
          </div>

          <div className="register-grid">
            <label>
              <span>TEAM NAME</span>
              <input
                type="text"
                name="teamName"
                placeholder="Give your team a name"
              />
            </label>

            <label>
              <span>TEAM SIZE *</span>
              <select name="teamSize" required defaultValue="">
                <option value="" disabled>
                  Select team size
                </option>
                <option value="1">1 — Solo</option>
                <option value="2">2 people</option>
                <option value="3">3 people</option>
                <option value="4">4 people</option>
              </select>
            </label>
          </div>

          <label className="register-full">
            <span>TEAM MEMBERS</span>
            <textarea
              name="teamMembers"
              placeholder="If you're joining with others, write their names here."
              rows={4}
            />
          </label>

          <div className="register-form-heading register-team-heading">
            <span>03</span>
            ABOUT YOU
          </div>

          <label className="register-full">
            <span>WHAT DO YOU WANT TO BUILD?</span>
            <textarea
              name="idea"
              placeholder="Tell us what you're thinking about..."
              rows={5}
            />
          </label>

          <label className="register-full">
            <span>YOUR EXPERIENCE</span>
            <select name="experience" defaultValue="">
              <option value="" disabled>
                Pick one
              </option>
              <option value="beginner">
                I&apos;m completely new
              </option>
              <option value="some">
                I&apos;ve built a few things
              </option>
              <option value="experienced">
                I build projects regularly
              </option>
            </select>
          </label>

          <label className="register-checkbox">
            <input type="checkbox" required />
            <span>
              I confirm that I am aged 13–18 and that the information
              I&apos;ve provided is accurate.
            </span>
          </label>

          <label className="register-checkbox">
            <input type="checkbox" required />
            <span>
              I have read and agree to follow the{" "}
              <Link href="/codeofconduct">
                Falling Sun Code of Conduct
              </Link>
              .
            </span>
          </label>

          <button type="submit" className="register-submit">
            SUBMIT REGISTRATION <span>↗</span>
          </button>

          <p className="register-note">
            Falling Sun is beginner-friendly and 100% free.
          </p>
        </form>
      </section>

      <footer className="register-footer">
        <Link href="/">☀ FALLING SUN</Link>

        <div>
          <Link href="/team">TEAM ↗</Link>
          <Link href="/faq">FAQ ↗</Link>
          <Link href="/codeofconduct">CODE OF CONDUCT ↗</Link>
        </div>
      </footer>
    </main>
  );
}
