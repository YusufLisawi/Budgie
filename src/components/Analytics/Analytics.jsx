import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../Context/AppContext";
import { H1 } from "../../styles/twStyles";
import Chart from "../Home/Chart";
import Table from "./Table";
import Pagination from "./Pagination";

export default function Analytics() {
	const { expenses, incomes } = useContext(AppContext);
	const [transactions] = useState(
		expenses
			.concat(incomes)
			.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded))
	);
	const [rows, setrows] = useState(expenses.reverse());
	const [currentPage, setCurrentPage] = useState(1);
	const [rowsPerPage] = useState(3);
	const [pages, setPages] = useState(rows.length / rowsPerPage);

	useEffect(() => {
		setrows(transactions);
	}, [expenses, incomes]);

	useEffect(() => {
		setPages(pages - 1);
	}, [currentPage]);

	// Get current rows
	const indexOfLastPost = currentPage * rowsPerPage;
	const indexOfFirstPost = indexOfLastPost - rowsPerPage;
	const currentrows = rows.slice(indexOfFirstPost, indexOfLastPost);
	// Change page
	const paginateFront = () => {
		if (pages > -0.9) {
			setCurrentPage(currentPage + 1);
			setPages(pages - 1);
		}
	};
	const paginateBack = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
			setPages(rows.length / rowsPerPage + 1);
		}
	};

	return (
		<div className="container mx-auto px-4">
			<h1 className={H1}>Analytics</h1>
			<Chart type="Bar" width="35vw" labels={1} />
			<br />
			<br />
			<Table rows={currentrows} />
			{rows.length > 3 && (
				<Pagination
					showing={currentrows.length}
					rowsPerPage={rowsPerPage}
					totalrows={rows.length}
					paginateBack={paginateBack}
					paginateFront={paginateFront}
					currentPage={currentPage}
				/>
			)}
		</div>
	);
}
