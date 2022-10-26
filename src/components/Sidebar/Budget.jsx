import React, { useContext } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import { AppContext } from "../../Context/AppContext";
import Swal from "sweetalert2";
import ReactTooltip from "react-tooltip";

export default function Budget({ isOpen }) {
  const { budget, expenses, dispatch } = useContext(AppContext);
  const remaining = expenses.reduce(
    (total, expense) => (total = total - expense.cost),
    budget
  );
  const spendings = expenses.reduce(
    (total, expense) => (total = total + Number(expense.cost)),
    0
  );

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  async function editBudget() {
    const { value: newBudget } = await Swal.fire({
      title: "Edit budget",
      input: "text",
      inputLabel: "Your current budget",
      inputPlaceholder: "Enter your new budget",
      inputValue: budget,
      confirmButtonColor: "#25292D",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value || value < 0) {
          return "You need to add a valid budget!";
        }
      },
    });

    if (newBudget) {
      dispatch({
        type: "EDIT_BUDGET",
        payload: newBudget,
      });
      Toast.fire({
        icon: "success",
        title: "Budget added successfully",
      });
    }
  }
  return (
    <div
      className={`${!isOpen && "flex"} budget p-4 rounded-2xl ${
        remaining > budget / 2
          ? "text-green-text bg-green-main"
          : "text-red-text bg-red-main"
      }`}
    >
      {isOpen ? (
        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold mb-2">Budget</h2>
            <SettingsIcon
              className="mb-2 cursor-pointer"
              onClick={editBudget}
              data-tip
              data-for="editbudget"
            />
            <ReactTooltip
              id="editbudget"
              place="top"
              effect="solid"
              className="font-bold"
            >
              Edit budget
            </ReactTooltip>
          </div>
          <div className="remaining">
            <span className="text-2xl font-semibold">{remaining}</span>
            <span className="text-md font-medium" data-tip data-for="spendings">
              {" "}
              / {budget} DH
            </span>
            <ReactTooltip
              id="spendings"
              place="top"
              effect="solid"
              className="font-bold"
            >
              You spent {spendings} DH
            </ReactTooltip>
          </div>
        </div>
      ) : (
        <>
          <SettingsIcon
            className="mx-auto cursor-pointer"
            onClick={editBudget}
            data-tip
            data-for="showbudget"
          />
          <ReactTooltip
            id="showbudget"
            place="top"
            effect="solid"
            className="font-bold"
          >
            {remaining} / {budget} DH
          </ReactTooltip>
        </>
      )}
    </div>
  );
}
