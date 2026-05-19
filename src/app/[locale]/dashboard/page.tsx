import MaxWidthWrapper from '@/components/ui/common/MaxWidthWrapper';
import React, { Suspense } from 'react';
import TrendingCoins from '@/components/ui/home/TrendingCoins';
import CoinOverview from '@/components/ui/home/CoinOverview';

const page = async () => {
  return (
    
      <main className='relative min-h-screen overflow-hidden'>
        <MaxWidthWrapper className='relative z-10'>
        <section className='py-20'></section>
        <Suspense fallback={<div>Loading...</div>}>
          <CoinOverview />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <TrendingCoins/>
        </Suspense>
        
      </MaxWidthWrapper>  
      </main>
    
  );
};

export default page;