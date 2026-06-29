import { profile } from "@/content/site";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t, lang } = useI18n();
  return (
    <footer className="border-t border-border py-10">
      <div className="container-luxury flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="font-display text-base">{t(profile.name)} <span className="gold-text">— {t(profile.title)}</span></div>
        <div>© {new Date().getFullYear()} {lang === "ar" ? "جميع الحقوق محفوظة" : "All rights reserved"}.</div>
      </div>
    </footer>
  );
}
