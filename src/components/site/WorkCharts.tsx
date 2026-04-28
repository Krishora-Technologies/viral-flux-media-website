"use client";
"use client";

export const LIME = "#c8f542";
const W = 240, H = 96, P = 10; // viewBox + uniform padding

/* ── 01 BarChart — Followers +300% over 12 weeks ── */
export function BarChart({ on }: { on: boolean }) {
  // growth curve: slow start, accelerates
  const pcts = [0.06,0.09,0.12,0.16,0.22,0.31,0.42,0.56,0.70,0.82,0.92,1];
  const bw = 14, gap = 6, base = H - P;
  const maxBarH = H - P * 2;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" height={H} style={{ display:"block" }}>
      <defs>
        <linearGradient id="b-g" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor={LIME} stopOpacity="0.9"/>
          <stop offset="100%" stopColor={LIME} stopOpacity="0.05"/>
        </linearGradient>
      </defs>
      {/* baseline */}
      <line x1={P} y1={base} x2={W-P} y2={base} stroke="rgba(255,255,255,0.08)" strokeWidth={1}/>
      {pcts.map((p, i) => {
        const bh  = on ? p * maxBarH : 2;
        const x   = P + i * (bw + gap);
        const dur = `${0.25 + i * 0.05}s`;
        const isLast = i === pcts.length - 1;
        return (
          <g key={i}>
            <rect x={x} y={base - bh} width={bw} height={bh} rx={3}
              fill={isLast ? LIME : "url(#b-g)"} fillOpacity={isLast ? 0.9 : 1}
              style={{ transition:`height ${dur} cubic-bezier(.22,1,.36,1),y ${dur} cubic-bezier(.22,1,.36,1)` }}/>
          </g>
        );
      })}
      {/* 3× label at last bar */}
      <text x={P + 11 * (bw+gap) + bw/2} y={base - (on ? maxBarH : 2) - 5}
        textAnchor="middle" fill={LIME} fontSize={8} fontFamily="monospace"
        opacity={on ? 1 : 0} style={{ transition:"opacity 0.4s 1s ease" }}>
        ×3
      </text>
      {/* week labels */}
      <text x={P + 0*(bw+gap)+bw/2} y={H-1} textAnchor="middle"
        fill="rgba(255,255,255,0.2)" fontSize={6.5} fontFamily="monospace">W1</text>
      <text x={P + 11*(bw+gap)+bw/2} y={H-1} textAnchor="middle"
        fill="rgba(255,255,255,0.2)" fontSize={6.5} fontFamily="monospace">W12</text>
    </svg>
  );
}

/* ── 02 WaveChart — Reel Reach 5M+ (viral spike) ── */
export function WaveChart({ on }: { on: boolean }) {
  // flat → huge spike → elevated plateau
  const vals = [4,5,6,5,7,6,8,30,85,100,88,72,60,50];
  const n = vals.length;
  const inner = H - P*2;
  const pts: [number,number][] = vals.map((v,i) => [
    P + (i/(n-1))*(W-P*2),
    P + (1 - v/100) * inner,
  ]);
  let d = `M ${pts[0][0]} ${pts[0][1]}`;
  for (let i=1;i<pts.length;i++) {
    const cx = (pts[i-1][0]+pts[i][0])/2;
    d += ` C ${cx} ${pts[i-1][1]} ${cx} ${pts[i][1]} ${pts[i][0]} ${pts[i][1]}`;
  }
  const area = `${d} L${pts[n-1][0]} ${H-P} L${pts[0][0]} ${H-P} Z`;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" height={H} style={{ display:"block" }}>
      <defs>
        <linearGradient id="w-g" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor={LIME} stopOpacity="0.25"/>
          <stop offset="100%" stopColor={LIME} stopOpacity="0"/>
        </linearGradient>
        <clipPath id="w-c">
          <rect x={0} y={0} width={on?W:0} height={H}
            style={{ transition:"width 1.1s cubic-bezier(.22,1,.36,1)" }}/>
        </clipPath>
      </defs>
      <path d={area} fill="url(#w-g)" clipPath="url(#w-c)"/>
      <path d={d} stroke={LIME} strokeWidth={1.8} fill="none" strokeOpacity={0.9} clipPath="url(#w-c)"/>
      {/* spike label */}
      <text x={pts[9][0]} y={pts[9][1] - 6} textAnchor="middle"
        fill={LIME} fontSize={8.5} fontFamily="monospace" fontWeight="600"
        opacity={on?1:0} style={{ transition:"opacity 0.4s 1s ease" }}>5M+</text>
      <line x1={pts[9][0]} y1={pts[9][1]-2} x2={pts[9][0]} y2={pts[9][1]+3}
        stroke={LIME} strokeWidth={1} opacity={on?0.5:0}
        style={{ transition:"opacity 0.4s 1s ease" }}/>
      {/* baseline */}
      <line x1={P} y1={H-P} x2={W-P} y2={H-P} stroke="rgba(255,255,255,0.07)" strokeWidth={1}/>
    </svg>
  );
}

