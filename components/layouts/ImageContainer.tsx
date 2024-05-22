import clsx from "clsx";
import { motion } from "framer-motion";

import { BaseAnimationProps, BaseLayoutProps } from "@/lib/types";
import { animationVariants } from "@/lib/animations";

interface Props extends BaseLayoutProps, BaseAnimationProps {
	img: {
		src: string;
		alt: string;
		className?: string;
	};
	reverse?: boolean;
}

const ImageContainer = ({
	children,
	className,
	id,
	background,
	reverse,
	img: { src, alt, className: imgClassName },
	animation,
}: Props) => {
	return (
		<section
			className="relative p w-full flex justify-center snap-center"
			id={id}
		>
			{background}
			<div
				className={clsx(
					"flex flex-col-reverse md:flex-row relative z-10 max-w-7xl w-full py-28 gap-8",
					reverse && "md:flex-row-reverse",
					className
				)}
			>
				<div className="w-full md:w-1/2 flex flex-col justify-center">
					{children}
				</div>
				<div className="w-full md:w-1/2">
					<motion.img
						src={src}
						alt={alt}
						className={clsx("w-full h-full", imgClassName)}
						variants={animationVariants}
						{...animation}
					/>
				</div>
			</div>
		</section>
	);
};

export default ImageContainer;
