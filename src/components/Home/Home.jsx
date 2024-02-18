import React from "react";
import { H1 } from "../../styles/twStyles";
import Chart from "./Chart";
import ExpenseForm from "./ExpenseForm";
import Transactions from "./Transactions";

export default function Home() {
    return (
        <div className="container mx-auto px-4 overflow-auto" style={{ maxHeight: "100vh" }}>
            <div className="expense_form">
                <h1 className={`${H1} text-center`}>Add Expense</h1>
                <ExpenseForm />
            </div>
            <hr className="my-3" />

            <div className="expenses_content flex flex-wrap gap-4 md:gap-x-10 mt-4 justify-center md:justify-start overflow-y-auto">
                <div className="w-full md:w-auto">
                    <Transactions />
                </div>
                <div className="w-full md:w-auto flex justify-center">
                    <Chart type="Doughnut" title="States" className="chart-responsive" />
                </div>
            </div>
        </div>
    );
}
