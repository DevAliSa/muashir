import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import {  Sparkle } from 'lucide-react'
import Link from 'next/link';

export const Navbar = () => {
  return (
    <header>
        <MaxWidthWrapper>
            <div className='flex justify-between items-center h-16'>
                <Link href="/" className='flex items-center space-x-2'>
                    <samp className="text-xl font-bold text-primary">
                    Muashir
                    </samp>
                </Link>
            </div>
        </MaxWidthWrapper>
    </header>
  )
}
export default Navbar
