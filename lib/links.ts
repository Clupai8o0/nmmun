//* all the navigation links (navbar + table of content of most pages)

import { BaseLink, CouncilLink, TeamLink, navLink } from "./types";

//* all the councils and their details
export const councils: CouncilLink[] = [
	{
		title: "UNSC",
		id: "unsc",
		desc: [
			"The United Nations Security Council (UNSC) is one of the most powerful and influential bodies within the United Nations, tasked with maintaining international peace and security. ", 
			"As a MUN council, the UNSC provides delegates with a platform to address some of the most pressing global issues, ranging from conflicts and humanitarian crises to the proliferation of weapons of mass destruction. The council is characterized by high-stakes diplomacy, intense negotiations, and the need for swift, decisive action.",
		],
		href: "/council/unsc",
		icon: {
			src: "/councils/unsc.png",
			alt: "United Nations Security Council Logo",
		},
		topics: [
			"Addressing Sino-Indian Aggressions",
			"Efforts to Rid the World of Weapons of Mass Destruction Including Nuclear Weapons",
		],
		bgs: [
			{
				title: "Background Guide",
				url: "https://drive.google.com/file/d/18WtCMTKBncpHlk8N66J0pk83GwL0J_Wd/view?usp=drive_link",
			},
		],
		members: [
			{
				name: "Adesh Shaiju",
				src: "/councils/chairs/adesh.png",
			},
		],
	},
	{
		title: "CSTD",
		id: "cstd",
		desc: [
			"The United Nations Commission on Science and Technology for Development (CSTD) is a key body within the UN, tasked with guiding the international community in harnessing science and technology to foster sustainable development. ", 
			"As a MUN council, the CSTD provides delegates with a unique platform to explore the intersection of innovation, technology, and development, addressing critical issues that affect both developed and developing nations.",
		],
		href: "/council/cstd",
		icon: {
			src: "/councils/cstd.png",
			alt: "United Nations Security Council Logo",
		},
		topics: [
			"Addressing Sino-Indian Aggressions",
			"Efforts to Rid the World of Weapons of Mass Destruction Including Nuclear Weapons",
		],
		bgs: [
			{
				title: "Background Guide",
				url: "https://drive.google.com/file/d/18WtCMTKBncpHlk8N66J0pk83GwL0J_Wd/view?usp=drive_link",
			},
		],
		members: [
			{
				name: "Adesh Shaiju",
				src: "/councils/chairs/adesh.png",
			},
		],
	},
	{
		title: "UNHRC",
		id: "unhrc",
		desc: [
			"The United Nations Human Rights Council (UNHRC) is a critical body within the UN system responsible for promoting and protecting human rights around the world. ", 
			"As a MUN council, the UNHRC provides delegates with a platform to address pressing human rights issues, investigate violations, and develop international norms and policies aimed at safeguarding the dignity and rights of individuals globally.",
		],
		href: "/council/unhrc",
		icon: {
			src: "/councils/unhrc.png",
			alt: "United Nations Security Council Logo",
		},
		topics: [
			"Addressing Sino-Indian Aggressions",
			"Efforts to Rid the World of Weapons of Mass Destruction Including Nuclear Weapons",
		],
		bgs: [
			{
				title: "Background Guide",
				url: "https://drive.google.com/file/d/18WtCMTKBncpHlk8N66J0pk83GwL0J_Wd/view?usp=drive_link",
			},
		],
		members: [
			{
				name: "Adesh Shaiju",
				src: "/councils/chairs/adesh.png",
			},
		],
	},
	{
		title: "UNODC",
		id: "unodc",
		desc: [
			"The United Nations Office on Drugs and Crime (UNODC) is a key agency within the UN system dedicated to addressing global challenges related to drugs, crime, terrorism, and corruption. ", 
			"As a MUN council, the UNODC offers delegates the opportunity to engage with complex issues that threaten security, development, and human rights across the world. Delegates will work to develop strategies, policies, and international cooperation to combat these critical issues effectively.",
		],
		href: "/council/unodc",
		icon: {
			src: "/councils/unsc.png",
			alt: "United Nations Security Council Logo",
		},
		topics: [
			"Addressing Sino-Indian Aggressions",
			"Efforts to Rid the World of Weapons of Mass Destruction Including Nuclear Weapons",
		],
		bgs: [
			{
				title: "Background Guide",
				url: "https://drive.google.com/file/d/18WtCMTKBncpHlk8N66J0pk83GwL0J_Wd/view?usp=drive_link",
			},
		],
		members: [
			{
				name: "Adesh Shaiju",
				src: "/councils/chairs/adesh.png",
			},
		],
	},
	{
		title: "IMF",
		id: "imf",
		desc: [
			"The International Monetary Fund (IMF) is a global financial institution dedicated to promoting international monetary cooperation, securing financial stability, facilitating international trade, promoting high employment and sustainable economic growth, and reducing poverty around the world. ", 
			"As a MUN council, the IMF offers delegates the opportunity to engage with complex economic issues, formulate financial policies, and collaborate on strategies to support global economic stability and growth.",
		],
		href: "/council/imf",
		icon: {
			src: "/councils/unsc.png",
			alt: "United Nations Security Council Logo",
		},
		topics: [
			"Addressing Sino-Indian Aggressions",
			"Efforts to Rid the World of Weapons of Mass Destruction Including Nuclear Weapons",
		],
		bgs: [
			{
				title: "Background Guide",
				url: "https://drive.google.com/file/d/18WtCMTKBncpHlk8N66J0pk83GwL0J_Wd/view?usp=drive_link",
			},
		],
		members: [
			{
				name: "Adesh Shaiju",
				src: "/councils/chairs/adesh.png",
			},
		],
	},
	{
		title: "UNEP",
		id: "unep",
		desc: [
			"TThe United Nations Environment Programme (UNEP) is the leading global environmental authority within the UN system, tasked with setting the global environmental agenda, promoting sustainable development, and encouraging the wise use of natural resources. ",
			"As a MUN council, UNEP provides delegates with a platform to address pressing environmental challenges, formulate policies, and foster international cooperation aimed at protecting the planet for current and future generations.",
		],
		href: "/council/unep",
		icon: {
			src: "/councils/unep.png",
			alt: "United Nations environment programs Logo",
		},
		topics: [
			"Ensuring the Accountability of Countries to Environmental Conventions",
			"Overtourism and its impact on the environment",
		],
		members: [
			{
				name: "Aarefah K.",
				src: "/councils/chairs/aarefah.png",
			},
			{
				name: "Vishrutta Jayashekhar",
				src: "/councils/chairs/vishrutta.png",
			},
		],
	},
	{
		title: "WHO",
		id: "who",
		desc: [
			"The World Health Organization (WHO) is a specialized agency of the United Nations responsible for international public health. The WHO's mission is to promote health, keep the world safe, and serve the vulnerable by addressing global health challenges. ", 
			"As a MUN council, the WHO provides delegates with a platform to tackle pressing health issues, develop policies to improve global health, and coordinate international responses to health emergencies.",
		],
		href: "/council/who",
		icon: {
			src: "/councils/unsc.png",
			alt: "United Nations Security Council Logo",
		},
		topics: [
			"Addressing Sino-Indian Aggressions",
			"Efforts to Rid the World of Weapons of Mass Destruction Including Nuclear Weapons",
		],
		bgs: [
			{
				title: "Background Guide",
				url: "https://drive.google.com/file/d/18WtCMTKBncpHlk8N66J0pk83GwL0J_Wd/view?usp=drive_link",
			},
		],
		members: [
			{
				name: "Adesh Shaiju",
				src: "/councils/chairs/adesh.png",
			},
		],
	},
	{
		title: "ICJ",
		id: "icj",
		desc: [
			"The International Court of Justice (ICJ) is the principal judicial organ of the United Nations, tasked with settling legal disputes between states and providing advisory opinions on legal questions referred to it by authorized international organs and agencies. ", 
			"As a MUN council, the ICJ offers delegates a unique opportunity to engage in legal analysis, interpret international law, and adjudicate complex disputes between nations, simulating the role of judges in the world’s highest court.",
		],
		href: "/council/icj",
		icon: {
			src: "/councils/unsc.png",
			alt: "United Nations Security Council Logo",
		},
		topics: [
			"Addressing Sino-Indian Aggressions",
			"Efforts to Rid the World of Weapons of Mass Destruction Including Nuclear Weapons",
		],
		bgs: [
			{
				title: "Background Guide",
				url: "https://drive.google.com/file/d/18WtCMTKBncpHlk8N66J0pk83GwL0J_Wd/view?usp=drive_link",
			},
		],
		members: [
			{
				name: "Adesh Shaiju",
				src: "/councils/chairs/adesh.png",
			},
		],
	},
	{
		title: "FIFA",
		id: "fifa",
		desc: [
			"The Fédération Internationale de Football Association (FIFA) is the global governing body for football (soccer), responsible for overseeing the organization and regulation of international competitions, setting the rules of the game, and promoting the sport worldwide. ", 
			"As a MUN council, FIFA offers delegates the opportunity to engage in discussions and decision-making processes related to the management and development of football, addressing issues ranging from global tournaments to grassroots initiatives.",
		],
		href: "/council/fifa",
		icon: {
			src: "/councils/unsc.png",
			alt: "United Nations Security Council Logo",
		},
		topics: [
			"Addressing Sino-Indian Aggressions",
			"Efforts to Rid the World of Weapons of Mass Destruction Including Nuclear Weapons",
		],
		bgs: [
			{
				title: "Background Guide",
				url: "https://drive.google.com/file/d/18WtCMTKBncpHlk8N66J0pk83GwL0J_Wd/view?usp=drive_link",
			},
		],
		members: [
			{
				name: "Adesh Shaiju",
				src: "/councils/chairs/adesh.png",
			},
		],
	},
	{
		title: "UNCSW",
		id: "uncsw",
		desc: [
			"The United Nations Commission on the Status of Women (CSW) is the principal global intergovernmental body dedicated to promoting gender equality and the empowerment of women. ",
			"As a MUN council, the CSW offers delegates the opportunity to engage in meaningful dialogue on issues affecting women and girls worldwide, shaping policies and recommendations that aim to advance gender equality and women’s rights.",
		],
		href: "/council/uncsw",
		icon: {
			src: "/councils/uncsw.png",
			alt: "United Nations commission on the status of women Logo",
		},
		topics: [
			"Discussing violence against women and the battered woman syndrome",
			"Discussing technological change and education in the digital age for achieving gender equality and empowerment of women",
		],
		members: [
			{
				name: "Aryan Arora",
				src: "/councils/chairs/aryan.png",
			},
			{
				name: "Aira Nair",
				src: "/councils/chairs/aira.png",
			},
		],
	},
	{
		title: "HCC",
		id: "hcc",
		desc: [
			"The Historical Crisis Council (HCC) is a dynamic and immersive MUN council that simulates historical crises and pivotal moments in history, requiring delegates to navigate complex political, military, and social challenges. ", 
			"Unlike traditional MUN councils, the HCC focuses on past events, asking delegates to analyze and respond to crises as they unfolded, making decisions based on historical contexts and real-time developments.",
		],
		href: "/council/hcc",
		icon: {
			src: "/councils/hcc.png",
			alt: "United Nations Security Council Logo",
		},
		topics: [
			"Addressing Sino-Indian Aggressions",
			"Efforts to Rid the World of Weapons of Mass Destruction Including Nuclear Weapons",
		],
		bgs: [
			{
				title: "Background Guide",
				url: "https://drive.google.com/file/d/18WtCMTKBncpHlk8N66J0pk83GwL0J_Wd/view?usp=drive_link",
			},
		],
		members: [
			{
				name: "Adesh Shaiju",
				src: "/councils/chairs/adesh.png",
			},
		],
	},
	{
		title: "LOK SABHA",
		id: "lok-sabha",
		desc: [
			"The Lok Sabha, or House of the People, is the lower house of India's Parliament, representing the will of the nation's citizens. It is a pivotal body in the legislative process, responsible for crafting, debating, and passing laws that impact the entire country. ",
			"As a MUN council, the Lok Sabha provides delegates with a platform to engage in intense political debate, represent the diverse viewpoints of Indian states and constituencies, and navigate the complexities of parliamentary procedures.",
		],
		href: "/council/lok-sabha",
		icon: { src: "/councils/lok-sabha.png", alt: "lok sabha Logo" },
		topics: [
			"Seeking To Restore Peace In the Seven Sisters by Deliberating on the Current Situation in the states of the North-Eastern Region of India with emphasis on the Validity of the Armed Forces Special Powers Act",
			"Challenging the Remission Policy.",
		],
		bgs: [
			{
				title: "Background Guide",
				url: "https://drive.google.com/file/d/1MW1i0DR_wKA0cGLOm1MeyHT4SMSqGbX6/view?usp=drive_link",
			},
		],
		members: [
			{
				name: "Nikhil Nandi",
				src: "/councils/chairs/nikhil.png",
			},
		],
	},
	{
		title: "JCC",
		id: "jcc",
		desc: [
			"The Joint Crisis Council (JCC) is an advanced MUN council designed to simulate complex, multi-faceted crises requiring coordinated responses from various entities. It combines elements of diplomacy, security, and humanitarian response, bringing together multiple councils or teams to address a single, overarching crisis. ", 
			"Delegates work collaboratively and strategically across different areas of expertise to manage and resolve the crisis effectively.",
		],
		href: "/council/jcc",
		icon: {
			src: "/councils/un.svg",
			alt: "United Nations Security Council Logo",
		},
		topics: [
			"Addressing Sino-Indian Aggressions",
			"Efforts to Rid the World of Weapons of Mass Destruction Including Nuclear Weapons",
		],
		bgs: [
			{
				title: "Background Guide",
				url: "https://drive.google.com/file/d/18WtCMTKBncpHlk8N66J0pk83GwL0J_Wd/view?usp=drive_link",
			},
		],
		members: [
			{
				name: "Adesh Shaiju",
				src: "/councils/chairs/adesh.png",
			},
		],
	},
	{
		title: "Suits",
		id: "suits",
		desc: [
			"It is a fictional MUN council inspired by the television series 'Suits.' ", 
			"This council simulates the high-stakes, dramatic world of corporate law, where delegates take on roles as top attorneys, clients, and judges navigating complex legal cases, negotiations, and corporate disputes. The council combines elements of legal strategy, courtroom drama, and corporate intrigue to create an engaging and dynamic simulation.",
		],
		href: "/council/suits",
		icon: {
			src: "/councils/suits.png",
			alt: "United Nations Security Council Logo",
		},
		topics: [
			"Addressing Sino-Indian Aggressions",
			"Efforts to Rid the World of Weapons of Mass Destruction Including Nuclear Weapons",
		],
		bgs: [
			{
				title: "Background Guide",
				url: "https://drive.google.com/file/d/18WtCMTKBncpHlk8N66J0pk83GwL0J_Wd/view?usp=drive_link",
			},
		],
		members: [
			{
				name: "Adesh Shaiju",
				src: "/councils/chairs/adesh.png",
			},
		],
	},
];

