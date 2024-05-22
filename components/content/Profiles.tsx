import clsx from "clsx";
import { motion } from "framer-motion";

import { Skeleton } from "../ui/skeleton";

import { Heading } from "../typography";

import { generateKey } from "@/lib/utils";
import { animationVariants, onScrollAnimation } from "@/lib/animations";
import {
	AnimationVariants,
	BaseAnimationProps,
	BaseComponentProps,
	TeamLink,
} from "@/lib/types";

interface Props extends BaseComponentProps {
	team: TeamLink;
	hideTitle?: boolean;
}
interface Props extends BaseAnimationProps {}

const Profiles = ({ className, team, hideTitle, animation }: Props) => {
	return (
		<motion.div
			className="w-full flex justify-center py-12"
			id={team?.id}
			variants={animationVariants}
			{...animation}
		>
			<div className="max-w-7xl w-full">
				{team?.title && !hideTitle && (
					<Heading
						className="mb-10"
						animation={onScrollAnimation(AnimationVariants.FromLeft)}
					>
						{team.title}
					</Heading>
				)}

				<div
					className={clsx(
						"flex flex-col gap-4 sm:grid md:gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
						className
					)}
				>
					{team ? (
						team.members.map((member, i) => (
							<motion.div
								className="max-w-sm rounded-lg overflow-hidden relative h-[400px] group"
								variants={animationVariants}
								{...onScrollAnimation(AnimationVariants.FromDown, {
									delay: i * 0.1,
								})}
								key={generateKey()}
							>
								<img
									className="rounded-t-lg w-full mx-auto object-cover h-[400px] absolute top-0 left-0"
									src={member.src}
									alt={member.name}
								/>

								<div className="absolute bottom-0 w-full h-36 bg-gradient-to-t from-[#5D2510] to-transparent"></div>
								<div className="p-5 absolute bottom-0 left-0 text-white">
									<h4 className="mb-1 text-2xl font-semibold tracking-tight">
										{member.name}
									</h4>
									{member.pos && (
										<p className="font-normal text-sm opacity-80 truncate">
											{member.pos}
										</p>
									)}
								</div>
							</motion.div>
						))
					) : (
						<>
							<Skeleton className="w-full max-w-sm h-[400px]" />
							<Skeleton className="w-full max-w-sm h-[400px]" />
							<Skeleton className="w-full max-w-sm h-[400px]" />
						</>
					)}
				</div>
			</div>
		</motion.div>
	);
};

export default Profiles;
