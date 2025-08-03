import { useReducer, createContext } from "react";

export const GlobalContext = createContext();

const changeState = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case "ADD_PRODUCT":
      return { ...state, products: [...state.products, payload] };
    default:
      return state;
  }
};

export function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(changeState, {
    user: true,
    products: [],
  });
  console.log(state.products);
  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}
