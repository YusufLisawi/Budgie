import React from "react";
import arrow from "../../assets/ControlSidebar.svg";
import { styleArrow } from "../../styles/twStyles";

export default function Pagination({
	rowsPerPage,
	totalrows,
	paginateFront,
	paginateBack,
	currentPage,
}) {
	return (
		<div className="py-2">
			<div className="flex justify-center mt-1">
				<p className="text-sm text-gray-700">
					Page
					<span className="font-medium"> {currentPage} </span>
					of
					<span className="font-medium">
						{" "}
						{Math.ceil(totalrows / rowsPerPage)}{" "}
					</span>
				</p>
			</div>
			<nav className="block"></nav>
			<div className="pagination flex justify-center gap-2 mt-1">
				<img
					src={arrow}
					alt="arrowL"
					className={styleArrow + ""}
					onClick={() => {
						paginateBack();
					}}
				/>
				<img
					src={arrow}
					alt="arrowR"
					className={styleArrow + " w-6 rotate-180"}
					onClick={() => {
						paginateFront();
					}}
				/>
			</div>
		</div>
	);
}
