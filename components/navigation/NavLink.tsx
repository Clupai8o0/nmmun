import clsx from "clsx";
import Link from "next/link";

interface Props {
	className?: string;
	animation?: boolean;
	dark?: boolean;
	href: string;
	children: React.ReactNode;
}

const NavLink = ({ className, href, animation, dark, children }: Props) => {
	return (
		<Link
			href={href}
			className={clsx(
				"text-sm font-medium cursor-pointer opacity-75 hover:opacity-100",
				animation && "nav-link-anim nav-link-ltr",
				dark && "nav-link-anim-dark text-white",
				className
			)}
		>
			{children}
		</Link>
	);
};

export default NavLink;
