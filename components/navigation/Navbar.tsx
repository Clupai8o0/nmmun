import Link from "next/link";
import { motion } from "framer-motion";

import { navLinks } from "@/lib/links";
import { generateKey } from "@/lib/utils";
import { animationVariants, animation } from "@/lib/animations";

import { useTime } from "@/hooks/useTime";

import { Button, Logo, NavLink, NavLinkMenu, Sidebar } from ".";
import { TimerMini } from "../content";
import clsx from "clsx";

interface Props {
	dark?: boolean;
	delay?: number;
}

const Navbar = ({ delay, dark }: Props) => {
	const { isEventHappening, isEventOver } = useTime();

	return (
		<motion.nav
			className={clsx(
				"p py-4 w-full flex justify-center absolute top-0 left-0 z-[40]",
				dark && "text-white"
			)}
			variants={animationVariants}
			{...animation("fromTop", {
				delay
			})}
		>
			<div className="w-full max-w-7xl flex justify-between">
				{/* LOGO + COUNTDOWN */}
				<div className="flex gap-4 xl:gap-8 items-center">
					<Link href="/">
						<Logo w={64} h={64} />
					</Link>
					<TimerMini dark={dark} />
				</div>

				{/* LINKS - Desktop */}
				<div className="hidden xl:flex">
					<ul
						className={clsx(
							"flex gap-4 xl:gap-8 items-center",
							dark && "text-white"
						)}
					>
						{navLinks.map((link) => {
							if (link.button) {
								return (
									<li key={generateKey()}>
										<Button
											href={link.href}
											animation
											dark={dark}
											disabled={isEventOver || isEventHappening}
										>
											{link.title}
										</Button>
									</li>
								);
							} else if (link.menu) {
								return (
									<li key={generateKey()}>
										<NavLinkMenu
											trigger={{
												...link,
											}}
											content={link.children.map((child) => ({
												title: child.title,
												href: child.href,
												img: {
													src: child.icon.src,
													alt: child.icon.alt,
												},
											}))}
											dark={dark}
										/>
									</li>
								);
							} else {
								return (
									<li key={generateKey()}>
										<NavLink href={link.href} animation dark={dark}>
											{link.title}
										</NavLink>
									</li>
								);
							}
						})}
					</ul>
				</div>

				<Sidebar dark={dark} />
			</div>
		</motion.nav>
	);
};

export default Navbar;
