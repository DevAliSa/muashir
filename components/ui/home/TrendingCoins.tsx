import { fetcher } from '@/src/lib/coingecko.actions';
import MaxWidthWrapper from "@/components/ui/common/MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";
import { setRequestLocale } from "next-intl/server";
import { CardTitle } from "@/components/ui/card";
import DataTable from "@/components/ui/DataTable";
import {  TrendingDown, TrendingUp } from "lucide-react";
import { cn, formatCurrency } from "@/components/ui/utils";

const TrendingCoins = async () => {
  const trendingCoins = await fetcher<{coins: TriendingCoin[]}>('/search/trending', undefined, 300);

    const columns: DataTableColumn<TrendingCoin>[] = [

      heder: 'Name',
      cellClassNme: 'name-cell',
      cell: (coin) => {
        const item = coin.item;

        return (
          <Link href={`/coins/${item.id}`}>
            <Image src={item.large} alt={item.name} width={36} height={36}/>
            <p>{item.name}</p>
          </Link>
        );
      },
    },
      {
        header: '24h Change',
        cellClassName: 'change-cell',
        cell: (coin) => {
          const item = coin.item;
          const isTrendingUp = item.data.price_change_percentage_24h.usd > 0;

          return (
            <div className={cn('price-change', isTrendingUp? 'text-green-500' : 'text-red-500')}>
              <p>
                {isTrendingUp ?( <TrendingUp width={16} height={16}/>
                ) : (
                  <TrendingDown width={16} height={16}/>
                )}
                {Math.abs(item.data.price_change_percentage_24h.usd).toFixed(2)}%
              </p>
            </div>
          );
              },

            },

            {
              header: 'Price',
              cellClassName: 'price-cell',
              cell: (coin) => formatCurrency( coin.item.data.price),
            },
          ];

  return (
    <div id= "trending-coins">
    <h4 className="mt-8 text-lg font-semibold">Trending Coins</h4>
          <div className="mt-4">
            <DataTable
              data={trendingCoins.coins.slice(0, 6) || []}
              columns={columns}
              rowKey={(coin) => coin.item.id}
              tableClassName='trending-coins-table'
            />
          </div>
    </>
  )
}

export default TrendingCoins