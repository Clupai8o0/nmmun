import clsx from "clsx";
import { motion } from "framer-motion";

import { TypographyProps } from "@/lib/types";
import { animationVariants } from "@/lib/animations";

const Small = ({ children, className, animation }: TypographyProps) => {
	return (
		<motion.small
			className={clsx("text-sm font-medium leading-none", className)}
			variants={animationVariants}
			{...animation}
		>
			{children}
		</motion.small>
	);
};

export default Small;
