"use client";

import { useMemo, useState } from "react";
import { calculateCostPerWear, formatCurrency, getRecommendation } from "@/lib/intelligence";

export function CostPerWearCalculator({ initialPrice = 348 }: { initialPrice?: number }) {
  const [price, setPrice] = useState(initialPrice);
  const [wears, setWears] = useState(4);
  const [months, setMonths] = useState(18);
  const cost = useMemo(() => calculateCostPerWear(price, wears, months), [price, wears, months]);

  return (
    <div className="rounded-[2rem] bg-[#181a16] p-6 text-[#f5f2e8] md:p-8">
      <div className="flex flex-col justify-between gap-8 md:flex-row">
        <div className="max-w-sm">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d8ff58]">True cost calculator</span>
          <h2 className="mt-3 font-editorial text-4xl font-medium">Price is only the first number.</h2>
          <p className="mt-3 text-sm leading-6 text-white/55">Adjust how often you expect to wear it. Veyra turns intention into an honest ownership cost.</p>
        </div>
        <div className="grid min-w-0 flex-1 gap-5 sm:grid-cols-3">
          <Control label="Item price" value={price} min={25} max={1000} step={5} prefix="$" onChange={setPrice} />
          <Control label="Wears / month" value={wears} min={1} max={20} onChange={setWears} />
          <Control label="Months owned" value={months} min={3} max={60} step={3} onChange={setMonths} />
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-4 border-t border-white/12 pt-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="text-xs uppercase tracking-[0.16em] text-white/45">Projected cost per wear</span>
          <p className="mt-1 font-editorial text-6xl text-[#d8ff58]">{formatCurrency(cost)}</p>
        </div>
        <div className="rounded-full border border-[#d8ff58]/40 px-5 py-3 text-sm">
          Recommendation: <strong>{getRecommendation(cost)}</strong>
        </div>
      </div>
    </div>
  );
}

function Control({
  label,
  value,
  min,
  max,
  step = 1,
  prefix = "",
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  prefix?: string;
  onChange: (value: number) => void;
}) {
  return (
    <label className="block">
      <span className="text-xs text-white/55">{label}</span>
      <span className="mt-2 block font-mono text-xl">{prefix}{value}</span>
      <input
        className="mt-3 w-full accent-[#d8ff58]"
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
      />
    </label>
  );
}
