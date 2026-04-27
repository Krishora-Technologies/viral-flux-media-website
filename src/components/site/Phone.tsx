import { motion, MotionValue, useTransform } from "framer-motion";
import post1 from "@/assets/post-1.jpg";
import post2 from "@/assets/post-2.jpg";
import post3 from "@/assets/post-3.jpg";
import post4 from "@/assets/post-4.jpg";
import post5 from "@/assets/post-5.jpg";
import post6 from "@/assets/post-6.jpg";
import avatarBefore from "@/assets/avatar-before.jpg";
import avatarAfter from "@/assets/avatar-after.jpg";

const posts = [post1, post2, post3, post4, post5, post6];

interface PhoneProps {
  /** 0 = before (B&W, low followers), 1 = after (color, viral) */
  progress: MotionValue<number>;
}

export function Phone({ progress }: PhoneProps) {
  const saturate = useTransform(progress, [0, 1], [0, 1.15]);
  const filter = useTransform(saturate, (s) => `saturate(${s}) contrast(${0.95 + s * 0.1})`);
  const beforeOpacity = useTransform(progress, [0, 0.5, 1], [1, 0.5, 0]);
  const afterOpacity = useTransform(progress, [0, 0.5, 1], [0, 0.5, 1]);

  return (
    <div className="relative mx-auto" style={{ width: 320, height: 650 }}>
      {/* Phone frame */}
      <div className="absolute inset-0 rounded-[48px] bg-ink p-3 shadow-[0_50px_120px_-20px_rgba(0,0,0,0.4),0_0_0_1px_rgba(0,0,0,0.05)]">
        <div className="relative h-full w-full overflow-hidden rounded-[36px] bg-cream">
          {/* Notch */}
          <div className="absolute top-2 left-1/2 z-30 h-6 w-24 -translate-x-1/2 rounded-full bg-ink" />

          {/* Status bar */}
          <div className="relative z-20 flex items-center justify-between px-6 pt-3 font-mono-label text-[10px] text-ink">
            <span>9:41</span>
            <span>VFM</span>
          </div>

          {/* Screen content */}
          <motion.div style={{ filter }} className="relative h-full w-full">
            {/* IG header */}
            <div className="flex items-center justify-between px-4 pt-3">
              <div className="font-display text-base italic">viral.flux</div>
              <div className="flex gap-3 text-ink">
                <span className="text-lg">+</span>
                <span className="text-lg">≡</span>
              </div>
            </div>

            {/* Profile row */}
            <div className="flex items-center gap-4 px-4 pt-4">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full ring-2 ring-lime/0">
                <motion.img style={{ opacity: beforeOpacity }} src={avatarBefore} alt="" className="absolute inset-0 h-full w-full object-cover" />
                <motion.img style={{ opacity: afterOpacity }} src={avatarAfter} alt="" className="absolute inset-0 h-full w-full object-cover" />
              </div>
              <div className="flex flex-1 justify-around text-center">
                <Stat label="posts" from={12} to={248} progress={progress} />
                <Stat label="followers" from={342} to={184000} progress={progress} format />
                <Stat label="following" from={891} to={412} progress={progress} />
              </div>
            </div>

            {/* Bio */}
            <div className="px-4 pt-3 text-[11px] leading-snug">
              <div className="font-semibold">Maya Chen</div>
              <BioMorph progress={progress} />
            </div>

            {/* CTA buttons */}
            <div className="flex gap-2 px-4 pt-3">
              <motion.div
                style={{ backgroundColor: useTransform(progress, [0, 1], ["oklch(0.94 0.015 85)", "oklch(0.88 0.22 125)"]) }}
                className="flex-1 rounded-md py-1.5 text-center text-[11px] font-semibold"
              >
                Follow
              </motion.div>
              <div className="flex-1 rounded-md bg-paper py-1.5 text-center text-[11px] font-semibold">Message</div>
              <div className="rounded-md bg-paper px-3 py-1.5 text-[11px]">▾</div>
            </div>

            {/* Grid */}
            <div className="mt-4 grid grid-cols-3 gap-[2px] px-[2px]">
              {posts.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.05, duration: 0.6 }}
                  className="relative aspect-square overflow-hidden"
                >
                  <img src={p} alt="" className="h-full w-full object-cover" loading="lazy" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating accent dots */}
      <motion.div
        style={{ opacity: afterOpacity }}
        className="absolute -right-6 top-32 rounded-full bg-lime px-3 py-1 font-mono-label text-ink shadow-lg"
      >
        +52K this week
      </motion.div>
      <motion.div
        style={{ opacity: afterOpacity }}
        className="absolute -left-8 top-72 rounded-full bg-ink px-3 py-1 font-mono-label text-cream shadow-lg"
      >
        ✦ verified
      </motion.div>
    </div>
  );
}

function Stat({ from, to, label, progress, format }: { from: number; to: number; label: string; progress: MotionValue<number>; format?: boolean }) {
  const value = useTransform(progress, [0, 1], [from, to]);
  const display = useTransform(value, (v) => {
    const n = Math.round(v);
    if (format && n >= 1000) return (n / 1000).toFixed(n >= 10000 ? 0 : 1) + "K";
    return n.toLocaleString();
  });
  return (
    <div className="flex flex-col items-center">
      <motion.div className="text-sm font-bold tabular-nums">{display}</motion.div>
      <div className="text-[10px] text-muted-foreground">{label}</div>
    </div>
  );
}

function BioMorph({ progress }: { progress: MotionValue<number> }) {
  const beforeOp = useTransform(progress, [0, 0.4], [1, 0]);
  const afterOp = useTransform(progress, [0.5, 1], [0, 1]);
  return (
    <div className="relative h-10">
      <motion.div style={{ opacity: beforeOp }} className="absolute inset-0 text-muted-foreground">
        just vibes ☁️<br />dm for collab maybe
      </motion.div>
      <motion.div style={{ opacity: afterOp }} className="absolute inset-0">
        Creative director · Featured in Vogue & Dazed<br />
        <span className="text-lime font-semibold">↗ linktr.ee/maya</span>
      </motion.div>
    </div>
  );
}
