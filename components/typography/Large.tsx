import { fontSans } from "@/lib/fonts";
import { TypographyProps } from "@/lib/types";
import clsx from "clsx";

const Large = ({ className, children }: TypographyProps) => {
	return (
		<div className={clsx("text-lg font-semibold", className)}>{children}</div>
	);
};

export default Large;
