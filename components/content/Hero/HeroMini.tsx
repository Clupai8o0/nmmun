import { BaseComponentProps } from "@/lib/types";
import clsx from "clsx";

interface Props extends BaseComponentProps {
	children: React.ReactNode;
	image: {
		src: string;
		alt: string;
		opacity?: number;
		className?: string;
	};
}

function HeroMini({
	children,
	className,
	image: { src, alt, opacity, className: imgClassName },
}: Props) {
	return (
		<section className="w-full flex justify-center p">
			<div className="max-w-7xl w-full py-28 md:py-20 relative rounded-2xl overflow-hidden bg-black shadow-xl">
				<img
					src={src}
					alt={alt}
					className={clsx(
						"w-full h-full absolute object-cover top-0 left-0",
						imgClassName
					)}
					style={{ opacity: opacity || 0.4 }}
				/>

				<div
					className={clsx(
						"relative z-10 flex flex-col justify-center items-center p",
						className
					)}
				>
					{children}
				</div>
			</div>
		</section>
	);
}

export default HeroMini;
