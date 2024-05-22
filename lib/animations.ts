import { cubicBezier } from "framer-motion";

export const animationVariants = {
	fromRight: {
		x: 25,
		opacity: 0,
	},
	fromLeft: {
		x: -25,
		opacity: 0,
	},
	fromDown: {
		y: 25,
		opacity: 0,
	},
	fromTop: {
		y: -25,
		opacity: 0,
	},
	fromNothing: {
		opacity: 0,
	},

	visible: (opacity?: number | string) => ({
		x: 0,
		y: 0,
		opacity: opacity || 1,
	}),
};

export const animation = (
	initial: any,
	props?: { opacity?: number; delay?: number; ease?: any }
) => ({
	initial,
	animate: animationVariants.visible(props?.opacity),
	transition: {
		duration: 0.4,
		delay: props?.delay,
		ease: props?.ease || cubicBezier(0.65, 0.05, 0.36, 1),
	},
});
export const onScrollAnimation = (
	initial: any,
	props?: { opacity?: number; delay?: number; ease?: any }
) => ({
	initial,
	whileInView: animationVariants.visible(props?.opacity),
	transition: {
		duration: 0.4,
		delay: props?.delay,
		ease: props?.ease || cubicBezier(0.65, 0.05, 0.36, 1),
	},
	viewport: { once: true, amount: 0.5 },
});
