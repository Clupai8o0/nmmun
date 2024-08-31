"use client";

import {
	Hero,
	HeroMini,
	Masonry,
	Timeline,
	TimelineContainer,
	Timer,
} from "@/components/content";
import { CTA } from "@/components/navigation";
import { Paragraph, Title } from "@/components/typography";
import { BaseLayout, Container } from "@/components/layouts";
import { animation, onScrollAnimation } from "@/lib/animations";

function GalleryPage() {
	return (
		<BaseLayout navbar={{ dark: true }}>
			<Hero
				image={{
					src: "/hero/hero-gallery.jpeg",
					alt: "Hero image",
					opacity: 0.4,
				}}
				className="text-white"
			>
				<Title
					animation={animation("fromDown", {
						delay: 2.4,
					})}
				>
					GALLERY
				</Title>
				<Paragraph
					animation={animation("fromDown", {
						delay: 2.5,
						opacity: 0.8,
					})}
				>
					Get a glimpse of our MUN experience through pictures.
				</Paragraph>
				<CTA
					animation={animation("fromDown", {
						delay: 2.6,
					})}
				/>
			</Hero>

			<Container>
				<TimelineContainer>
					<Timeline time={{ date: "More coming soon..." }} start />
					<Timeline time={{ date: "November, 2023" }}>
						<Masonry
							title="NMMUN 2023"
							dir="23-24"
							href="https://drive.google.com/drive/folders/1zcQiauT-H2_NVyGsMeabcbmCWRI6QTg4?usp=sharing"
							gridMatrix={[
								[1, 1, 1, 1, 1, 1, 1],
								[1, 1, 1, 1, 1, 1, 1],
								[1, 1, 1, 1, 1, 1],
							]}
						/>
					</Timeline>
					<Timeline time={{ date: "October, 2022" }}>
						<Masonry
							title="NMMUN 2022"
							dir="22-23"
							href="https://drive.google.com/drive/folders/1zcQiauT-H2_NVyGsMeabcbmCWRI6QTg4?usp=sharing"
							gridMatrix={[
								[1, 2, 3, 4, 5, 6, 7],
								[8, 9, 10, 11, 12, 13, 14],
								[15, 16, 17, 18, 19, 20],
							]}
						/>
					</Timeline>
				</TimelineContainer>
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

export default GalleryPage;
