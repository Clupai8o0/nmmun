import React from "react";
import { motion } from "framer-motion";
import { v4 as generateKey } from "uuid";
import ReactMasonry, { ResponsiveMasonry } from "react-responsive-masonry";

import { animationVariants, onScrollAnimation } from "@/lib/animations";

import { Button } from "../navigation";
import { Heading } from "../typography";

interface Props {
	title: string;
	dir: string;
	href: string;
	gridMatrix: [number[], number[], number[]];
}

const Masonry = ({ title, dir, href, gridMatrix }: Props) => {
	return (
		<div className="w-full mt-6">
			<Heading className="mb-8" animation={onScrollAnimation("fromLeft")}>
				{title}
			</Heading>

			<ResponsiveMasonry
				columnsCountBreakPoints={{ 350: 1, 500: 2 }}
				className="md:hidden"
			>
				<ReactMasonry gutter="8px">
					{[...gridMatrix[0], ...gridMatrix[1], ...gridMatrix[2]].map((n) => (
						<motion.img
							className="relative h-auto w-full rounded-lg object-cover"
							src={`/gallery/${dir}/${n}.png`}
							alt="gallery pic"
							variants={animationVariants}
							{...onScrollAnimation("fromDown")}
							key={generateKey()}
						/>
					))}
				</ReactMasonry>
			</ResponsiveMasonry>

			<div className="hidden md:flex gap-x-2">
				<div className="flex flex-col gap-y-2 w-1/3">
					{gridMatrix[0].map((i) => (
						<motion.img
							variants={animationVariants}
							{...onScrollAnimation("fromDown")}
							className="h-auto w-full rounded-lg"
							src={`/gallery/${dir}/${i}.png`}
							alt="gallery picture"
							key={generateKey()}
						/>
					))}
				</div>

				<div className="flex flex-col gap-y-2 w-1/3">
					{gridMatrix[1].map((i) => (
						<motion.img
							variants={animationVariants}
							{...onScrollAnimation("fromDown")}
							className="h-auto w-full rounded-lg"
							src={`/gallery/${dir}/${i}.png`}
							alt="gallery picture"
							key={generateKey()}
						/>
					))}
				</div>

				<div className="flex flex-col gap-y-2 w-1/3">
					{gridMatrix[2].map((i) => (
						<motion.img
							variants={animationVariants}
							{...onScrollAnimation("fromDown")}
							className="h-auto w-full rounded-lg"
							src={`/gallery/${dir}/${i}.png`}
							alt="gallery picture"
							key={generateKey()}
						/>
					))}
				</div>
			</div>
			<div className="w-full flex justify-center py-8">
				<Button href={href} target="_blank" animation>
					View All
				</Button>
			</div>
		</div>
	);
};

export default Masonry;
