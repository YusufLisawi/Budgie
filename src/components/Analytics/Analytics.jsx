import React from "react";
import { H1 } from "../../styles/twStyles";
import Table from "./Table";

export default function Analytics() {
	return (
		<div className="container mx-auto px-4">
			<h1 className={H1}>Analytics</h1>
			<Table />
		</div>
	);
}
