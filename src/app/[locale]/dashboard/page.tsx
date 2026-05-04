import MaxWidthWrapper from "@/components/ui/common/MaxWidthWrapper";
import React from "react";
import Image from "next/image";
import { setRequestLocale } from "next-intl/server";
import { CardTitle } from "@/components/ui/card";
import DataTable from "@/components/ui/DataTable";
import Link from "next/link";
import { TrendingDown, TrendingUp } from "lucide-react";
import { cn, formatCurrency } from "@/components/ui/utils";
import { fetcher } from "@/src/lib/coingecko.actions";

interface CoinDetailsData {
  id: string;
  symbol: string;
  name: string;
  image: {
    large: string;
    thumb?: string;
    small?: string;
  };
  market_data?: {
    current_price?: {
      usd?: number;
    };
  };
}

// Dummy trending coins data using local image assets
const trendingCoinsData: TrendingCoin[] = [
  {
    item: {
      id: "bitcoin",
      name: "Bitcoin",
      symbol: "BTC",
      thumb: "/logo.svg",
      large: "/logo.svg",
      price_change_percentage_24h: {
        usd: 2.45,
      },
    },
  },
  {
    item: {
      id: "ethereum",
      name: "Ethereum",
      symbol: "ETH",
      thumb: "/logo.svg",
      large: "/logo.svg",
      price_change_percentage_24h: {
        usd: -1.23,
      },
    },
  },
  {
    item: {
      id: "cardano",
      name: "Cardano",
      symbol: "ADA",
      thumb: "/logo.svg",
      large: "/logo.svg",
      price_change_percentage_24h: {
        usd: 5.67,
      },
    },
  },
  {
    item: {
      id: "solana",
      name: "Solana",
      symbol: "SOL",
      thumb: "/logo.svg",
      large: "/logo.svg",
      price_change_percentage_24h: {
        usd: -2.89,
      },
    },
  },
];

export default async function DashboardPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const columns: DataTableColumn<TrendingCoin>[] = [
    {
      header: "Name",
      cellClassName: "name-cell",
      cell: (coin) => {
        const item = coin.item;
        return (
          <Link href={`/coins/${item.id}`} className="flex items-center gap-3">
            <Image
              src={item.large}
              alt={item.name}
              width={36}
              height={36}
              className="rounded-full"
            />
            <div>
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-gray-500 uppercase">{item.symbol}</p>
            </div>
          </Link>
        );
      },
    },
    {
      header: "24h Change",
      cellClassName: "change-cell",
      cell: (coin) => {
        const item = coin.item;
        const isTrendingUp = (item.price_change_percentage_24h?.usd ?? 0) > 0;
        const changeValue = item.price_change_percentage_24h?.usd ?? 0;

        return (
          <div
            className={cn(
              "flex items-center gap-2 font-medium",
              isTrendingUp ? "text-green-500" : "text-red-500",
            )}
          >
            {isTrendingUp ? (
              <TrendingUp width={16} height={16} />
            ) : (
              <TrendingDown width={16} height={16} />
            )}
            <span>{changeValue.toFixed(2)}%</span>
          </div>
        );
      },
    },
  ];
  const coin = await fetcher<CoinDetailsData>('/coins/bitcoin', {dex_pair_format: 'symbol'});

  return (
    <main className="relative min-h-screen overflow-hidden">
      <MaxWidthWrapper className="relative z-10">
        <div className="py-20 pt-2 md:py-36 animate-fade-in">
          <div className="flex items-center gap-2 p-8 rounded-2xl bg-black/5 dark:bg-white/5 backdrop-blur-sm">
            <Image src={coin.image.large} alt={coin.name} width={36} height={36} />
            <CardTitle className="text-left">
              <p className="font-light">{coin.name} / {coin.symbol.toUpperCase()}</p>
              <h1>{formatCurrency(coin.market_data?.current_price?.usd)}</h1>
            </CardTitle>
          </div>
          <p className="mt-8 text-lg font-semibold">Trending Coins</p>
          <div className="mt-4">
            <DataTable
              data={trendingCoinsData}
              columns={columns}
              rowKey={(row, index) => `${row.item.id}-${index}`}
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </main>
  );
}

