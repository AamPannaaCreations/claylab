"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] sm:h-screen flex items-center overflow-hidden">
      <Image
        src="/claylab assets/general/HeroSectionImages/mentorshipHero.png"
        alt="Background"
        fill
        className="object-cover object-center "
      />

      <div className="absolute inset-0 bg-black/40 "></div>

      <div className="flex flex-col gap-6 mx-4 sm:mx-8 md:mx-14 mt-20 sm:mt-32 text-start max-w-full sm:max-w-4xl z-10">
        <p style={{ fontWeight: "100" }} className="text-3xl sm:text-5xl md:text-7xl text-white mb-4 sm:mb-6 leading-tight font-sourceSans font-thin" >
          One Mentor. One Learner. <br />
          A Journey That Changes <br />
          Both.
        </p>
        <p style={{ fontWeight: "100" }} className="text-lg sm:text-2xl md:text-2xl text-white/70 mb-6 sm:mb-8 max-w-full sm:max-w-lg font-sourceSans font-thin">
          At Claylab, mentorship isn&apos;t just support — it&apos;s a relationship of trust, empathy, and joyful discovery. One mentor. One learner. A world of possibility.        </p>
        <Button className="bg-gradient-to-r from-green-800 to-green-600 hover:bg-gradient-to-r hover:from-green-700 hover:to-green-500 text-white rounded-md w-full sm:w-min px-8 sm:px-16 py-3 sm:py-4 text-base sm:text-lg">
          Join us
        </Button>
      </div>
    </section>
  )
}
