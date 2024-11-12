//* all the navigation links (navbar + table of content of most pages)

import { BaseLink, CouncilLink, TeamLink, navLink } from "./types";

//* all the councils and their details
export const councils: CouncilLink[] = [
	{
		title: "UNSC",
		id: "unsc",
		desc: [
			"The United Nations Security Council (UNSC) is one of the most powerful and influential bodies within the United Nations, tasked with maintaining international peace and security. ", 
			"As a MUN council, the UNSC provides delegates with a platform to address some of the most pressing global issues, ranging from conflicts and humanitarian crises to the proliferation of weapons of mass destruction. The council is characterized by high-stakes diplomacy, intense negotiations, and the need for swift, decisive action. ",
			"This council is an advanced council with it's own specialized procedures and special gimmicks, those picking this should be well versed with MUNs and debating.",
		],
		href: "/council/unsc",
		icon: {
			src: "/councils/unsc.png",
			alt: "United Nations Security Council Logo",
		},
		topics: [
			"Addressing the threat of Cyber warfare and ensuring international cyber security.",
			"Maintaining failsafe and contingencies for nuclear, chemical or biochemical attacks.",
		],
		bgs: [
			{
				title: "Background Guide",
				url: "https://drive.google.com/file/d/186YqKsN-mJmp2vOIMeI7AW7IPOUmNHCp/view",
			},
		],
		members: [
			{
				name: "Agrima Kalra",
				src: "/councils/chairs/agrima.png",
			},
			{
				name: "Siddharth Ramesh",
				src: "/councils/chairs/sid.png",
			},
		],
	},
	{
		title: "UNCSTD",
		id: "cstd",
		desc: [
			"The United Nations Commission on Science and Technology for Development (CSTD) is a key body within the UN, tasked with guiding the international community in harnessing science and technology to foster sustainable development. ", 
			"As a MUN council, the CSTD provides delegates with a unique platform to explore the intersection of innovation, technology, and development, addressing critical issues that affect both developed and developing nations. ",
			"This council is a beginner council and ideal for those who are new to MUNs or debating.",
		],
		href: "/council/cstd",
		icon: {
			src: "/councils/cstd.png",
			alt: "United Nations Security Council Logo",
		},
		topics: [
			"Promoting digital inclusion and bridging the digital divide in developing countries",
			"Balancing privacy and security in the era of digital surveillance.",
		],
		bgs: [
			{
				title: "Background Guide",
				url: "https://drive.google.com/file/d/1VFsanNnhsUTmv2DWrxAutXHBRjM4TcT-/view",
			},
		],
		members: [
			{
				name: "Ameya Iyer",
				src: "/councils/chairs/ameya.png",
			},
			{
				name: "Joshua Tiji",
				src: "/councils/chairs/placeholder.png",
			},
		],
	},
	{
		title: "UNHRC",
		id: "unhrc",
		desc: [
			"The United Nations Human Rights Council (UNHRC) is a critical body within the UN system responsible for promoting and protecting human rights around the world. ", 
			"As a MUN council, the UNHRC provides delegates with a platform to address pressing human rights issues, investigate violations, and develop international norms and policies aimed at safeguarding the dignity and rights of individuals globally. ",
			"This council is a beginner council and ideal for those who are new to MUNs or debating.",
		],
		href: "/council/unhrc",
		icon: {
			src: "/councils/unhrc.png",
			alt: "United Nations Security Council Logo",
		},
		topics: [
			"Freedom of Speech vs Hate Speech, defining the boundaries and protecting human dignity.",
			"Securing sanctuary: Upholding the rights of displace populations in an era of global upheaval.",
		],
		bgs: [
			{
				title: "Background Guide",
				url: "https://docs.google.com/document/d/1QmrYxT4A0o4f0E2tVQSaWjLI9CFcTIdY/edit?usp=drive_link&ouid=108012744093641750260&rtpof=true&sd=true",
			},
		],
		members: [
			{
				name: "Deeksha Singh",
				src: "/councils/chairs/deeksha.png",
			},
			{
				name: "Vedavathy Venu Thonnakkal",
				src: "/councils/chairs/vedavathy.png",
			},
		],
	},
	{
		title: "UNODC",
		id: "unodc",
		desc: [
			"The United Nations Office on Drugs and Crime (UNODC) is a key agency within the UN system dedicated to addressing global challenges related to drugs, crime, terrorism, and corruption. ", 
			"As a MUN council, the UNODC offers delegates the opportunity to engage with complex issues that threaten security, development, and human rights across the world. Delegates will work to develop strategies, policies, and international cooperation to combat these critical issues effectively. ",
			"This council is a beginner council and ideal for those who are new to MUNs or debating.",
		],
		href: "/council/unodc",
		icon: {
			src: "/councils/unodc.png",
			alt: "United Nations Security Council Logo",
		},
		topics: [
			"The Grass is Greener: Reconciling Cannabis legalisation with international drug control framework",
			"Connecting the dots: Addressing the intersections, between organized crime, corruption and human trafficking",
		],
		bgs: [
			{
				title: "Background Guide",
				url: "https://drive.google.com/file/d/1Lgji_fFg0zPkEiJRfybgDjUbkk9OACh9/view",
			},
		],
		members: [
			{
				name: "Rohan Atul Singhvi",
				src: "/councils/chairs/rohan.png",
			},
			{
				name: "Nayonika Nair",
				src: "/councils/chairs/nayonika.png",
			},
		],
	},
	{
		title: "IMF",
		id: "imf",
		desc: [
			"The International Monetary Fund (IMF) is a global financial institution dedicated to promoting international monetary cooperation, securing financial stability, facilitating international trade, promoting high employment and sustainable economic growth, and reducing poverty around the world. ", 
			"As a MUN council, the IMF offers delegates the opportunity to engage with complex economic issues, formulate financial policies, and collaborate on strategies to support global economic stability and growth. ",
			"This council is an intermediate council and meant for those who are fairly experienced with MUNs or debating in general.",
		],
		href: "/council/imf",
		icon: {
			src: "/councils/imf.png",
			alt: "United Nations Security Council Logo",
		},
		topics: [
			"Investor state dispute settlement mechanisms: Evaluating the Legitimacy and National Sovereignty.",
			"Addressing the Global Debt Crisis.",
		],
		bgs: [
			{
				title: "Topic 1 Background Guide",
				url: "https://drive.google.com/file/d/1GHvsRlR_BmKyfKN_Ni5RtpZ8QzzwY7e-/view",
			},
			{
				title: "Topic 2 Background Guide",
				url: "https://drive.google.com/file/d/19x-qcC3uG8_7cQLfc_0bRTXEdNC417y3/view",
			},
		],
		members: [
			{
				name: "Aayush Mehta",
				src: "/councils/chairs/aayush.png",
			},
			{
				name: "Gayathri Sangisetti",
				src: "/councils/chairs/gayathri.png",
			},
		],
	},
	{
		title: "UNEP",
		id: "unep",
		desc: [
			"TThe United Nations Environment Programme (UNEP) is the leading global environmental authority within the UN system, tasked with setting the global environmental agenda, promoting sustainable development, and encouraging the wise use of natural resources. ",
			"As a MUN council, UNEP provides delegates with a platform to address pressing environmental challenges, formulate policies, and foster international cooperation aimed at protecting the planet for current and future generations. ",
			"This council is a beginner council and ideal for those who are new to MUNs or debating.",
		],
		href: "/council/unep",
		icon: {
			src: "/councils/unep.png",
			alt: "United Nations environment programs Logo",
		},
		topics: [
			"Shaping a Sustainable Future: Youth Voices in the Global Environment Agenda.",
		],
		bgs: [
			{
				title: "Background Guide",
				url: "https://drive.google.com/file/d/1ykbhOBLw7LgAeaH69hKyBWjAJ-8k8_Wp/view",
			},
		],
		members: [
			{
				name: "Hibah Abdul Kareem",
				src: "/councils/chairs/hibah.png",
			},
			{
				name: "Samhitha Jagadish",
				src: "/councils/chairs/samhitha.png",
			},
		],
	},
	{
		title: "WHO",
		id: "who",
		desc: [
			"The World Health Organization (WHO) is a specialized agency of the United Nations responsible for international public health. The WHO's mission is to promote health, keep the world safe, and serve the vulnerable by addressing global health challenges. ", 
			"As a MUN council, the WHO provides delegates with a platform to tackle pressing health issues, develop policies to improve global health, and coordinate international responses to health emergencies. ",
			"This council is a beginner council and ideal for those who are new to MUNs or debating.",
		],
		href: "/council/who",
		icon: {
			src: "/councils/who.png",
			alt: "United Nations Security Council Logo",
		},
		topics: [
			"Balancing public health and personal freedom, navigating the ethical dilemma of mandatory vaccination policies.",
			"Providing Healthcare to war-torn countries or countries during war.",
		],
		bgs: [
			{
				title: "Background Guide",
				url: "https://drive.google.com/file/d/1Zb5X5iYuQ7574wuBHaJGJJeSH0soEnrE/view",
			},
		],
		members: [
			{
				name: "Noel Emmanuel Binu",
				src: "/councils/chairs/noel.png",
			},
			{
				name: "Radhika Ganesan",
				src: "/councils/chairs/radhika.png",
			},
		],
	},
	{
		title: "ICJ",
		id: "icj",
		desc: [
			"The International Court of Justice (ICJ) is the principal judicial organ of the United Nations, tasked with settling legal disputes between states and providing advisory opinions on legal questions referred to it by authorized international organs and agencies. ", 
			"As a MUN council, the ICJ offers delegates a unique opportunity to engage in legal analysis, interpret international law, and adjudicate complex disputes between nations, simulating the role of judges in the world’s highest court. ",
			"This council is an advanced council with it's own specialized procedures and special gimmicks, those picking this should be well versed with MUNs and debating.",
		],
		href: "/council/icj",
		icon: {
			src: "/councils/icj.png",
			alt: "United Nations Security Council Logo",
		},
		topics: [
			"Republic of the Congo vs Belgium Republic of the Congo vs Belgium",
		],
		bgs: [
			{
				title: "Background Guide",
				url: "https://drive.google.com/file/d/1Xo3hE3HMX-vsgf66bvM8aBwYz_gLIr5L/view",
			},
		],
		members: [
			{
				name: "Ishaan V Binesh",
				src: "/councils/chairs/ishaan.png",
			},
			{
				name: "Shiven Thareja",
				src: "/councils/chairs/shiven.png",
			},
		],
	},
	{
		title: "FIFA",
		id: "fifa",
		desc: [
			"The Fédération Internationale de Football Association (FIFA) is the global governing body for football (soccer), responsible for overseeing the organization and regulation of international competitions, setting the rules of the game, and promoting the sport worldwide. ", 
			"As a MUN council, FIFA offers delegates the opportunity to engage in discussions and decision-making processes related to the management and development of football, addressing issues ranging from global tournaments to grassroots initiatives. ",
			"This council is an intermediate council and meant for those who are fairly experienced with MUNs or debating in general.",
		],
		href: "/council/fifa",
		icon: {
			src: "/councils/fifa.png",
			alt: "United Nations Security Council Logo",
		},
		topics: [
			"Auctioning",
			"Addressing the problems of racism, sexual abuse and discrimination in football.",
		],
		bgs: [
			{
				title: "Background Guide",
				url: "https://drive.google.com/file/d/1GC9H_qp_7nUat4OskswdTiCywarMe0Yw/view",
			},
		],
		members: [
			{
				name: "Anirudh Sachin Nair",
				src: "/councils/chairs/anirudh.png",
			},
			{
				name: "Avran Mathew Thomas",
				src: "/councils/chairs/avran.png",
			},
		],
	},
	{
		title: "UNCSW",
		id: "uncsw",
		desc: [
			"The United Nations Commission on the Status of Women (CSW) is the principal global intergovernmental body dedicated to promoting gender equality and the empowerment of women. ",
			"As a MUN council, the CSW offers delegates the opportunity to engage in meaningful dialogue on issues affecting women and girls worldwide, shaping policies and recommendations that aim to advance gender equality and women’s rights. ",
			"This council is an intermediate council and meant for those who are fairly experienced with MUNs or debating in general.",
		],
		href: "/council/uncsw",
		icon: {
			src: "/councils/uncsw.png",
			alt: "United Nations commission on the status of women Logo",
		},
		topics: [
			"Empowering women in STEM.",
			"Cultural relativism vs Universal woman’s rights: Respecting traditions or upholding human rights?",
		],
		bgs: [
			{
				title: "Background Guide",
				url: "https://drive.google.com/file/d/1rPZAe3oA60U4pjoejYEjIRjAaLp0PRY3/view",
			},
		],
		members: [
			{
				name: "Riddhi Mayur",
				src: "/councils/chairs/riddhi.png",
			},
			{
				name: "Ayana Jaiswal",
				src: "/councils/chairs/ayana.png",
			},
		],
	},
	{
		title: "HCC",
		id: "hcc",
		desc: [
			"The Historical Crisis Council (HCC) is a dynamic and immersive MUN council that simulates historical crises and pivotal moments in history, requiring delegates to navigate complex political, military, and social challenges. ", 
			"Unlike traditional MUN councils, the HCC focuses on past events, asking delegates to analyze and respond to crises as they unfolded, making decisions based on historical contexts and real-time developments. ",
			"This council is an advanced council with it's own specialized procedures and special gimmicks, those picking this should be well versed with MUNs and debating.",
		],
		href: "/council/hcc",
		icon: {
			src: "/councils/hcc.png",
			alt: "United Nations Security Council Logo",
		},
		topics: [
			"Chernobyl",
		],
		bgs: [
			{
				title: "Background Guide",
				url: "https://drive.google.com/file/d/1lEdpxNPZtq3cJbqr5hjTXfI5fZRDUdGh/view",
			},
		],
		members: [
			{
				name: "Anne Devassy",
				src: "/councils/chairs/anne.png",
			},
			{
				name: "Prapti Dey",
				src: "/councils/chairs/placeholder.png",
			},
		],
	},
	{
		title: "LOK SABHA",
		id: "lok-sabha",
		desc: [
			"The Lok Sabha, or House of the People, is the lower house of India's Parliament, representing the will of the nation's citizens. It is a pivotal body in the legislative process, responsible for crafting, debating, and passing laws that impact the entire country. ",
			"As a MUN council, the Lok Sabha provides delegates with a platform to engage in intense political debate, represent the diverse viewpoints of Indian states and constituencies, and navigate the complexities of parliamentary procedures. ",
			"This council is an intermediate council and meant for those who are fairly experienced with MUNs or debating in general.",
		],
		href: "/council/lok-sabha",
		icon: { 
			src: "/councils/lok-sabha.png", 
			alt: "lok sabha Logo" 
		},
		topics: [
			"Rewriting the rules, modernizing India’s electoral landscape",
			"Uniform Civil Code",
		],
		bgs: [
			{
				title: "Background Guide in the works",
				url: "#",
			},
		],
		members: [
			{
				name: "Sreechaitra M.S",
				src: "/councils/chairs/sreechaitra.png",
			},
		],
	},
	{
		title: "JCC",
		id: "jcc",
		desc: [
			"The Joint Crisis Council (JCC) is an advanced MUN council designed to simulate complex, multi-faceted crises requiring coordinated responses from various entities. It combines elements of diplomacy, security, and humanitarian response, bringing together multiple councils or teams to address a single, overarching crisis. ", 
			"Delegates work collaboratively and strategically across different areas of expertise to manage and resolve the crisis effectively. ",
			"This council is an advanced council with it's own specialized procedures and special gimmicks, those picking this should be well versed with MUNs and debating.",
		],
		href: "/council/jcc",
		icon: {
			src: "/councils/jcc.png",
			alt: "United Nations Security Council Logo",
		},
		topics: [
			"Russia-Ukraine Crisis",
		],
		bgs: [
			{
				title: "Russian side Background Guide",
				url: "https://drive.google.com/file/d/1Noe6tZJw3rdkAmrP7vqdRJCh6vPurywj/view",
			},
			{
				title: "Ukraine side Background Guide",
				url: "https://drive.google.com/file/d/1kaEuRbhFzs_-MRz2jEkGWLkjmAddc67e/view",
			},
		],
		members: [
			{
				name: "Zoraiz Al Raz",
				src: "/councils/chairs/zoraiz.png",
			},
			{
				name: "Sreyas Sreevalsan",
				src: "/councils/chairs/sreyas.png",
			},
			{
				name: "Mihir Anand Pappu",
				src: "/councils/chairs/mihir.png",
			},
			{
				name: "Inushka Ananth",
				src: "/councils/chairs/inushka.png",
			},
		],
	},
	{
		title: "Suits",
		id: "suits",
		desc: [
			"It is a fictional MUN council inspired by the television series 'Suits.' ", 
			"This council simulates the high-stakes, dramatic world of corporate law, where delegates take on roles as top attorneys, clients, and judges navigating complex legal cases, negotiations, and corporate disputes. The council combines elements of legal strategy, courtroom drama, and corporate intrigue to create an engaging and dynamic simulation. ",
			"This council is an advanced council with it's own specialized procedures and special gimmicks, those picking this should be well versed with MUNs and debating.",
		],
		href: "/council/suits",
		icon: {
			src: "/councils/suits.png",
			alt: "United Nations Security Council Logo",
		},
		topics: [
			"Grassroots to the Global Stage: Localising Solutions to Global Challenges",
		],
		bgs: [
			{
				title: "Background Guide in the works",
				url: "#",
			},
		],
		members: [
			{
				name: "Nikhil Nandi",
				src: "/councils/chairs/nikhil.png",
			},
			{
				name: "Darsh Thareja",
				src: "/councils/chairs/darsh.png",
			},
		],
	},
];

