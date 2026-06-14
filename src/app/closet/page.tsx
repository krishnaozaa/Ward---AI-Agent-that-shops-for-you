import { ArrowUpRight, Layers3, Palette, Shirt, Sparkles } from "lucide-react";
import { closetItems } from "@/lib/mock-data";

export const metadata = { title: "Closet Intelligence" };

export default function ClosetPage() {
  return (
    <main className="mx-auto max-w-[1440px] px-5 py-10 md:px-8 md:py-14">
      <div className="grid gap-8 lg:grid-cols-[1fr_.8fr] lg:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.2em] text-muted-foreground">Closet intelligence</p>
          <h1 className="mt-3 max-w-4xl font-editorial text-6xl font-medium leading-[.86] tracking-[-.045em] md:text-8xl">Your closet is already a dataset.</h1>
        </div>
        <p className="max-w-xl text-base leading-7 text-muted-foreground">Veyra maps color, category, fit, wear frequency, and outfit compatibility to show where your wardrobe is strong and where a purchase would add genuine range.</p>
      </div>

      <section className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          [Shirt, "46", "Items tracked"],
          [Layers3, "82%", "Core wardrobe coverage"],
          [Palette, "4", "Dominant colors"],
          [Sparkles, "14", "Unlocked outfits"],
        ].map(([Icon, value, label]) => {
          const MetricIcon = Icon as typeof Shirt;
          return <div key={String(label)} className="rounded-[1.5rem] border bg-card p-6"><MetricIcon className="size-5 text-muted-foreground" /><p className="mt-10 font-editorial text-5xl">{String(value)}</p><p className="text-sm text-muted-foreground">{String(label)}</p></div>;
        })}
      </section>

      <section className="mt-8 grid gap-5 lg:grid-cols-[1.25fr_.75fr]">
        <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] bg-[#181a16] p-7 text-white md:p-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#d8ff58]">Wardrobe graph</p>
            <h2 className="mt-3 font-editorial text-4xl">The connective tissue of your style.</h2>
          </div>
          <div className="absolute inset-x-5 bottom-5 top-32 md:inset-x-10 md:bottom-10">
            <svg className="h-full w-full" viewBox="0 0 700 380" role="img" aria-label="A graph showing outfit compatibility between closet categories">
              <g stroke="rgba(255,255,255,.2)" strokeWidth="1">
                <line x1="350" y1="190" x2="120" y2="90" /><line x1="350" y1="190" x2="575" y2="82" />
                <line x1="350" y1="190" x2="580" y2="290" /><line x1="350" y1="190" x2="150" y2="300" />
                <line x1="120" y1="90" x2="575" y2="82" /><line x1="150" y1="300" x2="580" y2="290" />
              </g>
              <GraphNode x={350} y={190} r={68} label="Core" sub="24 pieces" accent />
              <GraphNode x={120} y={90} r={46} label="Tops" sub="9" />
              <GraphNode x={575} y={82} r={52} label="Outerwear" sub="6" />
              <GraphNode x={580} y={290} r={45} label="Shoes" sub="7" />
              <GraphNode x={150} y={300} r={50} label="Bottoms" sub="8" />
            </svg>
          </div>
        </div>
        <div className="rounded-[2rem] border bg-card p-7 md:p-9">
          <p className="text-xs font-semibold uppercase tracking-[.18em] text-muted-foreground">Gap analysis</p>
          <h2 className="mt-3 font-editorial text-4xl font-medium">What earns the next hanger.</h2>
          <div className="mt-8 space-y-6">
            {[
              ["Lightweight outer layer", 92, "High impact"],
              ["Occasion shoe", 78, "Useful gap"],
              ["Everyday knit", 65, "Moderate"],
              ["Another black bag", 18, "Avoid"],
            ].map(([name, score, label]) => (
              <div key={String(name)}>
                <div className="flex justify-between gap-3 text-sm"><span>{String(name)}</span><span className="text-muted-foreground">{String(label)}</span></div>
                <div className="mt-2 h-2 rounded-full bg-black/8"><div className="h-full rounded-full bg-foreground" style={{ width: `${Number(score)}%` }} /></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-editorial text-5xl font-medium">Your most connected pieces.</h2>
        <div className="mt-7 grid gap-px overflow-hidden rounded-[2rem] border bg-black/10 sm:grid-cols-2 lg:grid-cols-3">
          {closetItems.map((item) => (
            <article key={item.id} className="group bg-card p-6">
              <div className="flex items-start justify-between"><span className="rounded-full border px-2.5 py-1 text-[10px] uppercase tracking-[.14em]">{item.category}</span><ArrowUpRight className="size-4 text-muted-foreground transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></div>
              <h3 className="mt-12 font-editorial text-3xl font-medium">{item.name}</h3>
              <div className="mt-4 flex justify-between text-xs text-muted-foreground"><span>{item.wears} recorded wears</span><span>{item.compatibility}% connected</span></div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function GraphNode({ x, y, r, label, sub, accent = false }: { x: number; y: number; r: number; label: string; sub: string; accent?: boolean }) {
  return (
    <g>
      <circle cx={x} cy={y} r={r} fill={accent ? "#d8ff58" : "#292c26"} stroke={accent ? "#d8ff58" : "rgba(255,255,255,.25)"} />
      <text x={x} y={y - 2} textAnchor="middle" fill={accent ? "#11130f" : "white"} fontSize="15" fontWeight="600">{label}</text>
      <text x={x} y={y + 18} textAnchor="middle" fill={accent ? "#11130f" : "rgba(255,255,255,.5)"} fontSize="10">{sub}</text>
    </g>
  );
}
