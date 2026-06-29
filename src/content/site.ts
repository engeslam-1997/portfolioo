// =====================================================================
// EDIT THIS FILE TO UPDATE WEBSITE CONTENT
// All text, projects, services, testimonials, and contact info live here.
// Images are in /src/assets — replace files there to swap visuals.
// CV file is in /public/cv/eslam-cv.pdf — drop your PDF with that name.
// =====================================================================

import portrait from "@/assets/portrait.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";


export const images = { portrait, heroBg, p1, p2, p3, p4, p5, p6, g1, g2, g3};

export const profile = {
  name: { en: "Eslam Abdelaal Hassan", ar: "إسلام عبدالعال حسن" },
  title: { en: "Landscape Engineer", ar: "مهندس لاند سكيب" },
  headline: {
    en: "Landscape Engineer specializing in landscape construction, site supervision, irrigation systems, and fit-out coordination, delivering practical engineering solutions across Egypt and Saudi Arabia",
    ar: "مهندس لاندسكيب متخصص في تنفيذ مشاريع اللاندسكيب، والإشراف على المواقع، وأنظمة الري، وتنسيق ألاعمال، مع خبرة عملية في تقديم حلول هندسية فعّالة في مصر والمملكة العربية السعودية.",
  },
  intro: {
    en: "I help transform engineering drawings into well-executed projects through effective site supervision, technical coordination, and practical problem-solving. My experience spans landscape construction, irrigation systems, and fit-out works, with a focus on quality, efficiency, and smooth project delivery.",
    ar: "أساهم في تحويل المخططات الهندسية إلى مشاريع منفذة بكفاءة من خلال الإشراف الميداني، والتنسيق الفني، وحل التحديات أثناء التنفيذ. تمتد خبرتي في تنفيذ مشاريع اللاندسكيب، وأنظمة الري، وأعمال التشطيبات، مع التركيز على جودة التنفيذ والالتزام بمتطلبات المشروع.",
  },
  location: { en: "Jeddah, Saudi Arabia", ar: "جدة، المملكة العربية السعودية" },
  email: "eslamabdelal1997@gmail.com",
  phone: "+966 556171140",
  whatsapp: "+966556171140",
  linkedin: "https://www.linkedin.com/in/eslam-abdelal-hassan",
  cvUrl: "/cv/eslam-cv.pdf",
};

export const about = {
  paragraphs: {
    en: [
      "I am a Landscape Engineer with practical experience in landscape construction, irrigation systems, site supervision, and project coordination. Throughout my career, I have contributed to residential, commercial projects, supporting different stages of execution from planning and technical documentation to on-site supervision and quality control.",
      "My work has shaped landmark developments including SODIC and Lakeview communities in Egypt, and high-profile compounds delivered with Sharbatly Compound Project in Saudi Arabia. I treat each project as a living system: engineered for climate, dignified in detail, and built to mature beautifully.",
    ],
    ar: [
      "أنا مهندس لاندسكيب أمتلك خبرة عملية في تنفيذ مشاريع اللاندسكيب، وأنظمة الري، والإشراف على المواقع، وتنسيق الأعمال التنفيذية. شاركت في مشاريع سكنية وتجارية ، وساهمت في مراحل مختلفة من المشروع، بدءًا من مراجعة المخططات والمستندات الفنية وحتى متابعة التنفيذ وضبط الجودة داخل الموقع.",
      "ساهمت في مشاريع بارزة منها مجتمعات سوديك وليك فيو في مصر، ومجمعات راقية مع كمبوند الشربتلي  في المملكة. أتعامل مع كل مشروع كنظام حي مُصمم بدقة ليبقى جميلًا مع الزمن.",
    ],
  },
};

export const skills = [
  { name: { en: "Landscape Design", ar: "تصميم اللاندسكيب" }, level: 95 },
  { name: { en: "Irrigation Systems", ar: "أنظمة الري" }, level: 95 },
  { name: { en: "AutoCAD", ar: "أوتوكاد" }, level: 80 },
  { name: { en: "SketchUp", ar: "سكتش أب" }, level: 90 },
  { name: { en: "Lumion", ar: "لوميون" }, level: 90 },
  { name: { en: "5D Render", ar: " دي ريندر5" }, level: 90 },
  { name: { en: "Adobe Photoshop", ar: "أدوبي فوتوشوب" }, level: 80 },
{ name: { en: "Adobe Illustrator", ar: "أدوبي إليستريتور" }, level: 80 },
{ name: { en: "Microsoft Office", ar: "مايكروسوفت أوفيس" }, level: 90 },

  ,
];

