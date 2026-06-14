import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, History, Ruler, ShieldCheck, Shirt } from "lucide-react";
import { CostPerWearCalculator } from "@/components/cost-per-wear-calculator";
import { ScoreRing } from "@/components/score-ring";
import { Button } from "@/components/ui/button";
import { closetItems, products } from "@/lib/mock-data";
import { formatCurrency } from "@/lib/intelligence";

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((item) => item.id === id);
  if (!product) notFound();

  return (
    <main className="mx-auto max-w-[1440px] px-5 py-8 md:px-8 md:py-12">
      <Button asChild variant="ghost" className="-ml-3 mb-6 rounded-full">
        <Link href="/demo"><ArrowLeft /> Back to edit</Link>
      </Button>
      <section className="grid overflow-hidden rounded-[2rem] border bg-card lg:grid-cols-2">
        <div className="relative min-h-[520px] bg-[#ddd8cc] lg:min-h-[760px]">
          <Image src="/images/veyra-editorial.png" alt={product.name} fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" style={{ objectPosition: product.imagePosition }} />
          <span className="absolute left-6 top-6 rounded-full bg-accent px-4 py-2 text-xs font-semibold">{product.recommendation}</span>
        </div>
        <div className="flex flex-col justify-between p-7 md:p-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-muted-foreground">{product.brand} · {product.category}</p>
            <h1 className="mt-4 font-editorial text-5xl font-medium leading-[.9] tracking-[-.035em] md:text-7xl">{product.name}</h1>
            <p className="mt-5 max-w-lg text-base leading-7 text-muted-foreground">{product.description}</p>
            <div className="mt-8 flex items-baseline gap-3">
              <span className="font-editorial text-4xl">{formatCurrency(product.price)}</span>
              <span className="text-muted-foreground line-through">{formatCurrency(product.originalPrice)}</span>
              <span className="rounded-full border px-2.5 py-1 text-xs">Resale avg. {formatCurrency(product.resalePrice)}</span>
            </div>
          </div>
          <div className="mt-12 rounded-[1.75rem] bg-[#191b17] p-6 text-white md:p-8">
            <div className="flex flex-col gap-7 sm:flex-row sm:items-center">
              <ScoreRing score={product.score} />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#d8ff58]">{product.scoreLabel}</p>
                <h2 className="mt-2 font-editorial text-4xl">This earns a place.</h2>
                <ul className="mt-4 space-y-2 text-sm text-white/65">
                  <li className="flex gap-2"><Check className="mt-0.5 size-4 text-[#d8ff58]" /> 34% cheaper than comparable listings</li>
                  <li className="flex gap-2"><Check className="mt-0.5 size-4 text-[#d8ff58]" /> Matches 7 pieces you already own</li>
                  <li className="flex gap-2"><Check className="mt-0.5 size-4 text-[#d8ff58]" /> Strong resale retention and low return risk</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[.2em] text-muted-foreground">Why it scored {product.score}</p>
          <h2 className="mt-3 font-editorial text-5xl font-medium">The whole decision, exposed.</h2>
        </div>
        <div className="grid gap-px overflow-hidden rounded-[2rem] border bg-black/10 md:grid-cols-2 lg:grid-cols-4">
          {product.breakdown.map((item) => (
            <article key={item.label} className="bg-card p-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[.12em] text-muted-foreground">{item.label}</span>
                <span className="font-mono text-sm">{item.score}</span>
              </div>
              <div className="mt-8 h-1.5 overflow-hidden rounded-full bg-black/8"><div className="h-full rounded-full bg-foreground" style={{ width: `${item.score}%` }} /></div>
              <p className="mt-4 text-sm leading-6">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <CostPerWearCalculator initialPrice={product.price} />

      <section className="grid gap-5 py-16 md:grid-cols-3 md:py-24">
        <Insight icon={Ruler} eyebrow="Fit memory" title="Recommended size: M" copy="You kept size M in 4 of 5 Aster Studio orders. This cut runs slightly narrow through the shoulder." />
        <Insight icon={ShieldCheck} eyebrow="Return risk" title="Low · 14%" copy="Your fit history, material preference, and this silhouette all point to a confident keep." />
        <Insight icon={History} eyebrow="Market timing" title="Best price in 90 days" copy="Inventory is low in your size. Waiting is unlikely to save more than $22." />
      </section>

      <section className="rounded-[2rem] bg-[#e8e3d6] p-7 md:p-10">
        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[.18em] text-muted-foreground"><Shirt className="size-4" /> Closet conflict detection</span>
            <h2 className="mt-4 font-editorial text-5xl font-medium">Similar, but not redundant.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground">You own one cropped black jacket, but not a leather outer layer. This adds texture, weather range, and seven viable combinations.</p>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-1">
            {closetItems.slice(0, 3).map((item) => (
              <div key={item.id} className="min-w-44 rounded-2xl border bg-card p-4">
                <p className="text-sm font-medium">{item.name}</p>
                <p className="mt-6 text-xs text-muted-foreground">{item.compatibility}% outfit match</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function Insight({ icon: Icon, eyebrow, title, copy }: { icon: typeof Ruler; eyebrow: string; title: string; copy: string }) {
  return (
    <article className="rounded-[1.5rem] border bg-card p-6">
      <Icon className="size-5" />
      <p className="mt-8 text-xs font-semibold uppercase tracking-[.16em] text-muted-foreground">{eyebrow}</p>
      <h3 className="mt-2 font-editorial text-3xl font-medium">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{copy}</p>
    </article>
  );
}
