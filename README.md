# Veyra

**The AI that tells you what your wardrobe actually needs.**

[View the live Veyra demo](https://veyra-lime.vercel.app)

Veyra is a production-quality concept MVP for a wardrobe intelligence system. It evaluates price, fit, closet overlap, true cost per wear, resale value, trend durability, return risk, and circularity before recommending whether to buy, wait, find secondhand, bid lower, or skip.

## Why I built this

Price comparison is useful, but it answers only one part of a much larger shopping decision. A lower price is not a better purchase if the item duplicates what someone owns, fits poorly, gets worn twice, or loses most of its value.

This concept explores how an AI shopping assistant can evolve from transaction optimization into a personal wardrobe operating system. It is an original initiative project built to demonstrate product judgment, design taste, full-stack execution, and a thoughtful point of view on the future of AI-assisted commerce.

## The problem current shopping assistants solve

Modern shopping assistants reduce search friction. They compare listings, surface alternatives, and help shoppers find a better market price. That creates immediate, legible value.

## The opportunity to go further

The next generation can understand the person behind the query:

- What is already in their closet
- Which sizes and silhouettes they actually keep
- How often they are likely to wear an item
- Whether it adds new outfit combinations
- What resale value it may retain
- Whether a secondhand option is the smarter choice

Veyra turns those signals into one explainable decision.

## Features implemented

- **Veyra Score:** an explainable 0–100 score across eight buying signals
- **True Cost Per Wear:** an interactive ownership value calculator
- **Closet Conflict Detection:** category, color, and substitute awareness
- **Fit Memory:** brand-specific sizing and return-risk guidance
- **Recommendation Engine:** buy, wait, secondhand, bid lower, or skip
- **AI Shopping Agent Simulation:** deterministic, closet-aware outfit guidance
- **Closet Intelligence:** wardrobe graph, gap analysis, and connected pieces
- **Resale Autopilot:** idle-item detection, valuation, and listing generation

## How the Veyra Score works

The MVP uses realistic mock scores across price fairness, closet compatibility, fit confidence, cost per wear, resale value, trend durability, return risk, and secondhand availability. Each dimension is visible in the interface so the recommendation is inspectable rather than a black box.

In production, these weights would adapt to the user. A secondhand-first shopper may weight circularity more heavily, while a fit-sensitive shopper may prioritize return risk.

## Tech stack

- Next.js 16 App Router
- React 19 and TypeScript
- Tailwind CSS 4
- shadcn/ui
- Framer Motion
- Lucide Icons
- `next/image` and `next/font`

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

For a production check:

```bash
npm run lint
npm run build
```

## Deploy on Vercel

The production deployment is live at:

**[https://veyra-lime.vercel.app](https://veyra-lime.vercel.app)**

The repository is connected to Vercel, so pushes to `main` trigger new production deployments automatically. The project needs no environment variables, database, or external services.

## Mocked vs. production

This MVP intentionally uses local data and deterministic responses so every route works immediately after deployment.

Production integrations would include:

- Real product catalog and inventory APIs
- Resale marketplace APIs
- Browser extension integration
- User closet import
- Purchase and return history
- Price history tracking and alerts
- LLM-powered recommendations
- Vector search for visual similarity
- Authentication and saved profiles
- Supabase or Postgres persistence

## Future roadmap

1. Connect a normalized product and resale catalog.
2. Add authentication, closet import, and saved fit history.
3. Build visual embeddings for wardrobe similarity and outfit matching.
4. Add price monitoring, offers, and autonomous resale workflows.
5. Introduce grounded LLM reasoning with user-controlled memory.
6. Validate scoring weights through real keep, return, and wear behavior.

## Why this demonstrates initiative

Veyra does more than reproduce an existing shopping flow. It identifies a strategic expansion, turns it into a coherent product thesis, implements the core intelligence as working interactions, and packages the result as a polished, Vercel-ready experience. The goal is to show how strong engineering can carry product insight all the way to a credible demo.

## Image note

The editorial campaign image was generated specifically for this original concept and stored locally in `public/images/veyra-editorial.png`.
