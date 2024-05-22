import { BaseLayoutProps } from "@/lib/types";
import clsx from "clsx";

interface Props extends BaseLayoutProps {
	center?: boolean;
}

const Container = ({ children, className, id, background, center }: Props) => {
	return (
		<section
			className="relative p w-full flex justify-center snap-center"
			id={id}
		>
			{background}
			<div
				className={clsx(
					"flex flex-col relative z-10 max-w-7xl w-full py-28",
					center && "items-center",
					className
				)}
			>
				{children}
			</div>
		</section>
	);
};

export default Container;
