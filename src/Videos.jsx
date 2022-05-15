import React from "react";
import Video from "./Video";
import "./Videos.css";

function Videos() {
	const arr = ["Andy", "Barker", "C", "D"];
	return (
		<div className="videos">
			<h2>Recommended</h2>
			<div className="videos__recommended">
				<Video
					heading="\fitness\:FbAr00"
					first={arr[0]}
					second={arr[1]}
					video="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
					text="desc:AOayj5TkvUJPPSTnDzgvbcR9Gd9entnlIYoJRIlPmNyoVm8qIbrLs7sNW7eiAZEjZ38SGRd4Gp8FiTzYJjcXNDZQ0TKuV7jPgB2QlMR9VOaL0aqHS6PYkYC1"
				/>
				<Video />
				<Video />
				<Video />
				<Video />
			</div>
		</div>
	);
}

export default Videos;
