import { services } from "@/content/site";
import { useI18n } from "@/lib/i18n";
import * as Icons from "lucide-react";

export function Services() {
  const { t, lang } = useI18n();
  return (
    <section id="services" className="section-pad bg-secondary/40">
      <div className="container-luxury">
        <div className="reveal max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-6"><span className="hairline" /><span className="eyebrow">06 — {lang === "ar" ? "الخدمات" : "Services"}</span></div>
          <h2 className="heading-display text-4xl md:text-5xl">How I can help your <span className="italic gold-text">project</span>.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border rounded-2xl overflow-hidden">
          {services.map((s, i) => {
            const Icon = (Icons as any)[s.icon] ?? Icons.Sparkles;
            return (
              <div key={i} className="reveal bg-background p-8 md:p-10 group hover:bg-accent/40 transition-colors">
                <div className="flex items-start justify-between mb-8">
                  <Icon className="h-7 w-7 text-gold" />
                  <span className="font-display text-3xl text-muted-foreground/30">0{i + 1}</span>
                </div>
                <h3 className="font-display text-2xl mb-3 leading-tight">{t(s.title)}</h3>
                <p className="text-muted-foreground leading-relaxed">{t(s.body)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
