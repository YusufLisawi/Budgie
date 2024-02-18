import React, { createContext, useEffect, useReducer, ReactNode } from "react";
import uuid from "react-uuid";

// Определение типов для состояния и действий
type State = {
  budget: number;
  incomes: Income[];
  expenses: Expense[];
  categories: string[];
};

type Action =
  | { type: "ADD_EXPENSE"; payload: Expense }
  | { type: "ADD_BUDGET"; payload: number }
  | { type: "ADD_INCOME"; payload: Income };
  // | { type: "DELETE_EXPENSE"; payload: string }
  // | { type: "DELETE_INCOME"; payload: string };

type Income = {
  id: string;
  amount: number;
  category: string;
  date: string;
  dateAdded: string;
};

type Expense = {
  id: string;
  amount: number;
  category: string;
  date: string;
};

const AppReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case "ADD_BUDGET":
      return {
        ...state,
        budget: state.budget + action.payload,
      };
    case "ADD_INCOME":
      return {
        ...state,
        incomes: [...state.incomes, action.payload],
      };
    /* case "DELETE_EXPENSE":
       return {1
         ...state,
         expenses: state.expenses.filter(exp => exp.id !== action.payload),
       };
     case "DELETE_INCOME":
       return {
         ...state,
         incomes: state.incomes.filter(inc => inc.id !== action.payload),
       }; */
    default:
      return state;
  }
};

const initialState: State = {
  budget: JSON.parse(localStorage.getItem("budget") || '0'),
  incomes: JSON.parse(localStorage.getItem("incomes") || '[]'),
  expenses: JSON.parse(localStorage.getItem("expenses") || '[]'),
  categories: ["General", "Fuel", "Grocery", "Transport", "Fun", "Shopping", "Travel", "Food"],
};

// Создание типа для контекста
type AppContextType = {
  budget: number;
  incomes: Income[];
  expenses: Expense[];
  categories: string[];
  addBudget: (income: number) => void;
  addExpense: (expense: Expense) => void;
  dispatch: React.Dispatch<Action>;
  // deleteTransaction: (id: string, type: "income" | "expense") => void;
};

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("budget", JSON.stringify(state.budget));
    localStorage.setItem("expenses", JSON.stringify(state.expenses));
    localStorage.setItem("incomes", JSON.stringify(state.incomes));
  }, [state]);

  const addBudget = (income: number) => {
    dispatch({
      type: "ADD_BUDGET",
      payload: income,
    });
    dispatch({
      type: "ADD_INCOME",
      payload: {
        id: uuid(),
        amount: income,
        category: "Income",
        date: new Date().toISOString().slice(0, 10),
        dateAdded: new Date().toISOString(),
      },
    });
  };

  const addExpense = (expense: Expense) => {
    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

  /* const deleteTransaction = (id: string, type: "income" | "expense") => {
    dispatch({
      type: type === "income" ? "DELETE_INCOME" : "DELETE_EXPENSE",
      payload: id,
    });
  }; */

  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        incomes: state.incomes,
        expenses: state.expenses,
        categories: state.categories,
        addBudget,
        addExpense,
        dispatch,
        // deleteTransaction,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
