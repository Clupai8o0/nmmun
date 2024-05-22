import { clsx } from "clsx";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

import { BaseComponentProps } from "@/lib/types";
import { Button } from "@/components/ui/button";

interface Props extends BaseComponentProps {
	fullScreen?: boolean;
	image: {
		src: string;
		alt: string;
		className?: string;
		opacity?: number;
	};
	children: React.ReactNode;
	scroll?: {
		className?: string;
		href: string;
	};
}

/**
 * Normal full page covering hero section without any carousel
 * @type {Object} Props
 * @property {boolean} fullScreen - Makes the hero cover the entire screen
 * @returns
 */
function Hero({ className, fullScreen, image, children, scroll }: Props) {
	return (
		<section
			className={clsx(
				"w-full flex justify-center items-center bg-black relative",
				fullScreen && "min-h-[100vh]"
			)}
		>
			<Image
				{...image}
				className={clsx(
					"w-full h-full object-cover absolute top-0 left-0",
					image.className
				)}
				fill
				style={{ opacity: image.opacity || 0.4 }}
			/>
			<div
				className={clsx(
					"relative z-10 flex flex-col justify-center items-center text-center p py-36",
					className
				)}
			>
				{children}

				{scroll && (
					<a href={scroll.href} className="absolute bottom-12">
						<Button
							variant="ghost"
							className={clsx(
								"dark bg-transparent hover:bg-white hover:bg-opacity-10 opacity-60 hover:opacity-100 animate-bounce rounded-full",
								scroll.className
							)}
							size="icon"
						>
							<ChevronDown />
						</Button>
					</a>
				)}
			</div>
		</section>
	);
}

export default Hero;
