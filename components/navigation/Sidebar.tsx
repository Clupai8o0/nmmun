import clsx from "clsx";
import Link from "next/link";
import { Instagram, Mail, Menu } from "lucide-react";

import {
	Sheet,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";

import { useTime } from "@/hooks/useTime";

import { navLinks } from "@/lib/links";
import { generateKey } from "@/lib/utils";
import Logo from "./Logo";

interface Props {
	className?: string;
	dark?: boolean;
}

const Sidebar = ({ className, dark }: Props) => {
	const { isEventHappening, isEventOver } = useTime();

	return (
		<Sheet>
			<SheetTrigger className="xl:hidden">
				<Menu className={clsx("w-8 h-8", dark && "text-white")} />
			</SheetTrigger>
			<SheetContent
				className={clsx("flex flex-col gap-4 overflow-y-scroll h-full no-scrollbar bg-color-1", className)}
			>
				<SheetHeader className="w-full flex justify-center items-center">
					<Logo w={64} h={64} />
				</SheetHeader>

				{/* LINKS */}
				<ul className="flex flex-col gap-4 justify-center p-6">
					{navLinks.map((link) => {
						if (link.title === "Register")
							return isEventHappening || isEventOver ? (
								<li
									key={generateKey()}
									className={
										"uppercase text-xl line-through opacity-50 cursor-not-allowed"
									}
								>
									{link.title}
								</li>
							) : (
								<li key={generateKey()}>
									<Link
										href={link.href}
										className="uppercase text-xl hover:underline focus:underline disabled:opacity-50"
										title={link.title}
									>
										{link.title}
									</Link>
								</li>
							);
						else
							return (
								<li key={generateKey()}>
									<Link
										href={link.href}
										className="uppercase text-xl hover:underline focus:underline disabled:opacity-50"
										title={link.title}
									>
										{link.title}
									</Link>
								</li>
							);
					})}
				</ul>

				{/* SOCIALS */}
				<Separator className="bg-gray-700 opacity-40" />

				<SheetFooter>
					<div className="sm:flex sm:items-center sm:justify-between py-6">
						<span className="text-sm text-gray-500 dark:text-gray-400">
							© 2023 NMMUN™. All Rights Reserved.
						</span>

						<div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
							<a
								href="https://www.instagram.com/nmmun_23/"
								className="text-gray-500 hover:text-black"
							>
								<Instagram className="w-8 h-8" />
								<span className="sr-only">Instagram Page</span>
							</a>
							<a
								href="mailto:nmmun2023cs@gmail.com"
								className="text-gray-500 hover:text-black"
							>
								<Mail className="w-8 h-8" />
								<span className="sr-only">Email Link</span>
							</a>
						</div>
					</div>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
};

export default Sidebar;
