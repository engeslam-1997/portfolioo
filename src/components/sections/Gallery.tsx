import { gallery } from "@/content/site";
import { useI18n } from "@/lib/i18n";

export function Gallery() {
  const { lang } = useI18n();
  return (
    <section className="section-pad">
      <div className="container-luxury">
        <div className="reveal max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-6"><span className="hairline" /><span className="eyebrow">08 — {lang === "ar" ? "معرض" : "Gallery"}</span></div>
          <h2 className="heading-display text-4xl md:text-5xl">Field <span className="italic gold-text">notes</span> &amp; finished work.</h2>
        </div>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
          {gallery.map((src, i) => (
            <div key={i} className="reveal mb-4 break-inside-avoid overflow-hidden rounded-xl bg-secondary group">
              <img src={src} alt="" loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
