import { Suspense } from "react";
import Banner from "@/components/homepage/Banner";
import Library from "@/components/homepage/Library";

export default function Home() {
  return (
    <>
      <Banner />

      <Suspense
        fallback={
          <div className="py-20 text-center text-[#ccff00] animate-pulse">
            Loading workouts…
          </div>
        }
      >
        <Library />
      </Suspense>
    </>
  );
}