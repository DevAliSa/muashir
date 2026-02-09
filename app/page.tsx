import { Card, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import MaxWidthWrapper from "@/components/ui/common/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { Cover } from "@/components/ui/cover";

export default function Home() {
  return (
    <MaxWidthWrapper>
            <BackgroundBeams />

      <HeroSection />
      <SampleCard />
    </MaxWidthWrapper>
  );
}
function HeroSection() {
  return (
    <div className="py-20 md:py-36 text-center mx-8 ">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-400 to-neutral-600 dark:from-neutral-600 dark:to-neutral-900 text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        Your crypto in compliance <br /> with <Cover> Saudi standards </Cover>
      </h2>
      <p className="mt-6 animate-fade-in text-lg text-muted-foreground max-w-3xl mx-auto">
      The first platform to bridge global crypto data with Saudi financial regulations. Manage your portfolio, calculate Zakat, and ensure full compliance in one unified dashboard 
      </p>
      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/" className={buttonVariants()}>
        Get Started{" "}
        </Link>
        <Link href="/" className={buttonVariants({variant: "secondary"})}>Demo</Link>

      </div>
    </div>
  );
}

function SampleCard() {
  return (
    <div className="py-5">
      <h2 className="text-3xl animate-fade-in font-normal text-center mb-8 sm:text-2xl md:text-3xl">
      test
      </h2>
      <div className="grid animate-fade-in grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-8">
        
      </div>
    </div>
  );
}


import { BackgroundBeams } from "@/components/ui/background-beams";

export function BackgroundBeamsDemo() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Join the waitlist
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Welcome to MailJet, the best transactional email service on the web.
          We provide reliable, scalable, and customizable email solutions for
          your business. Whether you&apos;re sending order confirmations,
          password reset emails, or promotional campaigns, MailJet has got you
          covered.
        </p>
        <input
          type="text"
          placeholder="hi@manuarora.in"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
        />
      </div>
      <BackgroundBeams />
    </div>
  );
}

