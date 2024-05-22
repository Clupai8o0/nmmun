import clsx from "clsx";
import { motion } from "framer-motion";

import { fontSerif } from "@/lib/fonts";
import { TypographyProps } from "@/lib/types";
import { isDevelopment } from "@/lib/config";
import { animationVariants } from "@/lib/animations";

interface Props extends TypographyProps {
	small?: boolean;
}

const Title = ({ children, className, small, animation, center }: Props) => {
	return (
		<motion.h1
			className={clsx(
				"font-semibold tracking-tight",
				small ? "text-5xl md:text-8xl" : "text-7xl md:text-[160px]",
				isDevelopment() && "font-serif",
				center && "text-center",
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

export default Title;
