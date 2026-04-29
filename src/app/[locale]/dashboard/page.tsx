import MaxWidthWrapper from "@/components/ui/common/MaxWidthWrapper";
import React from "react";
import Image from "next/image";
import { setRequestLocale } from "next-intl/server";
import { CardTitle } from "@/components/ui/card";
import DataTable from "@/components/ui/DataTable";
import { header } from "framer-motion/client";
import Link from "next/link";
import { TrendingDown, TrendingUp } from "lucide-react";


export default async function DashboardPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {


  const columns: DataTableColumn<TrendingCoin>[] =[
    { header: 'Name',
      cellClassName: 'name-cell',
      cell: (coin) => {
        const item = coin.item;

        return(
          <Link href={`/coins/${item.id}`}>
            <Image src={item.large} alt={item.name} width={36} height={36} />
            <p>{item.name}</p>
          </Link>
        )
      },
    },
    {
      header: '24h Change',
      cellClassName: 'change-cell',
      cell: (coin) => {
        const item = coin.item;
        const isTrending = item.price_change_percentage_24h;
        .usd > 0;
      
        return (
          <div className={cn('price-change', isTrendingUp ? 'text-green-500' : 'text-red-500')}>
            <p>
              {isTrendingUp ? (
                <TrendingUp width={16} height={16}/>
              ) :
                <TrendingDown width={16} height={16}/>
                
              }
            </p>
        )
      }
    }
    }
  ]

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
