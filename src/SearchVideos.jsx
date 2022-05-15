import React from "react";
import "./SearchVideos.css";

function SearchVideos(props) {
	var axios = require("axios");
	var data = "";

	var config = {
		method: "get",
		url: `https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos?q="${props.input}"&numResults=8`,
		headers: {},
		data: data,
	};

	axios(config)
		.then(function (response) {
			console.log(JSON.stringify(response.data));
		})
		.catch(function (error) {
			console.log(error);
		});

	return (
		<div className="searchvideos">
			<div className="heading">
				<h2>{props.input}</h2>
			</div>
		</div>
	);
}

export default SearchVideos;
