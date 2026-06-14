import type { Recommendation } from "@/lib/types";

export function calculateCostPerWear(
  price: number,
  wearsPerMonth: number,
  months: number,
) {
  const totalWears = Math.max(1, wearsPerMonth * months);
  return Math.round((price / totalWears) * 100) / 100;
}

export function getRecommendation(costPerWear: number): Recommendation {
  if (costPerWear <= 5) return "Buy now";
  if (costPerWear <= 9) return "Buy secondhand";
  if (costPerWear <= 15) return "Wait for price drop";
  return "Skip — closet overlap";
}

export function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: value % 1 === 0 ? 0 : 2,
  }).format(value);
}
