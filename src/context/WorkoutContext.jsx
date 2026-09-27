"use client";
import { createContext, useContext, useEffect, useState } from "react";
const WorkoutContext = createContext(null);
export function WorkoutProvider({ children }) {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("fitlog-workouts"));
     if (stored) {
        setPlan(Array.isArray(stored.plan) ? stored.plan : []);
        setSaved(Array.isArray(stored.saved) ? stored.saved : []);
      }
    } catch {
      localStorage.removeItem("fitlog-workouts");
    }

    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) {
      localStorage.setItem(
        "fitlog-workouts",
        JSON.stringify({ plan, saved })
      );
    }
  }, [plan, saved, ready]);

 const addToPlan = (workout) => {
  if (!ready) return "loading";

  const activePlan = plan.filter((item) => !item.done);

  if (activePlan.some((item) => item.id === workout.id)) {
    return "duplicate";
  }

  if (activePlan.length >= 5) {
    return "full";
  }

  setPlan((current) => {
    const wasDoneBefore = current.some(
      (item) => item.id === workout.id && item.done
    );

    if (wasDoneBefore) {
      return current.map((item) =>
        item.id === workout.id ? { ...workout, done: false } : item
      );
    }

    return [...current, { ...workout, done: false }];
  });

  return "added";
};

  const addToSaved = (workout) => {
    if (!ready) return "loading";
    if (saved.some((item) => item.id === workout.id)) return "duplicate";

    setSaved((current) => [...current, workout]);
    return "added";
  };
const markDone = (id) => {
  setPlan((current) =>
    current.map((item) =>
      item.id === id ? { ...item, done: true } : item
    )
  );
};

const removeFromPlan = (id) => {
  setPlan((current) => current.filter((item) => item.id !== id));
};

const removeFromSaved = (id) => {
  setSaved((current) => current.filter((item) => item.id !== id));
};
  return (
    <WorkoutContext.Provider
      value={{
  plan,
  saved,
  ready,
  addToPlan,
  addToSaved,
  markDone,
  removeFromPlan,
  removeFromSaved,
}}
    >
      {children}
    </WorkoutContext.Provider>
  );
}

export function useWorkout() {
  const context = useContext(WorkoutContext);

  if (!context) {
    throw new Error("useWorkout must be used inside WorkoutProvider");
  }

  return context;
}