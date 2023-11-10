import React from "react";
import { motion } from "framer-motion";
import { v4 as generateKey } from "uuid";

import { TwoColumnsLayout } from "@/layouts";
import { SubHeading } from "..";
import { inViewVariants } from "@/config/animations";

const Itinerary = () => {
	return (
		<TwoColumnsLayout title="Itinerary" id="itinerary">
			<div className="md:w-1/2 flex flex-col items-start justify-start">
				<SubHeading className="mb-8">
					Day 1 - Friday, 17th November, 2023
				</SubHeading>
				<ol className="relative border-l border-blue-400">
					{[
						{
							time: "8:00-8:45 a.m.",
							name: "Registration",
							// desc: "Model United Nations (MUN) has become an increasingly popular activity held at many schools worldwide. ",
							start: true,
						},
						{
							time: "8:45-9:30 a.m.",
							name: "Opening Ceremony",
							// desc: "Model United Nations (MUN) has become an increasingly popular activity held at many schools worldwide. ",
							start: false,
						},
						{
							time: "9:30-9:45 a.m.",
							name: "Breakfast (In Council)",
							// desc: "Model United Nations (MUN) has become an increasingly popular activity held at many schools worldwide. ",
							start: false,
						},
						{
							time: "9:45-12:30 p.m.",
							name: "Council Session One",
							// desc: "Model United Nations (MUN) has become an increasingly popular activity held at many schools worldwide. ",
							start: false,
						},
						{
							time: "12:30-2:00 p.m.",
							name: "Lunch Break",
							// desc: "Model United Nations (MUN) has become an increasingly popular activity held at many schools worldwide. ",
							start: false,
						},
						{
							time: "2:00-4:00 p.m.",
							name: "Council Session Two",
							// desc: "Model United Nations (MUN) has become an increasingly popular activity held at many schools worldwide. ",
							start: false,
						},
						{
							time: "4:00-4:15 p.m.",
							name: "Snacks Break",
							// desc: "Model United Nations (MUN) has become an increasingly popular activity held at many schools worldwide. ",
							start: false,
						},
						{
							time: "4:15-5:00 p.m.",
							name: "Council Session Three",
							// desc: "Model United Nations (MUN) has become an increasingly popular activity held at many schools worldwide. ",
							start: false,
						},
					].map(({ time, name, start }) => (
						// <li className="mb-10 ml-4" key={generateKey()}>
						<li className="mb-4 ml-4" key={generateKey()}>
							<div
								className={`absolute w-3 h-3 bg-blue-400 rounded-full mt-1.5 -left-1.5 border border-white ${
									start && "mt-0"
								}`}
							></div>
							<time
								className={`mb-1 text-sm font-normal leading-none text-gray-600`}
							>
								{time}
							</time>
							<motion.div
								variants={inViewVariants}
								initial={"fromLeft"}
								whileInView="visible"
								transition={{
									duration: 0.4,
								}}
								viewport={{ once: true, amount: 0.25 }}
							>
								<h3 className="text-lg font-medium text-gray-900">{name}</h3>
								{/* <p className="mb-4 text-base font-normal text-gray-700">
									{desc}
								</p> */}
							</motion.div>
						</li>
					))}
					<li className="ml-4">
						<div className="absolute w-3 h-3 bg-blue-400 rounded-full -left-1.5 border border-white"></div>
						<time className="absolute text-sm font-normal leading-none text-gray-600">
							End
						</time>
					</li>
				</ol>
			</div>
			<div className="md:w-1/2 flex flex-col items-start justify-start">
				<SubHeading className="mb-8">
					Day 2 - Saturday, 18th August, 2023
				</SubHeading>
				<ol className="relative border-l border-blue-400">
					{[
						{
							time: "8:00-10:00 a.m.",
							name: "Council Session Four",
							// desc: "Model United Nations (MUN) has become an increasingly popular activity held at many schools worldwide. ",
							start: true,
						},
						{
							time: "10:00-10:30 a.m.",
							name: "Breakfast (In Council)",
							// desc: "Model United Nations (MUN) has become an increasingly popular activity held at many schools worldwide. ",
							start: false,
						},
						{
							time: "10:30-12:30 p.m.",
							name: "Council Session Five",
							// desc: "Model United Nations (MUN) has become an increasingly popular activity held at many schools worldwide. ",
							start: false,
						},
						{
							time: "12:30-2:00 p.m.",
							name: "Lunch Break",
							// desc: "Model United Nations (MUN) has become an increasingly popular activity held at many schools worldwide. ",
							start: false,
						},
						{
							time: "2:00-3:30 p.m.",
							name: "Council Session Six",
							// desc: "Model United Nations (MUN) has become an increasingly popular activity held at many schools worldwide. ",
							start: false,
						},
						{
							time: "3:30-3:45 p.m.",
							name: "Snacks Break",
							// desc: "Model United Nations (MUN) has become an increasingly popular activity held at many schools worldwide. ",
							start: false,
						},
						{
							time: "3:45-4:45 p.m.",
							name: "Council Session Seven",
							// desc: "Model United Nations (MUN) has become an increasingly popular activity held at many schools worldwide. ",
							start: false,
						},
						{
							time: "4:45-6:00 p.m.",
							name: "Closing Ceremony",
							// desc: "Model United Nations (MUN) has become an increasingly popular activity held at many schools worldwide. ",
							start: false,
						},
					].map(({ time, name, start }) => (
						<li className="mb-4 ml-4" key={generateKey()}>
							<div
								className={`absolute w-3 h-3 bg-blue-400 rounded-full mt-1.5 -left-1.5 border border-white ${
									start && "mt-0"
								}`}
							></div>
							<time
								className={`mb-1 text-sm font-normal leading-none text-gray-600`}
							>
								{time}
							</time>
							<motion.div
								variants={inViewVariants}
								initial={"fromLeft"}
								whileInView="visible"
								transition={{
									duration: 0.4,
								}}
								viewport={{ once: true, amount: 0.25 }}
							>
								<h3 className="text-lg font-medium text-gray-900">{name}</h3>
								{/* <p className="mb-4 text-base font-normal text-gray-700">
									{desc}
								</p> */}
							</motion.div>
						</li>
					))}
					<li className="ml-4">
						<div className="absolute w-3 h-3 bg-blue-400 rounded-full -left-1.5 border border-white"></div>
						<time className="absolute text-sm font-normal leading-none text-gray-600">
							End
						</time>
					</li>
				</ol>
			</div>
		</TwoColumnsLayout>
	);
};

export default Itinerary;
