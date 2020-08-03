const Gallery = () => {
	

	return (
		<div className="max-h-screen">
			<div className="max-w-full  flex flex-col items-center font-serif text-6xl p-8 tracking-wider">Gallery</div>
			<div className="p-6 space-x-4 flex ">
				<a href="">
					<div className="card max-w-sm  mr-2 border-gray-500  shadow-xl overflow-hidden rounded-md  transform hover:-translate-y-1 duration-300 hover:shadow-2xl  ">
						<img
							className="w-full max-h-screen object-fill"
							src="https://picsum.photos/id/237/700/500"
							alt="Sunset in the mountains"
						/>
					</div>

					<div>
						<h4 className="text-2xl transform hover:text-blue-500 duration-300 font-serif self-center">Dog</h4>

					</div>
				</a>

				<a href="">
					<div className="card max-w-sm  mr-2 border-gray-500  shadow-xl overflow-hidden rounded-md  transform hover:-translate-y-1 duration-300  ">
						<img
							className="w-full max-h-screen object-fill"
							src="https://picsum.photos/id/237/700/500"
							alt="Sunset in the mountains"
						/>
					</div>

					<div>
						<h4 className="text-2xl transform hover:text-blue-500 duration-300 ">Dog</h4>

					</div>
				</a>

				<a href="">
					<div className="card max-w-sm  mr-2 border-gray-500  shadow-xl overflow-hidden rounded-md  transform hover:-translate-y-1 duration-300  ">
						<img
							className="w-full max-h-screen object-fill"
							src="https://picsum.photos/id/237/700/500"
							alt="Sunset in the mountains"
						/>
					</div>

					<div>
						<h4 className="text-2xl transform hover:text-blue-500 duration-300 "> Dog</h4>

					</div>
				</a>

					<div>
					<div className="card max-w-sm  mr-2 border-gray-500  shadow-xl overflow-hidden rounded-md  transform hover:-translate-y-1 duration-300  ">
						<img
							className="w-full max-h-screen object-fill"
							src="https://picsum.photos/id/237/700/500"
							alt="Sunset in the mountains"
						/>
					</div>

					<div>
						<h4 className="text-2xl transform hover:text-blue-500 duration-300 "> Dog</h4>

					</div>
				</div>


				
			</div>
		</div>
	);
};

export default Gallery;
