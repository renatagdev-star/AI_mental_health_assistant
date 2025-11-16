"use client";

import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <section className="flex flex-col items-center justify-center max-w-4xl mx-auto mt-24 px-8 md:px-10 text-justify">
      {/* Title */}
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-12 shadow-xl w-full">
        <p className="text-lg font-semibold mb-4 text-emerald-900 text-left">
          ✦ About Nordora
        </p>

        <h1 className="text-5xl font-bold leading-tight text-foreground mb-8 text-left">
          A calm mind begins with connection.
        </h1>

        <p className="text-lg text-muted-foreground mb-8">
          Nordora was created with one purpose — to bring emotional balance and
          mindfulness into everyday life through the power of AI. Our mission is
          to make mental wellbeing support accessible, empathetic, and available
          24/7, whenever you need it most.
        </p>

        <p className="text-lg text-muted-foreground mb-10">
          Have questions, ideas, or collaboration requests? We’d love to hear
          from you. Use the contact form below to send us a message, and we’ll
          get back to you as soon as possible.
        </p>

        {/* Contact Form */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            placeholder="Your Name"
            required
            className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-700"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-700"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            required
            className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-700 resize-none"
          />
          <Button
            type="submit"
            className="bg-emerald-700 hover:bg-emerald-800 text-white w-fit"
          >
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
}