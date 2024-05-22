import { AnimatePresence } from "framer-motion";
import { motion, cubicBezier } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";

import { isDevelopment } from "@/lib/config";

const TransitionOverlay = () => {
	const pathname = usePathname();

	return (
		<motion.div
			className="w-full h-full bg-white fixed top-0 left-0 z-[1000] flex flex-col gap-8 justify-center items-center"
			initial={{
				x: 0,
			}}
			animate={{
				x: "-100%",
				transition: {
					delay: 1,
					duration: 0.4,
					ease: cubicBezier(0.77, 0, 0.18, 1),
				},
			}}
			exit={{
				x: 0,
			}}
			transition={{
				duration: 0.6,
			}}
			key={pathname}
		>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{
					duration: 0.8,
				}}
			>
				<Image
					src="/images/nmmun.png"
					alt="nmmun logo"
					width={128}
					height={128}
				/>
			</motion.div>
			<div className="line-wobble"></div>
		</motion.div>
	);
};

const AnimationWrapper = ({ children }: { children: React.ReactNode }) => {
	return (
		<AnimatePresence mode="wait">
			{!isDevelopment() && <TransitionOverlay />}
			{children}
		</AnimatePresence>
	);
};

export default AnimationWrapper;
