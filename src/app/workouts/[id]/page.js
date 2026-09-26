import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import WorkoutActions from "@/components/shared/WorkoutActions";

export default async function WorkoutDetailsPage({ params }) {
  const { id } = await params;

  if (!/^\d+$/.test(id)) {
    notFound();
  }

  const response = await fetch(
    `https://api.abcz.workers.dev/api/fitlog/${id}`,
    { cache: "no-store" }
  );

  if (response.status === 404) {
    notFound();
  }

  if (!response.ok) {
    throw new Error("Could not load workout");
  }

  const workout = await response.json();

  const specs = [
    ["EQUIPMENT", workout.equipment],
    ["DIFFICULTY", workout.difficulty],
    ["SETS", workout.sets],
    ["REPS", workout.reps],
    ["DURATION", `${workout.duration} min`],
    ["CALORIES", `${workout.caloriesBurned} kcal`],
    ["RATING", workout.rating],
  ];

  return (
    <main className="mx-auto max-w-[1500px] px-6 py-10 text-white">
      <Link href="/" className="text-sm text-[#ccff00] hover:underline">
        ← Back to workouts
      </Link>

      <div className="mt-8 grid gap-10 lg:grid-cols-2">
        <div className="relative h-[350px] overflow-hidden rounded-xl bg-[#1b1e22] lg:h-[650px]">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div>
          <h1 className="text-4xl font-black uppercase sm:text-5xl">
            {workout.name}
          </h1>

          <p className="mt-4 leading-7 text-gray-400">
            {workout.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {workout.muscleGroups.map((group) => (
              <span
                key={group}
                className="rounded-full bg-[#ccff00] px-3 py-1 text-xs font-bold uppercase text-black"
              >
                {group}
              </span>
            ))}
          </div>

          <section className="mt-8 rounded-lg border border-white/10 bg-[#1b1e22] p-6">
            <h2 className="mb-4 text-xl font-bold">KEY SPECS</h2>

            {specs.map(([label, value]) => (
              <div
                key={label}
                className="flex justify-between gap-4 border-t border-white/10 py-3 text-sm"
              >
                <span className="text-gray-400">{label}</span>
                <span className="text-right font-semibold">{value}</span>
              </div>
            ))}
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-bold">INSTRUCTIONS</h2>

            <ol className="mt-4 space-y-3">
              {workout.instructions.map((instruction, index) => (
                <li key={index} className="flex gap-3 text-gray-300">
                  <span className="font-bold text-[#ccff00]">
                    {index + 1}.
                  </span>
                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
          </section>

          <WorkoutActions workout={workout} />
        </div>
      </div>
    </main>
  );
}