import clsx from "clsx";
import { motion } from "framer-motion";

import { TypographyProps } from "@/lib/types";
import { animationVariants } from "@/lib/animations";

const Large = ({ className, children, animation }: TypographyProps) => {
	return (
		<motion.div
			className={clsx("text-lg font-semibold", className)}
			variants={animationVariants}
			{...animation}
		>
			{children}
		</motion.div>
	);
};

export default Large;
