import clsx from "clsx";

interface Props {
	children: React.ReactNode;
	className?: string;
}

const Details = ({ children, className }: Props) => {
	return <div className={clsx("w-full md:w-2/3", className)}>{children}</div>;
};

export default Details;
