import WorkoutCard from "@/components/shared/WorkoutCard";

const getWorkouts = async () => {
  const response = await fetch(
    "https://api.abcz.workers.dev/api/fitlog",
    { cache: "no-store" }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch workouts");
  }

  return response.json();
};

const Library = async () => {
  let workouts;

  try {
    workouts = await getWorkouts();
  } catch {
    return (
      <section id="library" className="mx-auto max-w-[1500px] px-6 py-16">
        <p className="text-red-400">
          Workouts could not be loaded. Please try again.
        </p>
      </section>
    );
  }

  return (
    <section id="library" className="mx-auto max-w-[1500px] px-6 py-16">
      <h2 className="text-3xl font-black uppercase text-white">
        THE LIBRARY
      </h2>
      <p className="mt-2 text-gray-400">
        Twelve lifts covering every major muscle group.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {workouts.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </section>
  );
};

export default Library;