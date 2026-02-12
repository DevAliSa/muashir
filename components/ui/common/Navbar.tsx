import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import {  Sparkle } from 'lucide-react'
import Link from 'next/link';
import { buttonVariants } from '../button';

export const Navbar = () => {
    const user = false
    return (
    <header className="fixed top-0 z-50 w-full   backdrop-blur-md ">
        <MaxWidthWrapper>
            <div className=' flex justify-between items-center h-16'>
                <Link href="/" className='flex items-center space-x-2'>
                    <samp className="text-xl font-bold text-primary">
                    Muashir
                    </samp>
                </Link> 
                <nav className="hidden md:flex items-center space-x-4">
                {!user ? (
                    <>
                    <Link href="/login" className={buttonVariants({variant: "secondary"})}>
                        Login
                        </Link>
                        <Link href="/register" className={buttonVariants()}>
                            Sign up
                        </Link>
                        </>
                    ):( 
                    <div className="flex items-center gap-2">
                        <Link href="/dashboard"
                            className={buttonVariants({variant: "secondary"})}
                            >
                            Dashboard
                            </Link>
                            <Link className={buttonVariants()} href={"/create"}>
                                Create
                            </Link>
                            
                        </div>    
                    )
                }
                </nav>
            </div>
        </MaxWidthWrapper>
    </header>
    )
}
export default Navbar
