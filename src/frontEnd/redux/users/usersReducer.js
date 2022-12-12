const initialState = {
  loading: false,
  users: [],
  error: "",
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_SUCCESS":
      return {
        loading: false,
        users: action.payload,
      };
    case "FETCH_FAILURE":
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export { usersReducer };
