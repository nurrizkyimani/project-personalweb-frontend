const CloseButton = ({toggleTrueFalse}) => {
	return (
		<div className="close flex justify-end md:hidden ">
			<button
				className="w-16  transition duration-300 ease-in-out  hover:bg-gray-300  hover:shadow-inner rounded-md"
				onClick={() => {
					toggleTrueFalse();
				}}
			>
				<svg
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path d="M6 18L18 6M6 6l12 12" />
				</svg>
			</button>
		</div>
	);
};

export default CloseButton;
