import clsx from "clsx";
import { motion } from "framer-motion";

import { useTime } from "@/hooks/useTime";
import { BaseAnimationProps } from "@/lib/types";
import { animationVariants } from "@/lib/animations";

interface Props extends BaseAnimationProps {
	dark?: boolean;
}

const Timer = ({ dark, animation }: Props) => {
	const { seconds, minutes, hours, days, isEventHappening, isEventOver } =
		useTime();

	return (
		<motion.div
			className="flex flex-col items-center"
			variants={animationVariants}
			{...animation}
		>
			<div
				className={clsx(
					"grid grid-flow-col gap-2 md:gap-4 text-center auto-cols-max relative z-10",
					!isEventOver && "my-4 md:my-6",
					dark && "text-white"
				)}
			>
				{!isEventOver && (
					<>
						{!isEventHappening ? (
							<>
								<div
									className={clsx(
										"flex flex-col p-2 bg-black bg-opacity-50 rounded-xl",
										dark && "text-white"
									)}
								>
									<span className="font-mono text-4xl md:text-5xl font-medium">
										<span>{days < 10 ? `0${days}` : days}</span>
									</span>
									<span className="detail-span">days</span>
								</div>
								<div
									className={clsx(
										"flex flex-col p-2 bg-black bg-opacity-50 rounded-xl",
										dark && "text-white"
									)}
								>
									<span className="font-mono text-4xl md:text-5xl font-medium">
										<span>{hours < 10 ? `0${hours}` : hours}</span>
									</span>
									<span className="detail-span">hours</span>
								</div>
								<div
									className={clsx(
										"flex flex-col p-2 bg-black bg-opacity-50 rounded-xl",
										dark && "text-white"
									)}
								>
									<span className="font-mono text-4xl md:text-5xl font-medium">
										<span>{minutes < 10 ? `0${minutes}` : minutes}</span>
									</span>
									<span className="detail-span">min</span>
								</div>
								<div
									className={clsx(
										"flex flex-col p-2 bg-black bg-opacity-50 rounded-xl",
										dark && "text-white"
									)}
								>
									<span className="font-mono text-4xl md:text-5xl font-medium">
										<span>{seconds < 10 ? `0${seconds}` : seconds}</span>
									</span>
									<span className="detail-span">sec</span>
								</div>
							</>
						) : (
							<div
								className={clsx(
									"flex py-2 px-4 bg-black bg-opacity-5 rounded-xl",
									dark && "bg-white text-white"
								)}
							>
								The event has started!!
							</div>
						)}
					</>
				)}
			</div>
		</motion.div>
	);
};

export default Timer;
