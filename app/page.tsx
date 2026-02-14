import {  CardTitle } from "@/components/ui/card";
import Link from "next/link";
import MaxWidthWrapper from "@/components/ui/common/MaxWidthWrapper";
import {  buttonVariants } from "@/components/ui/button";
import { Cover } from "@/components/ui/cover";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { Particles } from "@/components/ui/particles"


export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <MaxWidthWrapper className="relative z-10">
      <HeroSection />
      <SampleCard />
      </MaxWidthWrapper>
      <Particles 
        className="absolute inset-0 z-0 pointer-events-none" 
        quantity={200} 
        staticity={50}
        color="#5ee9b5" 
      />
    </main>
    
  );
}
function HeroSection() {
  return (
    <div className="py-20 md:py-36 text-center mx-8 animate-fade-in ">
      <h2 className="bg-clip-text  text-transparent text-center bg-linear-to-b from-neutral-400 to-neutral-600 dark:from-neutral-700 dark:to-neutral-400 text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        Your crypto in compliance <br /> with <Cover> Saudi standards </Cover>
      </h2>
      <p className="mt-6 animate-fade-in text-lg text-muted-foreground max-w-3xl mx-auto">
      The first platform to bridge global crypto data with Saudi financial regulations. Manage your portfolio, calculate Zakat, and ensure full compliance in one unified dashboard 
      </p>
      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/" className={buttonVariants({ variant: "default", size: "lg" })}>
        Get Started{" "}
        </Link>
      </div>
    </div>
  );
}


function SampleCard() {
  return (
    <div className=" pb-36 ">
      <h2 className="text-3xl animate-fade-in font-normal text-center mb-8 sm:text-2xl md:text-3xl">
      Why choose us?
      </h2>
      <div className="grid animate-fade-in grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-8 ">

        <div className="card-wrapper h-38">
          <CardTitle className="card-content p-4 text-lg font-bold mb-2 dark:text-neutral-900">Comprehensive Management
          <p className=" font-normal text-sm dark:text-neutral-900">Track all your crypto assets in one place with real-time updates and insights.</p></CardTitle>
          <FlickeringGrid className="relative inset-0 z-0 mask-[radial-gradient(450px_circle_at_center,white,transparent)]"squareSize={4} gridGap={6} color="#00ff15" maxOpacity={0.5} flickerChance={1.1} height={800} width={800}/>
        </div>

        <div className="card-wrapper h-38 ">
          <CardTitle className="card-content p-4  text-lg font-bold mb-2 dark:text-neutral-900">Zakat Calculation Made Easy 
          <p className=" font-normal text-sm dark:text-neutral-900">Automatically calculate your Zakat obligations based on your crypto holdings and transactions.</p></CardTitle>
          <FlickeringGrid className="relative inset-0 z-0 mask-[radial-gradient(450px_circle_at_center,white,transparent)]"squareSize={4} gridGap={6} color="#00ff15" maxOpacity={0.5} flickerChance={1.1} height={800} width={800}/>
        </div>

        <div className="card-wrapper h-38">
          <CardTitle className="card-content p-4 text-lg font-bold mb-2 dark:text-neutral-900">Regulatory Compliance
          <p className=" font-normal text-sm dark:text-neutral-900">Stay compliant with Saudi financial regulations through our integrated compliance tools and resources.</p></CardTitle>
          <FlickeringGrid className="relative inset-0 z-0 mask-[radial-gradient(450px_circle_at_center,white,transparent)]"squareSize={4} gridGap={6} color="#00ff15" maxOpacity={0.5} flickerChance={1.1} height={800} width={800}/>
        </div>
  
      </div>
    </div>
  );
}

