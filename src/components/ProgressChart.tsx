"use client";

interface DataPoint {
  label: string;
  value: number;
}

export default function ProgressChart({ data }: { data: DataPoint[] }) {
  if (data.length === 0) return null;

  const max = 100;
  const width = 600;
  const height = 200;
  const padding = { top: 20, right: 20, bottom: 30, left: 40 };
  const chartW = width - padding.left - padding.right;
  const chartH = height - padding.top - padding.bottom;

  const points = data.map((d, i) => ({
    x: padding.left + (data.length === 1 ? chartW / 2 : (i / (data.length - 1)) * chartW),
    y: padding.top + chartH - (d.value / max) * chartH,
  }));

  const linePath = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");

  // Pass line at 72%
  const passY = padding.top + chartH - (72 / max) * chartH;

  return (
    <div className="w-full overflow-x-auto">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full max-w-[600px]">
        {/* Grid lines */}
        {[0, 25, 50, 72, 100].map((v) => {
          const y = padding.top + chartH - (v / max) * chartH;
          return (
            <g key={v}>
              <line
                x1={padding.left}
                y1={y}
                x2={width - padding.right}
                y2={y}
                stroke={v === 72 ? "#dc2626" : "#e5e7eb"}
                strokeWidth={v === 72 ? 1.5 : 0.5}
                strokeDasharray={v === 72 ? "4 2" : ""}
              />
              <text x={padding.left - 5} y={y + 4} textAnchor="end" className="fill-gray-400 text-[10px]">
                {v}%
              </text>
            </g>
          );
        })}

        {/* Line */}
        <path d={linePath} fill="none" stroke="#2563eb" strokeWidth={2} />

        {/* Points */}
        {points.map((p, i) => (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r={4}
            fill={data[i].value >= 72 ? "#16a34a" : "#dc2626"}
            stroke="white"
            strokeWidth={2}
          />
        ))}

        {/* Pass label */}
        <text x={width - padding.right + 2} y={passY + 3} className="fill-red-500 text-[9px]">
          72%
        </text>
      </svg>
    </div>
  );
}
