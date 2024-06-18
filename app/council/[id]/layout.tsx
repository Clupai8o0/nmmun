import { generate_metadata } from "@/lib/metadata";
import { councils } from "@/lib/links";

import type { Metadata } from "next";

type Props = {
	params: { id: string };
};

export async function generateMetadata({
	params: { id },
}: Props): Promise<Metadata> {
	let council: (typeof councils)[0] | any = undefined;
	for (let i = 0; i < councils.length; i++)
		if (councils[i].id === id) council = councils[i];

	if (council)
		return generate_metadata(
			`NMMUN - ${council?.title}`,
			council?.desc[0],
			council?.src
		);
	else
		return generate_metadata(
			"NMMUN - Council Not Found",
			"This council could not be found",
			""
		);
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