//* all the teams, their details and links
export const teamLinks: TeamLink[] = [
	{
		title: "Secretariats",
		href: "/team#gov",
		icon: { src: "/teams/gov.png", alt: "" },
		id: "gov",
		members: [
			{
				name: "Tanishka Bhatia",
				pos: "Head of Organizing Committee",
				src: "/teams/tanishka.png",
			},
			{
				name: "Hetvi Shah",
				pos: "Director General",
				src: "/teams/hetvi.png",
			},
			{
				name: "Akshat P. Kumar",
				pos: "Secretary General",
				src: "/teams/akshat.png",
			},
			{
				name: "Nandana Menon",
				pos: "Head of R&D",
				src: "/teams/nandana.png",
			},
		],
	},
	{
		title: "IT",
		href: "/team#it",
		icon: { src: "/teams/it.png", alt: "" },
		id: "it",
		members: [
			{
				name: "Samridh Limbu",
				pos: "Head of IT",
				src: "/teams/samridh.png",
			},
			{
				name: "Pranav Nambiar",
				pos: "Member",
				src: "/teams/pranav.png",
			},
			{
				name: "Yuvraaj Suri",
				pos: "Member",
				src: "/teams/yuvraaj.png",
			},
			{
				name: "Nawfaal Rahaman",
				pos: "Member",
				src: "/teams/nawfaal.png",
			},
		],
	},
	{
		title: "Design",
		href: "/team#design",
		icon: { src: "/teams/design.png", alt: "" },
		id: "design",
		members: [
			{
				name: "Anvi Tiwari",
				pos: "Head of Design",
				src: "/teams/anvi.png",
			},
			{
				name: "Zoha Noor",
				pos: "Member",
				src: "/teams/zoha.png",
			},
		],
	},
	{
		title: "Logistics",
		href: "/team#logistics",
		icon: { src: "/teams/logistics.png", alt: "" },
		id: "logistics",
		members: [
			{
				name: "Romeir Ranjan",
				pos: "Head of Logistics",
				src: "/teams/romeir.png",
			},
			{
				name: "Nivya Sajiz",
				pos: "Member",
				src: "/teams/nivya.png",
			},
			{
				name: "Sahil Singh",
				pos: "Member",
				src: "/teams/sahil.png",
			},
			{
				name: "Joel Joseph",
				pos: "Member",
				src: "/teams/joel.png",
			},
		],
	},
	{
		title: "Media & PR",
		href: "/team#press",
		icon: { src: "/teams/press.png", alt: "" },
		id: "press",
		members: [
			{
				name: "Kritika Gupta",
				pos: "Head of Media & PR",
				src: "/teams/kritika.png",
			},
			{
				name: "Shashwat Srivastava",
				pos: "Member",
				src: "/teams/shashwat.png",
			},
			{
				name: "Akshi Jain",
				pos: "Member",
				src: "/teams/akshi.png",
			},
		],
	},
	{
		title: "Press",
		href: "/team#media",
		icon: { src: "/teams/media.png", alt: "" },
		id: "media",
		members: [
			{
				name: "Abdur Raheem",
				pos: "Member",
				src: "/teams/abdur.png",
			},
			{
				name: "Shreyas Birje",
				pos: "Member",
				src: "/teams/shreyas.png",
			},
			{
				name: "Mithilesh Tumugante",
				pos: "Member",
				src: "/teams/mithilesh.png",
			},
			{
				name: "Chirag Ashwani",
				pos: "Member",
				src: "/teams/chirag.png",
			},
		],
	},
	{
		title: "Decoration",
		href: "/team#decor",
		icon: { src: "/teams/decor.png", alt: "" },
		id: "decor",
		members: [
			{
				name: "Zara Kulsum",
				pos: "Head of Decoration",
				src: "/teams/zara.png",
			},
			{
				name: "Juwairia Mariam",
				pos: "Member",
				src: "/teams/juwairia.png",
			},
			{
				name: "Sana Kelushkar",
				pos: "Member",
				src: "/teams/sana.png",
			},
			{
				name: "Diya Zacharia",
				pos: "Member",
				src: "/teams/diya.png",
			},
		],
	},
	{
		title: "Research & Development",
		href: "/team#rnd",
		icon: { src: "/teams/rnd.png", alt: "" },
		id: "rnd",
		members: [
			{
				name: "Sreya Sasi",
				pos: "Member",
				src: "/teams/sreya.png",
			},
			{
				name: "Antara Dongre",
				pos: "Member",
				src: "/teams/antara.png",
			},
			{
				name: "Mohammed Kaif",
				pos: "Member",
				src: "/teams/kaif.png",
			},
			{
				name: "Samarth",
				pos: "Member",
				src: "/teams/samarth.png",
			},
		],
	},
	{
		title: "Security & Runner",
		href: "/team#security",
		icon: { src: "/teams/security.png", alt: "" },
		id: "security",
		members: [
			{
				name: "Ayman Siddiqui",
				pos: "Head of Security & Runner",
				src: "/teams/ayman.png",
			},
		],
	},
	{
		title: "Finance",
		href: "/team#finance",
		icon: { src: "/teams/finance.png", alt: "" },
		id: "finance",
		members: [
			{
				name: "Mohammed Ehaan",
				pos: "Head of Finance",
				src: "/teams/ehaan.png",
			},
			{
				name: "Surya Sai",
				pos: "Member",
				src: "/teams/surya.png",
			},
		],
	},
	{
		title: "Food",
		href: "/team#food",
		icon: { src: "/teams/food.png", alt: "" },
		id: "food",
		members: [
			{
				name: "Ali Dar",
				pos: "Head of Food",
				src: "/teams/ali.png",
			},
			{
				name: "Shreya Sham",
				pos: "Member",
				src: "/teams/shreya.png",
			},
		],
	},
];

