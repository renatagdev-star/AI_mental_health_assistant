"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function PricingPage() {
  return (
    <section className="max-w-7xl mx-auto mt-24 px-8 md:px-10 text-center">
      {/* Title */}
      <div className="mb-16">
        <h1 className="text-5xl font-bold text-foreground mb-4">
          Simple, transparent pricing.
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Nordora offers flexible plans to support your mental wellbeing — 
          whether you're exploring mindfulness or want personalized daily guidance.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Free Plan */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-10 shadow-xl flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-2 text-emerald-800">Free</h2>
          <p className="text-4xl font-bold mb-6">€0</p>
          <ul className="text-muted-foreground text-left mb-8 space-y-2">
            <li>✔️ Mood tracking</li>
            <li>✔️ Guided journaling</li>
            <li>✔️ Daily mindfulness reminders</li>
            <li>❌ No AI insights</li>
          </ul>
          <Button className="bg-emerald-700 hover:bg-emerald-800 text-white">
            Get Started
          </Button>
        </div>

        {/* Pro Plan */}
        <div className="bg-gradient-to-b from-emerald-700 to-teal-600 rounded-3xl p-10 shadow-2xl text-white flex flex-col items-center transform md:scale-105">
          <h2 className="text-2xl font-semibold mb-2">Pro</h2>
          <p className="text-4xl font-bold mb-6">€9.99<span className="text-lg font-medium">/mo</span></p>
          <ul className="text-left mb-8 space-y-2">
            <li>✔️ All Free features</li>
            <li>✔️ AI-powered mood insights</li>
            <li>✔️ Personalized meditation plans</li>
            <li>✔️ Priority support</li>
          </ul>
          <Button
            variant="outline"
            className="text-white border-white hover:bg-white/20"
          >
            Upgrade Now
          </Button>
        </div>

        {/* Premium Plan */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-10 shadow-xl flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-2 text-emerald-800">
            Premium
          </h2>
          <p className="text-4xl font-bold mb-6">€19.99<span className="text-lg font-medium">/mo</span></p>
          <ul className="text-muted-foreground text-left mb-8 space-y-2">
            <li>✔️ All Pro features</li>
            <li>✔️ 1-on-1 AI coaching sessions</li>
            <li>✔️ Long-term progress reports</li>
            <li>✔️ Early access to new features</li>
          </ul>
          <Button className="bg-emerald-700 hover:bg-emerald-800 text-white">
            Start Free Trial
          </Button>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-12 shadow-xl max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold mb-4 text-foreground">
          Start your mindfulness journey today 🌙
        </h3>
        <p className="text-muted-foreground mb-8">
          Sign up for free — no credit card required — and experience calm, clarity,
          and focus with Nordora.
        </p>
        <Link href="/sign-up">
          <Button className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-6 text-lg rounded-xl">
            Get Started for Free
          </Button>
        </Link>
      </div>
    </section>
  );
}