export const projectCategories = [
  { id: "all", label: { en: "All Work", ar: "كل الأعمال" } },
  { id: "landscape", label: { en: "Landscape", ar: "لاندسكيب" } },
  { id: "irrigation", label: { en: "Irrigation", ar: "ري" } },
  { id: "planting", label: { en: "Planting", ar: "زراعة" } },
  { id: "construction", label: { en: "Construction", ar: "تنفيذ" } },
  { id: "maintenance", label: { en: "Maintenance", ar: "صيانة" } },
] as const;

export type ProjectCategory = (typeof projectCategories)[number]["id"];

export const projects = [
  {
    id: "villa-jeddah",
    category: "landscape",
    image: [images.p1,],
    title: { en: "SODIC Residential Development", ar: "مشروع سكني - سوديك" },
    location: { en: "New Cairo, Egypt", ar: "القاهرة الجديدة، مصر" },
    year: 2025,
    area: "30000 m²",
    scope: { en: "Landscape construction, irrigation systems, hardscape and softscape execution.", ar: "تنفيذ أعمال اللاندسكيب، وأنظمة الري، وأعمال الهاردسكيب والزراعة" },
    description: { en: "Contributed to the execution of landscape works for residential developments, supporting site supervision, irrigation installation, planting works, and coordination with project teams.", ar: "المشاركة في تنفيذ أعمال اللاندسكيب للمشروعات السكنية، مع متابعة التنفيذ، وتركيب أنظمة الري، وأعمال الزراعة، والتنسيق مع فرق المشروع" },
    tech: ["AutoCAD", "Lumion", "Smart Irrigation"],
  },
  {
    id: "drip-network",
    category: "irrigation",
    image: images.p6,
    title: { en: "Lake View Residential Development", ar: "مشروع ليك فيو السكني" },
    location: { en: "New Cairo, Egypt", ar: "القاهرة الجديدة، مصر" },
    year: 2024,
    area: "24,000 m²",
    scope: { en: "Irrigation system installation, drip and sprinkler networks, testing, commissioning, and site coordination.", ar: "تنفيذ شبكات الري بالتنقيط والرش، الاختبارات والتشغيل، والتنسيق داخل الموقع" },
    description: { en: "Participated in the installation and execution of irrigation systems for residential landscape areas, ensuring proper water distribution and coordination with landscape construction activities.", ar: "المشاركة في تنفيذ شبكات الري الخاصة بمناطق اللاندسكيب داخل المشروع السكني، مع متابعة توزيع المياه والتنسيق مع أعمال التنفيذ بالموقع." },
    tech: ["Hunter ACC2", "Drip", "Sprinkler Systems"],
  },
  {
    id: "planting-palette",
    category: "planting",
    image: images.p3,
    title: { en: "SODIC Villette Landscape", ar: "لاندسكيب سوديك فيليت" },
    location: { en: "New Cairo, Egypt", ar: "القاهرة الجديدة، مصر" },
    year: 2023,
    area: "5,600 m²",
    scope: { en: "Ornamental grasses, palms, flowering perennials", ar: "أعشاب زينة، نخيل، نباتات معمرة مزهرة" },
    description: { en: "Softscape execution, tree and shrub planting, irrigation coordination, and site supervision..", ar: "تنفيذ أعمال الزراعة، وزراعة الأشجار والشجيرات، والتنسيق مع أعمال الري، والإشراف على الموقع" },
    tech: ["SketchUp", "Plant Database", "AutoCAD"],
  },
  {
    id: "compound-build",
    category: "construction",
    image: images.p4,
    title: { en: "Lake View Commercial Center", ar: "مركز ليك فيو التجاري" },
    location: { en: "New Cairo, Egypt", ar: "القاهرة الجديدة، مصر" },
    year: 2023,
    area: "12,500 m²",
    scope: { en: "Landscape construction, hardscape execution, planting works, irrigation installation, and site supervision.", ar: "تنفيذ أعمال اللاندسكيب، والهاردسكيب، والزراعة، وشبكات الري، والإشراف على الموقع" },
    description: { en: "Full landscape construction with phased delivery and zero-defect handover.", ar: "تنفيذ لاندسكيب متكامل مع تسليم على مراحل وجودة خالية من العيوب." },
    tech: ["MS Project", "AutoCAD", "Lumion", "Smart Irrigation", "Softscape"],
  },
  {
    id: "hotel-maintenance",
    category: "maintenance",
    image: images.p5,
    title: { en: "Lake View Private Villa", ar: "villa خاصة ليك فيو" },
    location: { en: "New Cairo, Egypt", ar: "القاهرة الجديدة، مصر" },
    year: 2025,
    area: "1,800 m²",
    scope: { en: "Landscape maintenance, irrigation monitoring, pruning, fertilization, pest control, and plant health management.", ar: "صيانة اللاندسكيب، ومتابعة شبكات الري، والتقليم، والتسميد، ومكافحة الآفات، والعناية بصحة النباتات" },
    description: { en: "Provided landscape maintenance services for a private villa, including irrigation monitoring, seasonal pruning, fertilization, pest management, and routine inspections to maintain healthy and visually appealing outdoor spaces.", ar: "المشاركة في أعمال صيانة اللاندسكيب لفيلا خاصة، بما يشمل متابعة أنظمة الري، والتقليم الدوري، والتسميد، ومكافحة الآفات، والفحص المستمر للحفاظ على جودة وصحة المساحات الخضراء" },
    tech: ["IPM", "Pest Control", "Irrigation Systems", "Site Supervision"],
  },
  {
    id: "smart-sprinkler",
    category: "irrigation",
    image: images.p2,
    title: { en: "Irrigation System Upgrade – Lake View", ar: "تطوير نظام الري – ليك فيو" },
    location: { en: "New Cairo, Egypt", ar: "القاهرة الجديدة، مصر" },
    year: 2025,
    area: "1,000 m²",
    scope: { en: "Irrigation network installation, sprinkler adjustment, drip irrigation, pipeline testing, and site supervision.", ar: "تركيب شبكات الري، ضبط الرشاشات، الري بالتنقيط، اختبار خطوط الأنابيب، والإشراف على الموقع." },
    description: { en: "Participated in upgrading and maintaining the irrigation system for landscape areas by improving sprinkler coverage, monitoring network performance, and supporting installation and testing activities to ensure efficient water distribution.", ar: "المشاركة في تطوير وصيانة نظام الري بمناطق اللاندسكيب من خلال تحسين توزيع الرشاشات، ومتابعة أداء الشبكة، ودعم أعمال التركيب والاختبارات لضمان كفاءة توزيع المياه" },
    tech: ["Rain Bird ESP", "MP Rotator", "Drip Irrigation", "Irrigation Design", "Site Supervision"],
  },
] as const;

