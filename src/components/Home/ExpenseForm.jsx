import React from "react";
import { H1, INPUT, COL, BUTTON } from "../../styles/twStyles";

export default function ExpenseForm() {
	const categories = [
		"General",
		"Fuel",
		"Grocery",
		"Entertainement",
		"Shopping",
		"Travel",
		"Food",
	];
	return (
		<form>
			<div className="flex flex-wrap gap-3 mb-3">
				<div className={COL}>
					<input
						type="text"
						placeholder="0.0 DH"
						name="money"
						value=""
						className={INPUT}
					/>
					<input
						type="text"
						placeholder="What was the expense for"
						name="description"
						value=""
						className={INPUT}
					/>
				</div>
				<div className={COL}>
					<input type="date" name="date" value="" className={INPUT} />
					<select name="category" className={INPUT}>
						<option value="">Category</option>
						{categories.map((cat) => (
							<option value={cat}>{cat}</option>
						))}
					</select>
				</div>
			</div>
			<div>
				<button className={BUTTON}>Add</button>
				<span className={`text-red-main font-medium ml-4`}>
					Error message
				</span>
			</div>
		</form>
	);
}
