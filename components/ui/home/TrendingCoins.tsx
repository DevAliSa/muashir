import { fetcher } from '@/src/lib/coingecko.actions';
import MaxWidthWrapper from '@/components/ui/common/MaxWidthWrapper';
import Image from 'next/image';
import Link from 'next/link';
import DataTable from '@/components/ui/DataTable';
import { cn } from '@/components/ui/utils';

type TrendingCoinItem = {
  id: string;
  name: string;
  large?: string;
  price_btc?: number;
  market_cap_rank?: number;
  score?: number;
};

type TrendingCoin = { item: TrendingCoinItem };

const TrendingCoins = async () => {
  const trendingCoins = await fetcher<{ coins: TrendingCoin[] }>(
    '/search/trending',
    undefined,
    300
  );

  const columns = [
    {
      header: 'Name',
      cellClassName: 'name-cell',
      cell: (coin: TrendingCoin) => {
        const item = coin.item;

        return (
          <Link href={`/coins/${item.id}`} className="flex items-center gap-3">
            {item.large ? (
              <Image src={item.large} alt={item.name} width={36} height={36} />
            ) : null}
            <p>{item.name}</p>
          </Link>
        );
      },
    },
    {
      header: 'Rank',
      cellClassName: 'rank-cell',
      cell: (coin: TrendingCoin) =>
        coin.item.market_cap_rank ?? coin.item.score ?? '-',
    },
    {
      header: 'Price (BTC)',
      cellClassName: 'price-cell',
      cell: (coin: TrendingCoin) =>
        coin.item.price_btc ? coin.item.price_btc.toFixed(8) : '-',
    },
  ];

  return (
    <div id="trending-coins">
      <MaxWidthWrapper>
        <h4 className="mt-8 text-lg font-semibold">Trending Coins</h4>
        <div className="mt-4">
          <DataTable
            data={trendingCoins?.coins?.slice(0, 6) || []}
            columns={columns}
            rowKey={(coin: TrendingCoin) => coin.item.id}
            tableClassName="trending-coins-table"
          />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default TrendingCoins;
