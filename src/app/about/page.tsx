import Link from "next/link";
import { ArrowRight, Braces, Database, Globe2, ScanSearch, Sparkles, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = { title: "Product Thesis" };

const roadmap = [
  [Globe2, "Live product graph", "Retail catalogs, price history, inventory, and resale marketplaces."],
  [UserRound, "Real fit memory", "Closet import, purchase history, returns, sizing, and saved profiles."],
  [ScanSearch, "Visual intelligence", "Embeddings and vector search for silhouette, color, and style similarity."],
  [Database, "Durable memory", "Postgres or Supabase for products, profiles, wardrobes, and decisions."],
  [Braces, "Agentic actions", "Browser extension, authenticated saves, alerts, offers, and listing workflows."],
  [Sparkles, "LLM reasoning", "Personalized explanations grounded in structured wardrobe and market data."],
];

export default function AboutPage() {
  return (
    <main>
      <section className="mx-auto max-w-[1440px] px-5 py-16 md:px-8 md:py-24">
        <p className="text-xs font-semibold uppercase tracking-[.2em] text-muted-foreground">The product thesis</p>
        <h1 className="mt-5 max-w-6xl font-editorial text-6xl font-medium leading-[.82] tracking-[-.05em] md:text-9xl">Price comparison answers the smallest shopping question.</h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">Veyra asks the harder one: does this deserve a place in your actual life?</p>
      </section>

      <section className="bg-[#181a16] py-20 text-white md:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-px px-5 md:grid-cols-3 md:px-8">
          {[
            ["01", "The problem", "Shopping tools optimize the transaction. They rarely understand duplication, fit risk, future use, or the value trapped in what you already own."],
            ["02", "The opportunity", "A wardrobe-aware agent can make every recommendation more personal, less wasteful, and more economically honest."],
            ["03", "The product", "Veyra combines market intelligence with closet context to recommend buy, wait, secondhand, bid lower, or skip."],
          ].map(([number, title, copy]) => (
            <article key={number} className="border border-white/12 p-7 md:p-10">
              <span className="font-mono text-xs text-[#d8ff58]">{number}</span>
              <h2 className="mt-16 font-editorial text-4xl">{title}</h2>
              <p className="mt-4 text-sm leading-6 text-white/55">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-muted-foreground">What the MVP proves</p>
            <h2 className="mt-4 font-editorial text-5xl font-medium leading-[.92]">A richer decision can still feel simple.</h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-[2rem] border bg-black/10 sm:grid-cols-2">
            {[
              "Eight-signal Veyra Score",
              "True cost-per-wear calculator",
              "Closet conflict detection",
              "Brand-specific fit memory",
              "Buy / wait / resale decisions",
              "Deterministic shopping agent",
              "Wardrobe graph and gap analysis",
              "One-click resale listing drafts",
            ].map((feature, index) => (
              <div key={feature} className="bg-card p-6"><span className="font-mono text-xs text-muted-foreground">0{index + 1}</span><p className="mt-8 font-editorial text-2xl">{feature}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 pb-20 md:px-8 md:pb-28">
        <div className="rounded-[2rem] bg-[#e7e2d5] p-7 md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[.2em] text-muted-foreground">From concept to production</p>
          <h2 className="mt-3 font-editorial text-5xl font-medium">What connects next.</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {roadmap.map(([Icon, title, copy]) => {
              const RoadmapIcon = Icon as typeof Globe2;
              return <article key={String(title)} className="rounded-[1.5rem] border bg-card p-6"><RoadmapIcon className="size-5" /><h3 className="mt-10 font-editorial text-3xl">{String(title)}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{String(copy)}</p></article>;
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 pb-24 md:px-8">
        <div className="flex flex-col gap-8 rounded-[2rem] bg-accent p-8 md:flex-row md:items-end md:justify-between md:p-12">
          <div><p className="text-xs font-semibold uppercase tracking-[.18em]">Original internship initiative concept</p><h2 className="mt-3 font-editorial text-5xl font-medium md:text-7xl">See the thesis in motion.</h2></div>
          <Button asChild size="lg" className="w-fit rounded-full"><Link href="/demo">Open the demo <ArrowRight /></Link></Button>
        </div>
      </section>
    </main>
  );
}
