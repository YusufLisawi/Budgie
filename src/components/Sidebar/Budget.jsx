import React, { useContext } from "react";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { AppContext } from "../../Context/AppContext";
import Swal from "sweetalert2";
import ReactTooltip from "react-tooltip";

export default function Budget({ isOpen }) {
	const { budget, expenses, addBudget } = useContext(AppContext);
	const remaining = expenses.reduce(
		(total, expense) => (total = total - Number(expense.cost)),
		budget
	);
	const spendings = expenses.reduce(
		(total, expense) => (total = total + Number(expense.cost)),
		0
	);

	const Toast = Swal.mixin({
		toast: true,
		position: "top-end",
		showConfirmButton: false,
		timer: 3000,
		timerProgressBar: true,
		didOpen: (toast) => {
			toast.addEventListener("mouseenter", Swal.stopTimer);
			toast.addEventListener("mouseleave", Swal.resumeTimer);
		},
	});

	async function addIncome() {
		const { value: newIncome } = await Swal.fire({
			title: "Add income",
			input: "number",
			inputLabel: `Your current budget is ${budget}`,
			inputPlaceholder: "Enter your new income",
			inputValue: 0,
			confirmButtonColor: "#25292D",
			showCancelButton: true,
			inputValidator: (value) => {
				if (!value || value <= 0) {
					return "You need to add a valid income!";
				}
			},
		});

		if (newIncome) {
			addBudget(newIncome);
			Toast.fire({
				icon: "success",
				title: "Income added successfully",
			});
		}
	}
	return (
		<div
			className={`${!isOpen && "flex"} budget p-4 rounded-2xl ${
				remaining <= 0
					? "text-green-text bg-green-main"
					: "text-red-text bg-red-main"
			}`}
		>
			{isOpen ? (
				<div>
					<div className="flex items-center justify-between">
						<h2 className="text-2xl font-bold mb-2">Budget</h2>
						<ControlPointIcon
							className="mb-2 cursor-pointer"
							onClick={addIncome}
							data-tip
							data-for="addincome"
						/>
						<ReactTooltip
							id="addincome"
							place="top"
							effect="solid"
							className="font-bold"
						>
							Add Income
						</ReactTooltip>
					</div>
					<div className="remaining">
						<span className="text-2xl font-semibold">
							{remaining}
						</span>
						<span
							className="text-md font-medium"
							data-tip
							data-for="spendings"
						>
							{" "}
							/ {budget} DH
						</span>
						<ReactTooltip
							id="spendings"
							place="top"
							effect="solid"
							className="font-bold"
						>
							You spent {spendings} DH
						</ReactTooltip>
					</div>
				</div>
			) : (
				<>
					<ControlPointIcon
						className="mx-auto cursor-pointer"
						onClick={addIncome}
						data-tip
						data-for="showbudget"
					/>
					<ReactTooltip
						id="showbudget"
						place="top"
						effect="solid"
						className="font-bold"
					>
						{remaining} / {budget} DH
					</ReactTooltip>
				</>
			)}
		</div>
	);
}
