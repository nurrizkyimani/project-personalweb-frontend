import React, { useEffect } from 'react';

const Playlist = () => {
	return (
		<div className="sidebar overflow-y-scroll mt-2 hidden flex-col">
			<div className="your-librari py-2  mt-4 ">
				<h1 className=" font-thin  tracking-widest mb-2">Your Library</h1>
				<ul className="space-y space-y-2 text-sm pl-1">
					<li>
						<a href="">
							Reading List 
						</a>
						</li>
					<li>Principles</li>
					<li>Gallery</li>
					<li>Made For you</li>
				</ul>
			</div>

			<div className="your-librari py-2  mt-4 hidden">
				<h1 className=" font-thin tracking-widest mb-2">Playlist</h1>
				<ul className=" space-y space-y-2 text-sm pl-1">
					<li>downtown manhattan</li>
					<li>downtown toronto</li>
					<li>madison Square</li>
					<li>Made For you</li>
				</ul>
			</div>
		</div>
	);
};

export default Playlist
