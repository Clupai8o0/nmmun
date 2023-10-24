import React from "react";
import { v4 as generateKey } from "uuid";

import { ContentLink, Head, Hero, Profile, Profile2 } from "@/components";
import { ProfilesContainer, TableOfContent } from "@/layouts";

function Team() {
	return (
		<main className="main">
			<Head
				title="NMMUN: Team"
				desc="Meet the dedicated individuals who drive the success of our Model United Nations team. Get to know our passionate students, advisors, and leaders who are shaping future diplomats and global change-makers."
				img="/join-us.jpeg"
			/>

			{/* HERO */}
			<Hero
				title="OUR TEAM"
				src="/hero-team-2.jpg"
				alt="some dummy pic"
				desc="The Heartbeat of Our MUN: Introducing the Team"
				showCTA
			/>

			{/* TABLE OF CONTENT */}
			<TableOfContent title="Teams">
				{teams.map(({ src, alt, title }) => (
					<ContentLink
						src={`/teams/${src}.png`}
						alt={alt}
						title={title}
						url={`#${title}`}
						key={generateKey()}
					/>
				))}
			</TableOfContent>

			{/* CONTENT */}
			{teams.map((team) => (
				<ProfilesContainer title={team.title} key={generateKey()}>
					{team.members.map(({ name, pos, src }) => (
						<Profile
							key={generateKey()}
							src={`/teams/${src}.png`}
							alt={name}
							name={name}
							position={pos}
						/>
					))}
				</ProfilesContainer>
			))}

			{/* MARGIN BETWEEN */}
			<div className="my-12" />

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

export default Team;

import { GetStaticProps } from "next";
import { teams } from "@/config/links";

export const getStaticProps: GetStaticProps = async (ctx) => {
	return {
		props: {},
	};
};
