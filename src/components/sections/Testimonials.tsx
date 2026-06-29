import { testimonials } from "@/content/site";
import { useI18n } from "@/lib/i18n";
import { Quote } from "lucide-react";

export function Testimonials() {
  const { t, lang } = useI18n();
  return (
    <section className="section-pad bg-secondary/40">
      <div className="container-luxury">
        <div className="reveal max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-6"><span className="hairline" /><span className="eyebrow">07 — {lang === "ar" ? "آراء العملاء" : "Testimonials"}</span></div>
          <h2 className="heading-display text-4xl md:text-5xl">Trusted by <span className="italic gold-text">developers</span> &amp; owners.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((tm, i) => (
            <figure key={i} className="reveal bg-background border border-border rounded-2xl p-8 flex flex-col">
              <Quote className="h-8 w-8 text-gold mb-6" />
              <blockquote className="font-display text-xl leading-snug mb-8 flex-1">"{t(tm.quote)}"</blockquote>
              <figcaption>
                <div className="font-medium">{tm.name}</div>
                <div className="text-sm text-muted-foreground">{t(tm.role)}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
