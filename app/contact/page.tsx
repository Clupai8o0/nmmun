"use client";

import {
	Instagram,
	Mail,
	Github,
} from "lucide-react";
import { motion } from "framer-motion";

import { BaseLayout, Container } from "@/components/layouts";
import { Heading, List, Paragraph, SubHeading } from "@/components/typography";

import { animation, animationVariants } from "@/lib/animations";
import { AnimationVariants as av } from "@/lib/types";
import { generateKey } from "@/lib/utils";

function ContactPage() {
	return (
		<BaseLayout noScrollToTop>
			<Container className="mt-28 pb-28 pt-16">
				<Heading
					animation={animation(av.FromLeft, {
						delay: 2,
					})}
				>
					Contact Us
				</Heading>
				<Paragraph
					animation={animation(av.FromLeft, {
						delay: 2.1,
					})}
				>
					Have any questions you want to ask? Send us a message and let us know
				</Paragraph>
				<div className="flex flex-col-reverse md:flex-row mt-8 gap-x-6">
					<div className="w-full md:w-1/2">
						<SubHeading
							className="mb-4"
							animation={animation(av.FromLeft, {
								delay: 2.2,
							})}
						>
							Send Us a Message
						</SubHeading>

						<List
							animation={animation(av.FromLeft, {
								delay: 2.3,
							})}
							elements={[
								<a
									href="https://www.instagram.com/nmmun_24/"
									className="hover:text-primary hover:underline transition duration-300 ease-in-out flex gap-2 items-center mt-2"
									target="_blank"
									key={generateKey()}
								>
									<Instagram className="w-6 h-6" />
									@nmmun_24
								</a>,
							]}
						/>

						<SubHeading
							className="mb-4"
							animation={animation(av.FromLeft, {
								delay: 2.4,
							})}
						>
							Our Emails
						</SubHeading>
						<List
							animation={animation(av.FromLeft, {
								delay: 2.5,
							})}
							stagger={0.05}
							elements={[
								<span className="gap-2 flex items-center" key={generateKey()}>
									<Mail className="w-6 h-6" /> nmmun2024.25@gmail.com
								</span>
							]}
						/>

						<SubHeading
							className="mb-4"
							animation={animation(av.FromLeft, {
								delay: 2.6,
							})}
						>
							Report Bug
						</SubHeading>

						<List
							animation={animation(av.FromLeft, {
								delay: 2.7,
							})}
							elements={[
								<a
									href="https://github.com/Shawarma22/nmmun"
									className="hover:text-primary hover:underline transition duration-300 ease-in-out flex gap-2 items-center mt-2"
									target="_blank"
									key={generateKey()}
								>
									<Github className="w-6 h-6" />
									Github.com
								</a>,
							]}
						/>
					</div>

					<div className="w-full md:w-1/2">
						<div className="w-full">
							<SubHeading
								className="mb-4"
								animation={animation(av.FromRight, {
									delay: 2,
								})}
							>
								Address:{" "}
							</SubHeading>
							<Paragraph
								className="w-full md:w-2/3"
								animation={animation(av.FromRight, {
									delay: 2.1,
								})}
							>
								New Millennium School, Building 399, Road 3009, Block 330,
								Bu-Ghazal, Zinj, Bahrain
							</Paragraph>

							<motion.div
								variants={animationVariants}
								{...animation(av.FromRight, {
									delay: 2.2,
								})}
							>
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.5338861576756!2d50.56948227489758!3d26.211836889859818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49af14f7389d1d%3A0x18da6ea2b6728982!2sNew%20Millennium%20School%20Bahrain!5e0!3m2!1sen!2sbh!4v1694055438974!5m2!1sen!2sbh"
									height="350"
									style={{ border: 0 }}
									loading="lazy"
									allowFullScreen={false}
									referrerPolicy="no-referrer-when-downgrade"
									className="my-4 w-full"
								></iframe>
							</motion.div>
						</div>
					</div>
				</div>
			</Container>
		</BaseLayout>
	);
}

export default ContactPage;