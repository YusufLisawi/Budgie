import React from "react";
import { useState } from "react";
import ControlSidebar from "../../assets/ControlSidebar.svg";
import Logo from "./Logo";
import Budget from "./Budget";
import Navs from "./Navs";
import { styleSidebar, styleToggler } from "../../styles/twStyles";

export default function Sidebar() {
	const [open, setOpen] = useState(true);
	return (
		<div
			className={`${open ? "w-60" : "w-25"}  ${styleSidebar} sidebar`}
			onDoubleClick={() => setOpen(!open)}
		>
			<div className="head">
				<img
					src={ControlSidebar}
					alt="SidebarToggler"
					className={` ${!open && "rotate-180"} ${styleToggler}`}
					onClick={() => setOpen(!open)}
				/>
				<Logo isOpen={open} />
				<Navs isOpen={open} />
			</div>
			<div className="foot">
				<Budget isOpen={open} />
			</div>
		</div>
	);
}
