import workshopFlyer from '../assets/upcoming-workshop-jab-duniya.png';

const ENROLL_TEL = '+91 8850-999818';
const ENROLL_TEL_DISPLAY = '+91 8850-999818';

export default function UpcomingEvents() {
  return (
    <section className="py-10 md:py-16 bg-beige/30 border-y border-black/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-callig text-3xl md:text-4xl lg:text-5xl text-black mb-3">Upcoming Events</h2>
          <p className="text-black/70 text-base md:text-lg max-w-2xl mx-auto">
            Join us for guided journeys of reflection, healing, and growth — in&apos;sha Allah.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div>
            <div className="sketch-frame overflow-hidden bg-white p-2 md:p-3">
              <img
                src={workshopFlyer}
                alt="Promotional flyer: Jab Duniya Reza Reza Hojaegi — 7-day online workshop, 5–11 May 2026, 3:00–4:30 PM on Zoom, fee ₹250"
                className="w-full h-auto rounded-xl object-cover shadow-sm"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur rounded-2xl p-6 md:p-8 shadow-lg border border-black/5 space-y-5 text-black/85 leading-relaxed text-base md:text-lg">
            <p className="text-black font-medium">
              Assalamu Alaikum wa Rahmatullahi wa Barakatuh 🌙🤍
            </p>

            <p className="font-display text-xl md:text-2xl font-semibold text-olive">
              🌍 Jab duniya reza reza ho jayegi… what will remain of YOU?
            </p>

            <p>
              There comes a time when everything starts to fall apart… 💔
              <br />
              Plans fail. People change. Stability fades.
            </p>

            <p>
              And in that silence, a question rises:
              <br />
              ❓ &ldquo;What was I really living for?&rdquo;
            </p>

            <p>
              This is not just a workshop — it&apos;s a 7-day journey of deep reflection, healing, and
              transformation. 🌿✨
            </p>

            <ul className="space-y-2 list-none pl-0">
              <li>✨ Rediscover your purpose</li>
              <li>🤲 Reconnect with your Creator</li>
              <li>🛤️ Prepare for what truly matters</li>
            </ul>

            <div className="rounded-xl border border-olive/20 bg-olive/5 px-4 py-4 space-y-2 text-black">
              <p className="font-semibold text-olive">Event details</p>
              <p>📅 5th – 11th May 2026</p>
              <p>⏰ 3:00 PM – 4:30 PM</p>
              <p>💻 Online (Zoom)</p>
              <p>💰 Fee: ₹250</p>
            </div>

            <p>
              💔 Not light content
              <br />
              🌿 Honest. Awakening. Life-changing.
            </p>

            <p>
              If you&apos;ve been feeling lost, disconnected, or searching for meaning… 🧭 this is for you.
            </p>

            <p>
              📩 Enroll now{' '}
              <a
                href={`tel:${ENROLL_TEL}`}
                className="font-semibold text-olive underline underline-offset-2 hover:text-black transition-colors"
              >
                {ENROLL_TEL_DISPLAY}
              </a>{' '}
              and take the first step.
            </p>

            <p className="border-l-4 border-yellow pl-4 text-black/90">
              Because your akhirah isn&apos;t built someday…
              <br />
              ⏳ it&apos;s being built NOW.
            </p>

            <p className="font-semibold text-black pt-2">Team SHAJARAH 🤝</p>
          </div>
        </div>
      </div>
    </section>
  );
}
