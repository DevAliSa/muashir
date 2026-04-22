import MaxWidthWrapper from "@/components/ui/common/MaxWidthWrapper";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

export default async function DashboardPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <main className="relative min-h-screen overflow-hidden">
      <MaxWidthWrapper className="relative z-10">
        <div className="py-20 md:py-36 text-center animate-fade-in">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Welcome to your dashboard!
          </p>
        </div>
      </MaxWidthWrapper>
    </main>
  );
}