import React from "react";

import { Heading } from "@/components";

function ProfilesContainer({
	children,
	title,
	grid
}: {
	children: React.ReactNode;
	title?: string;
	grid: string;
}) {
	return (
		<div className="w-full flex justify-center py-12" id={title}>
			<div className="max-w-7xl w-full">
				{title && <Heading className="mb-10">{title}</Heading>}
				<div className={`flex flex-col gap-4 md:grid ${grid} md:gap-6`}>
					{children}
				</div>
			</div>
		</div>
	);
}

export default ProfilesContainer;
