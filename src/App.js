import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Videos from "./Videos";
import SearchVideos from "./SearchVideos";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
	const [Search, setSearch] = useState();
	return (
		<div className="App">
			<Router>
				<Header changeWord={(Search) => setSearch(Search)} />
				{console.log(Search)}
				<Routes>
					<Route
						exact
						path="/search/:searchTerm"
						element={
							<div className="app__page">
								<Sidebar />
								<SearchVideos input={Search} />
							</div>
						}
					></Route>
					<Route
						path="/"
						element={
							<div className="app__page">
								<Sidebar />
								<Videos />
							</div>
						}
					></Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