//* navbar and sidebar links
export const navLinks: navLink[] = [
	{
		title: "Home",
		href: "/",
		button: false,
		showScrollToTop: true,
		navDarkMode: true,
		children: [
			{
				title: "Quote",
				href: "/#quote",
			},
			{
				title: "Theme",
				href: "/#theme",
			},
			{
				title: "About",
				href: "/#about",
			},
			{
				title: "Why Us",
				href: "/#why-us",
			},
			{
				title: "FAQs",
				href: "/#faq",
			},
		],
	},
	{
		title: "Team",
		href: "/team",
		button: false,
		showScrollToTop: true,
		navDarkMode: true,
		menu: true,
		children: teamLinks,
	},
	{
		title: "Councils",
		href: "/councils",
		button: false,
		showScrollToTop: true,
		navDarkMode: true,
		menu: true,
		children: councils,
	},
	{
		title: "Gallery",
		href: "/gallery",
		button: false,
		showScrollToTop: true,
		navDarkMode: true,
		children: [
			{
				title: "2023",
				href: "/gallery#2023",
			},
			{
				title: "2022",
				href: "/gallery#2022",
			},
		],
	},
	{
		title: "Information",
		href: "/info",
		button: false,
		showScrollToTop: true,
		navDarkMode: true,
		children: [
			{
				title: "Allocations",
				href: "/info#allocations",
			},
			{
				title: "Rules of Procedure",
				href: "/info#rop",
			},
			{
				title: "Itinerary",
				href: "/info#itinerary",
			},
			{
				title: "Dress Code",
				href: "/info#dress-code",
			},
		],
	},
	{
		title: "Contact Us",
		href: "/contact",
		button: false,
		showScrollToTop: false,
		navDarkMode: false,
		children: [
			{
				title: "Map",
				href: "/contact",
			},
			{
				title: "Email",
				href: "/contact",
			},
			{
				title: "Message",
				href: "/contact",
			},
		],
	},
	{
		title: "Register",
		href: "/register",
		button: true,
		showScrollToTop: true,
		navDarkMode: true,
		children: [
			{
				title: "Payment Guide",
				href: "/register#payment",
			},
			{
				title: "Chair Applications",
				href: "/register#chair",
			},
			{
				title: "Delegate Applications",
				href: "/register#delegate",
			},
			{
				title: "Security & Runner",
				href: "/register#snr",
			},
		],
	},
];

