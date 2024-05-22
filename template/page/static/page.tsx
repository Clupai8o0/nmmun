"use client";

import { animation, onScrollAnimation } from "@/lib/animations";

import { Paragraph, Title } from "@/components/typography";
import { BaseLayout, Container } from "@/components/layouts";
import { CTA } from "@/components/navigation";
import { Hero, HeroMini, Timer } from "@/components/content";

//* This is the basic static page layout
/**
 * @page -> Describe this page and what iti does
 */
function BasePage() {
	return (
		<BaseLayout navbar={{ dark: true }}>
			<Hero
				image={{
					src: "/hero/hero-home-1.jpg",
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
					TITLE
				</Title>
				<Paragraph
					animation={animation("fromDown", {
						delay: 2.1,
					})}
				>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
				</Paragraph>
				<CTA
					animation={animation("fromDown", {
						delay: 2.2,
					})}
				/>
			</Hero>

			<Container>Content</Container>

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

export default BasePage;
