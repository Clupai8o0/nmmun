import Image from "next/image";

// Icons
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

// Animation
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { inViewVariants } from "@/config/animations";

// Components
import { CTA, ScrollDown, Timer } from "..";
import Carousel from "./carousel";
import { eventDateInWords } from "@/config/details";

interface Contents {
	title: string | React.ReactNode;
	showTimer?: boolean;
	showContactCTA?: boolean;
	showCTA?: boolean;
	showYear?: boolean;
	desc?: string | React.ReactNode;
	src: string;
	alt: string;
	className?: string;
	variant?: boolean;
	mobileMini?: boolean;
	whileInView?: boolean;
	carousel?: boolean;
	images?: string[];
	bgImgOpacity?: number;
	blackText?: boolean;
	showDate?: boolean;
	uniqueDesign?: boolean;
	ctaMargin?: string;
	smallerTitle?: boolean;
	bottomGradient?: React.ReactNode;
	fullPage?: boolean;
}

const HeroContents = ({
	title,
	showTimer,
	showContactCTA,
	showYear,
	showCTA,
	desc,
	mobileMini,
	whileInView,
	uniqueDesign,
	blackText,
	showDate,
	ctaMargin,
	smallerTitle,
	bottomGradient,
}: Contents) => {
	return (
		<>
			{/* TITLE */}
			<motion.h1
				className={`${!smallerTitle ? "title" : "smaller-title"} ${
					mobileMini && "title-mobile-mini"
				} relative z-10 text-center ${blackText && "text-black"} mb-4 md:mb-0`}
				variants={inViewVariants}
				initial="fromDown"
				animate={(!whileInView && "visible") || ""}
				whileInView={(whileInView && "visible") || ""}
				transition={{
					duration: 0.4,
					delay: (!whileInView && 2.4) || 0,
				}}
				viewport={(whileInView && { once: true, amount: 0.25 }) || undefined}
			>
				{title}
			</motion.h1>

			{/* YEAR */}
			{showYear && (
				<motion.span
					className={`text-xl font-medium opacity-80 relative z-10 ${
						blackText && "text-black"
					}`}
					variants={inViewVariants}
					initial="fromDown"
					animate={(!whileInView && inViewVariants.visible(0.9)) || ""}
					whileInView={(whileInView && inViewVariants.visible(0.9)) || ""}
					transition={{
						duration: 0.4,
						delay: (!whileInView && 2.6) || 0,
					}}
					viewport={(whileInView && { once: true, amount: 0.25 }) || undefined}
				>
					2023-24
				</motion.span>
			)}

			<motion.p
				className={`text-center relative z-10 mt-4 px-4 ${
					blackText && "text-black"
				} md:text-lg mb-4 md:mb-0`}
				variants={inViewVariants}
				initial="fromDown"
				animate={(!whileInView && inViewVariants.visible(0.9)) || ""}
				whileInView={(whileInView && inViewVariants.visible(0.9)) || ""}
				transition={{
					duration: 0.4,
					delay: (!whileInView && 2.6) || 0,
				}}
				viewport={(whileInView && { once: true, amount: 0.25 }) || undefined}
			>
				{desc} <br /> {showDate && <>Save the date: {eventDateInWords}</>}
			</motion.p>

			{/* COUNTDOWN */}
			{showTimer && <Timer delay={2.8} whileInView={whileInView} />}

			{/* DATE */}
			{/* {showDate && (
				<motion.span
					className="text-white relative z-10 md:mt-2 mb-6 md:text-lg"
					variants={inViewVariants}
					initial="fromDown"
					animate={!whileInView ? inViewVariants.visible(0.9) : ""}
					whileInView={whileInView ? inViewVariants.visible(0.9) : ""}
					viewport={{ once: true, amount: 0.25 }}
					transition={{
						duration: 0.6,
						delay: (!whileInView && 2.8) || 0,
					}}
				>
					Save the date: {eventDateInWords}
				</motion.span>
			)} */}

			{/* CTA */}
			{showCTA && (
				<motion.div
					className={`flex gap-2 md:gap-4 mt-4 relative z-10 ${
						blackText && "text-black"
					} ${ctaMargin} ${!showTimer && "mt-8"}`}
					variants={inViewVariants}
					initial="fromDown"
					animate={(!whileInView && "visible") || ""}
					whileInView={(whileInView && "visible") || ""}
					transition={{
						duration: 0.4,
						delay: (!whileInView && 3) || 0,
					}}
					viewport={(whileInView && { once: true, amount: 0.25 }) || undefined}
				>
					<CTA title="Register" href="/register" darkMode />
					<CTA title="Contact Us" href="/contact" secondary darkMode />
				</motion.div>
			)}

			{/* CONTACT CTA */}
			{showContactCTA && (
				<motion.div
					className="flex gap-2 md:gap-4 mt-4 md:mt-6 relative z-10"
					variants={inViewVariants}
					initial="fromDown"
					animate={(!whileInView && "visible") || ""}
					whileInView={(whileInView && "visible") || ""}
					transition={{
						duration: 0.4,
						delay: (!whileInView && 3) || 0,
					}}
					viewport={(whileInView && { once: true, amount: 0.25 }) || undefined}
				>
					<CTA
						title="Instagram"
						href="https://www.instagram.com/nmmun_23/"
						target="_blank"
						icon={<AiFillInstagram className="w-6 h-6" />}
						darkMode
					/>
					<CTA
						title="Email"
						target="_blank"
						href="mailto:nmmun2023cs@gmail.com"
						icon={<MdEmail className="w-6 h-6" />}
						secondary
						darkMode
					/>
				</motion.div>
			)}
		</>
	);
};

