export function ScoreRing({
  score,
  size = "large",
}: {
  score: number;
  size?: "small" | "large";
}) {
  const diameter = size === "large" ? 176 : 80;
  const stroke = size === "large" ? 9 : 6;
  const radius = (diameter - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="relative shrink-0" style={{ width: diameter, height: diameter }}>
      <svg className="-rotate-90" width={diameter} height={diameter} aria-hidden="true">
        <circle cx={diameter / 2} cy={diameter / 2} r={radius} fill="none" stroke="currentColor" className="text-black/10" strokeWidth={stroke} />
        <circle
          cx={diameter / 2}
          cy={diameter / 2}
          r={radius}
          fill="none"
          stroke="#d8ff58"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="absolute inset-0 grid place-items-center text-center">
        <div>
          <strong className={size === "large" ? "font-editorial text-6xl font-medium" : "text-2xl font-semibold"}>
            {score}
          </strong>
          <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Veyra score
          </span>
        </div>
      </div>
    </div>
  );
}
