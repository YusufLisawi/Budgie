import React from "react";
import logo from "../../assets/logo-1.svg";

export default function Logo({ isOpen }) {
	return (
		<div
			className={`logo cursor-pointer flex flex-col gap-y-2 items-center pt-3 duration-300 ${
				isOpen ? "mb-20" : "mb-10"
			}`}
		>
			<img src={logo} alt="logo" className="w-10" />

			<h1
				className={`font-extrabold origin-left duration-100
				text-brown-main text-3xl ${!isOpen && "opacity-0"}`}
			>
				Budgie
			</h1>
		</div>
	);
}
