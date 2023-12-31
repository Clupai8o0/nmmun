import React from "react";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { navLinks } from "@/config/links";
import { v4 as generateKey } from "uuid";
import { Logo } from "..";

function Footer({ className }: { className?: string }) {
	return (
		// <footer className={`bg-[#160900] py-12 md:py-18 w-full p-h ${className}`}>
		<footer className={`bg-[#060606] py-12 md:py-18 w-full p-h ${className}`}>
			<div className="w-full max-w-screen-xl mx-auto">
				<div className="sm:flex sm:items-center sm:justify-between">
					<Link href="/" className="flex items-center mb-4 sm:mb-0">
						<Logo h={54} w={54} />

						<span className="self-center text-2xl font-semibold whitespace-nowrap text-white ml-4">
							NMMUN
						</span>
					</Link>

					<ul className="flex flex-col md:flex-row gap-4 lg:gap-8 items-start md:items-center my-8 md:m-0">
						{navLinks.map((link) => (
							<li key={generateKey()}>
								<Link
									href={link.href}
									className="link text-white hover:opacity-80 cursor-pointer"
									title={link.name}
								>
									{link.name}
								</Link>
							</li>
						))}
					</ul>
				</div>

				<hr className="my-6 border-gray-500 sm:mx-auto lg:my-8" />

				<div className="sm:flex sm:items-center sm:justify-between">
					<span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
						© 2023 NMMUN™. All Rights Reserved.
					</span>

					<div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
						<a
							href="https://www.instagram.com/nmmun_23/"
							className="text-gray-300 hover:text-white"
						>
							<AiFillInstagram className="w-6 h-6" />
							<span className="sr-only">Instagram Page</span>
						</a>
						<a
							href="mailto:nmmun2023cs@gmail.com"
							className="text-gray-300 hover:text-white"
						>
							<MdEmail className="w-6 h-6" />
							<span className="sr-only">Email Link</span>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
