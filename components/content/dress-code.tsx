import React from "react";
import { v4 as generateKey } from "uuid";
import { motion } from "framer-motion";

import { DetailsOnly } from "@/layouts";
import { Details, Heading, SubHeading } from "..";
import { inViewVariants } from "@/config/animations";

const DressCode = () => {
	return (
		<DetailsOnly className="my-16">
			<Heading className="mb-8">Dress Code</Heading>
			<Details className="w-full md:w-2/3" opacity={0.8}>
				Model United Nation conferences are formal meeting places for tackling
				serious global conflicts, and attendees are expected to reflect this
				with their professional and modest appearance.
			</Details>
			<Details className="w-full md:w-2/3" opacity={0.8}>
				All delegates, chairs, and directors are required to adhere to NMMUN’s
				professional dress code. Delegates who fail to abide by the code will be
				asked to leave the conference and will only be allowed to return when
				they are in proper attire.
			</Details>

			<div className="flex flex-col md:flex-row gap-8 my-8">
				<div className="md:w-1/2 flex flex-col items-start justify-start">
					<SubHeading className="mb-8">Gentlemen</SubHeading>
					<ul className="space-y-4 text-left text-black font-medium">
						{[
							"All participants must ensure that they are in formal attire.",
							"No T-shirts are allowed under the suit jacket, only formal shirts.",
							"Ties must not have any informal prints on them and must be tied neatly.",
							"Dress pants only. No jeans or shorts of any kind.",
							"Refrain from wearing fluorescent/ neon colors.",
							"No sneakers or sandals, dress shoes only.",
						].map((code) => (
							<motion.li
								className="flex items-center space-x-3"
								key={generateKey()}
								variants={inViewVariants}
								initial={"fromLeft"}
								whileInView={inViewVariants.visible(0.9)}
								transition={{
									duration: 0.4,
								}}
								viewport={{ once: true, amount: 0.25 }}
							>
								<svg
									className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 16 12"
								>
									<path
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M1 5.917 5.724 10.5 15 1.5"
									/>
								</svg>
								<span>{code}</span>
							</motion.li>
						))}
					</ul>
				</div>
				<div className="md:w-1/2 flex flex-col items-start justify-start">
					<SubHeading className="mb-8">Ladies</SubHeading>
					<ul className="space-y-4 text-left text-black font-medium">
						{[
							"All participants must ensure that they are in formal attire.",
							"Suits must be neat and formal and must not have informal prints of any kind.",
							"Informal dresses are not permitted. Formal dresses along with a blazer (optional) only.",
							"Kindly wear formal pants/skirts only. Skirt length must reach the knees; otherwise, you will not be allowed to enter the conference.",
							"Refrain from wearing fluorescent/neon colors.",
							"Dress pants only. No jeans or shorts of any kind.",
							"Dress shoes and heels are permitted. No sneakers or sandals are allowed.",
							"If the participant is wearing heels, please ensure they are comfortable and do not create problems for the participant.",
							"Jewelry is allowed; however, ensure that it is not too flashy.",
							"Makeup must be simple and professional.",
						].map((code) => (
							<motion.li
								className="flex items-center space-x-3"
								key={generateKey()}
								variants={inViewVariants}
								initial={"fromLeft"}
								whileInView={inViewVariants.visible(0.9)}
								transition={{
									duration: 0.4,
								}}
								viewport={{ once: true, amount: 0.25 }}
							>
								<svg
									className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 16 12"
								>
									<path
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M1 5.917 5.724 10.5 15 1.5"
									/>
								</svg>
								<span>{code}</span>
							</motion.li>
						))}
					</ul>
				</div>
			</div>

			<Details opacity={0.8}>
				<span className="font-bold">Note: </span>
				Chairs, Delegates and members in LOK SABHA are permitted to wear
				Traditional Indian attire.
			</Details>
			<Details opacity={0.8}>
				All participants are expected to strictly follow the dress code.
			</Details>
		</DetailsOnly>
	);
};

export default DressCode;
