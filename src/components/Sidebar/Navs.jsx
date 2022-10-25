import React from "react";
import Nav from "./Nav";
import HomeIcon from "@mui/icons-material/Home";
import BarChartIcon from "@mui/icons-material/BarChart";

export default function Navs({ isOpen }) {
	return (
		<ul className="navs">
			<Nav icon={<HomeIcon />} link="Home" isOpen={isOpen} />
			<Nav icon={<BarChartIcon />} link="Analytics" isOpen={isOpen} />
		</ul>
	);
}
