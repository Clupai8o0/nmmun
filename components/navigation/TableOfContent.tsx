import Link from "next/link";
import { motion } from "framer-motion";

import { generateKey } from "@/lib/utils";
import { BaseComponentProps, BaseLink } from "@/lib/types";
import { animationVariants, onScrollAnimation } from "@/lib/animations";

import { Heading } from "../typography";

interface Props extends BaseComponentProps {
	title?: string;
	links: BaseLink[];
}

const TableOfContent = ({ title, links }: Props) => {
	return (
		<div
			className="w-full p py-8 md:py-16 flex justify-center place-content-center"
			id="table-of-content"
		>
			<div className="max-w-7xl w-full flex flex-col gap-4 md:gap-8">
				{title && (
					<Heading className="my-6" animation={onScrollAnimation("fromLeft")}>
						{title}
					</Heading>
				)}
				<div className="max-w-7xl w-full flex flex-col gap-2 md:grid md:grid-cols-3 lg:grid-cols-4">
					{links.map(({ href, icon: { src, alt }, title }, i) => (
						<Link href={href} key={generateKey()}>
							<motion.div
								className="flex items-center gap-4 rounded-xl hover:bg-[#f7eadd] p-2 md:flex-col md:p-12 md:hidden"
								variants={animationVariants}
								{...onScrollAnimation("fromLeft", {
									delay: i * 0.1,
								})}
							>
								<img
									src={src}
									alt={alt}
									className="w-8 h-8 md:w-20 md:h-20 object-contain"
								/>
								<p className="font-semibold md:text-xl">{title}</p>
							</motion.div>
							<motion.div
								className="hidden md:flex items-center gap-4 rounded-xl hover:bg-[#f7eadd] p-2 md:flex-col md:p-12 transition-all duration-300 ease-in-out hover:shadow-xl"
								variants={animationVariants}
								{...onScrollAnimation("fromDown", {
									delay: i * 0.1,
								})}
							>
								<img
									src={src}
									alt={alt}
									className="w-14 h-14 md:w-16 md:h-16 object-contain"
								/>

								<p className="font-medium opacity-80 md:text-xl text-center">
									{title}
								</p>
							</motion.div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default TableOfContent;
