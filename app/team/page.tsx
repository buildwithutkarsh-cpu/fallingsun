import Link from "next/link";

const organizers = [
  {
    name: "Tanmay Singh",
    role: "ORGANIZER",
    initials: "TS",
    note: "Building the vision behind Falling Sun.",
    tag: "THE VISION",
  },
  {
    name: "Aditya Sharma",
    role: "ORGANIZER",
    initials: "AS",
    note: "Turning ideas into an experience people remember.",
    tag: "THE BUILDER",
  },
  {
    name: "Utkarsh Saraswat",
    role: "ORGANIZER",
    initials: "US",
    note: "Helping bring the hackathon and its community together.",
    tag: "THE MAKER",
  },
  {
    name: "Ayush Sharma",
    role: "ORGANIZER",
    initials: "AS",
    note: "Making sure the little details become big moments.",
    tag: "THE DETAIL",
  },
  {
    name: "Kartik Patel",
    role: "ORGANIZER",
    initials: "KP",
    note: "Part of the crew making Falling Sun happen.",
    tag: "THE CREW",
  },
];

const coOrganizers = [
  {
    name: "Harsh",
    initials: "H",
    note: "Co-organizer",
  },
  {
    name: "Swaransh",
    initials: "S",
    note: "Co-organizer",
  },
  {
    name: "Roshan",
    initials: "R",
    note: "Co-organizer",
  },
  {
    name: "Yuvraj Singh Rawat",
    initials: "YR",
    note: "Co-organizer",
  },
];
const mentors = [
  {
    name: "Aniket Gaba",
    initials: "AG",
    note: "Mentor",
  },
  {
    name: "Anand",
    initials: "A",
    note: "Mentor",
  },
];

export default function TeamPage() {
  return (
    <main className="team-page">
      {/* NAVBAR */}
      <nav className="team-nav">
        <Link href="/" className="team-brand">
          <span className="team-brand-sun">☀</span>
          <span>FALLING SUN</span>
        </Link>

        <div className="team-nav-links">
          <Link href="/">HOME</Link>
          <Link href="/team" className="team-nav-active">
            TEAM
          </Link>
        </div>

        <Link href="/#register" className="team-nav-cta">
          JOIN US →
        </Link>
      </nav>

      {/* HERO */}
      <section className="team-hero">
        <div className="team-hero-noise" />

        <div className="team-hero-copy">
          <p className="team-eyebrow">
            <span>✦</span> THE HUMANS BEHIND THE HACKATHON
          </p>

          <h1>
            THE PEOPLE
            <br />
            <span>BEHIND THE SUN.</span>
          </h1>

          <p className="team-hero-text">
            A bunch of students, ideas, late nights and way too much
            enthusiasm — all coming together to build Falling Sun.
          </p>

          <div className="team-hero-stamp">
            <span>MADE BY</span>
            <strong>STUDENTS</strong>
            <span>FOR STUDENTS</span>
          </div>
        </div>

        <div className="team-hero-sun" aria-hidden="true">
          ☀
        </div>

        <div className="team-hero-doodle doodle-one">✦</div>
        <div className="team-hero-doodle doodle-two">↗</div>
        <div className="team-hero-doodle doodle-three">✹</div>
      </section>

      {/* ORGANIZERS */}
      <section className="team-section">
        <div className="team-section-heading">
          <div>
            <p className="team-hand-label">meet the crew</p>
            <h2>
              BUILT BY
              <br />
              <span>PEOPLE.</span>
            </h2>
          </div>

          <p className="team-section-intro">
            The organizers behind the ideas, chaos, planning and energy that
            make Falling Sun possible.
          </p>
        </div>

        <div className="team-organizer-grid">
          {organizers.map((person, index) => (
            <article
              className={`team-card team-card-${index + 1}`}
              key={person.name}
            >
              <div className="team-card-top">
                <span className="team-card-number">
                  0{index + 1}
                </span>

                <span className="team-card-tag">{person.tag}</span>
              </div>

              <div className="team-avatar">
                <span>{person.initials}</span>
                <div className="team-avatar-sun">✦</div>
              </div>

              <div className="team-card-content">
                <p className="team-role">{person.role}</p>

                <h3>{person.name}</h3>

                <p className="team-card-note">{person.note}</p>
              </div>

              <div className="team-card-bottom">
                <span>FALLING SUN</span>
                <span>DELHI-NCR</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CO-ORGANIZERS */}
      <section className="team-co-section">
        <div className="team-co-heading">
          <p className="team-hand-label">and the extended crew...</p>

          <h2>
            CO-
            <br />
            <span>ORGANIZERS.</span>
          </h2>

          <p>
            The people helping keep the sun shining behind the scenes.
          </p>
        </div>

        <div className="team-co-grid">
          {coOrganizers.map((person, index) => (
            <article className="team-co-card" key={person.name}>
              <div className="team-co-number">0{index + 1}</div>

              <div className="team-co-avatar">{person.initials}</div>

              <div>
                <p>{person.note}</p>
                <h3>{person.name}</h3>
              </div>

              <span className="team-co-arrow">↗</span>
            </article>
          ))}
        </div>
      </section>

        {/* MENTORS */}
      <section className="team-mentors-section">
        <div className="team-mentors-heading">
          <p className="team-hand-label">the people we learn from</p>

          <h2>
            OUR
            <br />
            <span>MENTORS.</span>
          </h2>

          <p>
            The people who guide, challenge and help us turn good ideas into
            better ones.
          </p>
        </div>

        <div className="team-mentors-grid">
          {mentors.map((person, index) => (
            <article className="team-mentor-card" key={person.name}>
              <div className="team-mentor-tape">MENTOR</div>

              <div className="team-mentor-avatar">
                {person.initials}
              </div>

              <div className="team-mentor-info">
                <span>0{index + 1} · FALLING SUN</span>
                <h3>{person.name}</h3>
                <p>{person.note}</p>
              </div>

              <div className="team-mentor-mark">✦</div>
            </article>
          ))}
        </div>
      </section>
      {/* TEAM MESSAGE */}
      <section className="team-message">
        <div className="team-message-paper">
          <span className="team-paper-pin">✦</span>

          <p className="team-hand-label">a little note from us</p>

          <h2>
            WE&apos;RE NOT
            <br />
            JUST RUNNING
            <br />
            <span>A HACKATHON.</span>
          </h2>

          <p className="team-message-text">
            We&apos;re trying to create a place where students can experiment,
            build weird things, meet new people and have a genuinely good
            time doing it.
          </p>

          <p className="team-signoff">
            — The Falling Sun crew
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="team-final-cta" id="join">
        <div className="team-final-scribble">✦ ✦ ✦</div>

        <p className="team-eyebrow">
          READY TO BUILD SOMETHING?
        </p>

        <h2>
          COME
          <br />
          BUILD
          <br />
          <span>WITH US.</span>
        </h2>

        <Link href="/#register" className="team-big-button">
          I&apos;M IN →
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="team-footer">
        <div>
          <strong>FALLING SUN ☀</strong>
          <span>RETRO-TECH HACKATHON FOR TEENS</span>
        </div>

        <div className="team-footer-links">
          <Link href="/">HOME</Link>
          <Link href="/team">TEAM</Link>
        </div>

        <span>DELHI-NCR · INDIA</span>
      </footer>
    </main>
  );
}
