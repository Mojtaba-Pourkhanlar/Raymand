import React, { useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import axios from "axios";
import { URL } from "frontEnd/services/api";
// Redux
import { useSelector, useDispatch } from "react-redux";
import {
  fetchFailure,
  fetchRequest,
  fetchSuccess,
} from "frontEnd/redux/users/usersAction";
// Components
import UsersTable from "./UsersTable";
import { Spinner } from "frontEnd/shared";

const Users = () => {
  const dispatch = useDispatch();
  const fetchData = async () => {
    try {
      dispatch(fetchRequest());
      await axios
        .get(`${URL}/users`)
        .then(({ data }) => dispatch(fetchSuccess(data)))
        .catch((error) => dispatch(fetchFailure(error)));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const data = useSelector((state) => state.usersState);
  const { users, loading } = data;

  return (
    <Container maxWidth="lg">
      <Box mt={15}>
        {loading ? (
          <Box align="center">
            <Spinner />
          </Box>
        ) : (
          <>
            <Typography variant="h3" align="center" my={15}>
              لیست افراد
            </Typography>
            {users.length !== undefined && (
              <UsersTable users={users} loading={loading} />
            )}
          </>
        )}
      </Box>
    </Container>
  );
};

export default Users;
