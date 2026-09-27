import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#101115] text-white">
      <div className="mx-auto flex max-w-[1500px] flex-col items-center justify-between gap-4 px-6 py-7 sm:flex-row">
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="" width={22} height={22} />
          <span className="text-sm font-bold">FITLOG</span>
        </Link>

        <p className="text-center text-xs text-gray-400">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}