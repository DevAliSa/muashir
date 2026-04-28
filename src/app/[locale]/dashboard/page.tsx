import MaxWidthWrapper from "@/components/ui/common/MaxWidthWrapper";
import React from "react";
import Image from "next/image";
import { setRequestLocale } from "next-intl/server";
import { CardTitle } from "@/components/ui/card";
import DataTable from "@/components/ui/DataTable";
import { header } from "framer-motion/client";

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
        <div className="py-20 pt-2 md:py-36  animate-fade-in">
          <div className="  flex  items-center gap-2 p-8 rounded-2xl bg-black/5 dark:bg-white/5  backdrop-blur-sm ">
            <Image
              src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png"
              alt="Bitcoin"
              width={36}
              height={36}
            />
            <CardTitle className="text-left">
              <p className="font-light">BitCoin / BTC</p>
              <h1>$89,113.00</h1>
            </CardTitle>
          </div>
          <p>Trending Coins</p>
          <DataTable data={[]} columns={[{ header: "Title" }, { header: "Price" }]} />
        </div>
      </MaxWidthWrapper>
    </main>
  );
}
