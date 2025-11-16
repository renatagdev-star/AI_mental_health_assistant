import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto mt-24 px-10 gap-16">
      {/* Left Content */}
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-12 md:w-[58%] shadow-xl">
        <p className="text-lg font-semibold mb-4 text-emerald-900">
          ✦ AI-Powered Mental Health Assistant
        </p>

        <h1 className="text-5xl font-bold leading-tight text-foreground mb-6">
          Your mind’s calm,
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 text-outline">
            powered by Nordora
          </span>
        </h1>

        <p className="text-muted-foreground mb-10 text-lg leading-relaxed">
          Chat with your AI assistant for emotional support, daily mindfulness
          reminders, and personalized self-care guidance — available 24/7, no
          waiting, no judgment.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-6 mt-2">
          {/* ✅ Try AI Chat → opens /chat page */}
          <Link href="/chat">
            <Button className="font-quicksand text-lg px-8 py-3 border-2 border-emerald-800 text-emerald-900 bg-transparent hover:bg-emerald-50/20 hover:scale-105 transition-all duration-300 shadow-sm">
              🌙 Try AI Chat
            </Button>
          </Link>

          <Button className="font-quicksand text-lg px-8 py-3 border-2 border-cyan-700 text-cyan-700 bg-transparent hover:bg-cyan-50/20 hover:scale-105 transition-all duration-300 shadow-sm">
            🧘 Explore Mindfulness
          </Button>
        </div>
      </div>

      {/* Right Image */}
      <div className="md:w-[42%] flex justify-center">
        <Image
          src="/hero.png"
          alt="Nordora Illustration"
          width={460}
          height={460}
          className="drop-shadow-2xl"
        />
      </div>
    </section>
  );
}