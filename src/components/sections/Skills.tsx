import { skills } from "@/content/site";
import { useI18n } from "@/lib/i18n";
import { useEffect, useRef, useState } from "react";

export function Skills() {
  const { t, lang } = useI18n();
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setVisible(true)), { threshold: 0.2 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section className="section-pad bg-secondary/40">
      <div className="container-luxury">
        <div className="reveal max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-6"><span className="hairline" /><span className="eyebrow">02 — {lang === "ar" ? "المهارات" : "Skills"}</span></div>
          <h2 className="heading-display text-4xl md:text-5xl">Craft, software, and <span className="italic gold-text">field discipline</span>.</h2>
        </div>
        <div ref={ref} className="grid md:grid-cols-2 gap-x-16 gap-y-8">
          {skills.map((s, i) => (
            <div key={i} className="reveal">
              <div className="flex justify-between items-baseline mb-3">
                <span className="font-display text-xl">{t(s.name)}</span>
                <span className="text-sm tabular-nums text-muted-foreground">{s.level}%</span>
              </div>
              <div className="h-px bg-border relative overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 bg-gold origin-left rtl:origin-right transition-transform duration-[1400ms] ease-[cubic-bezier(.16,1,.3,1)]"
                  style={{ width: "100%", transform: visible ? `scaleX(${s.level / 100})` : "scaleX(0)", transitionDelay: `${i * 60}ms` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
