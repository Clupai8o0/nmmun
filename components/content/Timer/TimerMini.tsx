import clsx from "clsx";

import { Time } from "@/hooks/useTime";
import { useEffect, useState } from "react";

const TimerMini = ({ dark }: { dark?: boolean }) => {
	const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	const [isEventHappening, setIsEventHappening] = useState(false);
	const [isEventOver, setIsEventOver] = useState(false);

	useEffect(() => {
		//? runs only on page refresh
		const time = new Time();

		if (time.difference > 0) {
			setSeconds(time.seconds);
			setMinutes(time.minutes);
			setHours(time.hours);
			setDays(time.days);

			const timerInterval = setInterval(() => {
				if (seconds > 0) {
					setSeconds(seconds - 1);
				}
				if (seconds === 0) {
					if (minutes === 0) {
						if (hours === 0) {
							if (days === 0) {
								clearInterval(timerInterval);
							} else {
								setDays(days - 1);
								setHours(23);
							}
						} else {
							setHours(hours - 1);
							setMinutes(59);
						}
					} else {
						setMinutes(minutes - 1);
						setSeconds(59);
					}
				}
			}, 1000);
			return () => {
				clearInterval(timerInterval);
			};
		}

		setIsEventHappening(time.isEventHappening());
		setIsEventOver(time.isEventOver());
	}, [seconds]);

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