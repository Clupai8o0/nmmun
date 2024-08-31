import { useState, useEffect } from "react";

import { eventDate, eventEndDate } from "@/lib/config";

export class Time {
	difference: number;
	now: Date;

	seconds: number;
	minutes: number;
	hours: number;
	days: number;

	endTargetTime: Date;

	constructor() {
		const t = eventDate.split(/[- : T]/);
		const targetTime = new Date(
			parseInt(t[0]),
			parseInt(t[1]) - 1,
			parseInt(t[2]),
			parseInt(t[4]),
			parseInt(t[5]),
			parseInt(t[3])
		);

		this.now = new Date();
		this.difference = targetTime.getTime() - this.now.getTime();

		this.seconds = Math.floor(this.difference / 1000);
		this.minutes = Math.floor(this.seconds / 60);
		this.hours = Math.floor(this.minutes / 60);
		this.days = Math.floor(this.hours / 24);

		this.hours %= 24;
		this.minutes %= 60;
		this.seconds %= 60;

		const e = eventEndDate.split(/[- : T]/);
		this.endTargetTime = new Date(
			parseInt(e[0]),
			parseInt(e[1]) - 1,
			parseInt(e[2]),
			parseInt(e[3]),
			parseInt(e[4]),
			parseInt(e[5])
		);
	}

	isEventHappening() {
		if (this.endTargetTime.getTime() - this.now.getTime() > 0) return true;
		else return false;
	}

	isEventOver() {
		if (this.endTargetTime.getTime() - this.now.getTime() <= 0) return true;
		else return false;
	}
}

export const useTime = () => {
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
	}, []);

	return { seconds, minutes, hours, days, isEventHappening, isEventOver };
};
