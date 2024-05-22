//? Council implementation example

import { generate_metadata } from "@/lib/metadata";
import { councils } from "@/lib/links";

import type { Metadata } from "next";

//* The type of props coming from the link
type Props = {
	params: { id: string };
};

//* Dynamic metadata generation
export async function generateMetadata({
	params: { id },
}: Props): Promise<Metadata> {
	//* 1. Looking for the council based on the id given in the link
	let council: (typeof councils)[0] | any = undefined;
	for (let i = 0; i < councils.length; i++)
		if (councils[i].id === id) council = councils[i];

	//* 2. If a council is found, return the specific metadata
	if (council)
		return generate_metadata(
			`NMMUN - ${council?.title}`,
			council?.desc[0],
			council?.src
		);
	//! 3. If not found, return empty
	else
		return generate_metadata(
			"NMMUN - Council Not Found",
			"This council could not be found",
			""
		);
}

export default function BaseLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <>{children}s</>;
}
