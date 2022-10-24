import React from "react";
import { Link } from "react-router-dom";

export default function Nav({ icon, link, active, isOpen, onClick }) {
	const styleNav = `cursor-pointer nav mb-8
					${
						active
							? "transition duration-100 bg-yellow-main text-brown-main"
							: "hover:bg-soft-yellow text-dark-main"
					}
					rounded-2xl 
					`;
	return (
		<li className={styleNav}>
			<Link
				to={link == "Home" ? "/" : `/${link.toLowerCase()}`}
				className="px-5 py-3 flex items-center gap-x-4 font-semibold text-xl"
				onClick={onClick}
			>
				{icon}
				<h2
					className={`${
						!isOpen && "opacity-0"
					} cursor-pointer duration-100`}
				>
					{link}
				</h2>
			</Link>
		</li>
	);
}
