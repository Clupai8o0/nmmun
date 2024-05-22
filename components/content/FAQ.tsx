import clsx from "clsx";
import { motion } from "framer-motion";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

import { BaseAnimationProps } from "@/lib/types";
import { animationVariants } from "@/lib/animations";

interface Props extends BaseAnimationProps {
	question: string;
	answer: string;
	className?: string;
}

const FAQ = ({ question, answer, className, animation }: Props) => {
	return (
		<motion.div variants={animationVariants} {...animation}>
			<Accordion type="single" collapsible>
				<AccordionItem
					value="item-1"
					className={clsx("border-gray-500 border-opacity-40", className)}
				>
					<AccordionTrigger className="text-left">{question}</AccordionTrigger>
					<AccordionContent>{answer}</AccordionContent>
				</AccordionItem>
			</Accordion>
		</motion.div>
	);
};

export default FAQ;
