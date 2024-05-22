import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { animationVariants } from "@/lib/animations";

const FloatingScrollToTopButton = () => {
	const [showBtn, setShowBtn] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 400) setShowBtn(true);
			else setShowBtn(false);

			if (window.scrollY > window.document.body.offsetHeight - 1400)
				setShowBtn(false);
		});
	}, []);

	const goToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<motion.div
			className="relative z-20"
			variants={animationVariants}
			initial="fromBottom"
			animate="visible"
			transition={{ duration: 0.4 }}
		>
			{showBtn && (
				<button
					className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 bg-[#a07a65] text-white rounded-full p-4 flex items-center gap-2 cursor-pointer duration-300 ease-in-out shadow-md hover:shadow-2xl hover:scale-110 focus:scale-95 active:scale-100 z-20"
					onClick={goToTop}
				>
					<ArrowUp className="w-6 h-6" />{" "}
					<span className="hidden md:flex">Go Back To Top</span>
				</button>
			)}
		</motion.div>
	);
};

export default FloatingScrollToTopButton;
