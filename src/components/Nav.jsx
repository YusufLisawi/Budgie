import React from "react";
import { Link } from "react-router-dom";


export default function Nav({ icon, link, active, isOpen}) {
	const styleNav = `cursor-pointer nav mb-8
					${active ? "bg-yellow-main text-brown-main"
					: "hover:bg-soft-yellow text-soft-dark"}
					 p-3 px-5
					rounded-2xl
					`;

  return (
    <div className={styleNav}>
      <Link to={link} className="flex items-center gap-x-4 font-semibold text-xl">
        {icon}
		<h2 className={`${!isOpen && "opacity-0"} duration-100`}>{link}</h2>
      </Link>
    </div>
  );
}
