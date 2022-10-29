import React from "react";

export default function Table({ rows }) {
	const TD = "py-3 px-6 whitespace-nowrap font-medium";
	return (
		<div className="overflow-x-auto relative rounded-xl">
			<table className="w-full text-sm text-left rounded-t">
				<thead className="text-xs uppercase bg-yellow-main text-brown-main font-extrabold">
					<tr>
						<th scope="col" className={TD}>
							Description
						</th>
						<th scope="col" className={TD}>
							Amount
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
					{rows.map((tr) => (
						<tr className="border-b" key={tr.id}>
							<th scope="row" className={TD + "font-medium"}>
								{!tr.description ? "$" : tr.description}
							</th>
							{tr.cost && (
								<td className={TD + " text-red-main"}>
									-{Number(tr.cost)} DH
								</td>
							)}
							{tr.amount && (
								<td className={TD + " text-green-600"}>
									+{Number(tr.amount)} DH
								</td>
							)}
							<td className={TD}>{tr.category}</td>
							<td className={TD}>{tr.date}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
