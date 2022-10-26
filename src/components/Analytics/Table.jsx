import React, { useContext } from "react";

export default function Table({ rows }) {
	const TD = "py-3 px-6 whitespace-nowrap";
	return (
		<div className="overflow-x-auto relative rounded-xl">
			<table className="w-full text-sm text-left rounded-t">
				<thead className="text-xs uppercase bg-yellow-main text-brown-main font-extrabold">
					<tr>
						<th scope="col" className={TD}>
							Description
						</th>
						<th scope="col" className={TD}>
							Cost
						</th>
						<th scope="col" className={TD}>
							Category
						</th>
						<th scope="col" className={TD}>
							Date
						</th>
					</tr>
				</thead>
				<tbody>
					{rows
						.map((exp) => (
							<tr className="border-b" key={exp.id}>
								<th scope="row" className={TD + "font-medium"}>
									{exp.description}
								</th>
								<td className={TD}>{Number(exp.cost)} DH</td>
								<td className={TD}>{exp.category}</td>
								<td className={TD}>{exp.date}</td>
							</tr>
						))
						.reverse()}
				</tbody>
			</table>
		</div>
	);
}
