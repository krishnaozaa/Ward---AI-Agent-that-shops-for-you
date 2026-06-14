import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="grid min-h-[70vh] place-items-center px-5 text-center">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[.2em] text-muted-foreground">404 · Out of season</p>
        <h1 className="mt-4 font-editorial text-7xl font-medium">This piece isn&apos;t in the edit.</h1>
        <Button asChild className="mt-8 rounded-full"><Link href="/demo">Return to the demo</Link></Button>
      </div>
    </main>
  );
}
