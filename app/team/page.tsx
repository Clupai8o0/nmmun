"use client";

import { teamLinks } from "@/lib/links";
import { generateKey } from "@/lib/utils";
import { animation, onScrollAnimation } from "@/lib/animations";

import { Paragraph, Title } from "@/components/typography";
import { BaseLayout, Container } from "@/components/layouts";
import { CTA, TableOfContent } from "@/components/navigation";
import { Hero, HeroMini, Profiles, Timer } from "@/components/content";

function TeamPage() {
	return (
		<BaseLayout navbar={{ dark: true }}>
			<Hero
				image={{
					src: "/hero/hero-teams.jpg",
					alt: "Hero image",
					opacity: 0.4,
				}}
				className="text-white"
				scroll={{
					href: "#table-of-content",
				}}
			>
				<Title
					animation={animation("fromDown", {
						delay: 2,
					})}
				>
					OUR TEAM
				</Title>
				<Paragraph
					animation={animation("fromDown", {
						delay: 2.1,
					})}
				>
					The heartbeat of our MUN: Introducing the Team
				</Paragraph>
				<CTA
					animation={animation("fromDown", {
						delay: 2.2,
					})}
				/>
			</Hero>

			<TableOfContent links={teamLinks} />

			<Container>
				{teamLinks.map((team) => (
					<Profiles team={team} key={generateKey()} />
				))}
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
				<Title small animation={onScrollAnimation("fromDown")} center>
					SECURE YOUR SPOT
				</Title>
				<Paragraph animation={onScrollAnimation("fromDown")} center>
					Ready to start your diplomatic journey?
				</Paragraph>
				<Timer dark animation={onScrollAnimation("fromDown")} />
				<CTA animation={onScrollAnimation("fromDown")} />
			</HeroMini>
		</BaseLayout>
	);
}

export default TeamPage;
