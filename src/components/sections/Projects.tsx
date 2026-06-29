import { useMemo, useState } from "react";
import { Search, MapPin, ArrowUpRight } from "lucide-react";
import { projects, projectCategories, type ProjectCategory } from "@/content/site";
import { useI18n } from "@/lib/i18n";

export function Projects() {
  const { t, lang } = useI18n();
  const [cat, setCat] = useState<ProjectCategory>("all");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchCat = cat === "all" || p.category === cat;
      const text = (t(p.title) + " " + t(p.location) + " " + t(p.description)).toLowerCase();
      const matchQ = !q || text.includes(q.toLowerCase());
      return matchCat && matchQ;
    });
  }, [cat, q, t]);

  return (
    <section id="work" className="section-pad">
      <div className="container-luxury">
        <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-6"><span className="hairline" /><span className="eyebrow">03 — {lang === "ar" ? "الأعمال" : "Selected Work"}</span></div>
            <h2 className="heading-display text-4xl md:text-5xl">Projects shaped by <span className="italic gold-text">place</span>.</h2>
          </div>
          <div className="relative w-full md:w-72">
            <Search className="absolute left-4 rtl:left-auto rtl:right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={lang === "ar" ? "ابحث..." : "Search projects"}
              className="w-full rounded-full bg-secondary border border-border pl-11 rtl:pl-4 rtl:pr-11 pr-4 py-3 text-sm outline-none focus:border-gold transition-colors" />
          </div>
        </div>

        <div className="reveal flex flex-wrap gap-2 mb-10">
          {projectCategories.map((c) => (
            <button key={c.id} onClick={() => setCat(c.id)}
              className={`px-4 py-2 rounded-full text-sm border transition-all ${
                cat === c.id ? "bg-foreground text-background border-foreground" : "border-border text-muted-foreground hover:text-foreground"
              }`}>
              {t(c.label)}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filtered.map((p) => (
            <article key={p.id} className="reveal group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-secondary">
                <img src={p.image} alt={t(p.title)} loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4 px-3 py-1 rounded-full glass text-xs">{t(projectCategories.find((c) => c.id === p.category)!.label)}</div>
                <div className="absolute top-4 right-4 rtl:right-auto rtl:left-4 h-9 w-9 rounded-full bg-gold text-gold-foreground grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
              <div className="pt-5 space-y-2">
                <h3 className="font-display text-2xl leading-tight">{t(p.title)}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5 text-gold" /> {t(p.location)} · {p.year} · {p.area}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{t(p.description)}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {p.tech.map((tech) => (
                    <span key={tech} className="text-[10px] uppercase tracking-widest text-muted-foreground border border-border rounded-full px-2 py-1">{tech}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
        {filtered.length === 0 && <p className="text-center text-muted-foreground py-20">No projects found.</p>}
      </div>
    </section>
  );
}
