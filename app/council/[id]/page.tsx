"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { councils } from "@/lib/links";
import { AnimationVariants as av } from "@/lib/types";
import { animation, animationVariants } from "@/lib/animations";

import { Skeleton } from "@/components/ui/skeleton";

import { Profiles } from "@/components/content";
import { Button } from "@/components/navigation";
import { BaseLayout, Container } from "@/components/layouts";
import { Heading, List, Paragraph, SubHeading } from "@/components/typography";
import { generateKey } from "@/lib/utils";

interface Props {
	params: { id: string };
}

function Council({ params: { id } }: Props) {
	const [council, setCouncil] = useState<(typeof councils)[0] | any>(null);
	const [councilNotFound, setCouncilNotFound] = useState(false);

	useEffect(() => {
		let notFound = true;
		for (let i = 0; i < councils.length; i++)
			if (councils[i].id === id) {
				notFound = false;
				setCouncil(councils[i]);
			}
		setCouncilNotFound(notFound);
	}, []);

	return (
		<BaseLayout noScrollToTop navbar={{ delay: 0 }}>
			{!councilNotFound ? (
				<Container className="mt-28 pb-28 pt-16 flex flex-col md:flex-row gap-x-4">
					<div className="w-full md:w-1/2">
						{council ? (
							<>
								<motion.div
									className="flex justify-center md:justify-start"
									variants={animationVariants}
									{...animation(av.FromDown, {
										delay: 1.6,
									})}
								>
									<img
										src={council?.icon.src}
										alt={council?.icon.alt}
										width={256}
										height={256}
										className="object-cover"
									/>
								</motion.div>
								<Heading
									className="mt-8"
									animation={animation(av.FromDown, {
										delay: 1.7,
									})}
								>
									{council?.title}
								</Heading>
								<Paragraph
									opacity={0.8}
									animation={animation(av.FromDown, {
										delay: 1.8,
									})}
								>
									{council?.desc}
								</Paragraph>
								<SubHeading
									className="mt-4"
									animation={animation(av.FromDown, {
										delay: 1.9,
									})}
								>
									Topics
								</SubHeading>
								<List
									type="bullets"
									className=""
									elements={council?.topics.map((topic: string) => (
										<span className="opacity-80 mt-2" key={generateKey()}>
											{topic}
										</span>
									))}
									animation={animation(av.FromDown, {
										delay: 2,
									})}
								/>
								{council?.bgs && (
									<motion.div
										className="mt-8 flex flex-col md:flex-row gap-x-4 gap-y-4"
										variants={animationVariants}
										{...animation(av.FromDown, {
											delay: 2.1,
										})}
									>
										{council?.bgs.map((bg: any) => (
											<Button
												href={bg.url}
												animation
												target="_blank"
												key={generateKey()}
												
											>
												{bg.title}
											</Button>
										))}
									</motion.div>
								)}{" "}
							</>
						) : (
							<>
								<div className="flex justify-center md:justify-start">
									<Skeleton className="w-64 h-64 rounded-full" />
								</div>

								<Skeleton className="mt-8 h-16 w-1/3" />

								<Skeleton className="mt-6 h-4 w-full" />
								<Skeleton className="mt-2 h-4 w-full" />
								<Skeleton className="mt-2 h-4 w-full" />
								<Skeleton className="mt-2 h-4 w-2/3" />

								<Skeleton className="mt-4 h-10 w-1/3" />

								<Skeleton className="mt-6 h-4 w-1/2" />
								<Skeleton className="mt-2 h-4 w-2/3" />
								<Skeleton className="mt-2 h-4 w-1/3" />

								<div className="mt-8 flex flex-col md:flex-row gap-x-4 gap-y-4">
									<Skeleton className="h-12 w-1/3" />
									<Skeleton className="h-12 w-1/3" />
								</div>
							</>
						)}
					</div>

					<div className="w-full md:w-1/2">
						<Profiles
							className="!grid-cols-2"
							team={council}
							hideTitle
							animation={animation(av.FromDown, {
								delay: 2.2,
							})}
						/>
					</div>
				</Container>
			) : (
				<Container className="mt-28 flex-col items-center justify-center">
					<Heading
						animation={animation(av.FromDown, {
							delay: 1.6,
						})}
					>
						Council not found
					</Heading>
					<Paragraph
						animation={animation(av.FromDown, {
							delay: 1.7,
							opacity: 0.8,
						})}
					>
						Sorry, we couldn&apos;t find the council you were looking for
					</Paragraph>
					<motion.div
						className="flex gap-4 mt-6"
						variants={animationVariants}
						{...animation(av.FromDown, {
							delay: 1.8,
						})}
					>
						<Button href="/councils" animation>
							Councils
						</Button>
						<Button href="/contact" animation variant="ghost">
							Contact Us
						</Button>
					</motion.div>
				</Container>
			)}
		</BaseLayout>
	);
}

export default Council;
