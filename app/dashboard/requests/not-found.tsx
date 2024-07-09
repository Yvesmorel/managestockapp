import Link from "next/link";
import { FaceFrownIcon } from "@heroicons/react/24/outline";

export default function NotFound() {
  return (
    <main className="flex h-full w-full flex-col items-center justify-center gap-2">
      <FaceFrownIcon className="w-10 text-gray-400" />
      <h2 className="text-xl font-semibold">404 Pas trouvé</h2>
      <p>Cette page n'est pas disponible verifier votre connexion internet.</p>
      <Link
        href="/dashboard/requests"
        className="mt-4 rounded-md bg-black  px-4 py-2 text-sm text-white transition-colors hover:opacity-40"
      >
        Actualiser
      </Link>
    </main>
  );
}
