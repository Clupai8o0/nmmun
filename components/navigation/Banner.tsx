import { X } from "lucide-react";
import { useEffect, useState } from "react";

import { banner } from "@/lib/config";
import { useTime } from "@/hooks/useTime";

import { Button } from "../ui/button";

const Banner = () => {
	const { isEventHappening, isEventOver } = useTime();

	const [content, setContent] = useState(banner.beforeEvent);
	const [show, setShow] = useState(false);

	useEffect(() => {
		if (isEventHappening) setContent(banner.duringEvent);
		if (isEventOver) setContent(banner.afterEvent);

		// look if the same banner content exists in local storage
		// if it doesn't then show the banner
		if (content !== localStorage.getItem("banner")) setShow(true);
		// if banner is closed, then set the banner content in local storage

		if (content.length === 0) setShow(false); // Don't show empty banner
	}, []);

	return (
		show && (
			<div className="flex z-20 gap-8 justify-between py-2 xl:py-1 px-4 w-full bg-color-4 items-center">
				<p className="text-sm font-light text-white">{content}</p>
				<Button
					size="icon"
					variant="ghost"
					onClick={() => {
						localStorage.setItem("banner", content);
						setShow(false);
					}}
					className="hover:bg-color-3 p-2 text-white hover:text-white"
				>
					<X className="w-4 h-4" />
				</Button>
			</div>
		)
	);
};

export default Banner;
