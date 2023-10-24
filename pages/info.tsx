import React from "react";
import { v4 as generateKey } from "uuid";
import { motion } from "framer-motion";

import { DressCode, Head, Hero, Itinerary, UpdatedSoon} from "@/components";

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

export const getStaticProps: GetStaticProps = async (ctx) => {
	return {
		props: {},
	};
};
