import Image from "next/image";

const Logo = ({ w, h }: { w: number; h: number }) => {
	return (
		<Image
			src="/images/logo.png"
			width={w}
			height={h}
			alt="NMMUN logo"
			className="rounded-full"
		/>
	);
};

export default Logo;
