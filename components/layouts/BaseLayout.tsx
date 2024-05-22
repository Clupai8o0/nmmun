import NextTopLoader from "nextjs-toploader";
import {
	AnimationWrapper,
	Banner,
	Footer,
	Navbar,
	ScrollToTopButton,
	FloatingNavbar,
	FloatingScrollToTopButton,
} from "../navigation";

interface Props {
	noScrollToTop?: boolean;
	navbar?: {
		dark?: boolean;
		delay?: number;
	};
	children: React.ReactNode;
}

const BaseLayout = ({ children, noScrollToTop, navbar }: Props) => {
	return (
		<AnimationWrapper>
			<NextTopLoader
				color="#e2d1ca"
				initialPosition={0.08}
				crawlSpeed={200}
				height={3}
				crawl={true}
				showSpinner={false}
				easing="ease"
				speed={200}
				shadow="inset 20px 20px 60px #c0b2ac, inset -20px -20px 60px #fff0e8"
			/>
			<Banner />
			<main className="w-full relative">
				<Navbar delay={navbar?.delay && navbar?.delay || 1.6 } {...navbar} />
				{children}
				{!noScrollToTop && <ScrollToTopButton />}
				<Footer />
			</main>
			{!noScrollToTop && <FloatingScrollToTopButton />}
			<FloatingNavbar />
		</AnimationWrapper>
	);
};

export default BaseLayout;