/* ── 03 DonutChart — Engagement 2× (before vs after bars) ── */
export function DonutChart({ on }: { on: boolean }) {
  const rows = [
    { label:"Before", pct:0.42, val:"1.2%" },
    { label:"After",  pct:0.96, val:"2.4%" },
  ];
  const barH = 18, gap = 20, startY = 18, bW = W - P*2;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" height={H} style={{ display:"block" }}>
      {rows.map((r,i) => {
        const y   = startY + i*(barH+gap);
        const w   = on ? r.pct * bW : 0;
        const dur = `${0.8 + i*0.2}s cubic-bezier(.22,1,.36,1)`;
        return (
          <g key={i}>
            {/* label */}
            <text x={P} y={y-4} fill="rgba(255,255,255,0.3)" fontSize={7.5} fontFamily="monospace">
              {r.label}
            </text>
            {/* track */}
            <rect x={P} y={y} width={bW} height={barH} rx={4}
              fill="rgba(255,255,255,0.04)"/>
            {/* fill */}
            <rect x={P} y={y} width={w} height={barH} rx={4}
              fill={i===1 ? LIME : "rgba(200,245,66,0.35)"}
              style={{ transition:`width ${dur}` }}/>
            {/* value */}
            <text x={P + bW - 2} y={y + barH/2 + 3} textAnchor="end"
              fill={i===1 ? "#0e0e0e" : LIME} fontSize={9} fontFamily="monospace" fontWeight="700"
              opacity={on?1:0} style={{ transition:`opacity 0.4s ${0.8+i*0.2}s ease` }}>
              {r.val}
            </text>
          </g>
        );
      })}
      {/* 2× badge */}
      <text x={W-P} y={H-P} textAnchor="end"
        fill="rgba(255,255,255,0.15)" fontSize={7} fontFamily="monospace"
        opacity={on?1:0} style={{ transition:"opacity 0.5s 1.3s ease" }}>
        2× engagement
      </text>
    </svg>
  );
}

