import clsx from "clsx";

import { useTime } from "@/hooks/useTime";

const TimerMini = ({ dark }: { dark?: boolean }) => {
	const { seconds, minutes, days, hours, isEventHappening, isEventOver } =
		useTime();

	return (
		<div className="grid grid-flow-col gap-2 md:gap-4 text-center auto-cols-max relative z-10">
			{!isEventOver && (
				<>
					{!isEventHappening ? (
						<>
							<div
								className={clsx(
									"flex flex-col p-2 bg-black bg-opacity-5 rounded-xl",
									dark && "bg-white"
								)}
							>
								<span
									className={clsx(
										"font-mono text-lg font-medium",
										dark && "text-white"
									)}
								>
									<span>{days < 10 ? `0${days}` : days}</span>
								</span>
								<span
									className={clsx(
										"text-[10px] uppercase opacity-60 font-medium",
										dark && "text-white"
									)}
								>
									days
								</span>
							</div>
							<div
								className={clsx(
									"flex flex-col p-2 bg-black bg-opacity-5 rounded-xl",
									dark && "bg-white"
								)}
							>
								<span
									className={clsx(
										"font-mono text-lg font-medium",
										dark && "text-white"
									)}
								>
									<span>{hours < 10 ? `0${hours}` : hours}</span>
								</span>
								<span
									className={clsx(
										"text-[10px] uppercase opacity-60 font-medium",
										dark && "text-white"
									)}
								>
									hours
								</span>
							</div>
							<div
								className={clsx(
									"flex flex-col p-2 bg-black bg-opacity-5 rounded-xl",
									dark && "bg-white"
								)}
							>
								<span
									className={clsx(
										"font-mono text-lg font-medium",
										dark && "text-white"
									)}
								>
									<span>{minutes < 10 ? `0${minutes}` : minutes}</span>
								</span>
								<span
									className={clsx(
										"text-[10px] uppercase opacity-60 font-medium",
										dark && "text-white"
									)}
								>
									min
								</span>
							</div>
							<div
								className={clsx(
									"flex flex-col p-2 bg-black bg-opacity-5 rounded-xl",
									dark && "bg-white"
								)}
							>
								<span
									className={clsx(
										"font-mono text-lg font-medium",
										dark && "text-white"
									)}
								>
									<span>{seconds < 10 ? `0${seconds}` : seconds}</span>
								</span>
								<span
									className={clsx(
										"text-[10px] uppercase opacity-60 font-medium",
										dark && "text-white"
									)}
								>
									sec
								</span>
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
	);
};

export default TimerMini;
