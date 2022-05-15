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
			<SidebarIcon Icon={EmailIcon} title="Email" />
			<SidebarIcon Icon={InstagramIcon} title="Instagram" />
			<SidebarIcon Icon={TwitterIcon} title="Twitter" />
			<SidebarIcon Icon={LinkedInIcon} title="LinkedIn" />
		</div>
	);
}

export default Sidebar;
