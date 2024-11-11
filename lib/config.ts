//* For configuring banner content, hero text, event timing, and info page details (itinerary & dress code)

import { EventStates } from "./types";

//! don't alter status code
const status: string = process.env.NEXT_PUBLIC_STATUS || ""; 
export const isDevelopment = () => status === "DEVELOPMENT"; //* check project status

//* banner content states (banner doesn't appear unless content is there)
export const banner: EventStates = {
	beforeEvent: "Curious about your role in the upcoming MUN conference? Check out the Allocations page under the Information tab!",
	duringEvent: "NMMUN 2024 has started. We wish all the very best!!",
	afterEvent: "NMMUN 2024 is over. Thank you for joining and we hope to see you next year!!",
};

//* Hero text
export const hero: EventStates = {
	beforeEvent: "Engage, Debate, Lead: Your diplomatic journey begins here",
	duringEvent: "NMMUN 2024 has started, we wish you all the very best!",
	afterEvent:
		"NMMUN 2024 is over. Thank you for joining us and we hope to see you next year!",
};

//* Event timings for the timer & register button (timer only shows up before the event and register button is disabled otherwise)
export const eventDate = "2024-11-15 08:00:00"; // YYYY-MM-DD HH-MM-SS
export const eventEndDate = "2024-11-16 18:00:00"; //! must always be after the event
export const eventDateInWords = "15th & 16th November, 2024";

//* Itinerary
export const itineraryDay1 = [
	{
		time: "Stay tuned!",
		name: "To be announced"
		time: "Stay tuned!",
		name: "To be announced"
	},
];
export const itineraryDay2 = [
	{
		time: "Stay tuned!",
		name: "To be announced"
	},
];

//* Dress code
export const dressCodeMen = [
	"All participants must ensure that they are in formal attire.",
	"No T-shirts are allowed under the suit jacket, only formal shirts.",
	"Ties must not have any informal prints on them and must be tied neatly.",
	"Dress pants only. No jeans or shorts of any kind.",
	"Refrain from wearing fluorescent/ neon colors.",
	"No sneakers or sandals, dress shoes only.",
];
export const dressCodeWomen = [
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
];
