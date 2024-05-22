import clsx from "clsx";
import { motion } from "framer-motion";

import { TypographyProps } from "@/lib/types";
import { isDevelopment } from "@/lib/config";
import { fontSerif } from "@/lib/fonts";
import { animationVariants } from "@/lib/animations";

const SubHeading = ({ children, className, animation }: TypographyProps) => {
	return (
		<motion.h2
			className={clsx(
				"scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0",
				isDevelopment() && "font-serif",
				className
			)}
			style={(!isDevelopment() && { ...fontSerif.style }) || undefined}
			variants={animationVariants}
			{...animation}
		>
			{children}
		</motion.h2>
	);
};

export default SubHeading;
