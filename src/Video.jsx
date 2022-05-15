import React from "react";
import ReactPlayer from "react-player/lazy";
import "./Video.css";

function Video({ heading, text, video, first, second, third }) {
	return (
		<div className="video">
			<ReactPlayer
				className="video__thumbnail"
				width="270px"
				height="140px"
				url={video}
				controls="true"
			/>
			<div className="video__info">
				<h4>{heading}</h4>
				<p>{text}</p>
				<div className="tags">
					<p>{first}</p>
					<p>{second}</p>
					<p>{third}</p>
				</div>
			</div>
		</div>
	);
}

export default Video;
