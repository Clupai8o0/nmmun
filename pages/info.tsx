import React from "react";
import { v4 as generateKey } from "uuid";
import { motion } from "framer-motion";

import { CTA, Details, DressCode, Head, Heading, Hero, Itinerary, UpdatedSoon} from "@/components";

// Itinerary
// - Dress code rules
// - ROP
// - Delegate handbook??? (Maybe)
// - Chair hand book

// TODO: table of content

function Info() {
	return (
		<main className="main">
			<Head
				title="NMMUN: Information"
				desc="Discover the essentials for your Model United Nations experience. Access our comprehensive information page for key details on itinerary, dress code, Rules of Procedure, and more. Prepare to make your mark on the global stage."
				img="/join-us.jpeg"
			/>

			{/* HERO */}
			<Hero
				title="INFORMATION"
				src="/hero-info-2.jpg"
				alt="some dummy"
				desc="Explore Essential Details: Itinerary, Dress Code, and Rules of Procedure."
				showCTA
				mobileMini
			/>

			{/* CONTENT */}
			<DetailsOnly className="py-24">
				<Heading className="mb-6">Allocations</Heading>

				<Details opacity={0.8} className="w-full md:w-2/3">
					We are happy to announce that the Delegate Allocations are now
					accessible. To ensure that everyone of you has a pleasant and
					intellectually stimulating experience, the logistics staff has
					carefully arranged for each of you to be in your proper council. Your
					contributions, we're convinced, will enable us to finally Break the
					Silence!
				</Details>
				<CTA
					title="Allocations Doc"
					href="https://docs.google.com/document/d/1Sue_gBy_raGCYm85uHrLzec3etLiEJ64g51xFMxUVaE/edit"
					className="mt-6 mb-12 justify-start"
					notCenter
					target="_blank"
				/>

				<Heading>Rules of Procedure</Heading>
				<Details className="w-full md:w-2/3" opacity={0.8}>
					Explore the comprehensive Rules of Procedure PDF document by clicking
					the button below. This essential guide outlines the principles,
					guidelines, and structure of our Model United Nations (MUN)
					conference, providing delegates with the necessary framework to engage
					in productive debates and negotiations
				</Details>
				<div className="flex gap-6">
					<div>
						<CTA
							title="NMMUN ROP"
							href="https://drive.google.com/file/d/1G9Vd54WJ-OWGQIu1gIxBTHgJzu_siE4q/view?usp=sharing"
							className="mt-6 mb-12 justify-start"
							notCenter
							target="_blank"
						/>
					</div>
					<div>
						<CTA
							title="Crisis ROP"
							href="https://drive.google.com/file/d/1gmpq_rD97OObd9hA0SDLK05FWLfTKoYA/view?usp=sharing"
							className="mt-6 mb-12 justify-start"
							notCenter
							target="_blank"
						/>
					</div>
				</div>
			</DetailsOnly>
			{/* <UpdatedSoon /> */}
			{/* <Itinerary /> */}
			<DressCode />

			{/* RULES OF PROCEDURE */}
			{/* DELEGATE HANDBOOK */}
			{/* CHAIR HAND BOOK */}

			<Hero
				src="/hero-variant-5.jpeg"
				// src="/hero-variant-4.jpeg"
				alt="blurred nmmun logo with a gradient bg"
				title="SECURE YOUR SPOT"
				desc="Ready to Start Your Diplomatic Journey?"
				showCTA
				showTimer
				// showYear
				variant
				className=""
				smallerTitle
				bgImgOpacity={0.8}
			/>
		</main>
	);
}

export default Info;

import { GetStaticProps } from "next";
import { DetailsOnly } from "@/layouts";

export const getStaticProps: GetStaticProps = async (ctx) => {
	return {
		props: {},
	};
};