/* ── 04 ArcChart — Increase in Leads 40% ── */
export function ArcChart({ on }: { on: boolean }) {
  const r=36, cx=W/2, cy=H-8;
  const toR = (d:number) => d*Math.PI/180;
  const pt  = (deg:number):[number,number] => [cx+r*Math.cos(toR(deg)), cy+r*Math.sin(toR(deg))];
  const [sx,sy] = pt(180); const [ex,ey] = pt(0);
  const arcLen = Math.PI*r; // half circle
  const track  = `M ${sx} ${sy} A ${r} ${r} 0 0 1 ${ex} ${ey}`;
  // reference marker at 100% (baseline), fill extends +40%
  const baselinePct = 1/(1.4); // where 100% sits on the 0→140% scale
  const fillPct = on ? 1.0 : 0;           // fills to 100% of arc = baseline
  const extraPct = on ? 1.4 : 0;          // fills to 140% of arc
  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" height={H} style={{ display:"block" }}>
      {/* track */}
      <path d={track} stroke="rgba(255,255,255,0.07)" strokeWidth={8} fill="none" strokeLinecap="round"/>
      {/* baseline fill (grey) */}
      <path d={track} stroke="rgba(200,245,66,0.2)" strokeWidth={8} fill="none" strokeLinecap="round"
        strokeDasharray={arcLen} strokeDashoffset={on ? arcLen*(1-baselinePct) : arcLen}
        style={{ transition:"stroke-dashoffset 0.9s cubic-bezier(.22,1,.36,1)" }}/>
      {/* +40% fill (lime) */}
      <path d={track} stroke={LIME} strokeWidth={8} fill="none" strokeLinecap="round"
        strokeDasharray={arcLen} strokeDashoffset={on ? arcLen*(1-baselinePct*0.4) : arcLen}
        strokeOpacity={0.9}
        style={{ transition:"stroke-dashoffset 1.1s 0.1s cubic-bezier(.22,1,.36,1)" }}/>
      {/* centre label */}
      <text x={cx} y={cy-14} textAnchor="middle" fill={LIME} fontSize={20}
        fontFamily="monospace" fontWeight="700" letterSpacing="-1"
        opacity={on?1:0} style={{ transition:"opacity 0.4s 0.9s ease" }}>+40%</text>
      <text x={cx} y={cy-2} textAnchor="middle"
        fill="rgba(255,255,255,0.25)" fontSize={7} fontFamily="monospace"
        opacity={on?1:0} style={{ transition:"opacity 0.4s 1.1s ease" }}>vs previous quarter</text>
      {/* end markers */}
      <text x={P} y={H-1} fill="rgba(255,255,255,0.2)" fontSize={6.5} fontFamily="monospace">0%</text>
      <text x={W-P} y={H-1} textAnchor="end" fill="rgba(255,255,255,0.2)" fontSize={6.5} fontFamily="monospace">+140%</text>
    </svg>
  );
}

/* ── 05 LineChart — Monthly Reach 10K (steady climb) ── */
export function LineChart({ on }: { on: boolean }) {
  const months = ["J","F","M","A","M","J","J","A","S","O","N","D"];
  const vals   = [22,28,32,38,45,52,58,65,72,80,90,100];
  const inner  = H - P*2;
  const pts: [number,number][] = vals.map((v,i) => [
    P + (i/11)*(W-P*2),
    P + (1-v/100)*inner,
  ]);
  let d = `M ${pts[0][0]} ${pts[0][1]}`;
  for (let i=1;i<pts.length;i++) {
    const cx=(pts[i-1][0]+pts[i][0])/2;
    d += ` C ${cx} ${pts[i-1][1]} ${cx} ${pts[i][1]} ${pts[i][0]} ${pts[i][1]}`;
  }
  const area = `${d} L${pts[11][0]} ${H-P} L${pts[0][0]} ${H-P} Z`;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" height={H} style={{ display:"block" }}>
      <defs>
        <linearGradient id="l-g" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor={LIME} stopOpacity="0.2"/>
          <stop offset="100%" stopColor={LIME} stopOpacity="0"/>
        </linearGradient>
        <clipPath id="l-c">
          <rect x={0} y={0} width={on?W:0} height={H}
            style={{ transition:"width 1.2s cubic-bezier(.22,1,.36,1)" }}/>
        </clipPath>
      </defs>
      {/* grid */}
      {[0.25,0.5,0.75].map((t,i)=>(
        <line key={i} x1={P} y1={P+t*inner} x2={W-P} y2={P+t*inner}
          stroke="rgba(255,255,255,0.05)" strokeWidth={1}/>
      ))}
      <path d={area} fill="url(#l-g)" clipPath="url(#l-c)"/>
      <path d={d} stroke={LIME} strokeWidth={1.8} fill="none" strokeOpacity={0.85} clipPath="url(#l-c)"/>
      {/* month ticks — every 3 */}
      {months.filter((_,i)=>i%3===0).map((m,i)=>(
        <text key={i} x={P+(i*3/11)*(W-P*2)} y={H-1}
          textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize={6.5} fontFamily="monospace">{m}</text>
      ))}
      {/* endpoint */}
      <circle cx={pts[11][0]} cy={pts[11][1]} r={on?3:0}
        fill="#0e0e0e" stroke={LIME} strokeWidth={1.5}
        style={{ transition:"r 0.3s 1.1s ease" }}/>
      <text x={pts[11][0]} y={pts[11][1]-7} textAnchor="middle"
        fill={LIME} fontSize={8} fontFamily="monospace" fontWeight="700"
        opacity={on?1:0} style={{ transition:"opacity 0.4s 1.2s ease" }}>10K</text>
    </svg>
  );
}

