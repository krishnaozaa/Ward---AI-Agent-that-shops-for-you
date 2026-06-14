import Link from "next/link";
import { ArrowRight, CircleDollarSign, Sparkles, TrendingDown } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { ShoppingAgent } from "@/components/shopping-agent";
import { Button } from "@/components/ui/button";
import { products, userProfile } from "@/lib/mock-data";

export const metadata = { title: "Demo" };

export default function DemoPage() {
  return (
    <main className="mx-auto max-w-[1440px] px-5 py-10 md:px-8 md:py-14">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.2em] text-muted-foreground">Good morning, {userProfile.name}</p>
          <h1 className="mt-3 font-editorial text-5xl font-medium tracking-[-.035em] md:text-7xl">Your wardrobe, thinking ahead.</h1>
        </div>
        <div className="flex flex-wrap gap-2">
          {userProfile.style.map((style) => <span key={style} className="rounded-full border px-3 py-2 text-xs">{style}</span>)}
        </div>
      </div>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        {[
          [CircleDollarSign, "$167", "Budget remaining", "$250 monthly plan"],
          [Sparkles, "14", "New outfit combinations", "From your current closet"],
          [TrendingDown, "$428", "Recoverable resale value", "Across 3 underused pieces"],
        ].map(([Icon, value, label, detail]) => {
          const MetricIcon = Icon as typeof Sparkles;
          return (
            <div key={String(label)} className="rounded-[1.5rem] border bg-card p-6">
              <MetricIcon className="size-5 text-muted-foreground" />
              <p className="mt-8 font-editorial text-4xl font-medium">{String(value)}</p>
              <p className="mt-1 text-sm font-medium">{String(label)}</p>
              <p className="mt-1 text-xs text-muted-foreground">{String(detail)}</p>
            </div>
          );
        })}
      </section>

      <section className="mt-14">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-muted-foreground">Today&apos;s edit</p>
            <h2 className="mt-2 font-editorial text-4xl font-medium">Ranked for you, not everyone.</h2>
          </div>
          <Button asChild variant="ghost" className="hidden rounded-full sm:flex"><Link href="/closet">Open closet <ArrowRight /></Link></Button>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>

      <section className="mt-20 grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:items-start">
        <div className="lg:sticky lg:top-24">
          <p className="text-xs font-semibold uppercase tracking-[.18em] text-muted-foreground">Ask Veyra</p>
          <h2 className="mt-3 font-editorial text-5xl font-medium leading-[.95]">Describe the life. We&apos;ll build the look.</h2>
          <p className="mt-5 max-w-md text-sm leading-6 text-muted-foreground">The demo agent uses deterministic responses grounded in Maya&apos;s mock closet, budget, and fit history.</p>
        </div>
        <ShoppingAgent />
      </section>
    </main>
  );
}
