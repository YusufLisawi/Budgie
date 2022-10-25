import React, { useContext } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import { AppContext } from "../../Context/AppContext";

export default function Budget({ isOpen }) {
	const { budget, expenses } = useContext(AppContext);
	const spendings = expenses.reduce(
		(total, expense) => (total = total - expense.cost),
		budget
	);
	return (
		<div
			className={`${!isOpen && "flex"} budget p-4 rounded-2xl ${
				spendings > budget / 2
					? "text-green-text bg-green-main"
					: "text-red-text bg-red-main"
			}`}
		>
			{isOpen ? (
				<div>
					<div className="flex items-center justify-between">
						<h2 className="text-2xl font-bold mb-2">Budget</h2>
						<SettingsIcon className="mb-2 cursor-pointer" />
					</div>
					<div className="spendings">
						<span className="text-2xl font-semibold">
							{spendings}
						</span>
						<span className="text-md font-medium">
							{" "}
							/ {budget} DH
						</span>
					</div>
				</div>
			) : (
				<SettingsIcon className="mx-auto cursor-pointer" />
			)}
		</div>
	);
}
