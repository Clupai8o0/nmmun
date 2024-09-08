"use client";

import { BaseLayout } from "@/components/layouts";
import { Paragraph, Title } from "@/components/typography";
import { Hero, HeroMini, Timer } from "@/components/content";
import { CTA, TableOfContent } from "@/components/navigation";

import { councils } from "@/lib/links";
import { AnimationVariants } from "@/lib/types";
import { animation, onScrollAnimation } from "@/lib/animations";

function CouncilsPage() {
	return (
		<BaseLayout navbar={{ dark: true }}>
			<Hero
				image={{
					src: "/hero/hero-councils.jpg",
					alt: "Hero image",
					opacity: 0.4,
				}}
				className="text-white"
				scroll={{
					href: "#table-of-content",
				}}
			>
				<Title
					animation={animation(AnimationVariants.FromDown, {
						delay: 2,
					})}
				>
					COUNCILS
				</Title>
				<Paragraph
					animation={animation(AnimationVariants.FromDown, {
						delay: 2.1,
						opacity: 0.8,
					})}
				>
					Debate, Discuss, Delegate: Introducing our Councils
				</Paragraph>
				<CTA
					animation={animation(AnimationVariants.FromDown, {
						delay: 2.2,
					})}
				/>
			</Hero>

			<TableOfContent links={councils} />

			<div className="my-20"></div>

			<HeroMini
				image={{
					src: "/hero/hero-mini.jpeg",
					alt: "whatever",
					opacity: 0.6,
				}}
				className="text-white"
			>
				<Title
					small
					animation={onScrollAnimation(AnimationVariants.FromDown)}
					center
				>
					SECURE YOUR SPOT
				</Title>
				<Paragraph
					animation={onScrollAnimation(AnimationVariants.FromDown)}
					center
				>
					Ready to start your diplomatic journey?
				</Paragraph>
				<Timer dark animation={onScrollAnimation(AnimationVariants.FromDown)} />
				<CTA animation={onScrollAnimation(AnimationVariants.FromDown)} />
			</HeroMini>
		</BaseLayout>
	);
}

export default CouncilsPage;
