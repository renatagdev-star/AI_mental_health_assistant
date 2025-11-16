"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HowItWorksPage() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto mt-24 px-10 gap-16 leading-relaxed">
      
      {/* Left Content */}
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-12 md:w-[58%] shadow-xl text-justify">
        <p className="text-lg font-semibold mb-4 text-emerald-900 text-left">
          ✦ How Nordora Works
        </p>

        <h1 className="text-5xl font-bold leading-tight text-foreground mb-8 text-left">
          Your journey to calm starts here.
        </h1>

        <p className="text-lg text-muted-foreground mb-8">
          Nordora is designed to support your mental wellbeing through daily
          mindfulness, emotional awareness, and gentle self-reflection. Whether
          you're tracking your mood, exploring guided journaling, or receiving
          AI-based insights, Nordora adapts to your needs and helps you build
          emotional balance step by step.
        </p>

        <div className="space-y-5 text-lg text-muted-foreground">
          <p>
            <b>Step 1:</b> Create your personal Nordora account and begin your
            wellness journey in a private, calming space.
          </p>
          <p>
            <b>Step 2:</b> Record how you feel each day to build emotional
            awareness and mindfulness habits.
          </p>
          <p>
            <b>Step 3:</b> Explore progress over time and see how your emotional
            patterns evolve.
          </p>
          <p>
            <b>Step 4:</b> Use guided journaling prompts and reflection tools to
            deepen your self-understanding.
          </p>
          <p>
            <b>Step 5:</b> Return anytime — Nordora is available 24/7, offering
            calm and supportive guidance whenever you need it.
          </p>
        </div>

        {/* Buttons (UI only, no auth logic) */}
        <div className="flex flex-wrap gap-4 mt-10">
          <Button className="bg-emerald-700 hover:bg-emerald-800 text-white">
            Create Account
          </Button>

          <Link href="#">
            <Button variant="outline">Learn More</Button>
          </Link>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex justify-center md:justify-end md:w-[40%]">
        <Image
          src="/confused.png"
          alt="Nordora Calm Illustration"
          width={400}
          height={400}
          className="drop-shadow-2xl"
        />
      </div>
    </section>
  );
}
