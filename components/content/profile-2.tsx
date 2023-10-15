import React from "react";
import { motion } from "framer-motion";

import { inViewVariants } from "@/config/animations";

const Profile = ({
	src,
	alt,
	name,
	position,
	rounded,
}: {
	src: string;
	alt: string;
	name: string;
	position: string;
	rounded?: boolean;
}) => {
	return (
		<motion.div
			className={`max-w-sm rounded-lg overflow-hidden relative h-[400px] group ${
				rounded && "flex flex-col items-center pt-8"
			}`}
			variants={inViewVariants}
			initial="fromDown"
			whileInView="visible"
			transition={{
				duration: 0.4,
			}}
			viewport={{ once: true, amount: 0.25 }}
		>
			<img
				className={`${
					!rounded
						? "rounded-t-lg w-full mx-auto object-cover h-[400px] absolute top-0 left-0"
						: "rounded-full w-36 h-36"
				}`}
				src={src}
				alt={alt}
			/>

			<div className="absolute bottom-0 w-full h-36 bg-gradient-to-t from-[#744c24] to-transparent group-hover:bg-[#744c24] group-hover:h-full group-hover:bg-opacity-50 transition duration-300 cursor-pointer"></div>
			<div
				className={`p-5 absolute bottom-0 left-0 text-white ${
					rounded && "text-center"
				}`}
			>
				<h4 className="mb-1 text-2xl font-bold tracking-tight">{name}</h4>

				<p className="font-normal opacity-80">{position}</p>
			</div>
		</motion.div>
	);
};

export default Profile;
