import React, { useEffect, useState } from "react";
import "./SearchVideos.css";
import Video from "./Video";

function SearchVideos(props) {
	const [endresult, setEndresult] = useState([]);
	var axios = require("axios");
	var data = "";

	useEffect(() => {
		var config = {
			method: "get",
			url: `https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos?q="${props.input}"&numResults=8`,
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
		<div className="searchvideos">
			<h2>Search results for "{props.input}"</h2>
			<div className="searchvideo__results">
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
			</div>
		</div>
	);
}

export default SearchVideos;
