"use client";

import { motion } from "framer-motion";

import {
	Hero,
	HeroMini,
	Timeline,
	TimelineContainer,
	Timer,
} from "@/components/content";
import {
	Heading,
	List,
	Paragraph,
	SubHeading,
	Title,
} from "@/components/typography";
import { BaseLayout, Container, Details } from "@/components/layouts";
import { Button, CTA, TableOfContent } from "@/components/navigation";

import { infoLinks } from "@/lib/links";
import { AnimationVariants as av } from "@/lib/types";
import {
	animation,
	animationVariants,
	onScrollAnimation,
} from "@/lib/animations";
import { generateKey } from "@/lib/utils";
import {
	dressCodeMen,
	dressCodeWomen,
	itineraryDay1,
	itineraryDay2,
} from "@/lib/config";

function InfoPage() {
	return (
		<BaseLayout navbar={{ dark: true }}>
			<Hero
				image={{
					src: "/hero/hero-info.jpg",
					alt: "Hero image",
					opacity: 0.4,
				}}
				className="text-white"
				scroll={{
					href: "#table-of-content",
				}}
			>
				<Title
					animation={animation(av.FromDown, {
						delay: 2,
					})}
				>
					INFORMATION
				</Title>
				<Paragraph
					animation={animation(av.FromDown, {
						delay: 2.1,
						opacity: 0.8,
					})}
				>
					Explore Essential Details: Itinerary, Dress Code, and Rules of
					Procedure.
				</Paragraph>
				<CTA
					animation={animation(av.FromDown, {
						delay: 2.2,
					})}
				/>
			</Hero>

			<TableOfContent links={infoLinks} />

			<Container id="allocations" className="pt-12">
				<Details>
					<Heading animation={onScrollAnimation(av.FromLeft)}>
						Allocations
					</Heading>
					<Paragraph animation={onScrollAnimation(av.FromLeft)}>
						We are happy to announce that the Delegate Allocations are now
						accessible. To ensure that everyone of you has a pleasant and
						intellectually stimulating experience, the logistics staff has
						carefully arranged for each of you to be in your proper council.
						Your contributions, we&apos;re convinced, will enable us to finally
						Break the Silence!
					</Paragraph>

					<motion.div
						className="flex flex-col md:flex-row gap-x-6 gap-y-4 mt-6"
						variants={animationVariants}
						{...onScrollAnimation(av.FromLeft)}
					>
						<Button
							href="https://drive.google.com/file/d/1MgUO6GSv7WVhl9S88_qawshsRx-qDRr2/view?usp=sharing"
							className="justify-start"
							animation
							target="_blank"
							
						>
							Delegate Allocations
						</Button>

						<Button
							href="https://drive.google.com/file/d/1KUm4i_Mh_Hpa6SwVitRyWi5ApqMANboT/view?usp=sharing"
							className="justify-start"
							animation
							target="_blank"
							
						>
							Security and Runner Allocations
						</Button>
					</motion.div>
				</Details>
			</Container>

			<Container id="rop" className="pt-12">
				<Details>
					<Heading animation={onScrollAnimation(av.FromLeft)}>
						Rules of Procedure
					</Heading>
					<Paragraph animation={onScrollAnimation(av.FromLeft)}>
						Explore the comprehensive Rules of Procedure PDF document by
						clicking the button below. This essential guide outlines the
						principles, guidelines, and structure of our Model United Nations
						(MUN) conference, providing delegates with the necessary framework
						to engage in productive debates and negotiations
					</Paragraph>
					<motion.div
						className="flex gap-x-6 gap-y-2"
						variants={animationVariants}
						{...onScrollAnimation(av.FromLeft)}
					>
						<Button
							href="https://drive.google.com/file/d/1Bzm2gIJgnPcLRm9m9smKHD-Jl4iHlK3D/view"
							className="mt-6 mb-12 justify-start"
							animation
							target="_blank"
							
						>
							Rules of Procedure
						</Button>

					</motion.div>

					<Heading className="mt-8" animation={onScrollAnimation(av.FromLeft)}>
						Code of Conduct
					</Heading>
					<Paragraph animation={onScrollAnimation(av.FromLeft)}>
						Access our Code of Conduct PDF document by clicking the button
						below. This document outlines the principles and guidelines that
						govern conduct and interaction within our Model United Nations (MUN)
						conference. It serves as a fundamental reference for delegates,
						ensuring a respectful and collaborative environment throughout the
						event
					</Paragraph>
					<motion.div
						variants={animationVariants}
						{...onScrollAnimation(av.FromLeft)}
					>
						<Button
							href="https://drive.google.com/file/d/1VkBRo8y9DVINLIolCW85iLu93DUcNIj0/view"
							className="mt-6 mb-12 justify-start"
							animation
							target="_blank"
							
						>
							Code of Conduct
						</Button>
					</motion.div>
				</Details>
			</Container>

			<Container id="itinerary" className="pt-12">
				<Heading animation={onScrollAnimation(av.FromLeft)}>Itinerary</Heading>
				<div className="flex flex-col md:flex-row gap-8 mt-6">
					<div className="md:w-1/2 flex flex-col items-start justify-start">
						<SubHeading className="mb-8">
							Day 1 - Friday, 15th November, 2024
						</SubHeading>
						<TimelineContainer>
							{itineraryDay1.map((timeline, i) => (
								<Timeline
									key={generateKey()}
									time={{
										date: timeline.time,
										className: "!text-sm font-normal !text-gray-600",
									}}
									start={i === 0}
									end={i === itineraryDay1.length - 1}
								>
									<motion.div
										variants={animationVariants}
										{...onScrollAnimation("fromDown")}
									>
										<h3 className="text-lg font-medium text-gray-900">
											{timeline.name}
										</h3>
									</motion.div>
								</Timeline>
							))}
						</TimelineContainer>
					</div>
					<div className="md:w-1/2 flex flex-col items-start justify-start">
						<SubHeading className="mb-8">
							Day 2 - Saturday, 16th November, 2024
						</SubHeading>
						<TimelineContainer>
							{itineraryDay2.map((timeline, i) => (
								<Timeline
									key={generateKey()}
									time={{
										date: timeline.time,
										className: "!text-sm font-normal !text-gray-600",
									}}
									start={i === 0}
									end={i === itineraryDay2.length - 1}
								>
									<motion.div
										variants={animationVariants}
										{...onScrollAnimation("fromDown")}
									>
										<h3 className="text-lg font-medium text-gray-900">
											{timeline.name}
										</h3>
									</motion.div>
								</Timeline>
							))}
						</TimelineContainer>
					</div>
				</div>
			</Container>

			<Container className="pt-12" id="dress-code">
				<Details>
					<Heading className="mb-8">Dress Code</Heading>
					<Paragraph animation={onScrollAnimation(av.FromLeft)}>
						Model United Nation conferences are formal meeting places for
						tackling serious global conflicts, and attendees are expected to
						reflect this with their professional and modest appearance.
					</Paragraph>
					<Paragraph animation={onScrollAnimation(av.FromLeft)}>
						All delegates, chairs, and directors are required to adhere to
						NMMUN’s professional dress code. Delegates who fail to abide by the
						code will be asked to leave the conference and will only be allowed
						to return when they are in proper attire.
					</Paragraph>
				</Details>

				<div className="flex flex-col md:flex-row gap-8 my-8">
					<div className="md:w-1/2 flex flex-col items-start justify-start">
						<SubHeading className="mb-4">Gentlemen</SubHeading>
						<List elements={dressCodeMen} type="tick" className="my-0" />
					</div>
					<div className="md:w-1/2 flex flex-col items-start justify-start">
						<SubHeading className="mb-4">Ladies</SubHeading>
						<List elements={dressCodeWomen} type="tick" className="my-0" />
					</div>
				</div>

				<Paragraph
					animation={onScrollAnimation(av.FromLeft, {
						opacity: 0.8,
					})}
				>
					<span className="font-bold">Note: </span>
					Chairs, Delegates and members in LOK SABHA are permitted to wear
					Traditional Indian attire.
				</Paragraph>
				<Paragraph
					animation={onScrollAnimation(av.FromLeft, {
						opacity: 0.8,
					})}
				>
					All participants are expected to strictly follow the dress code.
				</Paragraph>
			</Container>

			<div className="my-20"></div>

			<HeroMini
				image={{
					src: "/hero/hero-mini.jpeg",
					alt: "whatever",
					opacity: 0.6,
				}}
				className="text-white"
			>
				<Title small animation={onScrollAnimation(av.FromDown)} center>
					SECURE YOUR SPOT
				</Title>
				<Paragraph animation={onScrollAnimation(av.FromDown)} center>
					Ready to start your diplomatic journey?
				</Paragraph>
				<Timer dark animation={onScrollAnimation(av.FromDown)} />
				<CTA animation={onScrollAnimation(av.FromDown)} />
			</HeroMini>
		</BaseLayout>
	);
}

export default InfoPage;
