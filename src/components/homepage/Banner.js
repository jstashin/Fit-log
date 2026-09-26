import Image from "next/image";
import Link from "next/link";
import { Oswald } from "next/font/google";
import banner from "@/assets/banner.png";

const oswald = Oswald({
  subsets: ["latin"],
  weight: "700",
});

const Banner = () => {
  return (
    <section className="container mx-auto max-w-[1500px] px-6 py-8">
      <div className="grid items-center gap-6 overflow-hidden rounded-xl bg-[#1b1e22] px-8 py-10 md:min-h-[350px] md:grid-cols-[1.15fr_0.85fr] md:px-14 ">
        <div>
          <p className="mb-4 text-xs font-bold tracking-[0.2em] text-[#ccff00]">
            WORKOUT LIBRARY
          </p>

          <h1
            className={`${oswald.className} text-4xl uppercase leading-[1.05] text-white sm:text-5xl xl:text-[58px]`}
          >
            <span className="xl:whitespace-nowrap">
              TRAIN WITH INTENT. LOG
            </span>
            <br />
            EVERY SET.
          </h1>

          <p className="mt-5 max-w-lg text-sm leading-6 text-gray-400">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it<br></br>
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <Link
            href="#library"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#ccff00] px-5 py-3 text-xs font-bold text-black hover:bg-[#b8e600]"
          >
            BROWSE WORKOUTS
          
          </Link>
        </div>

        <div className="relative h-[260px] w-full sm:h-[300px]">
          <Image
            src={banner}
            alt="Person working out"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-contain object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;