import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { inViewVariants } from "@/config/animations";

const CTA = ({
	title,
	href,
	delay,
	secondary,
	icon,
	className,
	target,
	darkMode,
	noAnimation,
	type,
	disabled,
	notCenter
}: {
	title: string;
	href?: string;
	delay?: number;
	secondary?: boolean;
	icon?: React.ReactNode;
	className?: string;
	target?: string;
	darkMode?: boolean;
	noAnimation?: boolean;
	type?: "button" | "submit";
	disabled?: boolean;
	notCenter?: boolean;
}) => {
	return (
		<motion.div
			className={`w-full flex ${!notCenter && "justify-center"} ${className}`}
			variants={inViewVariants}
			initial={!noAnimation && "fromDown"}
			whileInView={(!noAnimation && "visible") || ""}
			transition={{
				duration: 0.4,
				delay,
			}}
			viewport={{ once: true, amount: 0.25 }}
		>
			{href && !disabled ? (
				<Link href={href} target={target}>
					{!secondary ? (
						<button
							disabled={disabled}
							type={type}
							className={`rounded-lg cursor-pointer ${
								darkMode
									? "text-black bg-white border-2 border-white hover:text-blue-600"
									: "text-white bg-black border-2 border-black hover:text-blue-300"
							} py-2 lg:py-3 px-6 lg:px-10 hover:-translate-y-1 hover:scale-105 focus:scale-100 focus:translate-y-0 hover:shadow-2xl transition-all duration-300 ease-in-out`}
						>
							<span className="flex items-center gap-2 whitespace-nowrap flex-nowrap font-medium">
								{icon} {title}
							</span>
						</button>
					) : (
						<button
							disabled={disabled}
							type={type}
							className={`rounded-lg cursor-pointer ${
								darkMode
									? "text-white hover:text-white border-2 border-white hover:bg-white"
									: "text-black hover:text-black border-2 border-black hover:bg-black"
							} hover:bg-opacity-30 py-2 lg:py-3 px-6 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl focus:scale-100 focus:translate-y-0 lg:px-8 transition-all duration-300 ease-in-out`}
						>
							<span className="whitespace-nowrap flex items-center gap-2 flex-nowrap">
								{icon} {title}
							</span>
						</button>
					)}
				</Link>
			) : (
				<>
					{!secondary ? (
						<button
							disabled={disabled}
							type={type}
							className={`rounded-lg cursor-pointer ${
								darkMode
									? "text-black bg-white border-2 border-white hover:text-blue-600"
									: "text-white bg-black border-2 border-black hover:text-blue-300"
							} py-2 lg:py-3 px-6 lg:px-10 ${
								!disabled &&
								"hover:-translate-y-1 hover:scale-105 hover:shadow-2xl"
							} focus:scale-100 focus:translate-y-0 transition-all duration-300 ease-in-out disabled:cursor-not-allowed disabled:opacity-30 disabled:border-0 disabled:text-gray-300`}
						>
							<span className="flex items-center gap-2 whitespace-nowrap flex-nowrap font-medium">
								{icon} {title}
							</span>
						</button>
					) : (
						<button
							disabled={disabled}
							type={type}
							className={`rounded-lg cursor-pointer ${
								darkMode
									? "text-white hover:text-white border-2 border-white hover:bg-white"
									: "text-black hover:text-black border-2 border-black hover:bg-black"
							} hover:bg-opacity-30 py-2 lg:py-3 px-6 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl focus:scale-100 focus:translate-y-0 lg:px-8 transition-all duration-300 ease-in-out disabled:cursor-not-allowed disabled:bg-gray-400 disabled:border-0 disabled:text-gray-300`}
						>
							<span className="whitespace-nowrap flex items-center gap-2 flex-nowrap">
								{icon} {title}
							</span>
						</button>
					)}
				</>
			)}
		</motion.div>
	);
};

export default CTA;
