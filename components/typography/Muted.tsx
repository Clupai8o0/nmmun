import clsx from "clsx";
import { motion } from "framer-motion";

import { TypographyProps } from "@/lib/types";
import { animationVariants } from "@/lib/animations";

const Muted = ({ children, className, animation }: TypographyProps) => {
	return (
		<motion.p
			className={clsx("text-sm text-muted-foreground", className)}
			variants={animationVariants}
			{...animation}
		>
			{children}
		</motion.p>
	);
};

export default Muted;
