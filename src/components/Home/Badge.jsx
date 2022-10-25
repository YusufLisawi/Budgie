import React from "react";

export default function Badge({ text, isCost, tip }) {
	return (
		<div
			className={`badge bg-white rounded-lg px-3 py-1 shadow font-semibold text-sm cursor-pointer ${
				isCost && "text-red-main"
			}`}
			data-tip={tip}
			data-for={tip}
		>
			{text}
		</div>
	);
}