//* table of content links for info page
export const infoLinks: BaseLink[] = [
	{
		title: "Allocations",
		id: "allocations",
		icon: { src: "/info/alloc.png", alt: "seat" },
		href: "/info#allocations",
	},
	{
		title: "Rules of Procedure",
		id: "rop",
		icon: { src: "/info/rop.png", alt: "a script with rules" },
		href: "/info#rop",
	},
	{
		title: "Itinerary",
		id: "itinerary",
		icon: { src: "/info/itinerary.png", alt: "timeline" },
		href: "/info#itinerary",
	},
	{
		title: "Dress Code",
		id: "dress-code",
		icon: { src: "/info/dress.png", alt: "shirt tie logo" },
		href: "/info#dress-code",
	},
];

//* table of content links for register page
export const registerLinks: BaseLink[] = [
	{
		title: "Payment Guide",
		id: "payment",
		href: "/register#payment",
		icon: {
			src: "/register/payment.png",
			alt: "wallet",
		},
	},
	{
		title: "Chair Applications",
		id: "chair",
		href: "/register#chair",
		icon: {
			src: "/register/chair.png",
			alt: "illustration of a man on the speech pedestal",
		},
	},
	{
		title: "Delegate Application",
		id: "delegate",
		href: "/register#delegate",
		icon: {
			src: "/register/delegate.png",
			alt: "illustration of delegates holding their hands around a globe",
		},
	},
	{
		title: "Security & Runner",
		id: "sec-run",
		href: "/register#sec-run",
		icon: {
			src: "/register/runner-security.png",
			alt: "illustrations of 3 people together",
		},
	},
];
