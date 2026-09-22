"use client";

import { useState } from "react";

export default function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="flex flex-col items-center gap-6 px-6 py-24 text-center">
      <h2 className="font-heading text-3xl text-olive">Stay in the loop</h2>
      <p className="max-w-sm font-sans text-olive/70">
        New pieces, first. No spam, unsubscribe anytime.
      </p>
      {submitted ? (
        <p className="font-sans text-sm text-olive">Thanks — you&apos;re on the list.</p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-sm flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            required
            placeholder="Your email"
            className="flex-1 rounded-full border border-olive/20 bg-paper px-5 py-2.5 font-sans text-sm text-olive placeholder:text-olive/40 focus:border-olive focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-full bg-olive px-6 py-2.5 font-sans text-sm text-paper transition-colors hover:bg-gold hover:text-olive"
          >
            Sign up
          </button>
        </form>
      )}
    </section>
  );
}
