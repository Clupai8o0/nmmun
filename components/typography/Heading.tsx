import clsx from "clsx";
import { motion } from "framer-motion";

import { fontSerif } from "@/lib/fonts";
import { isDevelopment } from "@/lib/config";
import { TypographyProps } from "@/lib/types";
import { animationVariants } from "@/lib/animations";

const Heading = ({ children, className, animation }: TypographyProps) => {
	return (
		<motion.h1
			className={clsx(
				"scroll-m-20 text-4xl font-semibold tracking-tight lg:text-6xl capitalize",
				isDevelopment() && "font-serif",
				className
			)}
			style={(!isDevelopment() && { ...fontSerif.style }) || undefined}
			variants={animationVariants}
			{...animation}
		>
			{children}
		</motion.h1>
	);
};

export default Heading;
