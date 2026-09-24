import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact | Rinea",
  description: "Contact Rinea for product, order, and jewellery care enquiries.",
};

const enquiryTypes = [
  "Product enquiry",
  "Order support",
  "Shipping and delivery",
  "Returns and exchanges",
  "Jewellery care",
];

export default function ContactPage() {
  return (
    <main className="post-hero min-h-screen bg-paper pt-24">
      <section className="px-5 py-16 sm:px-10 sm:py-24">
        <div className="mx-auto grid max-w-7xl overflow-hidden border border-olive/15 bg-[#EEE9DD] lg:grid-cols-[0.85fr_1.15fr]">
          <div className="flex flex-col justify-between bg-olive p-8 text-paper sm:p-12 lg:min-h-[720px] lg:p-16">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#E2BE75]">
                Contact Rinea
              </p>
              <h1 className="max-w-md text-5xl font-semibold leading-[0.95] sm:text-6xl">
                We would love to hear from you
              </h1>
              <p className="mt-7 max-w-md text-lg leading-relaxed text-paper/80">
                Ask us about a piece, an order, delivery, returns, or caring for your jewellery.
              </p>
            </div>

            <div className="mt-16 border-t border-paper/20 pt-8">
              <p className="text-sm uppercase tracking-[0.18em] text-[#E2BE75]">Customer care</p>
              <p className="mt-3 max-w-sm text-xl leading-relaxed text-paper/85">
                Share as much detail as you can and our team will help you with the next step.
              </p>
            </div>
          </div>

          <div className="bg-paper p-7 sm:p-12 lg:p-16">
            <h2 className="text-4xl font-semibold text-olive">Send an enquiry</h2>
            <p className="mt-3 text-lg text-olive/80">Fill in your details and tell us how we can help.</p>

            <form className="mt-10 space-y-7">
              <div className="grid gap-7 sm:grid-cols-2">
                <label className="text-sm font-semibold uppercase tracking-[0.12em] text-olive">
                  Name
                  <input required name="name" type="text" className="mt-3 w-full border-0 border-b border-olive/30 bg-transparent px-0 py-3 text-lg normal-case tracking-normal text-olive outline-none transition-colors focus:border-[#79531D]" />
                </label>
                <label className="text-sm font-semibold uppercase tracking-[0.12em] text-olive">
                  Email
                  <input required name="email" type="email" className="mt-3 w-full border-0 border-b border-olive/30 bg-transparent px-0 py-3 text-lg normal-case tracking-normal text-olive outline-none transition-colors focus:border-[#79531D]" />
                </label>
              </div>

              <label className="block text-sm font-semibold uppercase tracking-[0.12em] text-olive">
                What can we help with?
                <select name="enquiry" className="mt-3 w-full border-0 border-b border-olive/30 bg-transparent px-0 py-3 text-lg normal-case tracking-normal text-olive outline-none transition-colors focus:border-[#79531D]">
                  {enquiryTypes.map((type) => <option key={type}>{type}</option>)}
                </select>
              </label>

              <label className="block text-sm font-semibold uppercase tracking-[0.12em] text-olive">
                Message
                <textarea required name="message" rows="5" className="mt-3 w-full resize-none border border-olive/25 bg-transparent p-4 text-lg normal-case tracking-normal text-olive outline-none transition-colors focus:border-[#79531D]" />
              </label>

              <button type="submit" className="w-full bg-olive px-8 py-4 text-lg font-semibold text-paper transition-colors hover:bg-[#79531D] sm:w-auto">
                Send enquiry
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
