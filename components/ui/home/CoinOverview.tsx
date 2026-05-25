import React from 'react';
import { fetcher } from '@/src/lib/coingecko.actions';
import { formatCurrency } from '../utils';
import { CardTitle } from '../card';
import Image from 'next/image';
import CandlestickChart from '@/components/ui/CandlestickChart';
import { CoinOverviewFallback } from './fallback';

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

type OHLCData = [number, number, number, number, number];

const CoinOverview = async () => {
  try {
    const [coin, coinOHLCData] = await Promise.all([
      fetcher<CoinDetailsData>('/coins/bitcoin', {
        dex_pair_format: 'symbol',
      }),
      fetcher<OHLCData[]>('/coins/bitcoin/ohlc', {
        vs_currency: 'usd',
        days: 1,
        interval: 'hourly',
        precision: 'full',
      }),
    ]);

    return (
      <div id="coin-overview">
        <CandlestickChart data={coinOHLCData} coinId="bitcoin">
          <div className="flex items-center gap-2 p-8 rounded-2xl bg-black/5 dark:bg-white/5 backdrop-blur-sm">
            <Image
              src={coin.image.large}
              alt={coin.name}
              width={36}
              height={36}
            />
            <CardTitle className="text-left">
              <p className="font-light">
                {coin.name} / {coin.symbol.toUpperCase()}
              </p>
              <h1>{formatCurrency(coin.market_data?.current_price?.usd)}</h1>
            </CardTitle>
          </div>
        </CandlestickChart>
      </div>
    );
  } catch (error) {
    console.error('Failed to fetch Bitcoin overview:', error);
    return <CoinOverviewFallback />;
  }
};
export default CoinOverview;