export const technologies = [
  { en: "Landscape Construction", ar: "تنفيذ اللاندسكيب", icon: "Trees" },
  { en: "Site Supervision", ar: "الإشراف على الموقع", icon: "HardHat" },
  { en: "Irrigation Systems", ar: "أنظمة الري", icon: "Droplets" },
  { en: "Sprinkler Systems", ar: "أنظمة رشاشات", icon: "CloudRain" },
  { en: "Softscape Works", ar: "تقنيات توفير المياه", icon: "Leaf" },
  { en: "Planting & Tree Installation", ar: "زراعة وأثاث الأشجار", icon: "TreePine" },
  { en: "Sustainable Landscaping", ar: "لاندسكيب مستدام", icon: "Leaf" },
  { en: "GIS Integration", ar: "تكامل GIS", icon: "Map" },
  { en: "3D Visualization", ar: "تصور ثلاثي الأبعاد", icon: "Box" },
];

export const timeline = [
  { year: "2020", title: { en: "Career Start — Egypt", ar: "بداية المسيرة — مصر" }, body: { en: "Began work on landscape projects in Cairo and the North Coast.", ar: "بدأت العمل في مشاريع اللاندسكيب بالقاهرة والساحل الشمالي." } },
  { year: "2021", title: { en: "Lakeview Projects", ar: "مشاريع ليك فيو" }, body: { en: "Site supervision and irrigation design for Lakeview compounds.", ar: "الإشراف على الموقع وتصميم الري لمجمعات ليك فيو." } },
  { year: "2024", title: { en: "SODIC Projects", ar: "مشاريع سوديك" }, body: { en: "Delivered landscape packages for premium SODIC communities.", ar: "نفذت حزم لاندسكيب لمجتمعات سوديك الراقية." } },
  { year: "2025", title: { en: "Move to Saudi Arabia", ar: "الانتقال إلى السعودية" }, body: { en: "Joined the Kingdom's landscape sector with a focus on Jeddah & Riyadh.", ar: "الانضمام لقطاع اللاندسكيب بالمملكة مع التركيز على جدة والرياض." } },
  { year: "2026", title: { en: "Technical Experts Co.", ar: "شركة الخبراء التقنيين" }, body: { en: "Led landscape construction & irrigation packages on flagship developments.", ar: "قيادة حزم تنفيذ اللاندسكيب والري في مشاريع رئيسية." } },
  
];

