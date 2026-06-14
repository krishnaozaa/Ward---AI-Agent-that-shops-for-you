"use client";

import { useState } from "react";
import { Check, WandSparkles } from "lucide-react";

export function ResaleAction({ itemName }: { itemName: string }) {
  const [generated, setGenerated] = useState(false);

  return (
    <button
      onClick={() => setGenerated(true)}
      className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2.5 text-xs font-semibold text-background transition hover:opacity-80"
    >
      {generated ? <Check className="size-4" /> : <WandSparkles className="size-4" />}
      {generated ? `${itemName} listing ready` : "Generate resale listing"}
    </button>
  );
}
