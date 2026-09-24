import { faqs } from "@/lib/site-content";

export default function FaqSection() {
  return (
    <section className="bg-[#EFE8DC] px-5 py-14 sm:px-10 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-9 text-center sm:mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#754C15]">Here to help</p>
          <h2 className="mt-3 text-4xl font-semibold text-[#303318] sm:text-6xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="divide-y divide-olive/15 border-y border-olive/15">
          {faqs.map((faq) => (
            <details key={faq.question} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 text-left text-lg font-semibold text-[#303318] marker:hidden sm:py-7 sm:text-2xl">
                <span className="flex items-center gap-3 sm:gap-4">
                  <span className="text-xl text-[#9A6724] sm:text-2xl" aria-hidden="true">♡</span>
                  {faq.question}
                </span>
                <span className="text-2xl font-normal text-[#754C15] transition-transform group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="pb-6 pl-8 pr-7 text-base font-medium leading-relaxed text-[#303318] sm:pb-7 sm:pl-10 sm:text-lg">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
}
