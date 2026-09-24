import Link from "next/link";
import Footer from "@/components/Footer";

export default function InfoPage({ eyebrow, title, intro, sections }) {
  return (
    <main className="post-hero min-h-screen bg-paper pt-16 sm:pt-24">
      <section className="px-5 py-12 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="border-b border-olive/15 pb-10 sm:pb-14">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#754C15]">{eyebrow}</p>
            <h1 className="mt-4 text-5xl font-semibold leading-none text-[#303318] sm:text-7xl">{title}</h1>
            <p className="mt-6 max-w-3xl text-lg font-medium leading-relaxed text-[#303318] sm:text-xl">{intro}</p>
          </div>

          <div className="divide-y divide-olive/15">
            {sections.map((section) => (
              <article key={section.title} className="grid gap-4 py-8 sm:grid-cols-[0.7fr_1.3fr] sm:gap-12 sm:py-10">
                <h2 className="text-3xl font-semibold text-[#303318]">{section.title}</h2>
                <div className="space-y-4 text-lg font-medium leading-relaxed text-[#303318]">
                  {section.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 bg-olive px-6 py-7 text-paper sm:flex sm:items-center sm:justify-between sm:px-9">
            <p className="text-xl">Still need help?</p>
            <Link href="/contact" className="mt-4 inline-block border-b border-[#E2BE75] pb-1 text-sm font-semibold uppercase tracking-[0.16em] text-[#E2BE75] sm:mt-0">
              Contact Rinea
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
