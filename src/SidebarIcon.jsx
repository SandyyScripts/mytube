import React from "react";
import "./SidebarIcon.css";

function SidebarIcon({ title, Icon }) {
	return (
		<div className="sidebar__icon">
			<Icon className="sidebar__iconone" />
			<h2 className="sidebar__title">{title}</h2>
		</div>
	);
}

export default SidebarIcon;
