import React from "react";
import arrow from "../../assets/ControlSidebar.svg";
import { styleArrow } from "../../styles/twStyles";

export default function Pagination({
  rowsPerPage,
  totalrows,
  paginateFront,
  paginateBack,
  currentPage,
  showing,
}) {
//   console.log(rowsPerPage, totalrows, currentPage);
  return (
    <div className="py-2">
      <div className="flex justify-center mt-1">
        <p className="text-sm text-gray-700">
          Showing
          <span className="font-medium">
            {" "}
            {showing}{" "}
          </span>
          {/* to
          <span className="font-medium"> {totalrows} </span> */}
          of
          <span className="font-medium"> {totalrows} </span>
          results
        </p>
      </div>
      <nav className="block"></nav>
      <div className="pagination flex justify-center gap-2 mt-1">
        <img
          src={arrow}
          alt="arrowL"
          className={styleArrow + ""}
          onClick={() => {
            paginateBack();
          }}
        />
        <img
          src={arrow}
          alt="arrowR"
          className={styleArrow + " w-6 rotate-180"}
          onClick={() => {
            paginateFront();
          }}
        />
      </div>
    </div>
  );
}
