import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import {  Icon, Sparkle, Sun } from 'lucide-react'
import Link from 'next/link';
import { buttonVariants } from '../button';

export const Navbar = () => {
    const user = false
    return (
    <header className="fixed top-0 z-50 w-full animate-fade-in backdrop-blur-md ">
        <MaxWidthWrapper>
            <div className=' flex justify-between items-center h-16'>
                <Link href="/" className='flex items-center space-x-2'>
                    <div className="text-xl font-bold text-primary">
                    Muashir
                    </div>
                </Link> 
                <nav className="hidden md:flex items-center space-x-4">
                {!user ? (
                    <>
                        <Link href="/" className={buttonVariants({variant: "secondary", size: "icon"})}>
                            Ar
                        </Link>
                        <Link href="/" className={buttonVariants({variant: "secondary", size: "icon"})}>
                            <Sun size={18} />
                        </Link>
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
