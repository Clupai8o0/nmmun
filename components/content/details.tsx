import React from "react";
import { motion } from "framer-motion";
import { inViewVariants } from "@/config/animations";

const Details = ({
	children,
	reverse,
	delay,
	className,
	opacity,
}: {
	children: React.ReactNode;
	reverse?: boolean;
	delay?: number;
	className?: string;
	opacity?: number;
}) => {
	return (
		<motion.p
			className={`text-lg leading-tight mt-4 font-medium ${className}`}
			variants={inViewVariants}
			initial={reverse ? "fromLeft" : "fromRight"}
			whileInView={inViewVariants.visible(opacity || 1)}
			transition={{
				duration: 0.4,
				delay,
			}}
			viewport={{ once: true, amount: 0.25 }}
		>
			{children}
		</motion.p>
	);
};

export default Details;
