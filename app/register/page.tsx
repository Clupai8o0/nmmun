"use client";

import {
	Heading,
	List,
	Paragraph,
	SubHeading,
	Title,
} from "@/components/typography";
import {
	Background,
	BaseLayout,
	Container,
	Details,
} from "@/components/layouts";
import { Animate, Hero } from "@/components/content";
import { Button, CTA, TableOfContent } from "@/components/navigation";

import { registerLinks } from "@/lib/links";
import { AnimationVariants as av } from "@/lib/types";
import { animation, onScrollAnimation } from "@/lib/animations";

function RegisterPage() {
	return (
		<BaseLayout navbar={{ dark: true }}>
			<Hero
				image={{
					src: "/hero/hero-register.jpeg",
					alt: "Hero image",
					opacity: 0.4,
				}}
				className="text-white"
				scroll={{
					href: "#table-of-elements",
				}}
			>
				<Title
					animation={animation(av.FromDown, {
						delay: 2,
					})}
				>
					REGISTER
				</Title>
				<Paragraph
					animation={animation(av.FromDown, {
						delay: 2.1,
						opacity: 0.8,
					})}
				>
					Ready to embark on a diplomatic journey? Begin your MUN adventure by
					registering today
				</Paragraph>
				<CTA
					animation={animation(av.FromDown, {
						delay: 2.2,
					})}
				/>
			</Hero>

			<TableOfContent links={registerLinks} />

			<Container id="payment" background={<Background color="bg-color-5" />}>
				<Details>
					<Heading className="mb-6" animation={onScrollAnimation(av.FromLeft)}>
						Payment Guide
					</Heading>

					<SubHeading animation={onScrollAnimation(av.FromLeft)}>
						NMS Applicants
					</SubHeading>
					<Paragraph
						animation={onScrollAnimation(av.FromLeft, {
							opacity: 0.8,
						})}
					>
						NMS applicants are kindly requested to complete their application 
						process by filling out the Google Form. Additionally, it is 
						essential to print your google form response accompanied by a 
						payment of 20 BHD, to their respective HRT. Your adherence to 
						this procedure ensures a seamless application process.
					</Paragraph>

					<SubHeading 
						className="mt-4"
						animation={onScrollAnimation(av.FromLeft)}>
						Non-NMS Applicants
					</SubHeading>
					<Paragraph
						animation={onScrollAnimation(av.FromLeft, {
							opacity: 0.8,
						})}
					>
						Non-NMS applicants are kindly urged to complete their application
						process by thoroughly filling out the designated Google Form.
						Payment for the application should be executed through a bank
						transfer, utilizing the provided banking Paragraph below for your
						convenience.
					</Paragraph>
					<List
						elements={[
							"Ahli United Bank",
							"IBAN: BH12AUBB00012793052001",
							"A/C Name: New Millennium School",
							"Required Amount: 20BD",
						]}
						animation={onScrollAnimation(av.FromLeft, {
							opacity: 0.8,
						})}
					/>
					<Paragraph
						animation={onScrollAnimation(av.FromLeft, {
							opacity: 0.8,
						})}
					>
						Upon successful completion of the payment, kindly include the
						transaction receipt as supporting documentation in response to the
						&apos;Proof of Payment&apos; query. Furthermore, please ensure the prompt
						submission of this receipt on the registration form link. You can also contact us on our email or instagram
						if in the case of a technical error. We will be happy to assist you.
					</Paragraph>
					<Paragraph
						animation={onScrollAnimation(av.FromLeft, {
							opacity: 0.8,
						})}
					>
						<span className="font-semibold underline">Note:</span> Kindly ensure
						that you grant viewing access of the proof of payment to us.
					</Paragraph>
				</Details>
			</Container>

			<Container id="chair" background={<Background color="bg-color-6" />}>
				<Details>
					<Heading className="mb-6" animation={onScrollAnimation(av.FromLeft)}>
						Chair Applications
					</Heading>
					<Paragraph
						animation={onScrollAnimation(av.FromLeft, {
							opacity: 0.8,
						})}
					>
						Passionate about diplomacy, leadership, and international relations?
						Join us as a Chair at our Model United Nations conferences, where
						you&apos;ll guide critical discussions and foster global collaboration.
						Your role as Chair is pivotal, shaping debates, facilitating
						negotiations, and guiding proceedings. Your expertise and diplomatic
						skills will ensure productive dialogues and consensus-building.
					</Paragraph>
					<Paragraph
						animation={onScrollAnimation(av.FromLeft, {
							opacity: 0.8,
						})}
					>
						Being a Chair isn&apos;t just leadership; it&apos;s personal and professional
						growth. Gain valuable experience in public speaking, conflict
						resolution, and international affairs. Connect with a community of
						like-minded individuals dedicated to global issues and diplomacy.
					</Paragraph>
					<Paragraph
						animation={onScrollAnimation(av.FromLeft, {
							opacity: 0.8,
						})}
					>
						Ready to make a difference? Access our Chair Application Form below.
						Leave your mark on the international stage and contribute to
						fostering global understanding and positive change.
					</Paragraph>
					<SubHeading
						animation={onScrollAnimation(av.FromLeft)}
						className="mt-4"
					>
						Instructions
					</SubHeading>
					<List
						elements={[
							"Interviews will be held in person at New Millennium School",
							"Applicants are requested to check their emails regularly for further updates",
							"Please note that the minimum requirements to apply for the position of chairperson is 3 prior delegate experiences",
							"NMS applicants are only required to pay in person",
						]}
						animation={onScrollAnimation(av.FromLeft, {
							opacity: 0.8,
						})}
					/>
					<Paragraph
						animation={onScrollAnimation(av.FromLeft, {
							opacity: 0.8,
						})}
					>
						<span className="underline font-bold">
							Last Date for NMS applicants
						</span>{" "}
						- Closed
					</Paragraph>
					<Paragraph
						animation={onScrollAnimation(av.FromLeft, {
							opacity: 0.8,
						})}
					>
						<span className="underline font-bold">
							Last Date for non NMS applicants
						</span>{""}
						- 12th October 2024
					</Paragraph>
					<Animate animation={onScrollAnimation(av.FromLeft)}>
						<Button
							href="https://forms.gle/DzrdayBH12kPoqBh7"
							className="mt-12"
							animation
							disabled
						>
							Applications for NMS Students closed
						</Button>
					</Animate>
					<Animate animation={onScrollAnimation(av.FromLeft)}>
					<Button
							href="https://forms.gle/2AQDvS9oeeefQcLP9"
							className="mt-12"
							animation
						>
							Non-NMS Student Applications Now Open
						</Button>
					</Animate>
				</Details>
			</Container>

			<Container
				id="delegate"
				background={<Background color="bg-color-3" />}
				className="text-white"
			>
				<Details>
					<Heading className="mb-6" animation={onScrollAnimation(av.FromLeft)}>
						Delegate Applications
					</Heading>
					<Paragraph
						animation={onScrollAnimation(av.FromLeft, {
							opacity: 0.8,
						})}
					>
						Step into the shoes of a diplomat and make your voice heard on the
						world stage. Our delegate application section is your gateway to the
						thrilling world of international relations. Here, you&apos;ll have the
						opportunity to represent a nation, engage in thought-provoking
						debates, and work towards finding solutions to pressing global
						issues.
					</Paragraph>
					<Paragraph
						animation={onScrollAnimation(av.FromLeft, {
							opacity: 0.8,
						})}
					>
						Whether you&apos;re a seasoned delegate with years of MUN experience or
						someone who&apos;s new to this exciting world, our application process is
						designed to welcome all levels of expertise. We believe in the power
						of diversity and inclusivity in shaping global conversations.
					</Paragraph>
					<Paragraph
						animation={onScrollAnimation(av.FromLeft, {
							opacity: 0.8,
						})}
					>
						Join us in promoting diplomacy, understanding, and positive change.
						Apply today and become part of an inspiring community of future
						leaders. Together, we&apos;ll contribute to a more informed,
						compassionate, and interconnected world.
					</Paragraph>
					<SubHeading
						className="mt-4"
						animation={onScrollAnimation(av.FromLeft)}
					>
						Instructions
					</SubHeading>
					<List
						elements={[
							"The application is only open to students of Grades VII-XII.",
							"Applicants are requested to check their emails regularly for updates.",
							"Payment will be accepted through bank transfer; Paragraph are provided below for Non-NMS applicants.",
							"Registration will only be confirmed once payment is received.",
							"In the last question where proof of payment is asked, please add the transaction receipt.",
							"NMS applicants are required to pay in person.",
							"Further information about allocations will be updated.",
						]}
						animation={onScrollAnimation(av.FromLeft, {
							opacity: 0.8,
						})}
					/>
					<Paragraph animation={onScrollAnimation(av.FromLeft)}>
						<span className="underline font-bold">
							Last Date for NMS applicants
						</span>{" "}
						- To be announced
					</Paragraph>
					<Paragraph animation={onScrollAnimation(av.FromLeft)}>
						<span className="underline font-bold">
							Last Date for non NMS applicants
						</span>{" "}
						- To be announced
					</Paragraph>
					<Animate animation={onScrollAnimation(av.FromLeft)}>
						<Button
							href="https://forms.gle/DHdTfJqs7SQc4YyVA"
							className="mt-12"
							animation
						>
							NMS and Non-NMS Student Applications Now Open
						</Button>
					</Animate>
				</Details>
			</Container>

			<Container id="sec-run">
				<Details>
					<Heading className="mb-6" animation={onScrollAnimation(av.FromLeft)}>
						Security & Runner Applications
					</Heading>
					<Paragraph
						animation={onScrollAnimation(av.FromLeft, {
							opacity: 0.8,
						})}
					>
						Join our MUN team in one of two crucial roles: Security or Runner.
						In the Security position, your top priority is ensuring a secure
						environment for all conference attendees. You&apos;ll oversee access
						control, monitor conference areas, and promptly address security
						concerns.
					</Paragraph>
					<Paragraph
						animation={onScrollAnimation(av.FromLeft, {
							opacity: 0.8,
						})}
					>
						This role requires attention to detail, effective communication, and
						a proactive approach. Your collaboration with organizers,
						authorities, and venue staff to implement security protocols is key.
						Your presence reassures participants, allowing them to focus on
						diplomacy. Join our Security team to gain valuable event security
						experience and contribute to a secure and welcoming conference
						environment.
					</Paragraph>
					<Paragraph
						animation={onScrollAnimation(av.FromLeft, {
							opacity: 0.8,
						})}
					>
						Alternatively, consider the Runner role, where you become an
						indispensable part of our MUN experience. As a Runner, you
						facilitate the seamless flow of information between committees,
						assist with document distribution, and provide essential support to
						delegates and chairs.
					</Paragraph>
					<Paragraph
						animation={onScrollAnimation(av.FromLeft, {
							opacity: 0.8,
						})}
					>
						In this dynamic, fast-paced role, you&apos;ll deliver messages and
						documents between committees, troubleshoot technical issues, and
						ensure delegates have access to vital resources. Your adaptability
						and organization under pressure directly contribute to our
						conference&apos;s overall success. Join our passionate MUN community as a
						Runner, gaining valuable hands-on experience in event logistics and
						coordination.
					</Paragraph>
					<SubHeading
						animation={onScrollAnimation(av.FromLeft)}
						className="mt-4"
					>
						Instructions
					</SubHeading>
					<List
						elements={[
							"The application is only open to students of Grades X-XII.",
							"Interviews will be held in person at New Millennium School or online via Google Meets.",
							"Applicants are requested to check their emails regularly for further updates.",
						]}
						animation={onScrollAnimation(av.FromLeft, {
							opacity: 0.8,
						})}
					/>
					<Paragraph animation={onScrollAnimation(av.FromLeft)}>
						<span className="underline font-bold">
							Last Date for applicants
						</span>{" "}
						- To be announced
					</Paragraph>
					<Animate animation={onScrollAnimation(av.FromLeft)}>
						<Button
							href="https://forms.gle/HTRZFiax6dXv3e9A9"
							className="mt-12"
							animation
						>
							NMS Applications Now Open
						</Button>
					</Animate>
				</Details>
			</Container>
		</BaseLayout>
	);
}

export default RegisterPage;
