import React, { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import { H1 } from "../../styles/twStyles";
import Chart from "../Home/Chart";
import Table from "./Table";

export default function Analytics() {
  const { categories } = useContext(AppContext);

  return (
    <div className="container mx-auto px-4">
      <h1 className={H1}>Analytics</h1>
      <Table />
      <br />
      <br />
      <Chart type="Bar" width="35vw" labels={categories} />
    </div>
  );
}
