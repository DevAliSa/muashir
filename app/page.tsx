import { Card, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import MaxWidthWrapper from "@/components/ui/common/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <HeroSection />
      <SampleCard />
    </MaxWidthWrapper>
  );
}
function HeroSection() {
  return (
    <div className="py-20 md:py-36 text-center mx-8 ">
      <h1 className="text-3xl font-bold animate-fade-in tracking-tight sm:text-5xl md:text-7xl">
      Test
      </h1>
      <p className="mt-6 animate-fade-in text-lg text-muted-foreground max-w-3xl mx-auto">
      Large Language Model Applications for Arabic 
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