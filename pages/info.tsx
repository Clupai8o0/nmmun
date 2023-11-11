import React from "react";
import { v4 as generateKey } from "uuid";
import { motion } from "framer-motion";

import {
	CTA,
	ContentLink,
	Details,
	DressCode,
	Head,
	Heading,
	Hero,
	Itinerary,
	SubHeading,
	UpdatedSoon,
} from "@/components";

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

			<TableOfContent>
				{[
					{
						name: "Allocations",
						id: "allocations",
						src: "/alloc.png",
						alt: "seat",
					},
					{
						name: "Rules of Procedure",
						id: "rop",
						src: "/rop.png",
						alt: "a script with rules",
					},
					{
						name: "Itinerary",
						id: "itinerary",
						src: "/itinerary.png",
						alt: "timeline",
					},
					{
						name: "Dress Code",
						id: "dress-code",
						src: "/dress.png",
						alt: "shirt tie logo",
					},
				].map((council, i) => (
					<ContentLink
						src={council.src}
						alt={council.alt}
						title={council.name}
						url={`#${council.id}`}
						key={generateKey()}
					/>
				))}
			</TableOfContent>

			{/* CONTENT */}
			<DetailsOnly className="pt-12" id="allocations">
				<Heading className="mb-6">Allocations</Heading>

				<Details opacity={0.8} className="w-full md:w-2/3">
					We are happy to announce that the Delegate Allocations are now
					accessible. To ensure that everyone of you has a pleasant and
					intellectually stimulating experience, the logistics staff has
					carefully arranged for each of you to be in your proper council. Your
					contributions, we're convinced, will enable us to finally Break the
					Silence!
				</Details>
				<div className="flex flex-col md:flex-row gap-x-6 gap-y-4 mt-6">
					<div>
						<CTA
							title="Allocations Doc"
							href="https://drive.google.com/file/d/186NDyprRwU2J1_RnGi4sGeumMIgQp4Vw/view?usp=sharing"
							className="justify-start"
							notCenter
							target="_blank"
						/>
					</div>
					<div>
						<CTA
							title="Security & Runner Allocations"
							href="https://drive.google.com/file/d/1OTNAaC7nz0bAuAEqOPuM_mC-5Kr3nz_5/view?usp=sharing"
							className="justify-start"
							notCenter
							target="_blank"
						/>
					</div>
				</div>
			</DetailsOnly>

			<DetailsOnly className="pt-24" id="rop">
				<Heading>Rules of Procedure</Heading>
				<Details className="w-full md:w-2/3" opacity={0.8}>
					Explore the comprehensive Rules of Procedure PDF document by clicking
					the button below. This essential guide outlines the principles,
					guidelines, and structure of our Model United Nations (MUN)
					conference, providing delegates with the necessary framework to engage
					in productive debates and negotiations
				</Details>
				<div className="flex gap-x-6 gap-y-2">
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

				<Heading>Code of Conduct</Heading>
				<Details className="w-full md:w-2/3" opacity={0.8}>
					Access our Code of Conduct PDF document by clicking the button below.
					This document outlines the principles and guidelines that govern
					conduct and interaction within our Model United Nations (MUN)
					conference. It serves as a fundamental reference for delegates,
					ensuring a respectful and collaborative environment throughout the
					event
				</Details>
				<CTA
					title="Code of Conduct"
					href="https://drive.google.com/file/d/17vB7Kj5mLbXobuKwgLvmoOTG2NH-d80W/view?usp=sharing"
					className="mt-6 mb-12 justify-start"
					notCenter
					target="_blank"
				/>
			</DetailsOnly>

			<Itinerary />
			<DressCode />

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
import { DetailsOnly, TableOfContent } from "@/layouts";

export const getStaticProps: GetStaticProps = async (ctx) => {
	return {
		props: {},
	};
};
