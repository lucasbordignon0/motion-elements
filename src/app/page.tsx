import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-24 gap-3">
      <Link href="/formula-1">
        <button
          type="button"
          className="bg-blue-600 px-4 py-2 rounded-md text-sm text-white font-medium hover:bg-blue-700 transition-colors ease-out duration-200 active:bg-blue-900"
        >
          Formula 1
        </button>
      </Link>
      <Link href="/f1-driver-states">
        <button
          type="button"
          className="bg-blue-600 px-4 py-2 rounded-md text-sm text-white font-medium hover:bg-blue-700 transition-colors ease-out duration-200 active:bg-blue-900"
        >
          Formula 1 - Driver States
        </button>
      </Link>
      <Link href="/popover">
        <button
          type="button"
          className="bg-blue-600 px-4 py-2 rounded-md text-sm text-white font-medium hover:bg-blue-700 transition-colors ease-out duration-200 active:bg-blue-900"
        >
          Popover Input
        </button>
      </Link>
      <Link href="/cds-mix">
        <button
          type="button"
          className="bg-blue-600 px-4 py-2 rounded-md text-sm text-white font-medium hover:bg-blue-700 transition-colors ease-out duration-200 active:bg-blue-900"
        >
          Cds Mix
        </button>
      </Link>
      <Link href="/program-creation">
        <button
          type="button"
          className="bg-blue-600 px-4 py-2 rounded-md text-sm text-white font-medium hover:bg-blue-700 transition-colors ease-out duration-200 active:bg-blue-900"
        >
          Program Creation
        </button>
      </Link>
    </main>
  );
}
