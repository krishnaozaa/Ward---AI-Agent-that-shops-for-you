import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ScoreRing } from "@/components/score-ring";
import { formatCurrency } from "@/lib/intelligence";
import type { Product } from "@/lib/types";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/product/${product.id}`}
      className="group overflow-hidden rounded-[1.5rem] border border-black/10 bg-card transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(20,22,18,0.12)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[#ddd8cc]">
        <Image
          src="/images/veyra-editorial.png"
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-700 group-hover:scale-[1.04]"
          style={{ objectPosition: product.imagePosition }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
        <div className="absolute right-4 top-4 rounded-full bg-[#f7f4eb]/92 p-1.5 shadow-lg backdrop-blur">
          <ScoreRing score={product.score} size="small" />
        </div>
        <span className="absolute bottom-4 left-4 rounded-full bg-accent px-3 py-1.5 text-xs font-semibold">
          {product.recommendation}
        </span>
      </div>
      <div className="flex items-start justify-between gap-4 p-5">
        <div>
          <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
            {product.brand}
          </p>
          <h3 className="font-editorial text-2xl font-medium leading-none">{product.name}</h3>
          <p className="mt-3 text-sm text-muted-foreground">
            {formatCurrency(product.price)} <span className="ml-1 line-through">{formatCurrency(product.originalPrice)}</span>
          </p>
        </div>
        <ArrowUpRight className="size-5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </Link>
  );
}
