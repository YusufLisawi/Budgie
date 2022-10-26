import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../Context/AppContext";
import { H1 } from "../../styles/twStyles";
import Chart from "../Home/Chart";
import Table from "./Table";
import Pagination from "./Pagination";

export default function Analytics() {
  const { expenses, categories } = useContext(AppContext);
  const [rows, setrows] = useState(expenses);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(3);

  useEffect(() => {
    setrows(expenses);
  }, [expenses]);

  // Get current rows
  const indexOfLastPost = currentPage * rowsPerPage;
  const indexOfFirstPost = indexOfLastPost - rowsPerPage;
  const currentrows = rows.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginateFront = () => setCurrentPage(currentPage + 1);
  const paginateBack = () => {
	  if (currentPage > 1)
	  	setCurrentPage(currentPage - 1)
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className={H1}>Analytics</h1>
      <Table rows={currentrows}/>
      <Pagination
	  	showing = {currentrows.length}
        rowsPerPage={rowsPerPage}
        totalrows={rows.length}
        paginateBack={paginateBack}
        paginateFront={paginateFront}
        currentPage={currentPage}
      />
      <br />
      <br />
      <Chart type="Bar" width="35vw" labels={categories} />
    </div>
  );
}
