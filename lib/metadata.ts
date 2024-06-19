import { Metadata } from "next";

//* generates all the metadata configurations
export const generate_metadata = (
	title: string,
	description: string,
	img: string
): Metadata => ({
	metadataBase: new URL("https://nmmun.org/"),
	title,
	description,
	openGraph: {
		title,
		description,
		url: "https://nmmun.org",
		type: "website",
		images: [new URL(img, "https://nmmun.org/").href],
	},
	twitter: {
		title,
		description,
		card: "summary_large_image",
		images: [new URL(img, "https://nmmun.org/").href],
		creator: "Clupai8o0",
	},
	robots: {
		follow: true,
		index: true,
	},
	keywords:
		"MUN, Model United Nations, school MUN, New Millennium School, diplomacy, debate, global issues, leadership, international relations, NMMUN, New Millennium Model United Nations",
	icons: {
		icon: [{ url: new URL("/images/favicon-32x32.png", "https://nmmun.org/") }],
		shortcut: ["/images/favicon.ico"],
		apple: [
			{
				url: "/images/apple-touch-icon.png",
				sizes: "180x180",
				type: "image/png",
			},
		],
	},
});

//* each individual page's metadata
export const homeMetaData: Metadata = generate_metadata(
	"NMMUN - Empowering Tomorrow's Global Leaders",
	"Explore the world of diplomacy and global affairs with the New Millennium Model United Nations Conference. Engage in debates, draft resolutions, and broaden your horizons. Join us for an educational journey that shapes future leaders.",
	"join-us.jpeg"
);

export const teamsMetaData: Metadata = generate_metadata(
	"NMMUN: Team",
	"Meet the dedicated individuals who drive the success of our Model United Nations team. Get to know our passionate students, advisors, and leaders who are shaping future diplomats and global change-makers.",
	"/join-us.jpeg"
);

export const councilsMetaData: Metadata = generate_metadata(
	"NMMUN: Councils",
	"Explore the diverse world of diplomacy through our Model United Nations councils. Discover a range of unique councils, each with its own purpose and challenges. Get insights into these dynamic forums for global discourse, complete with descriptions and visuals.",
	"/join-us.jpeg"
);
export const galleryMetaData: Metadata = generate_metadata(
	"NMMUN: Gallery",
	"Journey through the captivating moments and memories of our Model United Nations conferences. Explore our gallery for a visual narrative of diplomacy, debate, and camaraderie that defines our MUN experience.",
	"/hero/hero-gallery.jpeg"
);
export const informationMetaData: Metadata = generate_metadata(
	"NMMUN: Information",
	"Discover the essentials for your Model United Nations experience. Access our comprehensive information page for key details on itinerary, dress code, Rules of Procedure, and more. Prepare to make your mark on the global stage.",
	"/join-us.jpeg"
);
export const contactMetaData: Metadata = generate_metadata(
	"NMMUN: Contact Us",
	"Reach out and connect with us through our Model United Nations contact page. Whether you have questions, want to collaborate, or seek information, we're here to assist. Get in touch and let's engage in meaningful dialogue.",
	"/join-us.jpeg"
);
export const registerMetaData: Metadata = generate_metadata(
	"NMMUN: Register",
	"Join our Model United Nations (MUN) conference as a chair, delegate, runner, or security personnel. Apply now through our easy-to-use Google Forms registration page. Secure your role in shaping global dialogues and fostering diplomacy.",
	"/join-us.jpeg"
);
