import React from 'react';
import { fetcher } from '@/src/lib/coingecko.actions';
import { formatCurrency } from '../utils';
import { CardTitle } from '../card';

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
import Image from 'next/image';

const CoinOverview = async () => {
  let coin: CoinDetailsData | null = null;

  try {
    coin = await fetcher<CoinDetailsData>('/coins/bitcoin', {
      dex_pair_format: 'symbol',
    });
  } catch (error) {
    console.error('Failed to fetch Bitcoin overview:', error);
    // Return fallback UI on error
    return (
      <div className="flex items-center gap-2 p-8 rounded-2xl bg-black/5 dark:bg-white/5 backdrop-blur-sm">
        <CardTitle className="text-left">
          <p className="font-light">Bitcoin Overview</p>
          <h1>Unable to load price</h1>
        </CardTitle>
      </div>
    );
  }

  if (!coin) {
    return (
      <div className="flex items-center gap-2 p-8 rounded-2xl bg-black/5 dark:bg-white/5 backdrop-blur-sm">
        <CardTitle className="text-left">
          <p className="font-light">Bitcoin Overview</p>
          <h1>No data available</h1>
        </CardTitle>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 p-8 rounded-2xl bg-black/5 dark:bg-white/5 backdrop-blur-sm">
      <Image src={coin.image.large} alt={coin.name} width={36} height={36} />
      <CardTitle className="text-left">
        <p className="font-light">
          {coin.name} / {coin.symbol.toUpperCase()}
        </p>
        <h1>{formatCurrency(coin.market_data?.current_price?.usd)}</h1>
      </CardTitle>
    </div>
  );
};
export default CoinOverview;
