import Link from "next/link";
import { motion } from "framer-motion";

import { inViewVariants } from "@/config/animations";

const ContentLink = ({
	src,
	alt,
	title,
	url,
	delay,
	circle,
}: {
	src: string;
	alt: string;
	title: string;
	url: string;
	delay?: number;
	circle?: boolean;
}) => {
	return (
		<Link href={url}>
			<motion.div
				className="flex items-center gap-4 rounded-xl hover:bg-[#f7eadd] p-2 md:flex-col md:p-12 md:hidden"
				variants={inViewVariants}
				initial="fromLeft"
				animate="visible"
				transition={{
					duration: 0.4,
					delay,
				}}
				viewport={{ once: true, amount: 0.25 }}
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
				variants={inViewVariants}
				initial="fromDown"
				whileInView="visible"
				transition={{
					duration: 0.4,
					delay,
				}}
				viewport={{ once: true, amount: 0.25 }}
			>
				<img
					src={src}
					alt={alt}
					className="w-14 h-14 md:w-16 md:h-16 object-contain"
				/>

				<p className="font-medium opacity-80 md:text-xl text-center">{title}</p>
			</motion.div>
		</Link>
	);
};

export default ContentLink;
