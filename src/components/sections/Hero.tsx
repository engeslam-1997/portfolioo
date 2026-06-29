import { ArrowRight, MapPin, Download } from "lucide-react";
import { profile, ui, images } from "@/content/site";
import { useI18n } from "@/lib/i18n";

export function Hero() {
  const { t } = useI18n();
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16 md:pt-32">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <img src={images.heroBg} alt="" className="h-full w-full object-cover opacity-40 dark:opacity-30 animate-float-slow" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />
        <div className="absolute inset-0 [background:radial-gradient(60%_50%_at_50%_40%,transparent,var(--color-background)_85%)]" />
      </div>

      <div className="container-luxury grid md:grid-cols-[1.2fr_1fr] gap-12 md:gap-16 items-center">
        <div className="reveal in space-y-8 max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="hairline" />
            <span className="eyebrow">{t(profile.title)}</span>
          </div>
          <h1 className="heading-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-balance">
            {t(profile.name).split(" ").slice(0, -1).join(" ")}{" "}
            <span className="italic gold-text font-light">{t(profile.name).split(" ").slice(-1)}</span>
          </h1>
          <p className="heading-display text-2xl md:text-3xl text-muted-foreground text-balance leading-snug">
            {t(profile.headline)}
          </p>
          <p className="text-base text-muted-foreground max-w-xl leading-relaxed">{t(profile.intro)}</p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a href="#work" className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-all">
              {t(ui.cta.viewProjects)}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-accent transition-all">
              {t(ui.cta.contact)}
            </a>
            <a href={profile.cvUrl} download className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              <Download className="h-4 w-4" /> {t(ui.cta.downloadCV)}
            </a>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground pt-4">
            <MapPin className="h-4 w-4 text-gold" />
            <span>{t(profile.location)}</span>
          </div>
        </div>

        <div className="relative reveal in mx-auto w-full max-w-md">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-gold/30 via-primary/10 to-transparent blur-2xl" />
          <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] border border-border shadow-luxury">
            <img src={images.portrait} alt={t(profile.name)} width={896} height={1216}
              className="h-full w-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-background/95 to-transparent">
              <div className="text-xs eyebrow mb-1">est. 2014</div>
              <div className="font-display text-lg">{t(profile.title)}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
