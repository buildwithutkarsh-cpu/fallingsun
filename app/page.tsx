export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <div className="hero-bg min-h-screen relative flex flex-col pb-20">
        {/* Navbar */}
        <div className="flex justify-between items-start p-6 w-full max-w-7xl mx-auto relative z-10">
          {/* Left Flag */}
          <div className="bg-brand-brown text-white font-bubbly text-xl px-5 py-2 transform -rotate-6 shadow-lg border-2 border-white -ml-4 mt-2">
            STUDENT HACKATHON
          </div>

          {/* Center Logo */}
          <div className="text-white font-bubbly text-5xl md:text-6xl text-center absolute left-1/2 transform -translate-x-1/2 top-6 drop-shadow-lg">
            FALLING SUN
          </div>

          {/* Right Links */}
          <div className="flex gap-3 relative z-20 mt-2">
            <a
              href="#"
              className="bg-brand-btn border-2 border-brand-brown text-white font-bold py-2 px-4 rounded shadow-[3px_3px_0px_#573a27] hover:bg-[#8e5a40] transition-transform active:translate-y-1"
            >
              INSTAGRAM
            </a>

            <a
              href="#"
              className="bg-brand-btn border-2 border-brand-brown text-white font-bold py-2 px-4 rounded shadow-[3px_3px_0px_#573a27] hover:bg-[#8e5a40] transition-transform active:translate-y-1"
            >
              WHATSAPP
            </a>
          </div>
        </div>

        {/* Hero Content */}
        <div className="flex-grow flex flex-col justify-center items-center text-center px-4 mt-16 z-10">
          <h1 className="text-white text-[5rem] md:text-[8rem] lg:text-[10rem] font-bubbly drop-shadow-xl max-w-6xl leading-none uppercase tracking-wide mb-4 mt-8">
            FALLING SUN
          </h1>

          <p className="text-white text-2xl md:text-4xl font-bold mb-12 drop-shadow-lg tracking-wider uppercase bg-black bg-opacity-20 px-6 py-2 rounded-full border-2 border-white border-opacity-30">
            For teens 13-18
          </p>

          {/* Email Form */}
          <div className="wood-peg-container bg-brand-tan border-[4px] border-brand-brown rounded-md flex p-2 w-full max-w-2xl shadow-[6px_6px_0px_#573a27] mb-6 z-20">
            <input
              type="email"
              placeholder="you@fallingsun.com"
              className="flex-grow bg-transparent outline-none text-brand-brown placeholder-brand-brown placeholder-opacity-60 font-bold text-xl px-4"
            />

            <button className="btn px-6 md:px-8 py-3 text-lg md:text-xl tracking-wide">
              START NOW
            </button>
          </div>

          {/* Bottom Badge */}
          <div className="bg-brand-brown text-white border-[3px] border-brand-brown shadow-[4px_4px_0px_rgba(0,0,0,0.3)] rounded-lg flex items-center p-3 gap-4 mt-8 z-20">
            <span className="font-bold text-lg px-2">
              See what teens are building
            </span>

            <div className="flex gap-2">
              <div className="bg-white p-1 pb-4 border border-gray-300 transform -rotate-3 w-12 h-14">
                <div className="w-full h-full bg-gray-200 border border-gray-400 border-dashed" />
              </div>

              <div className="bg-white p-1 pb-4 border border-gray-300 transform rotate-2 w-12 h-14">
                <div className="w-full h-full bg-blue-200 border border-gray-400 border-dashed" />
              </div>

              <div className="bg-white p-1 pb-4 border border-gray-300 transform -rotate-1 w-12 h-14">
                <div className="w-full h-full bg-yellow-200 border border-gray-400 border-dashed" />
              </div>

              <div className="bg-white p-1 pb-4 border border-gray-300 transform rotate-3 w-12 h-14">
                <div className="w-full h-full bg-red-200 border border-gray-400 border-dashed" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WHAT IS FALLING SUN */}
      <section className="max-w-6xl mx-auto px-6 mt-20 relative mb-32">
        <div className="bg-brand-brown text-white rounded-xl border-[4px] border-brand-brown p-10 md:p-16 flex flex-col md:flex-row relative">
          {/* Left Text */}
          <div className="md:w-3/5 pr-8 z-10">
            <h2 className="text-4xl md:text-5xl font-bubbly text-white mb-[-10px]">
              WHAT IS
            </h2>

            <h1 className="text-6xl md:text-8xl font-bubbly text-white mb-8">
              FALLING SUN?
            </h1>

            <p className="text-2xl font-bold mb-8 leading-snug">
              Falling Sun is India&apos;s premier
              <br />

              <mark className="bg-brand-green text-white px-2">
                Under-19 retro-tech hackathon
              </mark>

              <br />
              happening live in Delhi-NCR.
            </p>

            <p className="text-2xl font-bold leading-snug mb-20 md:mb-12">
              Bring your ideas to life during an
              <br />

              <mark className="bg-brand-green text-white px-2">
                intense 24-hour sprint
              </mark>

              , with hardware
              <br />
              and resources funded by us!
            </p>
          </div>

          {/* Right Image Stack */}
          <div className="md:w-2/5 relative mt-10 md:mt-0 flex flex-col items-center justify-center min-h-[300px]">
            <div className="relative w-full max-w-sm h-full">
              <div className="absolute inset-0 bg-white border border-gray-300 p-2 pb-12 shadow-lg transform rotate-6 z-0">
                <div className="w-full h-full bg-gray-200" />
              </div>

              <div className="absolute inset-0 bg-white border border-gray-300 p-2 pb-12 shadow-lg transform -rotate-3 z-10">
                <div className="w-full h-full bg-gray-300" />
              </div>

              <div className="absolute inset-0 bg-white border border-gray-300 p-2 pb-12 shadow-lg transform rotate-2 z-20 flex flex-col">
                <div className="w-full flex-grow border border-dashed border-gray-400 flex items-center justify-center text-gray-500 font-comic text-xl bg-gray-100">
                  Photo Placeholder
                </div>
              </div>
            </div>

            <p className="mt-[18rem] text-sm underline text-brand-tan text-center w-full z-30 font-bold relative bottom-4">
              200+ teens in Delhi NCR, building projects
            </p>
          </div>

          {/* Beginner Box */}
          <div className="absolute -bottom-10 left-10 sketch-border bg-white text-brand-brown p-6 max-w-sm z-30">
            <p className="font-bold text-xl mb-1">
              We are{" "}
              <span className="font-black text-2xl">
                Beginner to Elite
              </span>{" "}
              friendly!
            </p>

            <p className="text-lg leading-tight font-semibold text-gray-600">
              Whether it&apos;s your first project or advanced systems, our
              mentors have your back!
            </p>
          </div>
        </div>
      </section>

      {/* WHAT HAPPENS */}
      <section className="max-w-6xl mx-auto px-6 mt-32 flex flex-col md:flex-row gap-12 items-center mb-32">
        {/* Comic Panels */}
        <div className="md:w-1/2 w-full pl-6">
          <div className="comic-panel">
            <div className="comic-bubble">01. SPARK</div>

            <div className="h-32 bg-brand-tan opacity-30 flex items-center justify-center mt-4 border-2 border-dashed border-brand-brown">
              <span className="font-comic text-2xl text-brand-brown">
                Idea &amp; Concept
              </span>
            </div>
          </div>

          <div className="comic-panel">
            <div className="comic-bubble">02. SHIP</div>

            <div className="h-32 bg-brand-tan opacity-30 flex items-center justify-center mt-4 border-2 border-dashed border-brand-brown">
              <span className="font-comic text-2xl text-brand-brown">
                Web, Mobile, AI, Hardware
              </span>
            </div>
          </div>

          <div className="comic-panel">
            <div className="comic-bubble">03. FLEX</div>

            <div className="h-32 bg-brand-tan opacity-30 flex items-center justify-center mt-4 border-2 border-dashed border-brand-brown">
              <span className="font-comic text-2xl text-brand-brown">
                Live Demonstration
              </span>
            </div>
          </div>
        </div>

        {/* Right Box */}
        <div className="md:w-1/2 w-full relative">
          <div className="bg-brand-blue border-[4px] border-brand-brown shadow-[8px_8px_0px_#573a27] p-10 md:p-12 text-white">
            <h2 className="text-5xl font-bubbly mb-8">
              WHAT HAPPENS
            </h2>

            <ol className="text-2xl font-bold space-y-4 list-decimal pl-8 leading-snug">
              <li>Begin with an idea or prompt.</li>
              <li>Transform ideas into prototypes.</li>
              <li>Level up with workshops &amp; mentors.</li>
              <li>Present your project through a live demo!</li>
              <li>Publish + Share online.</li>
              <li>Leave with new skills and connections.</li>
            </ol>
          </div>

          <div className="absolute -bottom-10 right-10 sketch-border bg-white text-brand-brown p-5 max-w-[280px] z-20">
            <p className="font-bold text-lg leading-tight">
              As long as you build something during the 24 hours, you will get
              a certificate and cool merch!
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 mt-32 mb-32">
        <h2 className="text-6xl font-bubbly text-brand-brown mb-8">
          FAQ
        </h2>

        <div className="border-t border-brand-brown border-opacity-30">
          <details className="group border-b border-brand-brown py-6">
            <summary className="flex justify-between items-center text-2xl font-bold text-brand-brown hover:text-black">
              Can I join if I&apos;m a beginner?

              <span className="text-3xl font-normal group-open:rotate-45 transition-transform">
                +
              </span>
            </summary>

            <div className="mt-4 text-xl text-gray-700 font-semibold pr-10">
              Absolutely! Falling Sun is beginner to elite friendly. Mentors
              and zero-judgment zones are available to help you build your very
              first project.
            </div>
          </details>

          <details className="group border-b border-brand-brown py-6">
            <summary className="flex justify-between items-center text-2xl font-bold text-brand-brown hover:text-black">
              Can I work in teams?

              <span className="text-3xl font-normal group-open:rotate-45 transition-transform">
                +
              </span>
            </summary>

            <div className="mt-4 text-xl text-gray-700 font-semibold pr-10">
              Yes! You can participate solo or form a team of up to 4 members.
            </div>
          </details>

          <details className="group border-b border-brand-brown py-6">
            <summary className="flex justify-between items-center text-2xl font-bold text-brand-brown hover:text-black">
              Am I eligible?

              <span className="text-3xl font-normal group-open:rotate-45 transition-transform">
                +
              </span>
            </summary>

            <div className="mt-4 text-xl text-gray-700 font-semibold pr-10">
              Falling Sun is exclusively for high schoolers and teen hackers
              (ages 13–18). Participants under 18 require signed
              parent/guardian consent.
            </div>
          </details>

          <details className="group border-b border-brand-brown py-6">
            <summary className="flex justify-between items-center text-2xl font-bold text-brand-brown hover:text-black">
              Is this free?

              <span className="text-3xl font-normal group-open:rotate-45 transition-transform">
                +
              </span>
            </summary>

            <div className="mt-4 text-xl text-gray-700 font-semibold pr-10">
              100% Free Experience. Zero entry fees. Venue access, Wi-Fi,
              hardware kits, meals, and merch are completely covered.
            </div>
          </details>

          <details className="group border-b border-brand-brown py-6">
            <summary className="flex justify-between items-center text-2xl font-bold text-brand-brown hover:text-black">
              What are the Project Requirements?

              <span className="text-3xl font-normal group-open:rotate-45 transition-transform">
                +
              </span>
            </summary>

            <div className="mt-4 text-xl text-gray-700 font-semibold pr-10">
              Projects must be original work created during the hackathon.
              Source code must be on a public GitHub. You retain 100%
              ownership!
            </div>
          </details>

          <details className="group border-b border-brand-brown py-6">
            <summary className="flex justify-between items-center text-2xl font-bold text-brand-brown hover:text-black">
              Can I use AI?

              <span className="text-3xl font-normal group-open:rotate-45 transition-transform">
                +
              </span>
            </summary>

            <div className="mt-4 text-xl text-gray-700 font-semibold pr-10">
              Yes, but AI-assisted work is limited to 40% of the project.
              Descriptions and submissions must be written by the participants
              themselves.
            </div>
          </details>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-16 py-12 px-6 bg-brand-cream border-t-2 border-brand-brown border-opacity-20 text-brand-brown font-bold text-center">
        <p className="text-xl">A project by the Falling Sun Team</p>

        <p className="mt-2 opacity-80">
          Build after dark. Ship before sunrise.
        </p>
      </footer>
    </>
  );
}
