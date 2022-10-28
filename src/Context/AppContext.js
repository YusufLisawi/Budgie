import { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case "ADD_BUDGET":
      return {
        ...state,
        budget: Number(state.budget) + Number(action.payload),
      };
    default:
      return state;
  }
};

const initialState = {
  budget: 5000,
  incomes: [{ id: 1, amount: 500, date: '2022-10-28' }],
  expenses: [
    {
      id: 1,
      cost: 100,
      description: "Car gas",
      date: "2022-10-23",
      category: "Fuel",
    },
  ],
  categories: [
    "General",
    "Fuel",
    "Grocery",
    "Transport",
    "Fun",
    "Shopping",
    "Travel",
    "Food",
  ],
};

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        incomes: state.incomes,
        expenses: state.expenses,
        categories: state.categories,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
