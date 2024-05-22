import Link from "next/link";
import { v4 as generateKey } from "uuid";
import { motion } from "framer-motion";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

import { navLinks } from "@/lib/links";
import { animationVariants } from "@/lib/animations";
import { useTime } from "@/hooks/useTime";

import { Button, Logo, NavLink, NavLinkMenu, Sidebar } from ".";
import { TimerMini } from "../content";

const FloatingNavbar = () => {
	const { isEventHappening, isEventOver } = useTime();
	const [showFloatingNav, setShowFloatingNav] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 400) setShowFloatingNav(true);
			else setShowFloatingNav(false);
		});
	}, []);

	return (
		showFloatingNav && (
			<motion.nav
				className="p py-2 md:py-1 w-screen flex justify-center z-30 fixed top-4"
				variants={animationVariants}
				initial="fromTop"
				animate="visible"
				exit="fromTop"
				transition={{ duration: 0.4 }}
			>
				<div className="max-w-7xl flex items-center justify-between w-full shadow-md rounded-2xl bg-slate-50 p transition-all duration-300 py-4">
					{/* LOGO + COUNTDOWN */}
					<div className="flex gap-4 xl:gap-8 items-center">
						<Link href="/">
							<Logo w={54} h={54} />
						</Link>
						<TimerMini />
					</div>

					{/* LINKS - Desktop */}
					<div className="hidden xl:flex">
						<ul className={`flex gap-4 xl:gap-8 items-center`}>
							{navLinks.map((link) => {
								if (link.button) {
									return (
										<li key={generateKey()}>
											<Button
												href={link.href}
												animation
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
											/>
										</li>
									);
								} else {
									return (
										<li key={generateKey()}>
											<NavLink href={link.href} animation>
												{link.title}
											</NavLink>
										</li>
									);
								}
							})}
						</ul>
					</div>

					{/* LINKS - Mobile - SIDEBAR TOGGLE */}
					<Sidebar />
				</div>
			</motion.nav>
		)
	);
};

export default FloatingNavbar;
