import clsx from "clsx";

interface Props {
	children: React.ReactNode;
	className?: string;
}

const TimelineContainer = ({ children, className }: Props) => {
	return (
		<ol className={clsx("relative border-l-2 border-color-3", className)}>
			{children}
		</ol>
	);
};

export default TimelineContainer;
