import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../Reducer/reducer";
import axios from "axios";

export const initialState = {
  theme: "light",
  data: [],
  favs: JSON.parse(localStorage.getItem("favs")) || [],
  doctor: [],
};
const ContextGlobal = createContext();
export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(reducer, initialState);

  const usersUrl = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios(usersUrl).then((res) =>
      dispatch({ type: "GET_DOCTORS", payload: res.data })
    );
  }, []);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs]);

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};
export default ContextProvider;

export const useContextGlobal = () => useContext(ContextGlobal);
