import { timeline } from "@/content/site";
import { useI18n } from "@/lib/i18n";

export function Timeline() {
  const { t, lang } = useI18n();
  return (
    <section className="section-pad">
      <div className="container-luxury">
        <div className="reveal max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-6"><span className="hairline" /><span className="eyebrow">05 — {lang === "ar" ? "الخبرات" : "Experience"}</span></div>
          <h2 className="heading-display text-4xl md:text-5xl">A decade of <span className="italic gold-text">deliveries</span>.</h2>
        </div>
        <div className="relative">
          <div className="absolute top-0 bottom-0 left-4 md:left-1/2 md:-translate-x-px w-px bg-border" />
          <div className="space-y-12">
            {timeline.map((item, i) => (
              <div key={i} className={`reveal relative grid md:grid-cols-2 gap-6 md:gap-12 ${i % 2 ? "md:[direction:rtl]" : ""}`}>
                <div className={`relative pl-12 md:pl-0 ${i % 2 ? "md:pr-12 md:text-right" : "md:pl-12"} [direction:ltr]`}>
                  <div className="absolute left-4 md:left-auto md:right-auto top-2 -translate-x-1/2 md:translate-x-0 h-3 w-3 rounded-full bg-gold ring-4 ring-background"
                    style={i % 2 ? { right: "-1.625rem" } : { left: "-1.625rem" }} />
                  <div className="font-display text-3xl gold-text mb-2">{item.year}</div>
                  <h3 className="font-display text-2xl mb-2">{t(item.title)}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t(item.body)}</p>
                </div>
                <div />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
