import clsx from "clsx";
import { motion } from "framer-motion";

import { TypographyProps } from "@/lib/types";
import { animationVariants } from "@/lib/animations";

const Lead = ({ children, className, animation }: TypographyProps) => {
	return (
		<motion.p
			className={clsx("text-xl text-muted-foreground font-sans", className)}
			variants={animationVariants}
			{...animation}
		>
			{children}
		</motion.p>
	);
};

export default Lead;
