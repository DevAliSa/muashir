"use client";
import { useState } from "react";
import { Button, buttonVariants } from "../button";
import { Menu } from "lucide-react";
import { useTheme } from "next-themes";
import { Moon , Sun } from "lucide-react";
import Link from 'next/link';


const MobileMenu = ({ user }: { user: boolean }) => {
        const {theme, setTheme} = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
    <div className="md:hidden">
        <Menu onClick={() => setIsMenuOpen(!isMenuOpen)} />
            {isMenuOpen && (
                <nav className="absolute left-0 right-0 top-16 p-4  animate-fade-in bg-white/80 dark:bg-black/90">
                    <div className ="flex flex-col p-4 space-y-2 ">
                        <Link href={buttonVariants({
                            variant: "ghost",
                        })} 
                        >
                        </Link>
                            {!user ? (
                    <>
                        <Link href="/" className={buttonVariants({variant: "secondary", size: "icon"})} >
                            Ar
                        </Link>
                        <Button variant="secondary" size="icon" className="rounded-full"
                            onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                            <Moon size={18} className="rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
                            <Sun size={18} className="absolute rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
                        </Button>
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
                            <Link href={"/signout"} className={buttonVariants({variant: "ghost",})}>
                                Sign out
                            </Link>
                        </div>
                    )
                }
                    </div>
                </nav>
            )}
    </div>
    );
};

export default MobileMenu;