const Hero = (props: Contents) => {
	const { className, src, alt, variant, images, carousel, bgImgOpacity, bottomGradient, fullPage } =
		props;

	return variant ? (
		// BOX HERO
		<motion.section
			className={`text-white w-full flex justify-center p-h ${className}`}
			variants={inViewVariants}
			initial="fromDown"
			whileInView="visible"
			viewport={{ once: true, amount: 0.25 }}
			transition={{
				duration: 0.4,
			}}
		>
			<div className="max-w-7xl w-full py-28 md:py-20 relative rounded-2xl overflow-hidden bg-black shadow-xl">
				{/* <Image
					src={src}
					alt={alt}
					fill
					className={`w-full h-full object-cover ${
						bgImgOpacity ? bgImgOpacity : "opacity-40"
					} absolute top-24 left-0`}
				/> */}
				{/* <div className="w-full h-full absolute top-0 left-0 z-10"></div> */}
				<img
					src={src}
					alt={alt}
					className={`w-full h-full absolute object-cover top-0 left-0`}
					style={{ opacity: bgImgOpacity || 0.4 }}
				/>

				<div className="relative z-50 flex flex-col justify-center items-center">
					<HeroContents {...props} />
				</div>
			</div>
		</motion.section>
	) : (
		// FULL HERO
		<section
			className={`text-white w-full ${
				fullPage && "min-h-[100vh]"
			} flex justify-center items-center p-h bg-black ${className} relative pt-24`}
		>
			{/* <img
					src={src}
					alt={alt}
					className="w-full h-full object-cover opacity-40 absolute top-0 left-0"
				/> */}
			{!carousel ? (
				<Image
					src={src}
					alt={alt}
					fill
					className="w-full h-full object-cover absolute top-0 left-0"
					style={{ opacity: bgImgOpacity || 0.4 }}
				/>
			) : (
				<div className="absolute w-full h-full top-0 left-0">
					<Carousel>
						{
							//@ts-ignore
							images.map((src) => (
								<img
									src={src}
									alt={alt}
									className="min-w-full object-cover"
									style={{ opacity: bgImgOpacity || 0.4 }}
								/>
							))
						}
					</Carousel>
				</div>
			)}

			{bottomGradient}

			<div className="max-w-7xl w-full flex flex-col justify-center items-center py-28 md:py-20 relative ">
				<HeroContents {...props} />
				{/* <ScrollDown /> */}
			</div>
		</section>
	);
};

export default Hero;
