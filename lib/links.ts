import { BaseLink, CouncilLink, TeamLink } from "./types";

export const councils: CouncilLink[] = [
	{
		title: "UNSC",
		id: "unsc",
		desc: [
			"The UN Security Council (UNSC) is a significant body of the United Nations, based on the UN Charter. The organ is a major actor for the maintenance of international peace and security.",
			"With its five permanent members who hold veto power, the Security Council overlooks anything that is happening in the world that concerns security maintenance and potential threats to peace. This council is considered an Advanced level committee.",
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
		title: "SOCHUM",
		id: "sochum",
		desc: [
			"Social, Humanitarian, and Cultural Committee (SOCHUM), the Third Committee of the United Nations General Assembly, discusses issues regarding social problems at the individual level, particularly through the safeguard of marginalized or threatened groups, including indigenous people, women and children, and members of the press.",
			"It promotes and enforces basic freedoms and ideals meant to be enjoyed by the international community such as the right to life, the expression of cultures, the freedom of political participation, the protection of children's rights, and the promotion of social development, among many others. This is considered a Beginner level NMMUN council.",
		],
		href: "/council/sochum",
		icon: {
			src: "/councils/sochum.png",
			alt: "Social, Humanitarian, and Cultural Committee Logo",
		},
		topics: [
			"Preserving Freedom of Press and Ensuring Journalistic Integrity in the Digital Era",
			"Democratic Republic of the Congo (DRC) Crisis",
		],
		bgs: [
			{
				title: "Background Guide",
				url: "https://drive.google.com/file/d/1OawTzSoq47mfViI2MfgFH6kZkdemAZKA/view?usp=drive_link",
			},
		],
		members: [
			{
				name: "Caelyn Claudius",
				src: "/councils/chairs/caelyn.png",
			},
			{
				name: "Dhruvi Karia",
				src: "/councils/chairs/dhruvi.png",
			},
		],
	},
	{
		title: "SPECPOL",
		id: "specpol",
		desc: [
			"The Special Political and Decolonization Committee (SPECPOL) is the fourth committee of the United Nations General Assembly. Its mission is to address the generational and historically based effects of colonialism that are present throughout the world.",
			"This may include—but is not restricted to—exploitation based on race, class, gender, and other factors that may have resulted from countries' direct actions in the past. SPECPOL is considered a Beginner Level council.",
		],
		href: "/council/specpol",
		icon: {
			src: "/councils/specpol.png",
			alt: "The Special Political and Decolonization Committee Logo",
		},
		topics: [
			"Discussing the Senkaku Island Dispute",
			"Discussing the Humanitarian and Economic Aspects of Neocolonialist Exploitation",
		],
		bgs: [
			{
				title: "Background Guide",
				url: "https://drive.google.com/file/d/1idIZuqjySBwgbQTXGvxdbT8xDSZCJpMs/view?usp=drive_link",
			},
		],
		members: [
			{
				name: "Niranjana Menon",
				src: "/councils/chairs/niranjana.png",
			},
			{
				name: "Vaidehi Pramod",
				src: "/councils/chairs/vaidehi.png",
			},
		],
	},
	{
		title: "WTO",
		id: "wto",
		desc: "The overall objective of the World Trade Organization is to help its members use trade as a means to raise living standards, create jobs and improve people's lives. The WTO operates a global system of trade rules, it acts as a forum for negotiating trade agreements, settles trade disputes between its members and supports the needs of developing countries. WTO is a Moderate Experience level NMMUN council.",
		href: "/council/wto",
		icon: { src: "/councils/wto.png", alt: "world trade organization Logo" },
		topics: [
			"The Rise of Green Protectionism and its Impact on Commerce",
			"Trade-Related Aspects of Intellectual Property Rights",
		],
		bgs: [
			{
				title: "Background Guide",
				url: "https://drive.google.com/file/d/1WYxZHkaHLB-sFkHbvmXnO0-6rtJEzwxp/view?usp=drive_link",
			},
		],
		members: [
			{
				name: "Shyam Sundar",
				src: "/councils/chairs/shyam.png",
			},
			{
				name: "Mathew Luke",
				src: "/councils/chairs/mathew.png",
			},
		],
	},
	{
		title: "UNEP",
		id: "unep",
		desc: [
			"The United Nations Environment Program's mission is to inspire, inform, and enable nations and peoples to improve their quality of life without compromising that of future generations.",
			"For over 50 years, UNEP has worked with governments, civil society, the private sector and UN entities to address humanity's most pressing environmental challenges - from restoring the ozone layer to protecting the world's seas and promoting a green, inclusive economy. UNEP is considered to be a Beginner level NMMUN council.",
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
		title: "UNCSW",
		id: "uncsw",
		desc: "The Commission on the Status of Women (CSW) is the principal global intergovernmental body exclusively dedicated to the promotion of gender equality and the empowerment of women. The CSW is instrumental in promoting women's rights, documenting the reality of women's lives throughout the world, and shaping global standards on gender equality and the empowerment of women. UNCSW is a Beginner level NMMUN council.",
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
		title: "UNCCPCJ",
		id: "unccpcj",
		desc: [
			"The Commission on Crime Prevention and Criminal Justice (CCPCJ) was established by the Economic and Social Council (ECOSOC) as one of its functional commissions. The Commission acts as the principal policymaking body of the United Nations in the field of crime prevention and criminal justice.",
			"The CCPCJ also offers Member States a forum for exchanging expertise, experience and information in order to develop national and international strategies, and to identify priorities for combating crime. UNCCPCJ is a Moderate Experience level NMMUN council.",
		],
		href: "/council/unccpcj",
		icon: {
			src: "/councils/unccpcj.png",
			alt: "United Nations commission on crime prevention and criminal justice Logo",
		},
		topics: [
			"Addressing the challenges posed by Cybercrime and Online Terrorism.",
			"Fighting international financial crime in an increasingly cashless economy.",
		],
		bgs: [
			{
				title: "Background Guide",
				url: "https://drive.google.com/file/d/17t1OO9yDCkGqXrRD72SGFqZVw83B1KJ0/view?usp=drive_link",
			},
		],
		members: [
			{
				name: "Sana Anas",
				src: "/councils/chairs/sana.png",
			},
			{
				name: "Bryan Biju",
				src: "/councils/chairs/bryan.png",
			},
		],
	},
	{
		title: "G20",
		id: "g20",
		desc: "The G20, also known as the Group of 20, is an intergovernmental organization made up of 19 independent nations, the European Union, and the African Union. It works to address important global economic issues like international financial stability, reducing greenhouse gas emissions, and sustainable development. G20 is a Beginner Level NMMUN council.",
		href: "/council/g20",
		icon: { src: "/councils/g20.png", alt: "group of 20 Logo" },
		topics: [
			"The Zeroth Hour: Last stretch to acheive sustainable development, noting the immense need for climate action",
			"Technological transformation and digital public infrastructure ",
		],
		bgs: [
			{
				title: "Background Guide",
				url: "https://drive.google.com/file/d/1Dg7QZ33qaaGQ7VpiyjeqBPXdkaIqeH7y/view?usp=drive_link",
			},
		],
		members: [
			{
				name: "Kushagra Vashishth",
				src: "/councils/chairs/kushagra.png",
			},
			{
				name: "Anne Devassy",
				src: "/councils/chairs/anne.png",
			},
		],
	},
	{
		title: "LOK SABHA",
		id: "lok-sabha",
		desc: [
			"The Lok Sabha, constitutionally the House of the People, is the lower house of India's bicameral Parliament. The Constitution of India allows for a maximum of 550 members in the House, with 530 members representing the States and 20 representing the Union Territories.",
			"At present, the Lok Sabha has 543 seats filled by elected representatives. Responsible for the proper functioning of the ruling government, Lok Sabha introduces and passes bills for defence, finance, and home affairs of the country. Lok Sabha is a Moderate Experience level council.",
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
		title: "IPL",
		id: "ipl",
		desc: "The Indian Premier League, is a twenty-20 cricket tournament played by the cricket players from all over the world. It is annually held in India and contested by ten city-based franchise teams. Each team competes in 14 games during the group stage, playing the other four teams in their group twice (once at home and once away), the other four teams once, and the remaining team twice. This is an Advanced level NMMUN council.",
		href: "/council/ipl",
		icon: { src: "/councils/ipl.svg", alt: "indian premier league Logo" },
		topics: [
			"Draft Auction (15 teams, 12-18 players)",
			"Measures to prevent cheating (spot fixing) in the future.",
		],
		bgs: [
			{
				title: "Background Guide",
				url: "https://drive.google.com/file/d/1By73AiglZ1Wv0Jxnzrb2USDZshgCFjP4/view?usp=sharing",
			},
		],
		members: [
			{
				name: "Krish Verma",
				src: "/councils/chairs/krish.png",
			},
			{
				name: "Navodith Manoj",
				src: "/councils/chairs/navodith.png",
			},
		],
	},
	{
		title: "HJCC",
		id: "hjcc",
		desc: "HJCC is a unique Specialised Committee that allows delegate to travel through time to debate history's most iconic, important, and controversial issues. The fast-paced and unpredibuttonble nature of the Historical Joint Crisis Committee ensures that all delegates will never know what to expect next. Being an advanced crisis committee, the HJCC is a joint-crisis simulation that offers a unique experience designed for delegates with extensive experience and debate knowledge.",
		href: "/council/hjcc",
		icon: { src: "/councils/hjcc.png", alt: "hjcc Logo" },
		topics: ["Cuban Missile Crisis (Soviets and US)"],
		bgs: [
			{
				title: "Background Guide #1",
				url: "https://drive.google.com/file/d/11ONrEytLy5ONBUkd-7ehSGAqlsG9cTrW/view?usp=drive_link",
			},
			{
				title: "Background Guide #2",
				url: "https://drive.google.com/file/d/16o1A3xEa42TXaixelGScPI6zQOiM6Jql/view?usp=drive_link",
			},
		],
		members: [
			{
				name: "Rudra Dev Sumod",
				src: "/councils/chairs/rudra.png",
			},
			{
				name: "Kaashvi Subin",
				src: "/councils/chairs/kaashvi.png",
			},
			{
				name: "Hussain Mayoof",
				src: "/councils/chairs/hussain.png",
			},
			{
				name: "Prapti Dey",
				src: "/councils/chairs/prapti.png",
			},
		],
	},
	{
		title: "House of Representatives",
		id: "house-of-representatives",
		desc: [
			"As per the Constitution, the U.S. House of Representatives makes and passes federal laws. The House is one of Congress's two chambers (the other is the U.S. Senate), and part of the federal government's legislative branch.",
			"The number of voting representatives in the House is fixed by law at no more than 435, proportionally representing the population of the 50 states. This council discusses any issues relevant to the people of The United States of America, including agriculture, housing, trade, and more, and is considered a Moderate Experience level council.",
		],
		href: "/council/house-of-representatives",
		icon: {
			src: "/councils/house-of-representatives.png",
			alt: "house of representatives Logo",
		},
		topics: [
			"Gun Violence and Gun Control",
			"Abortion- the US' Post-Roe Chapter",
		],
		bgs: [
			{
				title: "Background Guide",
				url: "https://drive.google.com/file/d/1aRAedaOZNV_fN0AMBanAVZkbyIbzL_c8/view?usp=drive_link",
			},
		],
		members: [
			{
				name: "Shlokh Palav",
				src: "/councils/chairs/shlokh.png",
			},
			{
				name: "Patric Benoy",
				src: "/councils/chairs/patric.png",
			},
		],
	},
	{
		title: "SAARC",
		id: "saarc",
		desc: [
			"The South Asian Association for Regional Cooperation (SAARC) is an economic and political organization of eight countries in South Asia. It was established in 1985 when the Heads of State of Bangladesh, Bhutan, India, Maldives, Nepal, Pakistan and Sri Lanka formally adopted the charter.",
			"The organization promotes economic development and regional integration. SAARC maintains permanent diplomatic relations at the United Nations as an observer and has developed links with multilateral entities, including the European Union. SAARC is considered an Advanced level NMMUN council.",
		],
		href: "/council/saarc",
		icon: {
			src: "/councils/saarc.png",
			alt: "south asian association for regional cooperation Logo",
		},
		topics: [
			"Examining the Economic Crisis in Sri Lanka and its Consequences",
			"Addressing the Political and Economic situation of Afghanistan and its impact on the South Asian Subcontinent",
		],
		bgs: [
			{
				title: "Background Guide",
				url: "https://drive.google.com/file/d/1Ml-9zZYyPfvUoNuYIGQLv0yr6dupYACs/view?usp=drive_link",
			},
		],
		members: [
			{
				name: "Avvani S. Pawar",
				src: "/councils/chairs/avvani.png",
			},
		],
	},
	{
		title: "Fictional Crisis Committee",
		id: "fictional-crisis-committee",
		desc: "The Fictional Crisis Committee (FCC) offers a Model United Nations experience unlike any other. Delegates are challenged with fast-paced decision-making to solve complex, fictional crises, encouraging intense and heated discussions. This Specialised Committee of NMMUN'23 addresses topics that remain incredibly relevant to today's world, and specifically, to the theme for this year's NMMUN, “Zeroth Hour.” This is an Advanced Level Council.",
		href: "/council/fictional-crisis-committee",
		icon: { src: "/councils/fcc.png", alt: "fictional crisis committee Logo" },
		topics: ["Indira Gandhi's Cabinet during the Emergency (The Emergency)"],
		bgs: [
			{
				title: "Background Guide",
				url: "https://drive.google.com/file/d/17qtTbFmg8w4Xh520B2abPgzenGYLYoF3/view?usp=sharing",
			},
		],
		members: [
			{
				name: "Arnab Sengupta",
				src: "/councils/chairs/arnab.png",
			},
			{
				name: "Arya Rastogi",
				src: "/councils/chairs/arya.png",
			},
		],
	},
];

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

export const navLinks = [
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
