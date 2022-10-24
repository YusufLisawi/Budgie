import React, { useState } from "react";
import Nav from "./Nav";
import HomeIcon from "@mui/icons-material/Home";
import BarChartIcon from "@mui/icons-material/BarChart";

export default function Navs({ isOpen }) {
	const [activeHome, setActiveHome] = useState(true);
	const [activeAnalytics, setActiveAnalytics] = useState(false);

	function toggleHome() {
		setActiveHome(true);
		setActiveAnalytics(false);
	}
	function toggleAnalytics() {
		setActiveAnalytics(true);
		setActiveHome(false);
	}
	return (
		<ul className="navs">
			<Nav
				icon={<HomeIcon />}
				link="Home"
				active={activeHome}
				onClick={toggleHome}
				isOpen={isOpen}
			/>
			<Nav
				icon={<BarChartIcon />}
				link="Analytics"
				active={activeAnalytics}
				onClick={toggleAnalytics}
				isOpen={isOpen}
			/>
		</ul>
	);
}
