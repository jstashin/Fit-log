import Image from "next/image";
import Link from "next/link";

const WorkoutCard = ({ workout }) => {
  return (
    <Link
      href={`/workouts/${workout.id}`}
      className="group overflow-hidden rounded-lg border border-white/10 bg-[#1b1e22] text-white transition hover:border-[#ccff00]/50"
    >
      <div className="relative h-52 overflow-hidden">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <div className="mb-3 flex flex-wrap gap-2">
          {workout.muscleGroups.map((group) => (
            <span
              key={group}
              className="rounded-full bg-[#ccff00] px-2.5 py-1 text-xs font-bold uppercase text-black"
            >
              {group}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-bold uppercase">{workout.name}</h3>
        <p className="mt-1 text-sm text-gray-400">{workout.equipment}</p>

        <div className="mt-5 flex flex-wrap gap-4 border-t border-white/10 pt-4 text-sm text-gray-300">
          <span>⏱ {workout.duration} min</span>
          <span>🔥 {workout.caloriesBurned} kcal</span>
          <span>★ {workout.rating}</span>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;