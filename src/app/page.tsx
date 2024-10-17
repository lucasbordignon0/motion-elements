"use client";

import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const sortedProjects = PROJECTS.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const newestProjectIndex = 0;

  return (
    <main className="flex flex-col w-full min-h-dvh items-center bg-neutral-950 mobile:px-4">
      <div className="flex flex-col w-[544px] gap-3 mt-[56px]">
        <h1 className="text-white font-mono font-normal text-lg">BDN CODE</h1>
      </div>
      <ol className="flex flex-col w-[544px] font-mono gap-1 mt-[56px]">
        {sortedProjects.map((project, index) => (
          <li
            key={project.name}
            className="flex w-full items-center gap-2 group"
          >
            <Link
              href={project.link}
              className="flex w-full h-16 items-center rounded-lg justify-between gap-3 desktop:group-hover:bg-white/10 desktop:group-hover:px-4 transition-all ease-out duration-300"
            >
              <div className="flex items-center gap-3">
                <p className="text-white font-normal text-base">
                  {project.name}
                </p>
                {index === newestProjectIndex && (
                  <span className="text-blue-500 font-semibold text-sm uppercase px-3 py-1 rounded-full bg-blue-500/30">
                    New
                  </span>
                )}
              </div>
              <ArrowRight className="w-5 h-5 text-neutral-600 stroke-2 desktop:group-hover:text-white transition-colors ease-out duration-300" />
            </Link>
          </li>
        ))}
      </ol>
    </main>
  );
}

const PROJECTS = [
  {
    name: "Filter Button With Dropdown",
    link: "/button-filter-dropdown",
    date: "2024-06-24",
  },
  {
    name: "Workout Schedule Drag and Drop",
    link: "/drag-cards",
    date: "2024-06-12",
  },
  {
    name: "Button Dropdown Menu",
    link: "/button-dropdown",
    date: "2024-09-14",
  },
  {
    name: "F1 Live Activity",
    link: "/f1-live",
    date: "2024-09-13",
  },
  {
    name: "F1 Driver States",
    link: "/f1-driver-states",
    date: "2024-09-12",
  },
  {
    name: "F1 Drivers List",
    link: "/formula-1",
    date: "2024-09-010",
  },
  {
    name: "CDs Mix",
    link: "/cds-mix",
    date: "2024-09-05",
  },
  {
    name: "Notes Input Popover",
    link: "/popover",
    date: "2024-09-02",
  },
  {
    name: "Program Creation",
    link: "/program-creation",
    date: "2024-09-13",
  },
];
