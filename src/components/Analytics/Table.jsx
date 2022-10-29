import React, { useContext } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { AppContext } from "../../Context/AppContext";
import Swal from "sweetalert2";

export default function Table({ rows }) {
	const { deleteTransaction } = useContext(AppContext);
	const TD = "py-3 px-6 whitespace-nowrap font-medium";

	function deleteMe(id, type) {
		// Swal.fire({
		// 	title: "Do you want to delete this transaction?",
		// 	confirmButtonText: "Yes",
		// 	showCancelButton: true,
		// 	cancelButtonText: "No",
		// }).then((result) => {
		// 	if (result.isConfirmed) {
		// 		deleteTransaction(id, type);
		// 		Swal.fire("Saved!", "", "success");
		// 	}
		// });
		// alert(id);
	}
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
						<th scope="col" className={TD}></th>
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
								<td className={TD + " text-green-500"}>
									+{Number(tr.amount)} DH
								</td>
							)}
							<td className={TD}>{tr.category}</td>
							<td className={TD}>{tr.date}</td>
							<td className={TD}>
								<button onClick={console.log(tr.id)}>
									<DeleteIcon className="cursor-pointer text-red-main" />
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
