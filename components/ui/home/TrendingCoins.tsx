import { fetcher } from '@/src/lib/coingecko.actions';
import MaxWidthWrapper from "@/components/ui/common/MaxWidthWrapper";
import Image from "next/image";
import { setRequestLocale } from "next-intl/server";
import { CardTitle } from "@/components/ui/card";
import DataTable from "@/components/ui/DataTable";
import { TrendingDown, TrendingUp } from "lucide-react";
import { cn, formatCurrency } from "@/components/ui/utils";

const TrendingCoins = async () => {
  const trendingCoins = await fetcher<{coins: TriendingCoin[]}>('/search/trending', undefined, 300);

    const columns: DataTableColumn<TrendingCoin>[] = [

      heder: 'Name',
      cellClassNme: 'name-cell',
      cell: (coin) => {
        const item = coin.item;
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