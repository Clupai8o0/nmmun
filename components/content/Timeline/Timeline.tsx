import clsx from "clsx";

interface Props {
	children?: React.ReactNode;
	className?: string;
	start?: boolean;
	end?: boolean;
	time: {
		date: string;
		className?: string;
	};
}

const Timeline = ({ className, children, time, start, end }: Props) => {
	return (
		<li className={clsx("ml-4", !end && "mb-4", className)}>
			<div
				className={clsx(
					"absolute w-4 h-4 bg-color-3 rounded-full -left-2 border border-white",
					!start && "mt-1",
					end && "mt-2"
				)}
			></div>
			<time
				className={clsx(
					"text-xl font-medium leading-none text-gray-800",
					time.className
				)}
			>
				{time.date}
			</time>
			{children}
		</li>
	);
};

export default Timeline;
