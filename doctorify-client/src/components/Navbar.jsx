import Link from "next/link";
import ThemeToggle from "@/app/theme-toggle";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between p-4 bg-white/10 backdrop-blur-sm m-2 rounded-full border-2 border-white/10 dark:border-white/10">
            <h1 className="text-2xl font-bold dark:text-white">DOCTORIFY</h1>
            <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <Link href="/">Home</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Contact</Link>
                    <Link href="/">Login</Link>
                    <Link href="/">Get Started</Link>
                </div>
            </div>
        </nav>
    );
}