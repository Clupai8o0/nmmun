import { CTA } from "@/components";
import React from "react";

function NotFound() {
	return (
		<main className="main">
			<section className="w-full pt-36">
				<div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
					<div className="mx-auto max-w-screen-sm text-center">
						<h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl">
							404
						</h1>
						<p className="mb-4 text-3xl tracking-tight font-semibold md:text-4xl text-gray-900">
							Something's missing.
						</p>
						<p className="mb-4 text-lg font-light text-gray-700">
							Sorry, we can't find that page.
						</p>
						<CTA href="/" title="Back to Home" className="my-4" />
					</div>
				</div>
			</section>
		</main>
	);
}

export default NotFound;
