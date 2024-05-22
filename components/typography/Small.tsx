import { TypographyProps } from "@/lib/types";
import React from "react";

const Small = ({ children, className }: TypographyProps) => {
	return (
		<small className={`text-sm font-medium leading-none ${className}`}>
			{children}
		</small>
	);
};

export default Small;
