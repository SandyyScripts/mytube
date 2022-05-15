import React from "react";
import "./Sidebar.css";
import SidebarIcon from "./SidebarIcon";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

function Sidebar() {
	return (
		<div className="sidebar">
			<a href="https://www.linkedin.com/in/sandypswami/">
				<SidebarIcon Icon={LinkedInIcon} title="LinkedIn" />
			</a>
			<a href="https://mail.google.com/mail/u/0/?hl=en&tf=cm&fs=1&to=swami.2@iitj.ac.in">
				<SidebarIcon Icon={EmailIcon} title="Email" />
			</a>
			<a href="https://twitter.com/sandyp_swami">
				<SidebarIcon Icon={TwitterIcon} title="Twitter" />
			</a>

			<a href="https://www.instagram.com/sandyp_swami/">
				<SidebarIcon Icon={InstagramIcon} title="Instagram" />
			</a>
		</div>
	);
}

export default Sidebar;
