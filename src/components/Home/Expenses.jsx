import React, { useContext } from "react";
import ReactTooltip from "react-tooltip";
import FlipMove from "react-flip-move";
import { AppContext } from "../../Context/AppContext";
import { H1 } from "../../styles/twStyles";
import Badge from "./Badge";
import { Link } from "react-router-dom";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";

export default function Expenses() {
	const { expenses } = useContext(AppContext);

	function putDate(date) {
		var todayDate = new Date();
		let expenseDate = new Date(date);
		var diffDays = parseInt(
			Math.abs(todayDate - expenseDate) / (1000 * 60 * 60 * 24),
			10
		);
		if (diffDays === 1) return `Yesterday`;
		else if (diffDays >= 2 && diffDays <= 14) return `${diffDays} Days ago`;
		else if (diffDays >= 15 && diffDays <= 22) return `2 Weeks ago`;
		else if (diffDays >= 22 && diffDays <= 30) return `3 Weeks ago`;
		else if (diffDays >= 30 && diffDays <= 31) return `1 Month ago`;
		else return date;
	}
	let expensesToShow = 4;
	if (window.screen.width <= 1280) expensesToShow = 2;
	return (
		<div className="recent_expenses">
			<h2 className={H1 + " text-2xl font-semibold"}>Recent expenses</h2>
			<div className="text-sm mb-2">
				<Link
					to="/analytics"
					className="flex items-center gap-2 hover:text-brown-main text-soft-dark font-semibold text- duration-150"
				>
					<OpenInNewOutlinedIcon style={{ fontSize: "1rem" }} />
					View all expenses
				</Link>
			</div>
			<div className="expenses">
				<FlipMove>
					{expenses
						.map((expense) => (
							<div
								key={expense.id}
								className="bg-gray-100 rounded-xl p-4 mb-3 mr-2"
							>
								<h3 className={H1 + " text-xl font-meduim"}>
									{expense.description}
								</h3>
								<div className="badges flex gap-3 flex-wrap">
									<Badge
										text={`-${Number(expense.cost)} DH`}
										isCost
									/>
									<Badge
										text={putDate(expense.date)}
										tip="tipTool"
									/>
									<Badge text={expense.category} />

									<ReactTooltip
										id="tipTool"
										place="top"
										effect="solid"
										type="dark"
										className="font-bold"
									>
										{expense.date}
									</ReactTooltip>
								</div>
							</div>
						))
						.reverse()
						.slice(0, expensesToShow)}
				</FlipMove>
			</div>
		</div>
	);
}
