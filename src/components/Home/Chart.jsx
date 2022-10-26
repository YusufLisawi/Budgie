import React, { useContext, useEffect, useState } from "react";
import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";
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
	const [dataChart, setDataChart] = useState({
		labels: labels ? labels : getDataBy(getUniqueList(data), "category"),
		datasets: [
			{
				label: "Most spending categories",
				data: getDataBy(getUniqueList(data), "spends"),
				backgroundColor: CHART_COLORS,
			},
		],
	});

	useEffect(() => {
		setDataChart({
			labels: labels
				? labels
				: getDataBy(getUniqueList(data), "category"),
			datasets: [
				{
					label: "Most spending categories",
					data: getDataBy(getUniqueList(data), "spends"),
					backgroundColor: CHART_COLORS,
				},
			],
		});
	}, [expenses]);

	function getDataBy(arr, key) {
		return arr.map((item) => item[key]);
	}
	function getUniqueList(arr) {
		return [
			...new Map(arr.map((item) => [item["category"], item])).values(),
		];
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
						}}
					/>
				)}
			</div>
		</div>
	);
}
