import { about, profile } from "@/content/site";
import { useI18n } from "@/lib/i18n";

export function About() {
  const { lang, t } = useI18n();
  const paragraphs = about.paragraphs[lang];
  return (
    <section id="about" className="section-pad">
      <div className="container-luxury grid md:grid-cols-[1fr_1.4fr] gap-12 md:gap-20">
        <div className="reveal">
          <div className="flex items-center gap-3 mb-6"><span className="hairline" /><span className="eyebrow">01 — About</span></div>
          <h2 className="heading-display text-4xl md:text-5xl">
            A studio of <span className="italic gold-text">one</span>, with the depth of a firm.
          </h2>
        </div>
        <div className="reveal space-y-6">
          {paragraphs.map((p, i) => (
            <p key={i} className="text-lg leading-relaxed text-muted-foreground">{p}</p>
          ))}
          <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border">
            <div>
              <div className="eyebrow mb-2">{lang === "ar" ? "المقر" : "Based in"}</div>
              <div className="font-display text-xl">{t(profile.location)}</div>
            </div>
            <div>
              <div className="eyebrow mb-2">{lang === "ar" ? "متاح" : "Available for"}</div>
              <div className="font-display text-xl">{lang === "ar" ? "مشاريع جديدة" : "New commissions"}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
