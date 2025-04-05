"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import Link from "next/link";

export function HeroSection({images}:{images:string[]}) {
  return (
    <div className="relative mx-auto flex h-screen w-full max-w-7xl flex-col items-center justify-center overflow-hidden">
    <h2 className="relative z-20 mx-auto max-w-4xl text-center text-2xl font-bold text-balance text-white md:text-4xl lg:text-6xl">
      Transform your media with just
      <span className="relative z-20 inline-block rounded-xl bg-blue-500/40 px-4 py-1 text-white underline decoration-sky-500 decoration-[6px] underline-offset-[16px] backdrop-blur-sm ml-2">
        one click
      </span>
    </h2>
    <p className="relative z-20 mx-auto max-w-2xl py-8 text-center text-sm text-neutral-200 md:text-base">
      Powerful AI-driven tools to edit, enhance, and generate stunning visuals.
      Unlock your creative potential with MediaFlow's professional transformation suite.
    </p>
    <div className="relative z-20 flex flex-wrap items-center justify-center gap-4 pt-4">
      <Link href={'/sign-in'}>
      <button className="rounded-md bg-sky-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-sky-700 focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-black focus:outline-none">
        Get started free
      </button>
      </Link>
      <Link href={'/imagegenerate'}>
      <button className="rounded-md border border-white/20 bg-white/10 px-6 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black focus:outline-none">
        View gallery
      </button>
      </Link>

    </div>
    {/* overlay */}
    <div className="absolute inset-0 z-10 h-full w-full bg-black/70 dark:bg-black/40" />
    <ThreeDMarquee
      className="pointer-events-none absolute inset-0 h-full w-full"
      images={images}
    />
  </div>
  
  );
}
