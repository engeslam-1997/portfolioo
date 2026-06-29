import { technologies } from "@/content/site";
import { useI18n } from "@/lib/i18n";
import * as Icons from "lucide-react";

export function Technology() {
  const { lang } = useI18n();
  return (
    <section className="section-pad bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(var(--color-primary-foreground)_1px,transparent_1px),linear-gradient(90deg,var(--color-primary-foreground)_1px,transparent_1px)] [background-size:60px_60px]" />
      <div className="container-luxury relative">
        <div className="reveal max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-6"><span className="hairline" /><span className="eyebrow text-primary-foreground/70">04 — {lang === "ar" ? "التقنيات والابتكار" : "Technology & Innovation"}</span></div>
          <h2 className="heading-display text-4xl md:text-5xl">Engineering meets <span className="italic gold-text">horticulture</span>.</h2>
          <p className="mt-6 text-primary-foreground/70 max-w-xl">{lang === "ar" ? "أعتمد على أحدث التقنيات في الري الذكي، الأتمتة، والتصور ثلاثي الأبعاد لتقديم نتائج موثوقة وموفّرة." : "I rely on modern smart irrigation, automation, and 3D visualization to deliver reliable, water-efficient outcomes."}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-primary-foreground/10 border border-primary-foreground/10 rounded-2xl overflow-hidden">
          {technologies.map((tech, i) => {
            const Icon = (Icons as any)[tech.icon] ?? Icons.Sparkles;
            return (
              <div key={i} className="reveal bg-primary p-6 md:p-8 group hover:bg-primary-foreground/5 transition-colors">
                <Icon className="h-6 w-6 text-gold mb-6 group-hover:scale-110 transition-transform" />
                <div className="font-display text-lg leading-tight">{lang === "ar" ? tech.ar : tech.en}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
