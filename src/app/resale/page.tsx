import { CircleDollarSign, Clock3, Repeat2 } from "lucide-react";
import { ResaleAction } from "@/components/resale-action";
import { closetItems } from "@/lib/mock-data";
import { formatCurrency } from "@/lib/intelligence";

export const metadata = { title: "Resale Autopilot" };

export default function ResalePage() {
  const resaleItems = closetItems.filter((item) => item.lastWorn.includes("days ago") && item.wears < 17);

  return (
    <main className="mx-auto max-w-[1440px] px-5 py-10 md:px-8 md:py-14">
      <div className="grid gap-8 lg:grid-cols-[1fr_.7fr] lg:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.2em] text-muted-foreground">Resale autopilot</p>
          <h1 className="mt-3 font-editorial text-6xl font-medium leading-[.86] tracking-[-.045em] md:text-8xl">Let idle pieces fund what&apos;s next.</h1>
        </div>
        <p className="max-w-xl text-base leading-7 text-muted-foreground">Veyra spots underused pieces, estimates market value, and prepares a polished listing while the item still has demand.</p>
      </div>

      <section className="mt-12 grid gap-4 md:grid-cols-3">
        {[
          [CircleDollarSign, "$428", "Estimated recovery"],
          [Clock3, "3", "Pieces ready to list"],
          [Repeat2, "68%", "Average value retained"],
        ].map(([Icon, value, label]) => {
          const MetricIcon = Icon as typeof CircleDollarSign;
          return <div key={String(label)} className="rounded-[1.5rem] border bg-card p-6"><MetricIcon className="size-5 text-muted-foreground" /><p className="mt-8 font-editorial text-5xl">{String(value)}</p><p className="text-sm text-muted-foreground">{String(label)}</p></div>;
        })}
      </section>

      <section className="mt-12 space-y-5">
        {resaleItems.map((item, index) => (
          <article key={item.id} className="grid overflow-hidden rounded-[2rem] border bg-card lg:grid-cols-[.65fr_1.35fr]">
            <div className={index % 2 ? "min-h-64 bg-[#cbc6b9]" : "min-h-64 bg-[#242620]"} aria-hidden="true">
              <div className="grid h-full place-items-center">
                <span className={index % 2 ? "font-editorial text-7xl text-black/20" : "font-editorial text-7xl text-white/20"}>{item.category.slice(0, 1)}</span>
              </div>
            </div>
            <div className="p-7 md:p-9">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[.18em] text-muted-foreground">Not worn in {item.lastWorn.replace(" days ago", "")} days</p>
                  <h2 className="mt-2 font-editorial text-4xl font-medium">{item.name}</h2>
                </div>
                <div className="sm:text-right">
                  <p className="font-editorial text-4xl">{formatCurrency(item.resaleValue)}</p>
                  <p className="text-xs text-muted-foreground">estimated net value</p>
                </div>
              </div>
              <div className="my-7 grid gap-3 border-y py-6 sm:grid-cols-2">
                <div><p className="text-xs text-muted-foreground">Suggested listing title</p><p className="mt-2 text-sm font-medium">Minimal {item.color.toLowerCase()} {item.name.toLowerCase()} · excellent condition</p></div>
                <div><p className="text-xs text-muted-foreground">Suggested list price</p><p className="mt-2 text-sm font-medium">{formatCurrency(item.listingPrice)} · leaves room for offers</p></div>
              </div>
              <p className="mb-6 text-sm leading-6 text-muted-foreground">AI description: A polished, lightly worn staple with a clean silhouette. Stored carefully and ready for its next wardrobe.</p>
              <ResaleAction itemName={item.name} />
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
