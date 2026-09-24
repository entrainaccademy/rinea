import Footer from "@/components/Footer";
import { faqs } from "@/lib/site-content";

export const metadata = {
  title: "Frequently Asked Questions | Rinea",
  description: "Answers about Rinea delivery, jewellery care, and customer support.",
};

export default function FaqPage() {
  return (
    <main className="post-hero min-h-screen bg-paper pt-16 sm:pt-24">
      <section className="px-5 py-12 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="border-b border-olive/15 pb-10 text-center sm:pb-14">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#754C15]">Here to help</p>
            <h1 className="mt-4 text-5xl font-semibold leading-none text-[#303318] sm:text-7xl">
              Frequently Asked Questions
            </h1>
          </div>

          <div className="divide-y divide-olive/15 border-b border-olive/15">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-2">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-6 text-left text-xl font-semibold text-[#303318] marker:hidden sm:py-8 sm:text-2xl">
                  <span className="flex items-center gap-4">
                    <span className="text-2xl text-[#9A6724]" aria-hidden="true">♡</span>
                    {faq.question}
                  </span>
                  <span className="text-2xl font-normal text-[#754C15] transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="pb-7 pl-10 pr-8 text-lg font-medium leading-relaxed text-[#303318] sm:pb-8 sm:pl-12 sm:text-xl">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="https://www.instagram.com/rinea__com/"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-olive px-8 py-4 text-lg font-semibold text-paper transition-colors hover:bg-[#79531D]"
            >
              Message us on Instagram
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