/* ── 06 ComboChart — 70% Watch Time + 3× Saves ── */
export function ComboChart({ on }: { on: boolean }) {
  const bW = W - P*2;
  // watch time bar
  const watchPct = 0.70;
  const avgPct   = 0.38; // platform avg reference
  // saves bars: 1×, 2×, 3×
  const savesH   = 28;
  const barsY    = 60;
  const bars = [
    { label:"1×", pct:0.33, dim:true },
    { label:"2×", pct:0.66, dim:true },
    { label:"3×", pct:1.00, dim:false },
  ];
  const bwS = (bW/3) - 8;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" height={H} style={{ display:"block" }}>
      {/* ── Watch time row ── */}
      <text x={P} y={14} fill="rgba(255,255,255,0.3)" fontSize={7} fontFamily="monospace">Watch time</text>
      {/* track */}
      <rect x={P} y={18} width={bW} height={12} rx={3} fill="rgba(255,255,255,0.05)"/>
      {/* platform avg marker */}
      <rect x={P} y={18} width={on?avgPct*bW:0} height={12} rx={3}
        fill="rgba(255,255,255,0.1)"
        style={{ transition:"width 0.7s cubic-bezier(.22,1,.36,1)" }}/>
      {/* watch time fill */}
      <rect x={P} y={18} width={on?watchPct*bW:0} height={12} rx={3}
        fill={LIME} fillOpacity={0.9}
        style={{ transition:"width 0.9s cubic-bezier(.22,1,.36,1)" }}/>
      {/* 70% label */}
      <text x={P + (on?watchPct*bW:0) - 3} y={27} textAnchor="end"
        fill="#0e0e0e" fontSize={8} fontFamily="monospace" fontWeight="800"
        opacity={on?1:0} style={{ transition:"opacity 0.3s 0.8s ease" }}>70%</text>
      {/* avg label */}
      <text x={P + avgPct*bW + 3} y={35} fill="rgba(255,255,255,0.2)" fontSize={6} fontFamily="monospace"
        opacity={on?1:0} style={{ transition:"opacity 0.3s 0.7s ease" }}>avg 38%</text>

      {/* ── Saves row ── */}
      <text x={P} y={56} fill="rgba(255,255,255,0.3)" fontSize={7} fontFamily="monospace">Saves per reel</text>
      {bars.map((b,i)=>{
        const bx  = P + i*(bwS+8);
        const bh  = on ? b.pct * savesH : 2;
        const dur = `${0.5+i*0.15}s cubic-bezier(.22,1,.36,1)`;
        return (
          <g key={i}>
            <rect x={bx} y={barsY+savesH-bh} width={bwS} height={bh} rx={3}
              fill={b.dim ? "rgba(200,245,66,0.25)" : LIME}
              style={{ transition:`height ${dur},y ${dur}` }}/>
            <text x={bx+bwS/2} y={barsY+savesH+9} textAnchor="middle"
              fill={b.dim?"rgba(255,255,255,0.25)":LIME} fontSize={8}
              fontFamily="monospace" fontWeight={b.dim?"400":"700"}>{b.label}</text>
          </g>
        );
      })}
    </svg>
  );
}
