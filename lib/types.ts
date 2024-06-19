import React from "react";

export interface TypographyProps extends BaseAnimationProps {
	children: React.ReactNode;
	className?: string;
	opacity?: number;
	center?: boolean;
}

export interface BaseComponentProps {
	className?: string;
}

export interface BaseLayoutProps {
	children: React.ReactNode;
	className?: string;
	id?: string;
	background?: React.ReactNode;
}

export interface BaseAnimationProps {
	animation?: {
		initial: any;
		animate?: any;
		exit?: any;
		whileInView?: any;
		transition: {
			duration: number;
			delay?: number;
			ease?: any;
		};
		viewport?: {
			once: boolean;
			amount: number;
		};
	};
}

export enum AnimationVariants {
	FromRight = "fromRight",
	FromLeft = "fromLeft",
	FromDown = "fromDown",
	FromTop = "fromTop",
	FromNothing = "fromNothing",
	Visible = "visible",
}

export interface navLink {
	title: string;
	href: string;
	button: boolean;
	showScrollToTop: boolean;
	navDarkMode: boolean;
	menu?: boolean;
	children: { title: string; href: string }[];
}

export interface BaseLink {
	title: string;
	id: string;
	href: string;
	icon: {
		src: string;
		alt: string;
	};
}

export interface TeamLink extends BaseLink {
	members: {
		name: string;
		pos?: string;
		src: string;
	}[];
}

export interface CouncilLink extends TeamLink {
	desc: string[] | string;
	topics: string[];
	bgs?: {
		title: string;
		url: string;
	}[];
}

export interface EventStates {
	beforeEvent: string;
	duringEvent: string;
	afterEvent: string;
}
