"use client";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Moon, Sun } from "lucide-react";
import { Button, buttonVariants } from "../button";
import { useTheme } from "next-themes";
import MobileMenu from "./MobileMenu";
import { useLocale } from "next-intl";
import { Link , useRouter, usePathname } from "@/src/i18n/navigation";
import { useTranslations } from "next-intl";


export const Navbar = () => {
    const { theme, setTheme } = useTheme();
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const user = false;
    const t = useTranslations();

    const handleLanguageSwitch = () => {
    const newLocale = locale === "en" ? "ar" : "en";
    router.replace(pathname, { locale: newLocale });
    };
    return (
    <header className="fixed top-0 z-50 w-full animate-fade-in backdrop-blur-md ">
        <MaxWidthWrapper>
        <div className=" flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
            <img src="/logo.svg" alt="logo" className="h-8 w-8" />
            <div className="text-xl font-bold  text-primary">Muashir</div>
            </Link>
            <div className="md:hidden">
            <MobileMenu user={user} />
            </div>
            <nav className="hidden md:flex items-center gap-4">
            <Button
                variant="secondary"
                size="icon"
                onClick={handleLanguageSwitch}>
                {locale === "en" ? "AR" : "EN"}
            </Button>
            <Button
                variant="secondary"
                size="icon"
                className="rounded-full font-masmakBHD"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                <Moon
                size={18}
                className="rotate-0 scale-100 dark:-rotate-90 dark:scale-0"
                />
                <Sun
                size={18}
                className="absolute rotate-90 scale-0 dark:rotate-0 dark:scale-100"
                />
            </Button>
            {!user ? (
                <div className="flex items-center font-masmakBHD gap-4">
                <Link
                    href="/login"
                    className={buttonVariants({ variant: "secondary" })}>
                    {t("Buttons.Login")}
                </Link>
                <Link href="/register" className={buttonVariants()}>
                    {t("Buttons.Sign up")}
                </Link>
                </div>
            ) : (
                <div className="flex items-center gap-4">
                <Link
                    href="/dashboard"
                    className={buttonVariants({ variant: "secondary" })}>
                    Dashboard
                </Link>
                <Link className={buttonVariants()} href={"/create"}>
                    Create
                </Link>
                <Link
                    href={"/signout"}
                    className={buttonVariants({ variant: "ghost" })}
                >
                    Sign out
                </Link>
                </div>
            )}
            </nav>
        </div>
        </MaxWidthWrapper>
    </header>
    );
};
export default Navbar;