//* all the teams, their details and links
export const teamLinks: TeamLink[] = [
	{
		title: "Secretariats",
		href: "/team#secretariats",
		icon: { src: "/teams/gov.png", alt: "" },
		id: "secretariats",
		members: [
			{
				name: "Lakshmi Bala",
				pos: "Head of Organizing Committee",
				src: "/teams/lakshmi.png",
			},
			{
				name: "Rudra Dev Sumod",
				pos: "Secratary General",
				src: "/teams/rudra.png",
			},
			{
				name: "Kushagra Vashishth",
				pos: "Head of Research & Development",
				src: "/teams/kushagra.png",
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
				name: "Hiranya Bansal",
				pos: "Head of IT",
				src: "/teams/hiranya.png",
			},
			{
				name: "Aarin S. Niranjane",
				pos: "Member",
				src: "/teams/aarinn1.png",
			},
			{
				name: "Vaibhav Raj Saxena",
				pos: "Member",
				src: "/teams/vaibhav.png",
			},
			{
				name: "Anirudh Ramasubramanian",
				pos: "Member",
				src: "/teams/shawarma.png",
			},
		],
	},
	{
		title: "Design & Decoration",
		href: "/team#design",
		icon: { src: "/teams/design.png", alt: "" },
		id: "design",
		members: [
			{
				name: "Vaidehi Pramod",
				pos: "Head of Design & Decoration",
				src: "/teams/vaidehi.png",
			},
			{
				name: "Krishang Mayur",
				pos: "Member",
				src: "/teams/krishang.png",
			},
			{
				name: "Leann Dennis",
				pos: "Member",
				src: "/teams/leann.png",
			},
			{
				name: "Asmi Amit Vanare",
				pos: "Member",
				src: "/teams/asmi.png",
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
				name: "Ishaan Gupta",
				pos: "Head of Logistics",
				src: "/teams/ishaan.png",
			},
			{
				name: "Tanvi Nair",
				pos: "Member",
				src: "/teams/tanvi.png",
			},
			{
				name: "Anish Suresh Kumar",
				pos: "Member",
				src: "/teams/anish.png",
			},
			{
				name: "Bryl Lizen Dias",
				pos: "Member",
				src: "/teams/bryl.png",
			},
			{
				name: "Nikhil Reddy",
				pos: "Member",
				src: "/teams/nikhil.png",
			},
			{
				name: "Fathima Hazeeb",
				pos: "Member",
				src: "/teams/fathima.png",
			},
			{
				name: "Alaine Bijosh",
				pos: "Member",
				src: "/teams/alaine.png",
			},
			{
				name: "Ridhima Pai",
				pos: "Member",
				src: "/teams/ridhima.png",
			},
			{
				name: "Hadassah Crystaline",
				pos: "Member",
				src: "/teams/hadassah.png",
			},
			{
				name: "Diya Rajiv",
				pos: "Member",
				src: "/teams/diya.png",
			},
			{
				name: "Dune Mary Johnson",
				pos: "Member",
				src: "/teams/dune.png",
			},
		],
	},
	{
		title: "Media",
		href: "/team#press",
		icon: { src: "/teams/press.png", alt: "" },
		id: "press",
		members: [
			{
				name: "Nathania Felix",
				pos: "Head of Media & PR",
				src: "/teams/nathania.png",
			},
			{
				name: "Dhiyashree Dhinesh",
				pos: "Member",
				src: "/teams/dhiyashree.png",
			},
			{
				name: "Devansh V Sharma",
				pos: "Member",
				src: "/teams/devansh.png",
			},
			{
				name: "Nadiya Abid Hussain",
				pos: "Member",
				src: "/teams/nadiya.png",
			},
			{
				name: "Abhiram Senthilkumar",
				pos: "Member",
				src: "/teams/abhiram.png",
			},
			{
				name: "Abhijith Roseben Pradeep",
				pos: "Member",
				src: "/teams/abhijith.png",
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
				name: "Arya Chaudhary",
				pos: "Head of Press",
				src: "/teams/arya.png",
			},
			{
				name: "Gayatri Sharma",
				pos: "Member",
				src: "/teams/gayatri.png",
			},
			{
				name: "Muhammed Zahin",
				pos: "Member",
				src: "/teams/placeholder.png",
			},
			{
				name: "Prisha Raghuram",
				pos: "Member",
				src: "/teams/prisha.png",
			},
			{
				name: "Vishakha Sharma",
				pos: "Member",
				src: "/teams/vishakha.png",
			},
			{
				name: "Nidhi Nambiar",
				pos: "Member",
				src: "/teams/nidhi.png",
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
				name: "Arya Rastogi",
				pos: "Member",
				src: "/teams/arya.r.png",
			},
			{
				name: "Akunth Khanna",
				pos: "Member",
				src: "/teams/akunth.png",
			},
			{
				name: "Aishwarya Saravanan",
				pos: "Member",
				src: "/teams/ashwarya.png",
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
				name: "Abhinav Patnaik",
				pos: "Head of Security & Runner",
				src: "/teams/abhinav.png",
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
				name: "Dhruvi Karia",
				pos: "Head of Finance",
				src: "/teams/dhruvi.png",
			},
			{
				name: "Ashi Bhatt",
				pos: "Member",
				src: "/teams/ashi.png",
			},
			{
				name: "Saranya Balasubramanian",
				pos: "Member",
				src: "/teams/saranya.png",
			},
			{
				name: "Mohammed Omar",
				pos: "Member",
				src: "/teams/omar.png",
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
				name: "Dhruv Karia",
				pos: "Head of Food",
				src: "/teams/dhruv.png",
			},
			{
				name: "Saurav Sanal",
				pos: "Member",
				src: "/teams/saurav.png",
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
