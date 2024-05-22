import clsx from "clsx";
import { motion } from "framer-motion";

import { generateKey } from "@/lib/utils";
import { BaseAnimationProps } from "@/lib/types";
import { animationVariants } from "@/lib/animations";

interface ListProps extends BaseAnimationProps {
	elements: string[] | React.ReactNode[];
	type?: "bullets" | "numbers" | "tick";
	className?: string;
	stagger?: number;
}

const List = ({ className, elements, type, animation, stagger }: ListProps) => {
	return (
		<ul
			className={clsx(
				"my-6 [&>li]:mt-2",
				type && type !== "tick" && (type === "bullets" ? "list-disc ml-6" : "list-decimal ml-6"),
				className
			)}
		>
			{elements.map((element, i) => (
				<motion.li
					variants={animationVariants}
					{...animation}
					transition={
						(stagger && {
							delay: i * stagger + (animation?.transition.delay || 0),
						}) || { ...animation?.transition }
					}
					className={clsx(type === "tick" && "flex items-center space-x-2")}
					key={generateKey()}
				>
					{type === "tick" && (
						<svg
							className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 16 12"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M1 5.917 5.724 10.5 15 1.5"
							/>
						</svg>
					)}
					<span>{element}</span>
				</motion.li>
			))}
		</ul>
	);
};

export default List;
