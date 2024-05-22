import { TypographyProps } from "@/lib/types";
import React from "react";

const SubSubHeading = ({ children, className }: TypographyProps) => {
	return (
		<h3
			className={`scroll-m-20 text-2xl font-semibold tracking-tight ${className}`}
		>
			{children}
		</h3>
	);
};

export default SubSubHeading;