export const services = [
  { title: { en: "Landscape Design", ar: "تصميم اللاندسكيب" }, body: { en: "Concept, schematic, and detailed design tailored to site and climate.", ar: "تصميم مفاهيمي وتنفيذي مخصص للموقع والمناخ." }, icon: "PenTool" },
  { title: { en: "Irrigation Design", ar: "تصميم الري" }, body: { en: "Hydraulic calculations, network design, controller programming.", ar: "حسابات هيدروليكية، تصميم شبكات، برمجة وحدات التحكم." }, icon: "Droplets" },
  { title: { en: "Landscape Construction", ar: "تنفيذ اللاندسكيب" }, body: { en: "Hardscape, softscape, planting, and finishing to spec.", ar: "أعمال صلبة، زراعة، وتشطيبات حسب المواصفات." }, icon: "HardHat" },
  { title: { en: "Project Supervision", ar: "الإشراف على المشاريع" }, body: { en: "On-site supervision, QA/QC, contractor coordination.", ar: "إشراف ميداني، ضبط جودة، تنسيق مع المقاولين." }, icon: "ClipboardCheck" },
  { title: { en: "Maintenance Planning", ar: "تخطيط الصيانة" }, body: { en: "Annual programs, IPM, fertilization, irrigation tuning.", ar: "برامج سنوية، مكافحة آفات، تسميد، ضبط الري." }, icon: "CalendarCheck" },
  { title: { en: "Technical Consultation", ar: "استشارات فنية" }, body: { en: "Audits, value engineering, water and cost optimization.", ar: "تدقيقات، هندسة قيمة، تحسين المياه والتكلفة." }, icon: "Lightbulb" },
];

export const achievements = [
  { value: 32, label: { en: "Projects Completed", ar: "مشروع منجز" }, suffix: "+" },
  { value: 6, label: { en: "Years of Experience", ar: "سنة خبرة" }, suffix: "+" },
  { value: 230, label: { en: "Thousand m² Landscape Construction", ar: "ألف م² تنفيذ لاندسكيب" }, suffix: "K" },
  { value: 120, label: { en: "Clients Served", ar: "عميل" }, suffix: "+" },
];

export const testimonials = [
  {
    quote: { en: "Eslam delivered our compound landscape with an attention to detail rarely seen in this market. The result feels timeless.", ar: "نفّذ إسلام لاندسكيب مجمعنا بعناية نادرة في هذا السوق. النتيجة بلا زمن." },
    name: "Ahmed K.",
    role: { en: "Developer, Cairo", ar: "مطور عقاري، القاهرة" },
  },
  {
    quote: { en: "His irrigation redesign cut our water bill by nearly half. Professional, precise, and a pleasure to work with.", ar: "أعاد تصميم الري وخفض فاتورة المياه إلى النصف تقريبًا. احترافي ودقيق ومُمتع التعامل معه." },
    name: "Maha S.",
    role: { en: "Facility Manager, Sodic", ar: "مديرة منشأة، سوديك" },
  },
  {
    quote: { en: "From planting palette to handover, the project was managed with calm authority. Highly recommended.", ar: "من اختيار النباتات وحتى التسليم، أُدير المشروع باقتدار هادئ. أنصح به بشدة." },
    name: "Omar R.",
    role: { en: "Villa Owner, New Cairo", ar: "مالك فيلا، القاهرة الجديدة" },
  },
];

export const gallery = [images.g1, images.p1, images.g2, images.p3, images.g3, images.p5, images.p4, images.p2,];

export const ui = {
  nav: {
    home: { en: "Home", ar: "الرئيسية" },
    about: { en: "About", ar: "عن" },
    work: { en: "Work", ar: "الأعمال" },
    services: { en: "Services", ar: "الخدمات" },
    contact: { en: "Contact", ar: "تواصل" },
  },
  cta: {
    viewProjects: { en: "View Projects", ar: "استعرض المشاريع" },
    contact: { en: "Contact Me", ar: "تواصل معي" },
    downloadCV: { en: "Download CV", ar: "تحميل السيرة الذاتية" },
    send: { en: "Send Message", ar: "إرسال" },
    whatsapp: { en: "WhatsApp", ar: "واتساب" },
  },
};
