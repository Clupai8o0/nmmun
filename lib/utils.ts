import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { v4 } from "uuid";

/**
 * Generate a unique uuid key for components
 * @returns string
 */
export const generateKey = () => v4();

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
