export type Recommendation =
  | "Buy now"
  | "Wait for price drop"
  | "Buy secondhand"
  | "Skip — closet overlap"
  | "Bid lower";

export interface ScoreBreakdown {
  label: string;
  score: number;
  detail: string;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  color: string;
  price: number;
  originalPrice: number;
  resalePrice: number;
  score: number;
  recommendation: Recommendation;
  scoreLabel: string;
  description: string;
  imagePosition: string;
  breakdown: ScoreBreakdown[];
}

export interface ClosetItem {
  id: string;
  name: string;
  category: string;
  color: string;
  wears: number;
  lastWorn: string;
  resaleValue: number;
  listingPrice: number;
  compatibility: number;
}

export interface UserProfile {
  name: string;
  budget: number;
  style: string[];
  colors: string[];
  sizingHistory: string[];
}
