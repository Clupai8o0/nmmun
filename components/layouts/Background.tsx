import clsx from "clsx";
import Image from "next/image";

import { Colors } from "@/lib/colors";

interface Props {
	color: Colors | string;
	img?: {
		src: string;
		alt: string;
		opacity?: number;
		className?: string;
		blur?: "0" | "sm" | "md" | "lg" | "xl";
	};
}

const Background = ({ color, img }: Props) => {
	return (
		<div className={clsx(color, "absolute w-full h-full top-0 left-0 z-10")}>
			{img && (
				<>
					<div
						className={clsx(
							"absolute w-full h-full top-0 left-0 z-10",
							`backdrop-blur-${img.blur}`
						)}
					></div>
					<Image
						fill
						src={img.src}
						alt={img.alt}
						className={clsx(
							"w-full h-full top-0 left-0 absolute object-cover",
							img.className
						)}
						style={{ opacity: img.opacity }}
					/>
				</>
			)}
		</div>
	);
};

export default Background;
