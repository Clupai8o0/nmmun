import Link from "next/link";
import clsx from "clsx";

import { Button as ShadButton } from "@/components/ui/button";

interface Props {
	children: React.ReactNode;
	href: string;
	target?: "_blank" | "_self";
	className?: string;
	disabled?: boolean;
	variant?:
		| "default"
		| "secondary"
		| "link"
		| "destructive"
		| "outline"
		| "ghost";
	animation?: boolean;
	dark?: boolean;
}

/**
 * Normal full page covering hero section without any carousel
 * @type {Object} Props
 * @property {React.ReactNode} children -> content
 * @property {string} href -> relative or about link path
 * @property {boolean} animation? -> button animation from previous code version, not preferred honestly
 * @property {string} className? -> custom styling
 * @property {boolean} dark? -> when the background is dark
 * @property {boolean} disabled? -> disable the button
 * @property {"_blank" | "_self"} target? -> optional target
 * @property {variant} variant? -> button variant
 * @returns
 */ //todo: custom coloring
const Button = ({
	children,
	href,
	target,
	className,
	disabled,
	variant,
	animation,
	dark,
}: Props) => {
	return !disabled ? (
		<Link href={href} target={target || "_blank"}>
			<ShadButton
				disabled={disabled}
				variant={variant}
				className={clsx(
					"rounded-md py-2 lg:py-3 px-6 lg:px-8 h-auto",
					variant === "link" && "!px-0",
					animation &&
						"hover:-translate-y-1 hover:scale-105 hover:shadow-2xl focus:scale-100 focus:translate-y-0 transition-all duration-300 ease-in-out",
					dark && "dark",
					disabled && "cursor-not-allowed",
					className
				)}
			>
				{children}
			</ShadButton>
		</Link>
	) : (
		<ShadButton
			disabled={disabled}
			variant={variant}
			className={clsx(
				"rounded-md hover:bg-opacity-30 py-2 lg:py-3 px-6 lg:px-8 h-auto",
				animation &&
					"hover:-translate-y-1 hover:scale-105 hover:shadow-2xl focus:scale-100 focus:translate-y-0 transition-all duration-300 ease-in-out",
				dark && "dark",
				disabled && "cursor-not-allowed",
				className
			)}
		>
			{children}
		</ShadButton>
	);
};

export default Button;
