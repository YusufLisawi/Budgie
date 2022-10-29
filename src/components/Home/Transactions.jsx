import React, { useContext, useState } from "react";
import ReactTooltip from "react-tooltip";
import FlipMove from "react-flip-move";
import { AppContext } from "../../Context/AppContext";
import { H1 } from "../../styles/twStyles";
import Badge from "./Badge";
import { Link } from "react-router-dom";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";

export default function Transactions() {
	const { expenses, incomes } = useContext(AppContext);
	const transactions = expenses
		.concat(incomes)
		.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));

	function putDate(date) {
		var todayDate = new Date();
		let transactionDate = new Date(date);
		var diffDays = parseInt(
			Math.abs(todayDate - transactionDate) / (1000 * 60 * 60 * 24),
			10
		);
		if (diffDays === 0) return `Today`;
		else if (diffDays === 1) return `Yesterday`;
		else if (diffDays >= 2 && diffDays <= 14) return `${diffDays} Days ago`;
		else if (diffDays >= 15 && diffDays <= 22) return `2 Weeks ago`;
		else if (diffDays >= 22 && diffDays <= 30) return `3 Weeks ago`;
		else if (diffDays >= 30 && diffDays <= 31) return `1 Month ago`;
		else return date;
	}
	let transactionsToShow = 4;
	if (window.screen.width <= 1280) transactionsToShow = 2;
	return (
		<div className="recent_expenses">
			<h2 className={H1 + " text-2xl font-semibold"}>
				Recent Transactions
			</h2>
			<div className="text-sm mb-2">
				<Link
					to="/analytics"
					className="flex items-center gap-2 hover:text-brown-main text-soft-dark font-semibold text- duration-150"
				>
					<OpenInNewOutlinedIcon style={{ fontSize: "1rem" }} />
					View all transactions
				</Link>
			</div>
			<div className="expenses">
				<FlipMove>
					{transactions
						.map((tr) => (
							<div
								key={tr.id}
								className="bg-gray-100 rounded-xl p-4 mb-3 mr-2"
							>
								{tr.description && (
									<h3 className={H1 + " text-xl font-meduim"}>
										{tr.description}
									</h3>
								)}
								<div className="badges flex gap-3 flex-wrap">
									<Badge
										text={`${
											tr.cost
												? `-${Number(tr.cost)}`
												: `+${Number(tr.amount)}`
										} DH`}
										isCost={tr.cost ? 1 : 2}
									/>
									<Badge
										text={putDate(tr.date)}
										tip="tipTool"
									/>
									<Badge text={tr.category} />

									<ReactTooltip
										id="tipTool"
										place="top"
										effect="solid"
										type="dark"
										className="font-bold"
									>
										{tr.date}
									</ReactTooltip>
								</div>
							</div>
						))
						.slice(0, transactionsToShow)}
				</FlipMove>
			</div>
		</div>
	);
}
