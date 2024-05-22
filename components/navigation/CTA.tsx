import clsx from "clsx";
import { motion } from "framer-motion";

import { BaseAnimationProps } from "@/lib/types";
import { animationVariants } from "@/lib/animations";

import { useTime } from "@/hooks/useTime";

import Button from "./Button";

interface Props extends BaseAnimationProps {
	className?: string;
	light?: boolean;
}

const CTA = ({ className, animation, light }: Props) => {
	const { isEventOver, isEventHappening } = useTime();

	return (
		<motion.div
			className={clsx("flex gap-4 mt-6", className)}
			variants={animationVariants}
			{...animation}
		>
			<Button
				href="/register"
				dark={!light}
				animation
				disabled={isEventOver || isEventHappening}
			>
				Register
			</Button>
			<Button
				href="/contact-us"
				variant="outline"
				className={clsx(
					"bg-transparent hover:bg-white hover:bg-opacity-20 hover:text-white",
					light && "border-black hover:bg-transparent hover:text-black"
				)}
				animation
			>
				Contact Us
			</Button>
		</motion.div>
	);
};

export default CTA;
