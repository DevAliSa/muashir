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
      <div className="grid animate-fade-in grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 mx-8 ">

        <div className="card-wrapper h-48 relative overflow-hidden">
          <CardTitle className="card-content p-4  text-lg font-bold mb-6 dark:text-neutral-900 relative">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><g fill="currentColor"><path d="M17 18v-2h-2v2H3v6h2v-4h10v4h2v-4h10v4h2v-6z"/><path d="M4 32a3 3 0 1 1 0-6a3 3 0 0 1 0 6m0-4a1 1 0 1 0 0 2a1 1 0 0 0 0-2m12 4a3 3 0 1 1 0-6a3 3 0 0 1 0 6m0-4a1 1 0 1 0 0 2a1 1 0 0 0 0-2m12 4a3 3 0 1 1 0-6a3 3 0 0 1 0 6m0-4a1 1 0 1 0 0 2a1 1 0 0 0 0-2M23 8V6h-2.1a5 5 0 0 0-.73-1.75l1.49-1.49l-1.42-1.42l-1.49 1.49A5 5 0 0 0 17 2.1V0h-2v2.1a5 5 0 0 0-1.75.73l-1.49-1.49l-1.42 1.42l1.49 1.49A5 5 0 0 0 11.1 6H9v2h2.1a5 5 0 0 0 .73 1.75l-1.49 1.49l1.41 1.41l1.49-1.49a5 5 0 0 0 1.76.74V14h2v-2.1a5 5 0 0 0 1.75-.73l1.49 1.49l1.41-1.41l-1.48-1.5A5 5 0 0 0 20.9 8zm-7 2a3 3 0 1 1 0-6a3 3 0 0 1 0 6"/><path d="M16 8a1 1 0 0 1-1-1a1.4 1.4 0 0 1 0-.2a.7.7 0 0 1 .06-.18a.7.7 0 0 1 .09-.18a2 2 0 0 1 .12-.15a.9.9 0 0 1 .33-.21a1 1 0 0 1 1.09.21l.12.15a.8.8 0 0 1 .09.18a.6.6 0 0 1 .1.18a1.3 1.3 0 0 1 0 .2a1 1 0 0 1-1 1"/></g></svg>
          Comprehensive Management
          <p className=" font-normal mt-1 text-sm dark:text-neutral-900">Track all your crypto assets in one place with real-time updates and insights.</p></CardTitle>
          <FlickeringGrid className="relative inset-0 z-0 mask-[radial-gradient(450px_circle_at_center,white,transparent)]"squareSize={4} gridGap={6} color="#00ff15" maxOpacity={0.5} flickerChance={1.1} height={800} width={800}/>
        </div>

        <div className="card-wrapper h-48 relative overflow-hidden">
          <CardTitle className="card-content p-4  text-lg font-bold mb-6 dark:text-neutral-900 relative">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="38" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M14.325 3.75h-4.65A3.75 3.75 0 0 1 6.75 6.675v.65a3.75 3.75 0 0 1 2.925 2.925h4.65a3.75 3.75 0 0 1 2.925-2.925v-.65a3.75 3.75 0 0 1-2.925-2.925m.605-1.497q-.412-.004-.878-.003H9.948q-.466 0-.877.003a1 1 0 0 0-.164.003c-.452.008-.853.027-1.201.074c-.628.084-1.195.27-1.65.725c-.456.456-.642 1.023-.726 1.65c-.047.349-.066.75-.074 1.202a1 1 0 0 0-.003.163q-.004.413-.003.878v.104q0 .465.003.878a1 1 0 0 0 .003.163c.008.453.027.853.074 1.201c.084.628.27 1.195.726 1.65c.455.456 1.022.642 1.65.726c.348.047.749.066 1.201.074a1 1 0 0 0 .164.003q.411.004.877.003h4.104q.465 0 .878-.003a1 1 0 0 0 .163-.003c.453-.008.854-.027 1.201-.074c.628-.084 1.195-.27 1.65-.726c.456-.455.642-1.022.726-1.65a11 11 0 0 0 .074-1.201a1 1 0 0 0 .003-.163q.004-.413.003-.878v-.104q0-.465-.003-.878a1 1 0 0 0-.003-.163a11 11 0 0 0-.074-1.201c-.084-.628-.27-1.195-.725-1.65c-.456-.456-1.023-.642-1.65-.726a11 11 0 0 0-1.202-.074a1 1 0 0 0-.163-.003m.964 1.541a2.26 2.26 0 0 0 1.312 1.312a5 5 0 0 0-.023-.2c-.061-.462-.169-.66-.3-.79s-.327-.237-.788-.3a5 5 0 0 0-.2-.022m1.312 5.1a2.26 2.26 0 0 0-1.312 1.312q.105-.01.2-.022c.462-.063.66-.17.79-.3s.238-.328.3-.79q.012-.095.022-.2m-9.1 1.312a2.26 2.26 0 0 0-1.312-1.312q.01.105.023.2c.062.462.169.66.3.79s.327.237.788.3q.096.012.201.022m-1.312-5.1a2.26 2.26 0 0 0 1.312-1.312q-.105.01-.2.023c-.462.062-.66.169-.79.3s-.237.327-.3.788zM12 6.75a.25.25 0 1 0 0 .5a.25.25 0 0 0 0-.5M10.25 7a1.75 1.75 0 1 1 3.5 0a1.75 1.75 0 0 1-3.5 0m-1.566 7.448c1.866-.361 3.863-.28 5.48.684c.226.135.44.304.625.512c.376.423.57.947.579 1.473q.286-.186.577-.407l1.808-1.365a2.64 2.64 0 0 1 3.124 0c.835.63 1.169 1.763.57 2.723c-.425.681-1.065 1.624-1.717 2.228c-.66.61-1.597 1.124-2.306 1.466c-.862.416-1.792.646-2.697.792c-1.85.3-3.774.254-5.602-.123a14.3 14.3 0 0 0-2.865-.293H4a.75.75 0 0 1 0-1.5h2.26c1.062 0 2.135.111 3.168.324a14.1 14.1 0 0 0 5.06.111c.828-.134 1.602-.333 2.284-.662c.683-.33 1.451-.764 1.938-1.215c.493-.457 1.044-1.248 1.465-1.922c.127-.204.109-.497-.202-.732c-.37-.28-.947-.28-1.316 0l-1.807 1.365c-.722.545-1.61 1.128-2.711 1.304a9 9 0 0 1-.347.048q-.086.015-.179.02a10 10 0 0 1-1.932 0a.75.75 0 1 1 .141-1.493a8.5 8.5 0 0 0 1.668-.003l.03-.003a.742.742 0 0 0 .15-1.138a1.2 1.2 0 0 0-.275-.222c-1.181-.705-2.759-.822-4.426-.5a12.1 12.1 0 0 0-4.535 1.935a.75.75 0 0 1-.868-1.224a13.6 13.6 0 0 1 5.118-2.183"/></svg>
          Zakat Calculation Made Easy
          <p className=" font-normal text-sm dark:text-neutral-900">Automatically calculate your Zakat obligations based on your crypto holdings and transactions.</p></CardTitle>
          <FlickeringGrid className="relative inset-0 z-0 mask-[radial-gradient(450px_circle_at_center,white,transparent)]"squareSize={4} gridGap={6} color="#00ff15" maxOpacity={0.5} flickerChance={1.1} height={800} width={800}/>
        </div>

        <div className="card-wrapper h-48 relative overflow-hidden">
          <CardTitle className="card-content p-4 text-lg font-bold mb-6 dark:text-neutral-900 relative">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="38" viewBox="0 0 14 14"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M.5 13.29H8m-1 0v-2.5H1.5v2.5"/><rect width="7.07" height="4.24" x="3.96" y="2.17" rx="1" transform="rotate(-45 7.499 4.294)"/><path d="m9 5.79l4.5 4.5"/></g></svg>
          Regulatory Compliance
          <p className=" font-normal text-sm dark:text-neutral-900">Stay compliant with Saudi financial regulations through our integrated compliance tools and resources.</p></CardTitle>
          <FlickeringGrid className="relative inset-0 z-0 mask-[radial-gradient(450px_circle_at_center,white,transparent)]"squareSize={4} gridGap={6} color="#00ff15" maxOpacity={0.5} flickerChance={1.1} height={800} width={800}/>
        </div>
      </div>
    </div>
  );
}

