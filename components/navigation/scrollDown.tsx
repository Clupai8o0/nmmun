const ScrollDown = () => {
	return (
		<div className="w-full">
			<div className="scroll-down mx-auto flex justify-center items-center flex-col">
				{/* <p className="text-base leading-tight font-normal mb-4">
					Scroll down to see the rest
				</p> */}
				<div className="scroll-down-arrow">
					<div className="bg-gray-200 bg-opacity-10 h-16 w-16 rounded-full flex items-center justify-center">╲╱</div>
				</div>
			</div>
		</div>
	);
};

export default ScrollDown;
