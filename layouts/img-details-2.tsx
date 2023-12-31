import React from "react";
import { motion } from "framer-motion";
import { inViewVariants } from "@/config/animations";

function ImageWithDetails({
	children,
	reverse,
	whiteText,
	className,
	bgImg,
	bgImgAlt,
	bgOpacity,
	src,
	alt,
	w,
	h,
	id,
	imgOpacity,
}: {
	children: React.ReactNode;
	reverse?: boolean;
	whiteText?: boolean;
	className?: string;
	src?: string; //todo: make this required
	alt?: string;
	w?: string; // todo: give this options
	h?: string;
	bgImg?: string;
	bgImgAlt?: string;
	bgOpacity?: string;
	id?: string;
	imgOpacity?: string | number;
}) {
	return (
		<section
			className={`flex justify-center p-h w-full ${className} bg-fixed bg-center bg-no-repeat bg-cover relative`}
			id={id}
		>
			{bgImg ? (
				<img
					src={bgImg}
					alt={bgImgAlt}
					className={`w-full h-full absolute top-0 left-0 object-cover ${bgOpacity}`}
				/>
			) : (
				""
			)}

			<div className="hidden md:block md:w-1/2 bg-black absolute top-0 left-0 h-full overflow-y-hidden">
				<img
					src={src ? src : "/dummy.png"} // todo: make this requried
					alt={alt ? alt : "some alt text"}
					className={`w-full object-cover h-full`}
					style={{ opacity: imgOpacity }}
				/>
			</div>

			<div className="w-full md:hidden bg-black absolute top-0 left-0 h-full overflow-y-hidden">
				<img
					src={src ? src : "/dummy.png"} // todo: make this requried
					alt={alt ? alt : "some alt text"}
					className={`w-full object-cover h-full`}
					style={{ opacity: 0.4 }}
				/>
			</div>

			<div
				className={`flex flex-col ${
					reverse
						? "md:flex-row-reverse"
						: "md:flex-row md:justify-end md:items-center"
				} md:items-center gap-8 ${
					whiteText ? "text-white" : "text-black"
				} max-w-7xl w-full relative z-10`}
			>
				{/* <motion.div
					className="md:w-1/2 flex justify-center items-center bg-black rounded-2xl"
					variants={inViewVariants}
					initial={!reverse ? "fromLeft" : "fromRight"}
					whileInView={inViewVariants.visible(1)}
					transition={{
						duration: 0.4,
					}}
					viewport={{ once: true, amount: 0.25 }}
				>
					<img
						src={src ? src : "/dummy.png"} // todo: make this requried
						alt={alt ? alt : "some alt text"}
						className={`absolute top-0 left-0 w-1/2 h-full object-cover`}
						style={{ opacity: imgOpacity }}
					/>
				</motion.div> */}
				<div className="w-full md:w-1/2 md:pl-6">{children}</div>
			</div>
		</section>
	);
}

export default ImageWithDetails;
