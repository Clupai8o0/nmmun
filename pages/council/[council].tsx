import Image from "next/image";
import { v4 as generateKey } from "uuid";

import { CTA, Details, Head, Heading, List, Profile, SubHeading } from "@/components";
import { DetailsOnly, ProfilesContainer } from "@/layouts";

// {
//     "name": "UNSC",
//     "id": "UNSC",
//     "desc": [
//         "The UN Security Council (UNSC) is a significant body of the United Nations, based on the UN Charter. The organ is a major actor for the maintenance of international peace and security.",
//         "With its five permanent members who hold veto power, the Security Council overlooks anything that is happening in the world that concerns security maintenance and potential threats to peace. This council is considered an Advanced level committee."
//     ],
//     "src": "/councils/unsc.png",
//     "alt": "United Nations Security Council Logo",
//     "topics": [
//         "Addressing Sino-Indian Aggressions",
//         "Efforts to Rid the World of Weapons of Mass Destruction Including Nuclear Weapons"
//     ],
//     "bgs": [
//         {
//             "name": "Background Guide",
//             "url": "https://drive.google.com/file/d/18WtCMTKBncpHlk8N66J0pk83GwL0J_Wd/view?usp=drive_link"
//         }
//     ],
//     "members": [
//         {
//             "name": "Adesh Shaiju",
//             "src": "/councils/chairs/adesh.png"
//         },
//         {
//             "name": "Adesh Shaiju",
//             "src": "/councils/chairs/adesh.png"
//         }
//     ]
// }

function Council({ council }: any) {
	return (
		<main className="main">
			<Head
				title={`NMMUN: ${council.name}`}
				desc={council.desc}
				img="/join-us.jpeg"
			/>

			<DetailsOnly className="mt-28 pb-28 pt-16">
				<div className="flex flex-col md:flex-row gap-x-4">
					<div className="w-full md:w-1/2">
						<div className="flex justify-center md:justify-start">
							<Image
								src={council.src}
								alt={council.alt}
								width={256}
								height={256}
								className="object-cover"
							/>
						</div>

						<Heading className="mt-8">{council.name}</Heading>
						<Details opacity={0.8}>{council.desc}</Details>
						<SubHeading>Topics</SubHeading>
						<List
							content={council.topics.map((topic: string) => (
								<span className="opacity-80">{topic}</span>
							))}
						/>

						{council.bgs && (
							<div className="mt-8 flex flex-col md:flex-row gap-x-4 gap-y-4">
								{council.bgs.map((bg: any) => (
									<div>
										<CTA
											title={bg.name}
											href={bg.url}
											notCenter
											target="_blank"
										/>
									</div>
								))}
							</div>
						)}
					</div>

					<div className="w-full md:w-1/2">
						<ProfilesContainer
							title="Members"
							key={generateKey()}
							grid="grid-cols-2"
						>
							{council.members.map(
								({ name, src }: { name: string; src: string }) => (
									<Profile
										key={generateKey()}
										src={src}
										alt={name}
										name={name}
									/>
								)
							)}
						</ProfilesContainer>
					</div>
				</div>
			</DetailsOnly>
		</main>
	);
}

export default Council;

import { GetStaticPaths, GetStaticProps } from "next";
import { councils } from "@/config/links";

export const getStaticPaths: GetStaticPaths = async (ctx) => {
	const paths = councils.map((council) => ({
		params: { council: council.id },
	}));
	return {
		paths,
		fallback: "blocking",
	};
};

export const getStaticProps: GetStaticProps = async (ctx) => {
	const council = councils.filter(
		(council) => council.id === ctx.params?.council
	);

	return {
		props: {
			council: council[0],
		},
	};
};
