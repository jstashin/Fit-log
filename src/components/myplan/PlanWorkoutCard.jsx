"use client";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
import { useWorkout } from "@/context/WorkoutContext";
import { CiClock2 } from "react-icons/ci";
import { PiFireSimpleFill } from "react-icons/pi";
import { FaRegStar } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";

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

      <div className="flex flex-wrap items-center gap-5 text-sm text-gray-300">
  <span className="inline-flex items-center gap-2">
    <CiClock2 className="text-xl text-[#ccff00]" />
    {workout.duration} min
  </span>

  <span className="inline-flex items-center gap-2">
    <PiFireSimpleFill className="text-lg text-[#ccff00]" />
    {workout.caloriesBurned} kcal
  </span>

  <span className="inline-flex items-center gap-2">
    <FaRegStar className="text-lg text-[#ccff00]" />
    {workout.rating}
  </span>
</div>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <Link
          href={`/workouts/${workout.id}`}
          className="rounded-3xl border border-gray-600 px-3 py-2 text-xs font-semibold hover:border-white"
        >
          View Details
        </Link>

        {tab === "plan" && (
  <button
    type="button"
    onClick={handleDone}
    disabled={workout.done}
    className="inline-flex items-center gap-2 rounded-3xl bg-[#ccff00] px-3 py-2 text-xs font-bold text-black disabled:opacity-50"
  >
    <FaCheck aria-hidden="true" />
    {workout.done ? "Done" : "Mark as Done"}
  </button>
)}

<button
  type="button"
  onClick={handleRemove}
  aria-label={`Remove ${workout.name}`}
  className="inline-flex items-center justify-center px-3 py-2 text-sm0"
>
  <FaXmark aria-hidden="true" />
</button>
      </div>
    </article>
  );
}