import React from "react";
import { H1 } from "../../styles/twStyles";
import ExpenseForm from "./ExpenseForm";

export default function Home() {
	return (
		<div className="container mx-auto px-4">
			<h1 className={H1}>Add Expense</h1>
			<ExpenseForm />
		</div>
	);
}
