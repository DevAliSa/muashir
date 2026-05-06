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

    const columns: DataTableColumn<TrendingCoin>[] = 

  return (
    <>
    <p className="mt-8 text-lg font-semibold">Trending Coins</p>
          <div className="mt-4">
            <DataTable
              data={trendingCoinsData}
              columns={columns}
              rowKey={(row, index) => `${row.item.id}-${index}`}
            />
          </div>
    </>
  )
}

export default TrendingCoins