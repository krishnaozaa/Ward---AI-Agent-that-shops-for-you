"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Sparkles } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/demo", label: "Demo" },
  { href: "/closet", label: "Closet" },
  { href: "/resale", label: "Resale" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f3f0e8]/88 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 md:px-8">
        <Link href="/" className="flex items-center gap-2" aria-label="Veyra home">
          <span className="grid size-8 place-items-center rounded-full bg-foreground text-background">
            <Sparkles className="size-4" />
          </span>
          <span className="font-editorial text-2xl font-semibold tracking-[-0.03em]">Veyra</span>
          <span className="hidden rounded-full bg-accent px-2 py-1 text-[10px] font-bold uppercase tracking-[0.16em] sm:inline">
            Concept
          </span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm text-muted-foreground transition hover:text-foreground",
                pathname === link.href && "font-medium text-foreground",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button asChild className="rounded-full px-5">
            <Link href="/demo">Open wardrobe</Link>
          </Button>
        </div>
        <button
          className="grid size-10 place-items-center rounded-full border md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          <Menu className="size-5" />
        </button>
      </div>
      {open && (
        <nav className="border-t border-black/10 px-5 py-4 md:hidden" aria-label="Mobile navigation">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-sm hover:bg-black/5"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
