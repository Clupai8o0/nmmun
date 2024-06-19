import clsx from "clsx";
import { motion } from "framer-motion";

import { TypographyProps } from "@/lib/types";
import { animationVariants } from "@/lib/animations";

const SubSubHeading = ({ children, className, animation }: TypographyProps) => {
	return (
		<motion.h3
			className={clsx(
				"scroll-m-20 text-2xl font-semibold tracking-tight font-serif",
				className
			)}
			variants={animationVariants}
			{...animation}
		>
			{children}
		</motion.h3>
	);
};

export default SubSubHeading;
