import React from "react";

export default function Badge({ text, isCost, tip }) {
	return (
		<div
			className={`badge bg-white rounded-lg px-3 py-1 shadow font-semibold text-sm cursor-pointer ${
				isCost && (isCost === 1 ? "text-red-main" : "text-green-500")
			}`}
			data-tip={tip}
			data-for={tip}
		>
			{text}
		</div>
	);
}
