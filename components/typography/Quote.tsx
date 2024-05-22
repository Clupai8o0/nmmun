import clsx from "clsx";
import { motion } from "framer-motion";

import { fontSerif } from "@/lib/fonts";
import { isDevelopment } from "@/lib/config";
import { TypographyProps } from "@/lib/types";
import { animationVariants } from "@/lib/animations";

interface Props extends TypographyProps {
	quotationSize?: string | number;
}

const Quote = ({ children, className, animation, quotationSize }: Props) => {
	return (
		<blockquote
			className={clsx(
				"mt-6 border-l-2 pl-6 italic gap-2",
				isDevelopment() && "font-serif",
				className
			)}
			style={(!isDevelopment() && { ...fontSerif.style }) || undefined}
		>
			<motion.div className="flex" variants={animationVariants} {...animation}>
				<span style={{ fontSize: quotationSize }}>“</span>
				<span>{children}</span>
			</motion.div>
		</blockquote>
	);
};

export default Quote;
