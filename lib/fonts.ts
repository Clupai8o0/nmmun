import { Poppins, IBM_Plex_Mono, Playfair_Display } from "next/font/google";

export const fontSans = Poppins({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
});
export const fontMono = IBM_Plex_Mono({
	subsets: ["latin"],
	weight: ["400", "500", "600"],
});
export const fontSerif = Playfair_Display({ subsets: ["latin"] });
