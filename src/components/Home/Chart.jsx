import React, { useContext, useEffect, useState } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { AppContext } from "../../Context/AppContext";
import { H1 } from "../../styles/twStyles";

export default function Chart({ type, title, width, labels }) {
	const { expenses } = useContext(AppContext);
	const CHART_COLORS = [
		"rgba(255, 99, 132, 0.4)",
		"rgba(5, 76, 205, 0.4)",
		"rgba(255, 206, 86, 0.4)",
		"rgba(17, 192, 192, 0.4)",
		"rgba(153, 102, 255, 0.4)",
		"rgba(90, 125, 64, 0.4)",
		"rgba(0, 122, 64, 0.4)",
		"rgba(250, 255, 64, 0.4)",
	];
	// data analytics
	const data = expenses.map((expense) => ({
		category: expense.category,
		spends: expenses
			.filter((exp) => exp.category === expense.category)
			.map((exps) => exps.cost)
			.reduce((total, cost) => (total += Number(cost)), 0),
	}));
	function getTotalForMonths() {
		const data = expenses.map((expense) => ({
			month: new Date(expense.date).getMonth() + 1,
			spends: Number(expense.cost),
		}));

		const eachMonthTotal = data.map((elem) => ({
			month: elem.month,
			total: data
				.filter((exp) => exp.month === elem.month)
				.map((exps) => Number(exps.spends))
				.reduce((total, cost) => (total += Number(cost)), 0),
		}));
		return getUniqueList(eachMonthTotal, "month");
	}
	function getAllDataMonths() {
		let data = getTotalForMonths();
		let labelsMonths = [];
		let TotalForMonths = [];
		let i = 1;
		while (i <= 12) {
			let j = data.filter((el) => el.month === i);
			if (j.length > 0) {
				labelsMonths.push(getMonthName(j[0].month));
				TotalForMonths.push(Number(j[0].total));
			} else {
				labelsMonths.push(getMonthName(i));
				TotalForMonths.push(0);
			}
			i++;
		}
		return [labelsMonths, TotalForMonths];
	}

	const [dataChart, setDataChart] = useState({
		labels: labels
			? getAllDataMonths()[0]
			: getDataBy(getUniqueList(data, "category"), "category"),
		datasets: [
			{
				label: "Most spending categories",
				data: labels
					? getAllDataMonths()[1]
					: getDataBy(getUniqueList(data, "spends"), "spends"),
				backgroundColor: CHART_COLORS,
			},
		],
	});

	useEffect(() => {
		setDataChart({
			labels: labels
				? getAllDataMonths()[0]
				: getDataBy(getUniqueList(data, "category"), "category"),
			datasets: [
				{
					label: "Expenses of each month",
					data: labels
						? getAllDataMonths()[1]
						: getDataBy(getUniqueList(data, "spends"), "spends"),

					backgroundColor: CHART_COLORS,
				},
			],
		});
	}, [expenses]);

	function getDataBy(arr, key) {
		return arr.map((item) => item[key]);
	}
	function getUniqueList(arr, key) {
		return [...new Map(arr.map((item) => [item[key], item])).values()];
	}
	function getMonthName(monthNumber) {
		const date = new Date();
		date.setMonth(monthNumber - 1);

		return date.toLocaleString("en-US", { month: "short" });
	}
	return (
		<div className="chart flex-1">
			<h1 className={H1 + " mb-3"}>{title}</h1>
			<div
				className={`${!labels && "canvasChart"} mx-auto`}
				style={{ width: width }}
			>
				{type === "Doughnut" ? (
					<Doughnut
						data={dataChart}
						options={{
							responsive: true,
							maintainAspectRatio: true,
						}}
					/>
				) : (
					<Bar
						data={dataChart}
						options={{
							responsive: true,
							maintainAspectRatio: true,
							scales: {
								y: {
									beginAtZero: true,
								},
							},
						}}
					/>
				)}
			</div>
		</div>
	);
}
