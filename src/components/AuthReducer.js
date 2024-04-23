export const initialState = {
  id: "",
  username: "",
  password: "",
  email: "",
  profilePicture: "",
};

const AuthReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "change_input_value":
      return payload.newstate;
    default:
      throw new Error("Invalid");
  }
};

export default AuthReducer;
