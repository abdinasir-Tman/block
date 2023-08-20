import { createContext, useReducer } from "react";
import AuthReducer, { initialState } from "./AuthReducer";

export const Createcontext = createContext(initialState);

const Authprovider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const Changevalues = (event) => {
    let updatedstate = state;

    console.log(updatedstate);
    updatedstate = { ...updatedstate, [event.target.name]: event.target.value };
    console.log("jhghjgjgh" + updatedstate);
    dispatch({
      type: "change_input_value",
      payload: { newstate: updatedstate }
    });
  };

  const Authcontextvalue = {
    Changevalues,
    state
  };

  return (
    <Createcontext.Provider value={Authcontextvalue}>
      {children}
    </Createcontext.Provider>
  );
};

export default Authprovider;
