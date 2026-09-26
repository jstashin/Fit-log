import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const activePage = "workouts";
  const planCount = 0;
  const savedCount = 0;

  return (
    <header className="border-b border-white/10 bg-[#121212] text-white">
    <nav className="mx-auto grid max-w-[1600px] grid-cols-3 items-center px-6 py-7">
        <Link href="/" className="flex items-center gap-2 justify-self-start">
          <Image
            src={logo}
            alt=""
            width={32}
            height={32}
          />
          <span className="text-lg font-bold">FITLOG</span>
        </Link>

        <div className="flex items-center gap-2 justify-self-center">
          <Link
            href="/"
            className={`rounded-full px-5 py-2 text-sm ${
              activePage === "workouts"
                ? "bg-[#202817] font-semibold text-[#ccff00]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className={`rounded-full px-5 py-2 text-sm ${
              activePage === "plan"
                ? "bg-[#202817] font-semibold text-[#ccff00]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </div>

        <div className="flex items-center gap-6 justify-self-end text-sm">
          <div className="flex items-center gap-2">
            <span className="text-gray-300">Plan</span>
            <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#ccff00] px-1.5 text-xs font-semibold text-black">
              {planCount}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-gray-400">Saved</span>
            <span className="flex h-6 min-w-6 items-center justify-center rounded-full border border-gray-600 px-1.5 text-xs text-gray-300">
              {savedCount}
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;