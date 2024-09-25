"use client";

import React, { useState } from "react";
import { Reorder } from "framer-motion";
import { Card } from "./DragCardsComponents";

interface Workout {
  id: string;
  name: string;
  blocks: number;
  exercises: number;
  alternates: number;
  attachments: number;
  shorterTime: number;
  longerTime: number;
}

const INITIAL_WORKOUTS: Workout[] = [
  {
    id: "1",
    name: "Upper Body Push",
    blocks: 4,
    exercises: 11,
    alternates: 2,
    attachments: 10,
    shorterTime: 33,
    longerTime: 55,
  },
  {
    id: "2",
    name: "Lower Body",
    blocks: 3,
    exercises: 9,
    alternates: 1,
    attachments: 8,
    shorterTime: 28,
    longerTime: 50,
  },
  {
    id: "3",
    name: "Upper Body Pull",
    blocks: 4,
    exercises: 10,
    alternates: 3,
    attachments: 12,
    shorterTime: 35,
    longerTime: 58,
  },
  {
    id: "4",
    name: "Core and Cardio",
    blocks: 2,
    exercises: 8,
    alternates: 0,
    attachments: 5,
    shorterTime: 25,
    longerTime: 45,
  },
  {
    id: "5",
    name: "Full Body",
    blocks: 5,
    exercises: 15,
    alternates: 4,
    attachments: 15,
    shorterTime: 40,
    longerTime: 65,
  },
];

export default function DragCards() {
  const [workouts, setWorkouts] = useState(INITIAL_WORKOUTS);

  return (
    <div className="grid place-items-center w-full min-h-screen bg-[#f9f5f1] antialiased p-4">
      <Reorder.Group
        axis="x"
        values={workouts}
        onReorder={setWorkouts}
        className="flex gap-4 w-full max-w-[1200px] justify-center overflow-x-auto p-4"
      >
        {workouts.map((workout) => (
          <Reorder.Item
            key={workout.id}
            value={workout}
            className="flex-shrink-0"
          >
            <Card
              name={workout.name}
              blocks={workout.blocks}
              exercises={workout.exercises}
              alternates={workout.alternates}
              attachments={workout.attachments}
              shorterTime={workout.shorterTime}
              longerTime={workout.longerTime}
            />
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </div>
  );
}
