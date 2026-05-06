import React from 'react';
import { fetcher } from '@/src/lib/coingecko.actions';
import { formatCurrency } from '../utils';
import { CardTitle } from '../card';
import Image from 'next/image';

const CoinOverview = async () => {
  const coin = await fetcher<CoinDetailsData>('/coins/bitcoin', {
    dex_pair_format: 'symbol',
  });

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
