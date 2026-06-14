import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, CircleDollarSign, Repeat2, ScanSearch, Shirt, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { ScoreRing } from "@/components/score-ring";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/mock-data";

export default function Home() {
  return (
    <main>
      <section className="noise mx-auto min-h-[calc(100vh-4rem)] max-w-[1600px] overflow-hidden px-5 py-6 md:px-8">
        <div className="grid min-h-[calc(100vh-7rem)] overflow-hidden rounded-[2rem] border border-black/10 bg-[#e9e5d9] lg:grid-cols-[1.03fr_.97fr]">
          <div className="relative z-10 flex flex-col justify-between p-7 md:p-12 lg:p-16">
            <div>
              <Reveal>
                <p className="mb-7 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  <span className="size-2 rounded-full bg-accent ring-4 ring-accent/30" />
                  Wardrobe intelligence, not more noise
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <h1 className="font-editorial max-w-[780px] text-balance text-[clamp(3.8rem,7vw,8.3rem)] font-medium leading-[0.79] tracking-[-0.055em]">
                  Know what your wardrobe
                  <span className="italic"> actually needs.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground md:text-lg">
                  Veyra analyzes price, fit, closet overlap, resale value, and true cost per wear before you buy.
                </p>
              </Reveal>
              <Reveal delay={0.22} className="mt-6 flex flex-wrap gap-3">
                <Button asChild size="lg" className="h-12 rounded-full px-6">
                  <Link href="/demo">Try the demo <ArrowRight /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-12 rounded-full bg-transparent px-6">
                  <Link href="#intelligence">See what makes it better <ArrowDown /></Link>
                </Button>
              </Reveal>
            </div>
            <div className="mt-16 flex items-center gap-6 text-xs uppercase tracking-[0.16em] text-muted-foreground">
              <span>8 buying signals</span><span className="h-px w-10 bg-black/20" /><span>1 clear decision</span>
            </div>
          </div>
          <div className="relative min-h-[620px] overflow-hidden lg:min-h-0">
            <Image src="/images/veyra-editorial.png" alt="Editorial capsule wardrobe in a sculptural studio" fill priority loading="eager" sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            <div className="drift absolute bottom-7 left-5 right-5 rounded-[1.5rem] border border-white/40 bg-[#f7f4eb]/90 p-5 shadow-2xl backdrop-blur-xl md:bottom-10 md:left-10 md:right-auto md:w-[360px]">
              <div className="flex items-center gap-4">
                <ScoreRing score={91} size="small" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-muted-foreground">Aster leather jacket</p>
                  <p className="mt-1 font-editorial text-2xl font-semibold">Strong buy</p>
                  <p className="mt-1 text-xs text-muted-foreground">34% below market · 7 closet matches</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="intelligence" className="mx-auto max-w-[1440px] px-5 py-24 md:px-8 md:py-36">
        <Reveal className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">A decision engine for taste</p>
            <h2 className="mt-5 font-editorial text-5xl font-medium leading-[.95] tracking-[-0.035em] md:text-7xl">A better buy starts with what you already own.</h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-[2rem] border bg-black/10 sm:grid-cols-2">
            {[
              [ScanSearch, "See past the price tag", "Compare market price, trend durability, fit confidence, and likely return risk in one score."],
              [Shirt, "Shop your closet first", "Detect duplicates, find outfit matches, and measure whether a purchase adds real range."],
              [CircleDollarSign, "Know the true cost", "Forecast cost per wear using your habits instead of a hopeful guess."],
              [Repeat2, "Keep value in motion", "Surface idle pieces and turn them into ready-to-publish resale listings."],
            ].map(([Icon, title, copy]) => {
              const FeatureIcon = Icon as typeof Sparkles;
              return (
                <article key={String(title)} className="bg-card p-7 md:p-9">
                  <FeatureIcon className="size-6" />
                  <h3 className="mt-12 font-editorial text-3xl font-medium">{String(title)}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{String(copy)}</p>
                </article>
              );
            })}
          </div>
        </Reveal>
      </section>

      <section className="bg-[#171915] py-24 text-[#f4f1e8] md:py-32">
        <div className="mx-auto max-w-[1440px] px-5 md:px-8">
          <Reveal className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d8ff58]">Live intelligence preview</p>
              <h2 className="mt-4 font-editorial text-5xl font-medium md:text-7xl">Every item, evaluated.</h2>
            </div>
            <Button asChild variant="outline" className="w-fit rounded-full border-white/25 bg-transparent text-white hover:bg-white hover:text-black">
              <Link href="/demo">Explore all products <ArrowRight /></Link>
            </Button>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {products.slice(0, 3).map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-24 md:px-8 md:py-36">
        <Reveal className="overflow-hidden rounded-[2rem] bg-accent p-8 md:p-14">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-end">
            <div>
              <span className="rounded-full border border-black/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em]">Concept initiative</span>
              <h2 className="mt-7 font-editorial text-5xl font-medium leading-[.92] tracking-[-.03em] md:text-7xl">Built to explore the next chapter of AI shopping.</h2>
            </div>
            <div>
              <p className="max-w-xl text-base leading-7 text-black/65">
                Veyra is an original product concept showing how shopping assistance can evolve from finding a lower price into building a more useful, valuable, and circular wardrobe.
              </p>
              <Button asChild className="mt-7 rounded-full">
                <Link href="/about">Read the product thesis <ArrowRight /></Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
