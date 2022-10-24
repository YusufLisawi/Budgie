import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Nav({ icon, link, isOpen, onClick }) {
	const location = useLocation();
	let currentLink = "/";
	if (link !== "Home") currentLink = "/" + link.toLowerCase();
	const styleNav = `${
		location.pathname === currentLink
			? "bg-yellow-main text-brown-main"
			: "hover:bg-soft-yellow text-dark-main"
	}`;
	return (
		<li
			className={
				"transition duration-300 cursor-pointer nav mb-8 rounded-2xl " +
				styleNav
			}
		>
			<Link
				to={currentLink}
				className="px-5 py-3 flex items-center gap-x-4 font-semibold text-xl"
				onClick={onClick}
			>
				{icon}
				<h2
					className={`${
						!isOpen && "opacity-0"
					} cursor-pointer duration-200`}
				>
					{link}
				</h2>
			</Link>
		</li>
	);
}
