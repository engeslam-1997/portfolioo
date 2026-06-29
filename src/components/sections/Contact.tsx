import { useState } from "react";
import { Mail, MapPin, Phone, MessageCircle, Linkedin, Send } from "lucide-react";
import { profile, ui } from "@/content/site";
import { useI18n } from "@/lib/i18n";

export function Contact() {
  const { t, lang } = useI18n();
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim().slice(0, 100);
    const message = String(fd.get("message") || "").trim().slice(0, 1000);
    if (!name || !message) return;
    const text = encodeURIComponent(`Hello Eslam, I'm ${name}.\n\n${message}`);
    window.open(`https://wa.me/${profile.whatsapp}?text=${text}`, "_blank");
    setSent(true);
  };

  return (
    <section id="contact" className="section-pad bg-primary text-primary-foreground">
      <div className="container-luxury grid md:grid-cols-2 gap-12 md:gap-20">
        <div className="reveal">
          <div className="flex items-center gap-3 mb-6"><span className="hairline" /><span className="eyebrow text-primary-foreground/70">09 — {lang === "ar" ? "تواصل" : "Contact"}</span></div>
          <h2 className="heading-display text-4xl md:text-6xl mb-8">Let's design something <span className="italic gold-text">remarkable</span>.</h2>
          <p className="text-primary-foreground/70 mb-10 max-w-md">{lang === "ar" ? "متاح لمشاريع جديدة في المملكة العربية السعودية ومصر. أخبرني عن مشروعك." : "Available for new commissions across Saudi Arabia and Egypt. Tell me about your project."}</p>

          <div className="space-y-5">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-4 hover:gold-text transition-colors">
              <Mail className="h-5 w-5 text-gold" /> <span className="text-sm">{profile.email}</span>
            </a>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="flex items-center gap-4 hover:gold-text transition-colors">
              <Phone className="h-5 w-5 text-gold" /> <span className="text-sm">{profile.phone}</span>
            </a>
            <a href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noreferrer" className="flex items-center gap-4 hover:gold-text transition-colors">
              <MessageCircle className="h-5 w-5 text-gold" /> <span className="text-sm">{t(ui.cta.whatsapp)}</span>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-4 hover:gold-text transition-colors">
              <Linkedin className="h-5 w-5 text-gold" /> <span className="text-sm">LinkedIn</span>
            </a>
            <div className="flex items-center gap-4">
              <MapPin className="h-5 w-5 text-gold" /> <span className="text-sm">{t(profile.location)}</span>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="reveal space-y-5">
          <div>
            <label className="eyebrow text-primary-foreground/70 block mb-2">{lang === "ar" ? "الاسم" : "Name"}</label>
            <input name="name" required maxLength={100} className="w-full bg-transparent border-b border-primary-foreground/20 py-3 outline-none focus:border-gold transition-colors" />
          </div>
          <div>
            <label className="eyebrow text-primary-foreground/70 block mb-2">{lang === "ar" ? "البريد الإلكتروني" : "Email"}</label>
            <input name="email" type="email" maxLength={255} className="w-full bg-transparent border-b border-primary-foreground/20 py-3 outline-none focus:border-gold transition-colors" />
          </div>
          <div>
            <label className="eyebrow text-primary-foreground/70 block mb-2">{lang === "ar" ? "تفاصيل المشروع" : "Project details"}</label>
            <textarea name="message" required maxLength={1000} rows={5} className="w-full bg-transparent border-b border-primary-foreground/20 py-3 outline-none focus:border-gold transition-colors resize-none" />
          </div>
          <button type="submit" className="group inline-flex items-center gap-2 rounded-full bg-gold text-gold-foreground px-6 py-3 text-sm font-medium hover:opacity-90 transition-all">
            <Send className="h-4 w-4" /> {t(ui.cta.send)}
          </button>
          {sent && <p className="text-sm text-gold">{lang === "ar" ? "تم فتح واتساب لإرسال الرسالة." : "Opening WhatsApp to send your message."}</p>}
        </form>
      </div>
    </section>
  );
}
