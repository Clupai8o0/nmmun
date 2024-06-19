import clsx from "clsx";
import { motion } from "framer-motion";

import { TypographyProps } from "@/lib/types";
import { animationVariants } from "@/lib/animations";

const Paragraph = ({
	children,
	className,
	opacity,
	animation,
	center,
}: TypographyProps) => {
	return (
		<motion.p
			className={clsx(
				"leading-7 [&:not(:first-child)]:mt-6 font-sans",
				center && "text-center",
				className
			)}
			style={{ opacity }}
			variants={animationVariants}
			{...animation}
		>
			{children}
		</motion.p>
	);
};

export default Paragraph;
