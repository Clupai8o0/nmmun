import clsx from "clsx";
import { motion } from "framer-motion";

import { TypographyProps } from "@/lib/types";
import { animationVariants } from "@/lib/animations";

const Heading = ({ children, className, animation }: TypographyProps) => {
	return (
		<motion.h1
			className={clsx(
				"scroll-m-20 text-4xl font-semibold tracking-tight lg:text-6xl capitalize font-serif",
				className
			)}
			variants={animationVariants}
			{...animation}
		>
			{children}
		</motion.h1>
	);
};

export default Heading;
