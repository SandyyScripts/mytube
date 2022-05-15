import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import "./Header.css";
import { Link } from "react-router-dom";

function Header(props) {
	const [InputSearch, setInputSearch] = useState("");
	return (
		<div className="header">
			<div className="header__left">
				<MenuIcon />
				<Link to="/">
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9q-mpIxzHf0TINtRYg3DNQgzNVdEwgbQwWQkEFc6EyzgKXBArf_1YxhY5zQKrh6bgpZA&usqp=CAU"
						alt="MYTUBE LOGO"
						className="header__logo"
					/>
				</Link>
			</div>

			<div className="header__input">
				<input
					type="text"
					placeholder="Search here..."
					onChange={(e) => setInputSearch(e.target.value)}
					value={InputSearch}
				/>
				<Link to={`/search/${InputSearch}`}>
					<SearchIcon
						className="header__inputbutton"
						onClick={() => props.changeWord(InputSearch)}
					/>
				</Link>
			</div>

			<div className="header__icons">
				<NotificationsIcon className="header__i" />
				<Avatar
					alt="Sandeep Swami"
					src="https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F211227135008-02-the-batman-trailer.jpg"
				/>
			</div>
		</div>
	);
}

export default Header;
