import { r as __toESM } from "../_runtime.mjs";
import { s as performance_default } from "../_libs/h3+rou3+srvx+unenv.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { i as useTheme, r as useI18n } from "./i18n-D589BC_L.mjs";
import { _ as ArrowUpRight, a as Send, c as Phone, d as Menu, f as MapPin, g as Download, h as Languages, i as Sparkles, l as Moon, m as Linkedin, n as X, o as Search, p as Mail, r as Sun, s as Quote, t as lucide_react_exports, u as MessageCircle, v as ArrowRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BB1KjgB1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useReveal() {
	(0, import_react.useEffect)(() => {
		const els = document.querySelectorAll(".reveal");
		const io = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) {
					e.target.classList.add("in");
					io.unobserve(e.target);
				}
			});
		}, {
			threshold: .15,
			rootMargin: "0px 0px -60px 0px"
		});
		els.forEach((el) => io.observe(el));
		return () => io.disconnect();
	}, []);
}
var images = {
	portrait: "/assets/portrait-TR0Ny0kn.jpg",
	heroBg: "/assets/hero-bg-DBDuY9Dh.jpg",
	p1: "/assets/project-1-CP6dHHUp.jpg",
	p2: "/assets/project-2-BQEbPM95.jpg",
	p3: "/assets/project-3-CmruVSMI.jpg",
	p4: "/assets/project-4-DqWiGRFf.jpg",
	p5: "/assets/project-5-Do5tHJ9k.jpg",
	p6: "/assets/project-6-BS_q0TC2.jpg",
	g1: "/assets/gallery-1-C79dy93S.jpg",
	g2: "/assets/gallery-2-DCcA0o1H.jpg",
	g3: "/assets/gallery-3-BROO1TtD.jpg"
};
var profile = {
	name: {
		en: "Eslam Abdelaal Hassan",
		ar: "إسلام عبدالعال حسن"
	},
	title: {
		en: "Landscape Engineer",
		ar: "مهندس لاند سكيب"
	},
	headline: {
		en: "Landscape Engineer specializing in landscape construction, site supervision, irrigation systems, and fit-out coordination, delivering practical engineering solutions across Egypt and Saudi Arabia",
		ar: "مهندس لاندسكيب متخصص في تنفيذ مشاريع اللاندسكيب، والإشراف على المواقع، وأنظمة الري، وتنسيق ألاعمال، مع خبرة عملية في تقديم حلول هندسية فعّالة في مصر والمملكة العربية السعودية."
	},
	intro: {
		en: "I help transform engineering drawings into well-executed projects through effective site supervision, technical coordination, and practical problem-solving. My experience spans landscape construction, irrigation systems, and fit-out works, with a focus on quality, efficiency, and smooth project delivery.",
		ar: "أساهم في تحويل المخططات الهندسية إلى مشاريع منفذة بكفاءة من خلال الإشراف الميداني، والتنسيق الفني، وحل التحديات أثناء التنفيذ. تمتد خبرتي في تنفيذ مشاريع اللاندسكيب، وأنظمة الري، وأعمال التشطيبات، مع التركيز على جودة التنفيذ والالتزام بمتطلبات المشروع."
	},
	location: {
		en: "Jeddah, Saudi Arabia",
		ar: "جدة، المملكة العربية السعودية"
	},
	email: "eslamabdelal1997@gmail.com",
	phone: "+966 556171140",
	whatsapp: "+966556171140",
	linkedin: "https://www.linkedin.com/in/eslam-abdelal-hassan",
	cvUrl: "/cv/eslam-cv.pdf"
};
var about = { paragraphs: {
	en: ["I am a Landscape Engineer with practical experience in landscape construction, irrigation systems, site supervision, and project coordination. Throughout my career, I have contributed to residential, commercial projects, supporting different stages of execution from planning and technical documentation to on-site supervision and quality control.", "My work has shaped landmark developments including SODIC and Lakeview communities in Egypt, and high-profile compounds delivered with Sharbatly Compound Project in Saudi Arabia. I treat each project as a living system: engineered for climate, dignified in detail, and built to mature beautifully."],
	ar: ["أنا مهندس لاندسكيب أمتلك خبرة عملية في تنفيذ مشاريع اللاندسكيب، وأنظمة الري، والإشراف على المواقع، وتنسيق الأعمال التنفيذية. شاركت في مشاريع سكنية وتجارية ، وساهمت في مراحل مختلفة من المشروع، بدءًا من مراجعة المخططات والمستندات الفنية وحتى متابعة التنفيذ وضبط الجودة داخل الموقع.", "ساهمت في مشاريع بارزة منها مجتمعات سوديك وليك فيو في مصر، ومجمعات راقية مع كمبوند الشربتلي  في المملكة. أتعامل مع كل مشروع كنظام حي مُصمم بدقة ليبقى جميلًا مع الزمن."]
} };
var skills = [
	{
		name: {
			en: "Landscape Design",
			ar: "تصميم اللاندسكيب"
		},
		level: 95
	},
	{
		name: {
			en: "Irrigation Systems",
			ar: "أنظمة الري"
		},
		level: 95
	},
	{
		name: {
			en: "AutoCAD",
			ar: "أوتوكاد"
		},
		level: 80
	},
	{
		name: {
			en: "SketchUp",
			ar: "سكتش أب"
		},
		level: 90
	},
	{
		name: {
			en: "Lumion",
			ar: "لوميون"
		},
		level: 90
	},
	{
		name: {
			en: "5D Render",
			ar: " دي ريندر5"
		},
		level: 90
	},
	{
		name: {
			en: "Adobe Photoshop",
			ar: "أدوبي فوتوشوب"
		},
		level: 80
	},
	{
		name: {
			en: "Adobe Illustrator",
			ar: "أدوبي إليستريتور"
		},
		level: 80
	},
	{
		name: {
			en: "Microsoft Office",
			ar: "مايكروسوفت أوفيس"
		},
		level: 90
	},
	,
];
var projectCategories = [
	{
		id: "all",
		label: {
			en: "All Work",
			ar: "كل الأعمال"
		}
	},
	{
		id: "landscape",
		label: {
			en: "Landscape",
			ar: "لاندسكيب"
		}
	},
	{
		id: "irrigation",
		label: {
			en: "Irrigation",
			ar: "ري"
		}
	},
	{
		id: "planting",
		label: {
			en: "Planting",
			ar: "زراعة"
		}
	},
	{
		id: "construction",
		label: {
			en: "Construction",
			ar: "تنفيذ"
		}
	},
	{
		id: "maintenance",
		label: {
			en: "Maintenance",
			ar: "صيانة"
		}
	}
];
var projects = [
	{
		id: "villa-jeddah",
		category: "landscape",
		image: [images.p1],
		title: {
			en: "SODIC Residential Development",
			ar: "مشروع سكني - سوديك"
		},
		location: {
			en: "New Cairo, Egypt",
			ar: "القاهرة الجديدة، مصر"
		},
		year: 2025,
		area: "30000 m²",
		scope: {
			en: "Landscape construction, irrigation systems, hardscape and softscape execution.",
			ar: "تنفيذ أعمال اللاندسكيب، وأنظمة الري، وأعمال الهاردسكيب والزراعة"
		},
		description: {
			en: "Contributed to the execution of landscape works for residential developments, supporting site supervision, irrigation installation, planting works, and coordination with project teams.",
			ar: "المشاركة في تنفيذ أعمال اللاندسكيب للمشروعات السكنية، مع متابعة التنفيذ، وتركيب أنظمة الري، وأعمال الزراعة، والتنسيق مع فرق المشروع"
		},
		tech: [
			"AutoCAD",
			"Lumion",
			"Smart Irrigation"
		]
	},
	{
		id: "drip-network",
		category: "irrigation",
		image: images.p6,
		title: {
			en: "Lake View Residential Development",
			ar: "مشروع ليك فيو السكني"
		},
		location: {
			en: "New Cairo, Egypt",
			ar: "القاهرة الجديدة، مصر"
		},
		year: 2024,
		area: "24,000 m²",
		scope: {
			en: "Irrigation system installation, drip and sprinkler networks, testing, commissioning, and site coordination.",
			ar: "تنفيذ شبكات الري بالتنقيط والرش، الاختبارات والتشغيل، والتنسيق داخل الموقع"
		},
		description: {
			en: "Participated in the installation and execution of irrigation systems for residential landscape areas, ensuring proper water distribution and coordination with landscape construction activities.",
			ar: "المشاركة في تنفيذ شبكات الري الخاصة بمناطق اللاندسكيب داخل المشروع السكني، مع متابعة توزيع المياه والتنسيق مع أعمال التنفيذ بالموقع."
		},
		tech: [
			"Hunter ACC2",
			"Drip",
			"Sprinkler Systems"
		]
	},
	{
		id: "planting-palette",
		category: "planting",
		image: images.p3,
		title: {
			en: "SODIC Villette Landscape",
			ar: "لاندسكيب سوديك فيليت"
		},
		location: {
			en: "New Cairo, Egypt",
			ar: "القاهرة الجديدة، مصر"
		},
		year: 2023,
		area: "5,600 m²",
		scope: {
			en: "Ornamental grasses, palms, flowering perennials",
			ar: "أعشاب زينة، نخيل، نباتات معمرة مزهرة"
		},
		description: {
			en: "Softscape execution, tree and shrub planting, irrigation coordination, and site supervision..",
			ar: "تنفيذ أعمال الزراعة، وزراعة الأشجار والشجيرات، والتنسيق مع أعمال الري، والإشراف على الموقع"
		},
		tech: [
			"SketchUp",
			"Plant Database",
			"AutoCAD"
		]
	},
	{
		id: "compound-build",
		category: "construction",
		image: images.p4,
		title: {
			en: "Lake View Commercial Center",
			ar: "مركز ليك فيو التجاري"
		},
		location: {
			en: "New Cairo, Egypt",
			ar: "القاهرة الجديدة، مصر"
		},
		year: 2023,
		area: "12,500 m²",
		scope: {
			en: "Landscape construction, hardscape execution, planting works, irrigation installation, and site supervision.",
			ar: "تنفيذ أعمال اللاندسكيب، والهاردسكيب، والزراعة، وشبكات الري، والإشراف على الموقع"
		},
		description: {
			en: "Full landscape construction with phased delivery and zero-defect handover.",
			ar: "تنفيذ لاندسكيب متكامل مع تسليم على مراحل وجودة خالية من العيوب."
		},
		tech: [
			"MS Project",
			"AutoCAD",
			"Lumion",
			"Smart Irrigation",
			"Softscape"
		]
	},
	{
		id: "hotel-maintenance",
		category: "maintenance",
		image: images.p5,
		title: {
			en: "Lake View Private Villa",
			ar: "villa خاصة ليك فيو"
		},
		location: {
			en: "New Cairo, Egypt",
			ar: "القاهرة الجديدة، مصر"
		},
		year: 2025,
		area: "1,800 m²",
		scope: {
			en: "Landscape maintenance, irrigation monitoring, pruning, fertilization, pest control, and plant health management.",
			ar: "صيانة اللاندسكيب، ومتابعة شبكات الري، والتقليم، والتسميد، ومكافحة الآفات، والعناية بصحة النباتات"
		},
		description: {
			en: "Provided landscape maintenance services for a private villa, including irrigation monitoring, seasonal pruning, fertilization, pest management, and routine inspections to maintain healthy and visually appealing outdoor spaces.",
			ar: "المشاركة في أعمال صيانة اللاندسكيب لفيلا خاصة، بما يشمل متابعة أنظمة الري، والتقليم الدوري، والتسميد، ومكافحة الآفات، والفحص المستمر للحفاظ على جودة وصحة المساحات الخضراء"
		},
		tech: [
			"IPM",
			"Pest Control",
			"Irrigation Systems",
			"Site Supervision"
		]
	},
	{
		id: "smart-sprinkler",
		category: "irrigation",
		image: images.p2,
		title: {
			en: "Irrigation System Upgrade – Lake View",
			ar: "تطوير نظام الري – ليك فيو"
		},
		location: {
			en: "New Cairo, Egypt",
			ar: "القاهرة الجديدة، مصر"
		},
		year: 2025,
		area: "1,000 m²",
		scope: {
			en: "Irrigation network installation, sprinkler adjustment, drip irrigation, pipeline testing, and site supervision.",
			ar: "تركيب شبكات الري، ضبط الرشاشات، الري بالتنقيط، اختبار خطوط الأنابيب، والإشراف على الموقع."
		},
		description: {
			en: "Participated in upgrading and maintaining the irrigation system for landscape areas by improving sprinkler coverage, monitoring network performance, and supporting installation and testing activities to ensure efficient water distribution.",
			ar: "المشاركة في تطوير وصيانة نظام الري بمناطق اللاندسكيب من خلال تحسين توزيع الرشاشات، ومتابعة أداء الشبكة، ودعم أعمال التركيب والاختبارات لضمان كفاءة توزيع المياه"
		},
		tech: [
			"Rain Bird ESP",
			"MP Rotator",
			"Drip Irrigation",
			"Irrigation Design",
			"Site Supervision"
		]
	}
];
var technologies = [
	{
		en: "Landscape Construction",
		ar: "تنفيذ اللاندسكيب",
		icon: "Trees"
	},
	{
		en: "Site Supervision",
		ar: "الإشراف على الموقع",
		icon: "HardHat"
	},
	{
		en: "Irrigation Systems",
		ar: "أنظمة الري",
		icon: "Droplets"
	},
	{
		en: "Sprinkler Systems",
		ar: "أنظمة رشاشات",
		icon: "CloudRain"
	},
	{
		en: "Softscape Works",
		ar: "تقنيات توفير المياه",
		icon: "Leaf"
	},
	{
		en: "Planting & Tree Installation",
		ar: "زراعة وأثاث الأشجار",
		icon: "TreePine"
	},
	{
		en: "Sustainable Landscaping",
		ar: "لاندسكيب مستدام",
		icon: "Leaf"
	},
	{
		en: "GIS Integration",
		ar: "تكامل GIS",
		icon: "Map"
	},
	{
		en: "3D Visualization",
		ar: "تصور ثلاثي الأبعاد",
		icon: "Box"
	}
];
var timeline = [
	{
		year: "2020",
		title: {
			en: "Career Start — Egypt",
			ar: "بداية المسيرة — مصر"
		},
		body: {
			en: "Began work on landscape projects in Cairo and the North Coast.",
			ar: "بدأت العمل في مشاريع اللاندسكيب بالقاهرة والساحل الشمالي."
		}
	},
	{
		year: "2021",
		title: {
			en: "Lakeview Projects",
			ar: "مشاريع ليك فيو"
		},
		body: {
			en: "Site supervision and irrigation design for Lakeview compounds.",
			ar: "الإشراف على الموقع وتصميم الري لمجمعات ليك فيو."
		}
	},
	{
		year: "2024",
		title: {
			en: "SODIC Projects",
			ar: "مشاريع سوديك"
		},
		body: {
			en: "Delivered landscape packages for premium SODIC communities.",
			ar: "نفذت حزم لاندسكيب لمجتمعات سوديك الراقية."
		}
	},
	{
		year: "2025",
		title: {
			en: "Move to Saudi Arabia",
			ar: "الانتقال إلى السعودية"
		},
		body: {
			en: "Joined the Kingdom's landscape sector with a focus on Jeddah & Riyadh.",
			ar: "الانضمام لقطاع اللاندسكيب بالمملكة مع التركيز على جدة والرياض."
		}
	},
	{
		year: "2026",
		title: {
			en: "Technical Experts Co.",
			ar: "شركة الخبراء التقنيين"
		},
		body: {
			en: "Led landscape construction & irrigation packages on flagship developments.",
			ar: "قيادة حزم تنفيذ اللاندسكيب والري في مشاريع رئيسية."
		}
	}
];
var services = [
	{
		title: {
			en: "Landscape Design",
			ar: "تصميم اللاندسكيب"
		},
		body: {
			en: "Concept, schematic, and detailed design tailored to site and climate.",
			ar: "تصميم مفاهيمي وتنفيذي مخصص للموقع والمناخ."
		},
		icon: "PenTool"
	},
	{
		title: {
			en: "Irrigation Design",
			ar: "تصميم الري"
		},
		body: {
			en: "Hydraulic calculations, network design, controller programming.",
			ar: "حسابات هيدروليكية، تصميم شبكات، برمجة وحدات التحكم."
		},
		icon: "Droplets"
	},
	{
		title: {
			en: "Landscape Construction",
			ar: "تنفيذ اللاندسكيب"
		},
		body: {
			en: "Hardscape, softscape, planting, and finishing to spec.",
			ar: "أعمال صلبة، زراعة، وتشطيبات حسب المواصفات."
		},
		icon: "HardHat"
	},
	{
		title: {
			en: "Project Supervision",
			ar: "الإشراف على المشاريع"
		},
		body: {
			en: "On-site supervision, QA/QC, contractor coordination.",
			ar: "إشراف ميداني، ضبط جودة، تنسيق مع المقاولين."
		},
		icon: "ClipboardCheck"
	},
	{
		title: {
			en: "Maintenance Planning",
			ar: "تخطيط الصيانة"
		},
		body: {
			en: "Annual programs, IPM, fertilization, irrigation tuning.",
			ar: "برامج سنوية، مكافحة آفات، تسميد، ضبط الري."
		},
		icon: "CalendarCheck"
	},
	{
		title: {
			en: "Technical Consultation",
			ar: "استشارات فنية"
		},
		body: {
			en: "Audits, value engineering, water and cost optimization.",
			ar: "تدقيقات، هندسة قيمة، تحسين المياه والتكلفة."
		},
		icon: "Lightbulb"
	}
];
var achievements = [
	{
		value: 32,
		label: {
			en: "Projects Completed",
			ar: "مشروع منجز"
		},
		suffix: "+"
	},
	{
		value: 6,
		label: {
			en: "Years of Experience",
			ar: "سنة خبرة"
		},
		suffix: "+"
	},
	{
		value: 230,
		label: {
			en: "Thousand m² Landscape Construction",
			ar: "ألف م² تنفيذ لاندسكيب"
		},
		suffix: "K"
	},
	{
		value: 120,
		label: {
			en: "Clients Served",
			ar: "عميل"
		},
		suffix: "+"
	}
];
var testimonials = [
	{
		quote: {
			en: "Eslam delivered our compound landscape with an attention to detail rarely seen in this market. The result feels timeless.",
			ar: "نفّذ إسلام لاندسكيب مجمعنا بعناية نادرة في هذا السوق. النتيجة بلا زمن."
		},
		name: "Ahmed K.",
		role: {
			en: "Developer, Cairo",
			ar: "مطور عقاري، القاهرة"
		}
	},
	{
		quote: {
			en: "His irrigation redesign cut our water bill by nearly half. Professional, precise, and a pleasure to work with.",
			ar: "أعاد تصميم الري وخفض فاتورة المياه إلى النصف تقريبًا. احترافي ودقيق ومُمتع التعامل معه."
		},
		name: "Maha S.",
		role: {
			en: "Facility Manager, Sodic",
			ar: "مديرة منشأة، سوديك"
		}
	},
	{
		quote: {
			en: "From planting palette to handover, the project was managed with calm authority. Highly recommended.",
			ar: "من اختيار النباتات وحتى التسليم، أُدير المشروع باقتدار هادئ. أنصح به بشدة."
		},
		name: "Omar R.",
		role: {
			en: "Villa Owner, New Cairo",
			ar: "مالك فيلا، القاهرة الجديدة"
		}
	}
];
var gallery = [
	images.g1,
	images.p1,
	images.g2,
	images.p3,
	images.g3,
	images.p5,
	images.p4,
	images.p2
];
var ui = {
	nav: {
		home: {
			en: "Home",
			ar: "الرئيسية"
		},
		about: {
			en: "About",
			ar: "عن"
		},
		work: {
			en: "Work",
			ar: "الأعمال"
		},
		services: {
			en: "Services",
			ar: "الخدمات"
		},
		contact: {
			en: "Contact",
			ar: "تواصل"
		}
	},
	cta: {
		viewProjects: {
			en: "View Projects",
			ar: "استعرض المشاريع"
		},
		contact: {
			en: "Contact Me",
			ar: "تواصل معي"
		},
		downloadCV: {
			en: "Download CV",
			ar: "تحميل السيرة الذاتية"
		},
		send: {
			en: "Send Message",
			ar: "إرسال"
		},
		whatsapp: {
			en: "WhatsApp",
			ar: "واتساب"
		}
	}
};
var links = [
	{
		href: "#home",
		key: "home"
	},
	{
		href: "#about",
		key: "about"
	},
	{
		href: "#work",
		key: "work"
	},
	{
		href: "#services",
		key: "services"
	},
	{
		href: "#contact",
		key: "contact"
	}
];
function Navigation() {
	const { theme, toggle } = useTheme();
	const { lang, setLang, t } = useI18n();
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "fixed inset-x-0 top-0 z-50 glass border-b border-border/50",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-luxury flex h-16 items-center justify-between md:h-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#home",
					className: "flex items-center gap-2 group",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-9 w-9 place-items-center rounded-full border border-gold/60 text-gold font-display text-lg",
						children: "E"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "hidden sm:block font-display text-lg tracking-wide",
						children: ["Eslam", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "gold-text",
							children: "."
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden md:flex items-center gap-10",
					children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						className: "text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors",
						children: t(ui.nav[l.key])
					}, l.key))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setLang(lang === "en" ? "ar" : "en"),
							"aria-label": "Toggle language",
							className: "h-9 w-9 grid place-items-center rounded-full hover:bg-accent transition-colors",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Languages, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: toggle,
							"aria-label": "Toggle theme",
							className: "h-9 w-9 grid place-items-center rounded-full hover:bg-accent transition-colors",
							children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setOpen(!open),
							"aria-label": "Menu",
							className: "md:hidden h-9 w-9 grid place-items-center rounded-full hover:bg-accent",
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-4 w-4" })
						})
					]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: "md:hidden border-t border-border/50 glass",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-luxury py-6 flex flex-col gap-4",
				children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: l.href,
					onClick: () => setOpen(false),
					className: "text-base text-muted-foreground hover:text-foreground",
					children: t(ui.nav[l.key])
				}, l.key))
			})
		})]
	});
}
function Hero() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		className: "relative min-h-screen flex items-center overflow-hidden pt-24 pb-16 md:pt-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0 -z-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: images.heroBg,
					alt: "",
					className: "h-full w-full object-cover opacity-40 dark:opacity-30 animate-float-slow"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 [background:radial-gradient(60%_50%_at_50%_40%,transparent,var(--color-background)_85%)]" })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-luxury grid md:grid-cols-[1.2fr_1fr] gap-12 md:gap-16 items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "reveal in space-y-8 max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hairline" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow",
							children: t(profile.title)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "heading-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-balance",
						children: [
							t(profile.name).split(" ").slice(0, -1).join(" "),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic gold-text font-light",
								children: t(profile.name).split(" ").slice(-1)
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "heading-display text-2xl md:text-3xl text-muted-foreground text-balance leading-snug",
						children: t(profile.headline)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-base text-muted-foreground max-w-xl leading-relaxed",
						children: t(profile.intro)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-3 pt-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#work",
								className: "group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-all",
								children: [t(ui.cta.viewProjects), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#contact",
								className: "inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-accent transition-all",
								children: t(ui.cta.contact)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: profile.cvUrl,
								download: true,
								className: "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }),
									" ",
									t(ui.cta.downloadCV)
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 text-sm text-muted-foreground pt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t(profile.location) })]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative reveal in mx-auto w-full max-w-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-gold/30 via-primary/10 to-transparent blur-2xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative aspect-[3/4] overflow-hidden rounded-[2rem] border border-border shadow-luxury",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: images.portrait,
						alt: t(profile.name),
						width: 896,
						height: 1216,
						className: "h-full w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-background/95 to-transparent",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs eyebrow mb-1",
							children: "est. 2014"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-lg",
							children: t(profile.title)
						})]
					})]
				})]
			})]
		})]
	});
}
function About() {
	const { lang, t } = useI18n();
	const paragraphs = about.paragraphs[lang];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "section-pad",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-luxury grid md:grid-cols-[1fr_1.4fr] gap-12 md:gap-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "reveal",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 mb-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hairline" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow",
						children: "01 — About"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "heading-display text-4xl md:text-5xl",
					children: [
						"A studio of ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic gold-text",
							children: "one"
						}),
						", with the depth of a firm."
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "reveal space-y-6",
				children: [paragraphs.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-lg leading-relaxed text-muted-foreground",
					children: p
				}, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-6 pt-6 border-t border-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "eyebrow mb-2",
						children: lang === "ar" ? "المقر" : "Based in"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display text-xl",
						children: t(profile.location)
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "eyebrow mb-2",
						children: lang === "ar" ? "متاح" : "Available for"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display text-xl",
						children: lang === "ar" ? "مشاريع جديدة" : "New commissions"
					})] })]
				})]
			})]
		})
	});
}
function Skills() {
	const { t, lang } = useI18n();
	const [visible, setVisible] = (0, import_react.useState)(false);
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!ref.current) return;
		const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setVisible(true)), { threshold: .2 });
		io.observe(ref.current);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-pad bg-secondary/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-luxury",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "reveal max-w-2xl mb-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 mb-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hairline" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "eyebrow",
						children: ["02 — ", lang === "ar" ? "المهارات" : "Skills"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "heading-display text-4xl md:text-5xl",
					children: [
						"Craft, software, and ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic gold-text",
							children: "field discipline"
						}),
						"."
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref,
				className: "grid md:grid-cols-2 gap-x-16 gap-y-8",
				children: skills.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "reveal",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between items-baseline mb-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-xl",
							children: t(s.name)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-sm tabular-nums text-muted-foreground",
							children: [s.level, "%"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-px bg-border relative overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-y-0 left-0 bg-gold origin-left rtl:origin-right transition-transform duration-[1400ms] ease-[cubic-bezier(.16,1,.3,1)]",
							style: {
								width: "100%",
								transform: visible ? `scaleX(${s.level / 100})` : "scaleX(0)",
								transitionDelay: `${i * 60}ms`
							}
						})
					})]
				}, i))
			})]
		})
	});
}
function Projects() {
	const { t, lang } = useI18n();
	const [cat, setCat] = (0, import_react.useState)("all");
	const [q, setQ] = (0, import_react.useState)("");
	const filtered = (0, import_react.useMemo)(() => {
		return projects.filter((p) => {
			const matchCat = cat === "all" || p.category === cat;
			const text = (t(p.title) + " " + t(p.location) + " " + t(p.description)).toLowerCase();
			const matchQ = !q || text.includes(q.toLowerCase());
			return matchCat && matchQ;
		});
	}, [
		cat,
		q,
		t
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "work",
		className: "section-pad",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-luxury",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "reveal flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 mb-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hairline" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "eyebrow",
								children: ["03 — ", lang === "ar" ? "الأعمال" : "Selected Work"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "heading-display text-4xl md:text-5xl",
							children: [
								"Projects shaped by ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic gold-text",
									children: "place"
								}),
								"."
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative w-full md:w-72",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-4 rtl:left-auto rtl:right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: q,
							onChange: (e) => setQ(e.target.value),
							placeholder: lang === "ar" ? "ابحث..." : "Search projects",
							className: "w-full rounded-full bg-secondary border border-border pl-11 rtl:pl-4 rtl:pr-11 pr-4 py-3 text-sm outline-none focus:border-gold transition-colors"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "reveal flex flex-wrap gap-2 mb-10",
					children: projectCategories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setCat(c.id),
						className: `px-4 py-2 rounded-full text-sm border transition-all ${cat === c.id ? "bg-foreground text-background border-foreground" : "border-border text-muted-foreground hover:text-foreground"}`,
						children: t(c.label)
					}, c.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8",
					children: filtered.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "reveal group cursor-pointer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative aspect-[4/5] overflow-hidden rounded-2xl bg-secondary",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: p.image,
									alt: t(p.title),
									loading: "lazy",
									className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute top-4 left-4 rtl:left-auto rtl:right-4 px-3 py-1 rounded-full glass text-xs",
									children: t(projectCategories.find((c) => c.id === p.category).label)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute top-4 right-4 rtl:right-auto rtl:left-4 h-9 w-9 rounded-full bg-gold text-gold-foreground grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "pt-5 space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-2xl leading-tight",
									children: t(p.title)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 text-sm text-muted-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5 text-gold" }),
										" ",
										t(p.location),
										" · ",
										p.year,
										" · ",
										p.area
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground leading-relaxed line-clamp-2",
									children: t(p.description)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap gap-2 pt-2",
									children: p.tech.map((tech) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] uppercase tracking-widest text-muted-foreground border border-border rounded-full px-2 py-1",
										children: tech
									}, tech))
								})
							]
						})]
					}, p.id))
				}),
				filtered.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-muted-foreground py-20",
					children: "No projects found."
				})
			]
		})
	});
}
function Technology() {
	const { lang } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "section-pad bg-primary text-primary-foreground relative overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 opacity-[0.04] [background-image:linear-gradient(var(--color-primary-foreground)_1px,transparent_1px),linear-gradient(90deg,var(--color-primary-foreground)_1px,transparent_1px)] [background-size:60px_60px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-luxury relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "reveal max-w-2xl mb-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 mb-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hairline" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "eyebrow text-primary-foreground/70",
							children: ["04 — ", lang === "ar" ? "التقنيات والابتكار" : "Technology & Innovation"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "heading-display text-4xl md:text-5xl",
						children: [
							"Engineering meets ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic gold-text",
								children: "horticulture"
							}),
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-primary-foreground/70 max-w-xl",
						children: lang === "ar" ? "أعتمد على أحدث التقنيات في الري الذكي، الأتمتة، والتصور ثلاثي الأبعاد لتقديم نتائج موثوقة وموفّرة." : "I rely on modern smart irrigation, automation, and 3D visualization to deliver reliable, water-efficient outcomes."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-primary-foreground/10 border border-primary-foreground/10 rounded-2xl overflow-hidden",
				children: technologies.map((tech, i) => {
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "reveal bg-primary p-6 md:p-8 group hover:bg-primary-foreground/5 transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(lucide_react_exports[tech.icon] ?? Sparkles, { className: "h-6 w-6 text-gold mb-6 group-hover:scale-110 transition-transform" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-lg leading-tight",
							children: lang === "ar" ? tech.ar : tech.en
						})]
					}, i);
				})
			})]
		})]
	});
}
function Timeline() {
	const { t, lang } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-pad",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-luxury",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "reveal max-w-2xl mb-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 mb-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hairline" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "eyebrow",
						children: ["05 — ", lang === "ar" ? "الخبرات" : "Experience"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "heading-display text-4xl md:text-5xl",
					children: [
						"A decade of ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic gold-text",
							children: "deliveries"
						}),
						"."
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 bottom-0 left-4 md:left-1/2 md:-translate-x-px w-px bg-border" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-12",
					children: timeline.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `reveal relative grid md:grid-cols-2 gap-6 md:gap-12 ${i % 2 ? "md:[direction:rtl]" : ""}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `relative pl-12 md:pl-0 ${i % 2 ? "md:pr-12 md:text-right" : "md:pl-12"} [direction:ltr]`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute left-4 md:left-auto md:right-auto top-2 -translate-x-1/2 md:translate-x-0 h-3 w-3 rounded-full bg-gold ring-4 ring-background",
									style: i % 2 ? { right: "-1.625rem" } : { left: "-1.625rem" }
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display text-3xl gold-text mb-2",
									children: item.year
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-2xl mb-2",
									children: t(item.title)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground leading-relaxed",
									children: t(item.body)
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {})]
					}, i))
				})]
			})]
		})
	});
}
function Services() {
	const { t, lang } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "services",
		className: "section-pad bg-secondary/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-luxury",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "reveal max-w-2xl mb-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 mb-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hairline" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "eyebrow",
						children: ["06 — ", lang === "ar" ? "الخدمات" : "Services"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "heading-display text-4xl md:text-5xl",
					children: [
						"How I can help your ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic gold-text",
							children: "project"
						}),
						"."
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border rounded-2xl overflow-hidden",
				children: services.map((s, i) => {
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "reveal bg-background p-8 md:p-10 group hover:bg-accent/40 transition-colors",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between mb-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(lucide_react_exports[s.icon] ?? Sparkles, { className: "h-7 w-7 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-display text-3xl text-muted-foreground/30",
									children: ["0", i + 1]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl mb-3 leading-tight",
								children: t(s.title)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground leading-relaxed",
								children: t(s.body)
							})
						]
					}, i);
				})
			})]
		})
	});
}
function Counter({ value, suffix }) {
	const [n, setN] = (0, import_react.useState)(0);
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!ref.current) return;
		const io = new IntersectionObserver((es) => {
			es.forEach((e) => {
				if (e.isIntersecting) {
					const start = performance_default.now();
					const tick = (t) => {
						const p = Math.min(1, (t - start) / 1800);
						setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
						if (p < 1) requestAnimationFrame(tick);
					};
					requestAnimationFrame(tick);
					io.disconnect();
				}
			});
		}, { threshold: .4 });
		io.observe(ref.current);
		return () => io.disconnect();
	}, [value]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		className: "tabular-nums",
		children: [n, suffix]
	});
}
function Achievements() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-pad",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-luxury",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border rounded-2xl overflow-hidden",
				children: achievements.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "reveal bg-background p-8 md:p-12 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "heading-display text-5xl md:text-6xl gold-text mb-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
							value: a.value,
							suffix: a.suffix
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "eyebrow",
						children: t(a.label)
					})]
				}, i))
			})
		})
	});
}
function Testimonials() {
	const { t, lang } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-pad bg-secondary/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-luxury",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "reveal max-w-2xl mb-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 mb-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hairline" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "eyebrow",
						children: ["07 — ", lang === "ar" ? "آراء العملاء" : "Testimonials"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "heading-display text-4xl md:text-5xl",
					children: [
						"Trusted by ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic gold-text",
							children: "developers"
						}),
						" & owners."
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid md:grid-cols-3 gap-6 md:gap-8",
				children: testimonials.map((tm, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "reveal bg-background border border-border rounded-2xl p-8 flex flex-col",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "h-8 w-8 text-gold mb-6" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
							className: "font-display text-xl leading-snug mb-8 flex-1",
							children: [
								"\"",
								t(tm.quote),
								"\""
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-medium",
							children: tm.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm text-muted-foreground",
							children: t(tm.role)
						})] })
					]
				}, i))
			})]
		})
	});
}
function Gallery() {
	const { lang } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-pad",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-luxury",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "reveal max-w-2xl mb-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 mb-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hairline" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "eyebrow",
						children: ["08 — ", lang === "ar" ? "معرض" : "Gallery"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "heading-display text-4xl md:text-5xl",
					children: [
						"Field ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic gold-text",
							children: "notes"
						}),
						" & finished work."
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]",
				children: gallery.map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "reveal mb-4 break-inside-avoid overflow-hidden rounded-xl bg-secondary group",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src,
						alt: "",
						loading: "lazy",
						className: "w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
					})
				}, i))
			})]
		})
	});
}
function Contact() {
	const { t, lang } = useI18n();
	const [sent, setSent] = (0, import_react.useState)(false);
	const onSubmit = (e) => {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const name = String(fd.get("name") || "").trim().slice(0, 100);
		const message = String(fd.get("message") || "").trim().slice(0, 1e3);
		if (!name || !message) return;
		const text = encodeURIComponent(`Hello Eslam, I'm ${name}.\n\n${message}`);
		window.open(`https://wa.me/${profile.whatsapp}?text=${text}`, "_blank");
		setSent(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "section-pad bg-primary text-primary-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-luxury grid md:grid-cols-2 gap-12 md:gap-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "reveal",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 mb-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hairline" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "eyebrow text-primary-foreground/70",
							children: ["09 — ", lang === "ar" ? "تواصل" : "Contact"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "heading-display text-4xl md:text-6xl mb-8",
						children: [
							"Let's design something ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic gold-text",
								children: "remarkable"
							}),
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-primary-foreground/70 mb-10 max-w-md",
						children: lang === "ar" ? "متاح لمشاريع جديدة في المملكة العربية السعودية ومصر. أخبرني عن مشروعك." : "Available for new commissions across Saudi Arabia and Egypt. Tell me about your project."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `mailto:${profile.email}`,
								className: "flex items-center gap-4 hover:gold-text transition-colors",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-5 w-5 text-gold" }),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm",
										children: profile.email
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `tel:${profile.phone.replace(/\s/g, "")}`,
								className: "flex items-center gap-4 hover:gold-text transition-colors",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-5 w-5 text-gold" }),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm",
										children: profile.phone
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `https://wa.me/${profile.whatsapp}`,
								target: "_blank",
								rel: "noreferrer",
								className: "flex items-center gap-4 hover:gold-text transition-colors",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-5 w-5 text-gold" }),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm",
										children: t(ui.cta.whatsapp)
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: profile.linkedin,
								target: "_blank",
								rel: "noreferrer",
								className: "flex items-center gap-4 hover:gold-text transition-colors",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "h-5 w-5 text-gold" }),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm",
										children: "LinkedIn"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-5 w-5 text-gold" }),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm",
										children: t(profile.location)
									})
								]
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit,
				className: "reveal space-y-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "eyebrow text-primary-foreground/70 block mb-2",
						children: lang === "ar" ? "الاسم" : "Name"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						name: "name",
						required: true,
						maxLength: 100,
						className: "w-full bg-transparent border-b border-primary-foreground/20 py-3 outline-none focus:border-gold transition-colors"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "eyebrow text-primary-foreground/70 block mb-2",
						children: lang === "ar" ? "البريد الإلكتروني" : "Email"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						name: "email",
						type: "email",
						maxLength: 255,
						className: "w-full bg-transparent border-b border-primary-foreground/20 py-3 outline-none focus:border-gold transition-colors"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "eyebrow text-primary-foreground/70 block mb-2",
						children: lang === "ar" ? "تفاصيل المشروع" : "Project details"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						name: "message",
						required: true,
						maxLength: 1e3,
						rows: 5,
						className: "w-full bg-transparent border-b border-primary-foreground/20 py-3 outline-none focus:border-gold transition-colors resize-none"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "submit",
						className: "group inline-flex items-center gap-2 rounded-full bg-gold text-gold-foreground px-6 py-3 text-sm font-medium hover:opacity-90 transition-all",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" }),
							" ",
							t(ui.cta.send)
						]
					}),
					sent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-gold",
						children: lang === "ar" ? "تم فتح واتساب لإرسال الرسالة." : "Opening WhatsApp to send your message."
					})
				]
			})]
		})
	});
}
function Footer() {
	const { t, lang } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-luxury flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "font-display text-base",
				children: [
					t(profile.name),
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "gold-text",
						children: ["— ", t(profile.title)]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" ",
				lang === "ar" ? "جميع الحقوق محفوظة" : "All rights reserved",
				"."
			] })]
		})
	});
}
function Index() {
	useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skills, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Technology, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timeline, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Achievements, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Index as component };
