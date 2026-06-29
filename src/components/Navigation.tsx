import { useState } from "react";
import { Menu, X, Moon, Sun, Languages } from "lucide-react";
import { useTheme } from "@/lib/theme";
import { useI18n } from "@/lib/i18n";
import { ui } from "@/content/site";

const links = [
  { href: "#home", key: "home" as const },
  { href: "#about", key: "about" as const },
  { href: "#work", key: "work" as const },
  { href: "#services", key: "services" as const },
  { href: "#contact", key: "contact" as const },
];

export function Navigation() {
  const { theme, toggle } = useTheme();
  const { lang, setLang, t } = useI18n();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 glass border-b border-border/50">
      <div className="container-luxury flex h-16 items-center justify-between md:h-20">
        <a href="#home" className="flex items-center gap-2 group">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-gold/60 text-gold font-display text-lg">E</span>
          <span className="hidden sm:block font-display text-lg tracking-wide">Eslam<span className="gold-text">.</span></span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a key={l.key} href={l.href} className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors">
              {t(ui.nav[l.key])}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <button onClick={() => setLang(lang === "en" ? "ar" : "en")} aria-label="Toggle language"
            className="h-9 w-9 grid place-items-center rounded-full hover:bg-accent transition-colors">
            <Languages className="h-4 w-4" />
          </button>
          <button onClick={toggle} aria-label="Toggle theme"
            className="h-9 w-9 grid place-items-center rounded-full hover:bg-accent transition-colors">
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button onClick={() => setOpen(!open)} aria-label="Menu" className="md:hidden h-9 w-9 grid place-items-center rounded-full hover:bg-accent">
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-border/50 glass">
          <div className="container-luxury py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a key={l.key} href={l.href} onClick={() => setOpen(false)} className="text-base text-muted-foreground hover:text-foreground">
                {t(ui.nav[l.key])}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
