import { homeMetaData } from "@/lib/metadata";
export const metadata = homeMetaData;

function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return <>{children}</>;
}

export default RootLayout;
