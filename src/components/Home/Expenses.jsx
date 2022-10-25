import React, { useContext } from "react";
import ReactTooltip from "react-tooltip";
import FlipMove from "react-flip-move";
import { AppContext } from "../../Context/AppContext";
import { H1 } from "../../styles/twStyles";
import Badge from "./Badge";

export default function Expenses() {
	const { expenses } = useContext(AppContext);

	function putDate(date) {
		var todayDate = new Date();
		let expenseDate = new Date(date);
		var diffDays = parseInt(
			Math.abs(todayDate - expenseDate) / (1000 * 60 * 60 * 24),
			10
		);
		if (diffDays == 1) return `Yesterday`;
		else if (diffDays >= 2 && diffDays <= 14) return `${diffDays} Days ago`;
		else if (diffDays >= 15 && diffDays <= 22) return `2 Weeks ago`;
		else if (diffDays >= 22 && diffDays <= 30) return `3 Weeks ago`;
		else if (diffDays >= 30 && diffDays <= 31) return `1 Month ago`;
		else return date;
	}
	return (
		<div className="mt-4 recent_expenses">
			<h2 className={H1 + " text-2xl font-semibold"}>Recent expenses</h2>
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
										tip="tipdate"
									/>
									<Badge text={expense.category} />

									<ReactTooltip
										id="tipdate"
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
						.slice(0, 4)}
				</FlipMove>
			</div>
		</div>
	);
}
