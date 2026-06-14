"use client";

import { useState } from "react";
import { ArrowUp, Check, Sparkles } from "lucide-react";

const suggestions = [
  "Summer wedding under $300",
  "A work bag that earns its keep",
  "What should I buy secondhand?",
];

export function ShoppingAgent() {
  const [query, setQuery] = useState("I need an outfit for a summer wedding under $300.");
  const [submitted, setSubmitted] = useState(true);

  function send() {
    if (!query.trim()) return;
    setSubmitted(true);
  }

  return (
    <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-card shadow-[0_30px_100px_rgba(20,22,18,0.1)]">
      <div className="flex items-center justify-between border-b px-5 py-4">
        <div className="flex items-center gap-2">
          <span className="grid size-8 place-items-center rounded-full bg-accent"><Sparkles className="size-4" /></span>
          <div>
            <p className="text-sm font-semibold">Veyra agent</p>
            <p className="text-[11px] text-muted-foreground">Grounded in Maya&apos;s closet</p>
          </div>
        </div>
        <span className="flex items-center gap-1.5 text-xs text-muted-foreground"><span className="size-1.5 rounded-full bg-green-600" /> Ready</span>
      </div>
      <div className="space-y-5 p-5 md:p-7">
        <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-foreground px-4 py-3 text-sm text-background">
          {query}
        </div>
        {submitted && (
          <div className="max-w-[92%]">
            <p className="mb-3 text-sm leading-6">I&apos;d build around your navy slip dress. You own the strongest part of the outfit already.</p>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                ["Linen wrap", "$78 · new"],
                ["Sculptural heel", "$96 · resale"],
                ["Pearl drop", "$42 · vintage"],
              ].map(([name, meta]) => (
                <div key={name} className="rounded-2xl border bg-[#eeeadf] p-4">
                  <div className="mb-8 h-2 w-10 rounded-full bg-foreground/15" />
                  <p className="text-sm font-medium">{name}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{meta}</p>
                </div>
              ))}
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Total $216", "$5.14 / wear", "92% confidence", "2 pieces circular"].map((item) => (
                <span key={item} className="flex items-center gap-1 rounded-full border px-3 py-1.5 text-xs"><Check className="size-3" /> {item}</span>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="border-t p-4">
        <div className="mb-3 flex gap-2 overflow-x-auto">
          {suggestions.map((item) => (
            <button key={item} onClick={() => { setQuery(item); setSubmitted(false); }} className="whitespace-nowrap rounded-full border px-3 py-1.5 text-xs text-muted-foreground hover:bg-black/5">
              {item}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2 rounded-full border bg-background p-1.5 pl-4">
          <input
            value={query}
            onChange={(event) => { setQuery(event.target.value); setSubmitted(false); }}
            onKeyDown={(event) => event.key === "Enter" && send()}
            className="min-w-0 flex-1 bg-transparent text-sm outline-none"
            aria-label="Ask the shopping agent"
          />
          <button onClick={send} className="grid size-9 shrink-0 place-items-center rounded-full bg-foreground text-background" aria-label="Send">
            <ArrowUp className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
