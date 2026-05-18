export default function Contact() {
  return (
    <section className="section space-y-10 py-8 md:py-12">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-wide text-black/60">
          Get in touch
        </p>
        <h1 className="h1">Contact Shajarah Academy</h1>
        <p className="max-w-3xl text-black/80">
          We’d love to hear from you. Whether you’re looking for a class, parenting support,
          or a Qur’anic learning path, reach out and we’ll guide you to the right program.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-black">Phone</h2>
          <p className="mt-2 text-black/80">+91 8850-999818 </p>
        </div>
        <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-black">Email</h2>
          <p className="mt-2 text-black/80">info@shajarahacademy.com</p>
        </div>
        <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-black">Website</h2>
          <p className="mt-2 text-black/80">www.shajarahacademy.com</p>
        </div>
      </div>

      <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-black">Social</h2>
        <p className="mt-2 text-black/80">@shajarahseekers</p>
      </div>
    </section>
  );
}


