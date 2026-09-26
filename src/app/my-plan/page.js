"use client";

import { useState } from "react";
import Link from "next/link";
import PlanWorkoutCard from "@/components/myplan/PlanWorkoutCard";
import { useWorkout } from "@/context/WorkoutContext";

export default function MyPlanPage() {
  const [activeTab, setActiveTab] = useState("plan");
  const [sortBy, setSortBy] = useState("duration");
  const { plan, saved, ready } = useWorkout();

  const activeWorkouts = plan.filter((workout) => !workout.done);

  const minutes = activeWorkouts.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const calories = activeWorkouts.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  const currentList = activeTab === "plan" ? plan : saved;

  const sortedWorkouts = [...currentList].sort((a, b) => {
    if (sortBy === "calories") {
      return b.caloriesBurned - a.caloriesBurned;
    }

    if (sortBy === "rating") {
      return b.rating - a.rating;
    }

    return a.duration - b.duration;
  });

  return (
    <main className="mx-auto min-h-[75vh] max-w-[1500px] px-6 py-12 text-white">
      <h1 className="text-4xl font-black uppercase">MY PLAN</h1>

      <p className="mt-1 text-sm text-gray-400">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      <section className="mt-8 grid grid-cols-3 divide-x divide-white/10 rounded-xl border border-white/10 bg-[#171b23] py-6">
        <div className="px-5 sm:px-8">
          <p className="text-xs text-gray-400">Exercises</p>
          <p className="mt-2 text-3xl font-bold text-[#ccff00]">
            {activeWorkouts.length}
          </p>
        </div>

        <div className="px-5 sm:px-8">
          <p className="text-xs text-gray-400">Minutes</p>
          <p className="mt-2 text-3xl font-bold">{minutes}</p>
        </div>

        <div className="px-5 sm:px-8">
          <p className="text-xs text-gray-400">Calories</p>
          <p className="mt-2 text-3xl font-bold">{calories}</p>
        </div>
      </section>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <div className="inline-flex rounded-md border border-white/10 bg-[#171b23] p-1">
          <button
            type="button"
            onClick={() => setActiveTab("plan")}
            className={`rounded px-4 py-2 text-sm ${
              activeTab === "plan"
                ? "bg-[#2a303a] font-semibold text-white"
                : "text-gray-400"
            }`}
          >
            Today&apos;s Plan
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("saved")}
            className={`rounded px-4 py-2 text-sm ${
              activeTab === "saved"
                ? "bg-[#2a303a] font-semibold text-white"
                : "text-gray-400"
            }`}
          >
            Saved
          </button>
        </div>

        <label className="flex items-center gap-3 text-sm text-gray-400">
          Sort By
          <select
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
            className="rounded-md border border-white/10 bg-[#171b23] px-3 py-2 text-white outline-none"
          >
            <option value="duration">Duration</option>
            <option value="calories">Calories</option>
            <option value="rating">Rating</option>
          </select>
        </label>
      </div>

      {!ready ? (
        <div className="py-20 text-center text-gray-400">
          Loading workouts…
        </div>
      ) : sortedWorkouts.length === 0 ? (
        <section className="mt-5 flex min-h-72 flex-col items-center justify-center rounded-lg border border-white/10 text-center">
          <h2 className="text-2xl font-black uppercase">
            NOTHING HERE YET
          </h2>

          <p className="mt-2 px-4 text-sm text-gray-400">
            Browse the library and add a lift to get today moving.
          </p>

          <Link
            href="/"
            className="mt-5 rounded-md bg-[#ccff00] px-5 py-2 text-sm font-bold text-black"
          >
            Go to workouts
          </Link>
        </section>
      ) : (
        <div className="mt-5 space-y-3">
          {sortedWorkouts.map((workout) => (
            <PlanWorkoutCard
              key={workout.id}
              workout={workout}
              tab={activeTab}
            />
          ))}
        </div>
      )}
    </main>
  );
}