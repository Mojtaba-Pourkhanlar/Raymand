const fetchRequest = () => {
  return {
    type: "FETCH_REQUEST",
  };
};
const fetchSuccess = (users) => {
  return {
    type: "FETCH_SUCCESS",
    payload: users,
  };
};
const fetchFailure = (error) => {
  return {
    type: "FETCH_FAILURE",
    payload: error,
  };
};

export { fetchRequest, fetchSuccess, fetchFailure };
