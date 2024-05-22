import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import { BaseComponentProps } from "@/lib/types";
import { generateKey } from "@/lib/utils";
import clsx from "clsx";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface Props extends BaseComponentProps {
	children: React.ReactNode;
	images: {
		src: string;
		alt: string;
	}[];
	opacity?: number;
	scroll?: {
		className?: string;
		href: string;
	};
}

const HeroCarousel = ({
	className,
	images,
	opacity,
	scroll,
	children,
}: Props) => {
	const plugin = useRef(Autoplay({ delay: 5000 }));

	return (
		<Carousel
			plugins={[plugin.current]}
			className={clsx("w-full h-screen bg-black relative", className)}
		>
			<CarouselContent>
				{images.map((img) => (
					<CarouselItem key={generateKey()}>
						<img
							{...img}
							className="object-cover w-full h-screen"
							style={{ opacity }}
						/>
					</CarouselItem>
				))}
			</CarouselContent>

			<div
				className={clsx(
					"absolute top-0 left-0 w-full h-full z-10 flex flex-col justify-center items-center text-center p",
					className
				)}
			>
				{children}

				{scroll && (
					<a href={scroll.href} className="absolute bottom-12 z-12">
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
		</Carousel>
	);
};

export default HeroCarousel;
