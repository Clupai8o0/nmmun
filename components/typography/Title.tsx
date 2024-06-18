import clsx from "clsx";
import { motion } from "framer-motion";

import { TypographyProps } from "@/lib/types";
import { animationVariants } from "@/lib/animations";

interface Props extends TypographyProps {
	small?: boolean; //* for text content that are too long
}

const Title = ({ children, className, small, animation, center }: Props) => {
	return (
		<motion.h1
			className={clsx(
				"font-semibold tracking-tight",
				small ? "text-5xl md:text-8xl" : "text-7xl md:text-[160px] font-serif",
				center && "text-center",
				className
			)}
			variants={animationVariants}
			{...animation}
		>
			{children}
		</motion.h1>
	);
};

export default Title;
