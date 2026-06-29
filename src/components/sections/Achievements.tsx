import { useEffect, useRef, useState } from "react";
import { achievements } from "@/content/site";
import { useI18n } from "@/lib/i18n";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => {
        if (e.isIntersecting) {
          const start = performance.now();
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / 1800);
            setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        }
      });
    }, { threshold: 0.4 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [value]);
  return <span ref={ref} className="tabular-nums">{n}{suffix}</span>;
}

export function Achievements() {
  const { t } = useI18n();
  return (
    <section className="section-pad">
      <div className="container-luxury">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border rounded-2xl overflow-hidden">
          {achievements.map((a, i) => (
            <div key={i} className="reveal bg-background p-8 md:p-12 text-center">
              <div className="heading-display text-5xl md:text-6xl gold-text mb-3">
                <Counter value={a.value} suffix={a.suffix} />
              </div>
              <div className="eyebrow">{t(a.label)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
