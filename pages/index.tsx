import {
	Details,
	FAQ,
	Head,
	Heading,
	Hero,
	List,
	Quote,
	SubHeading,
} from "@/components";
import { inViewVariants } from "@/config/animations";
import {
	DetailsOnly,
	FAQsContainer,
	ImageWithDetails,
	ImageWithDetails2,
} from "@/layouts";
import { motion } from "framer-motion"; //todo: need a seperate motion wrapper

export default function Home() {
	return (
		<main className="main">
			<Head
				title="NMMUN - Empowering Tomorrow's Global Leaders"
				desc="Explore the world of diplomacy and global affairs with the New Millennium Model United Nations Conference. Engage in debates, draft resolutions, and broaden your horizons. Join us for an educational journey that shapes future leaders."
				img="/join-us.jpeg"
			/>

			{/* HERO */}
			<Hero
				src="/hero-home-1.jpg"
				alt="NMMUN preview images of NMMUN'22"
				title="NMMUN"
				desc={
					<>
						<span className="font-semibold">Engage, Debate, Lead:</span>{" "}
						<i>Your Diplomatic Journey Begins Here!</i>
					</>
				}
				showCTA
				// showTimer
				ctaMargin=" mt-4 md:mt-8"
				showYear
				showDate
				carousel
				images={[
					"/hero-home-5.jpg",
					"/hero-home-4.jpg",
					"/join-us.jpeg",
					// "/hero-home-1.jpg",
					"/hero-home-2.jpg",
				]}
				className="pt-32 pb-16"
				// bottomGradient={
				// 	<div className="w-full h-1/4 bottom-0 absolute bg-gradient-to-t from-[#885b43] to-[rgba(0,0,0,0)]"></div>
				// }
			/>

			{/* CONTENT */}
			{/* QUOTE */}
			<DetailsOnly
				className="py-36 border-t border-b border-black"
				whiteText
				bgImg="/hero-home-1.jpg"
				bgImgAlt=""
				bgOpacity={0.4}
			>
				<div className="w-full h-full flex justify-center items-center">
					<Quote>
						At New Millennium School, Bahrain, we believe in shaping future
						leaders, and the New Millennium Model United Nations (NMMUN)
						Conference is where this transformation begins.
					</Quote>
				</div>
			</DetailsOnly>

			<DetailsOnly
				className="pb-36 pt-36"
				bgImg="/theme-bg-7.png"
				bgOpacity={1}
				bgImgTransition
				bgImgMobileBlur
			>
				{/* <DetailsOnly className="pb-36 pt-36 bg-[#a07a65]" whiteText> */}
				<div className="w-full md:w-2/3">
					<Heading className="mb-6 xl:w-3/4">
						Zeroth Hour: Breaking the Silence
					</Heading>
					<Details opacity={0.8}>
						Many of us are acutely aware of the social challenges that afflict
						our society, significantly impacting the quality of life for people
						worldwide.{" "}
						<span className="md:hidden">
							<br />
							<br />
						</span>{" "}
						These issues demand our attention, and while there's much we can do
						to address them, both as a global community and as individuals,
						progress often seems to be postponed.
					</Details>
					<Details opacity={0.8}>
						For instance, the pandemic has frequently been used as a convenient
						excuse by numerous governments to justify their failure to
						effectively pursue the 2030 Sustainable Development Goals (SDGs),
						even though inadequacies in addressing these issues existed long
						before the pandemic emerged.
					</Details>
					<Details opacity={0.8}>
						This situation is symbolically referred to as "Zeroth Hour,"
						carrying a dual meaning. It signifies the pressing nature of the
						problems we face, emphasizing the limited time available to find
						solutions.{" "}
						<span className="md:hidden">
							<br />
							<br />
						</span>{" "}
						Additionally, it alludes to the military term "zero-hour," denoting
						the moment when a planned operation commences.{" "}
						<span className="md:hidden">
							<br />
							<br />
						</span>{" "}
						This metaphor underscores that delaying action on these critical
						concerns only compounds the irreversible damage they cause.{" "}
						<span className="md:hidden">
							<br />
							<br />
						</span>{" "}
						We, as humans, find ourselves in a precarious position where time is
						running out, and it's imperative that we break this cycle of
						inaction as we approach our own "zeroth hour."
					</Details>
				</div>
			</DetailsOnly>

			<ImageWithDetails
				reverse
				className="pt-36 pb-36 bg-[#e7dacd]"
				src="/diplomacy.png"
				alt=""
				w="w-full"
				h="h-full"
				noBlackBg
			>
				<Heading reverse className="mb-8">
					Discover Diplomacy Embrace Change
				</Heading>
				<Details reverse opacity={0.8}>
					The NMMUN Conference isn't just an event; it's an opportunity to
					explore the complexities of global diplomacy. Here, you'll step into
					the shoes of world leaders, debate critical global issues, and draft
					resolutions to make a real impact.
				</Details>
			</ImageWithDetails>

			<ImageWithDetails2
				// className="py-36 bg-[#885b43] mb-36"
				className="py-36 bg-[#a07a65]"
				src="/join-us.jpeg"
				alt=""
				imgOpacity={0.7}
				whiteText
			>
				<Heading className="mb-6">Why Join Us:</Heading>

				{/* <motion.ul
					className="space-y-3 mt-6"
					variants={inViewVariants}
					initial="fromRight"
					whileInView="visible"
					transition={{
						duration: 0.4,
					}}
					viewport={{ once: true, amount: 0.25 }}
				>
					<li>
						<span className="font-semibold">Educational Experience:</span>{" "}
						<span className="opacity-80">
							Gain an in-depth understanding of global affairs and the art of
							international diplomacy.
						</span>
					</li>
					<li>
						<span className="font-semibold">Personal Growth:</span>{" "}
						<span className="opacity-80">
							Develop leadership, teamwork, and problem-solving skills essential
							for your future.
						</span>
					</li>
					<li>
						<span className="font-semibold">Global Network:</span>{" "}
						<span className="opacity-80">
							Connect with like-minded peers who share your passion for global
							change.
						</span>
					</li>
					<li>
						<span className="font-semibold">Fun and Fulfillment:</span>{" "}
						<span className="opacity-80">
							Enjoy an intellectually stimulating, fun-filled day leaving you
							with a sense of accomplishment.
						</span>
					</li>
				</motion.ul> */}
				<List
					content={[
						<>
							<span className="font-semibold underline">
								Educational Experience:
							</span>{" "}
							<span className="opacity-80">
								Gain an in-depth understanding of global affairs and the art of
								international diplomacy.
							</span>
						</>,
						<>
							<span className="font-semibold underline">Personal Growth:</span>{" "}
							<span className="opacity-80">
								Develop leadership, teamwork, and problem-solving skills
								essential for your future.
							</span>
						</>,
						<>
							<span className="font-semibold underline">Global Network:</span>{" "}
							<span className="opacity-80">
								Connect with like-minded peers who share your passion for global
								change.
							</span>
						</>,
						<>
							<span className="font-semibold underline">
								Fun and Fulfillment:
							</span>{" "}
							<span className="opacity-80">
								Enjoy an intellectually stimulating, fun-filled day leaving you
								with a sense of accomplishment.
							</span>
						</>,
					]}
					noBullet
				/>
			</ImageWithDetails2>

			<DetailsOnly className="pt-36 pb-28">
				<Heading>FAQs</Heading>

				<FAQsContainer>
					<FAQ
						title="Is there a registration fee?"
						info="Yes, there is a registration fee of 20BHD for all delegates and chairs."
					/>
					<FAQ
						title="Will food be provided on the day of the conference?"
						info="We will provide breakfast, lunch, and snacks on the days of the conference."
					/>
					<FAQ
						title="Can I sign up if I know nothing about MUNs?"
						info="Yes you can! We will provide all delegates with training sessions and our team will always be available to assist you."
					/>
					<FAQ
						title="How do I submit the fees?"
						info="Information regarding registering and submitting the fees is given in detail in the register page"
					/>
				</FAQsContainer>
			</DetailsOnly>

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

// MAKING IT STATIC
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
	return {
		props: {},
	};
};
