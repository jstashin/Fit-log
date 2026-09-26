"use client";

import { toast } from "react-toastify";
import { useWorkout } from "@/context/WorkoutContext";

export default function WorkoutActions({ workout }) {
  const { ready, addToPlan, addToSaved } = useWorkout();

  const handlePlan = () => {
    const result = addToPlan(workout);

    if (result === "added") toast.success("Added to today's plan");
    if (result === "duplicate") toast.info("Already in today's plan");
    if (result === "full") toast.error("Today's plan can hold up to 5 lifts");
  };

  const handleSaved = () => {
    const result = addToSaved(workout);

    if (result === "added") toast.success("Saved for later");
    if (result === "duplicate") toast.info("Already saved");
  };

  return (
    <div className="mt-8 flex flex-wrap gap-3">
      <button
        type="button"
        onClick={handlePlan}
        disabled={!ready}
        className="rounded-md bg-[#ccff00] px-5 py-3 font-bold text-black disabled:opacity-50"
      >
        + Add to today&apos;s plan
      </button>

      <button
        type="button"
        onClick={handleSaved}
        disabled={!ready}
        className="rounded-md border border-gray-600 px-5 py-3 font-bold text-white disabled:opacity-50"
      >
        ♡ Save for later
      </button>
    </div>
  );
}