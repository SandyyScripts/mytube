import React, { useEffect, useState } from "react";
import Video from "./Video";
import "./Videos.css";

function Videos(props) {
	const [endresult, setEndresult] = useState([]);

	useEffect(() => {
		var axios = require("axios");
		var data = "";

		var config = {
			method: "get",
			url: 'https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos?q="newvideo"&numResults=8',
			headers: {},
			data: data,
		};
		axios(config)
			.then(function (response) {
				console.log(response.data);
				setEndresult(response.data.results);
			})
			.catch(function (error) {
				console.log(error);
			});
		// eslint-disable-next-line
	}, [props.input]);

	return (
		<div className="videos">
			<h2>Recommended Videos</h2>
			<div className="videos__recommended">
				{endresult.map((item) => (
					<Video
						heading={item.heading}
						text={item.text}
						video={item.video}
						first={item.tags[0]}
						second={item.tags[1]}
						third={item.tags[2]}
					/>
				))}
				<h2>{props.input}</h2>
			</div>
		</div>
	);
}

export default Videos;
