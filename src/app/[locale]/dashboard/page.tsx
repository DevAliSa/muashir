import MaxWidthWrapper from '@/components/ui/common/MaxWidthWrapper';
import React, { Suspense } from 'react';
import TrendingCoins from '@/components/ui/home/TrendingCoins';
import CoinOverview from '@/components/ui/home/CoinOverview';
import {
  CoinOverviewFallback,
  TrendingCoinsFallback,
} from '@/components/ui/home/fallback';

const page = async () => {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <MaxWidthWrapper className="relative z-10">
        <section className="py-20"></section>
        <Suspense fallback={<CoinOverviewFallback />}>
          <CoinOverview />
        </Suspense>

        <Suspense fallback={<TrendingCoinsFallback />}>
          <TrendingCoins />
        </Suspense>
      </MaxWidthWrapper>
    </main>
  );
};

export default page;
