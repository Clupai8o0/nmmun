import { motion } from "framer-motion";

import { animationVariants } from "@/lib/animations";
import { BaseAnimationProps } from "@/lib/types";

interface Props extends BaseAnimationProps {
	children: React.ReactNode;
}

const Animate = ({ children, animation }: Props) => {
	return (
		<motion.div variants={animationVariants} {...animation}>
			{children}
		</motion.div>
	);
};

export default Animate;
