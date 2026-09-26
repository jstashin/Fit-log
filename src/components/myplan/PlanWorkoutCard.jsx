"use client";

import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
import { useWorkout } from "@/context/WorkoutContext";

export default function PlanWorkoutCard({ workout, tab }) {
  const { markDone, removeFromPlan, removeFromSaved } = useWorkout();

  const handleDone = () => {
    markDone(workout.id);
    toast.success(`${workout.name} marked as done`);
  };

  const handleRemove = () => {
    if (tab === "plan") {
      removeFromPlan(workout.id);
    } else {
      removeFromSaved(workout.id);
    }

    toast.success(`${workout.name} removed`);
  };

  return (
    <article className="flex flex-col gap-4 rounded-lg border border-white/10 bg-[#1b1e22] p-4 text-white sm:flex-row sm:items-center">
      <div className="relative h-32 w-full shrink-0 overflow-hidden rounded-md sm:h-24 sm:w-28">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          sizes="(max-width: 640px) 100vw, 112px"
          className="object-cover"
        />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="font-bold uppercase">
          {workout.name}
          {workout.done && (
            <span className="ml-3 text-xs text-[#ccff00]">DONE ✓</span>
          )}
        </h3>

        <p className="mt-1 text-sm text-gray-400">{workout.equipment}</p>

        <div className="mt-3 flex flex-wrap gap-4 text-xs text-gray-400">
          <span>⏱ {workout.duration} min</span>
          <span>🔥 {workout.caloriesBurned} kcal</span>
          <span>★ {workout.rating}</span>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <Link
          href={`/workouts/${workout.id}`}
          className="rounded-md border border-gray-600 px-3 py-2 text-xs font-semibold hover:border-white"
        >
          View Details
        </Link>

        {tab === "plan" && (
          <button
            type="button"
            onClick={handleDone}
            disabled={workout.done}
            className="rounded-md bg-[#ccff00] px-3 py-2 text-xs font-bold text-black disabled:opacity-50"
          >
            {workout.done ? "Done ✓" : "✓ Mark as Done"}
          </button>
        )}

        <button
          type="button"
          onClick={handleRemove}
          aria-label={`Remove ${workout.name}`}
          className="rounded-md border border-gray-600 px-3 py-2 text-sm hover:border-red-400 hover:text-red-400"
        >
          ✕
        </button>
      </div>
    </article>
  );
}