import { navLinks } from "@/lib/links";
import { generateKey } from "@/lib/utils";
import { Instagram, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import clsx from "clsx";
import { isDevelopment } from "@/lib/config";
import { fontSerif } from "@/lib/fonts";

const Footer = ({ className }: { className?: string }) => {
	return (
		<footer className={`bg-[#060606] py-12 md:py-18 w-full p ${className}`}>
			<div className="w-full max-w-screen-xl mx-auto">
				<div className="md:flex md:items-center xl:items-start md:justify-between">
					<Link href="/" className="flex items-start mb-4 sm:mb-0">
						<Logo h={54} w={54} />

						<span
							className={clsx(
								"self-center text-2xl font-semibold whitespace-nowrap text-white ml-4",
								isDevelopment() && "font-serif"
							)}
							style={(!isDevelopment() && { ...fontSerif.style }) || undefined}
						>
							NMMUN
						</span>
					</Link>

					<div className="flex flex-col md:flex-row gap-y-3 xl:gap-y-0 gap-x-4 xl:gap-x-12 text-white mt-6 md:mt-0 xl:mt-4">
						{navLinks.map((link) => (
							<div className="flex flex-col" key={generateKey()}>
								<Link
									href={link.href}
									title={link.title}
									className="xl:font-semibold opacity-80 hover:opacity-100 xl:opacity-100 xl:hover:opacity-60 hover:underline uppercase xl:mb-6"
								>
									{link.title}
								</Link>
								<ul className="grid-rows-[repeat(15,minmax(0,1fr))] grid-flow-col gap-y-3 text-sm hidden xl:grid">
									{link.children.map((child) => (
										<li key={generateKey()}>
											<Link
												href={child.href}
												className="opacity-60 hover:opacity-100"
												title={child.title}
											>
												<p className="truncate w-full xl:max-w-28">
													{child.title}
												</p>
											</Link>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>

				<hr className="my-6 border-gray-500 sm:mx-auto xl:my-8" />

				<div className="sm:flex sm:items-center sm:justify-between">
					<span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
						© 2023 NMMUN™. All Rights Reserved.
					</span>

					<div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
						<a
							href="https://www.instagram.com/nmmun_23/"
							className="text-gray-300 hover:text-white"
						>
							<Instagram className="w-6 h-6" />
							<span className="sr-only">Instagram Page</span>
						</a>
						<a
							href="mailto:nmmun2023cs@gmail.com"
							className="text-gray-300 hover:text-white"
						>
							<Mail className="w-6 h-6" />
							<span className="sr-only">Email Link</span>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
