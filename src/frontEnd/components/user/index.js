import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { URL } from "frontEnd/services/api";
import axios from "axios";
// Redux
import { useSelector, useDispatch } from "react-redux";
import {
  fetchFailure,
  fetchRequest,
  fetchSuccess,
} from "frontEnd/redux/users/usersAction";
// Components
import UserDetail from "./detail";
import { Spinner } from "frontEnd/shared";
// MUI
import { Box, Container, Typography } from "@mui/material";
import { KeyboardBackspace } from "@mui/icons-material";

const UserID = () => {
  const [demo, setDemo] = useState(null);
  const { id } = useParams();

  const dispatch = useDispatch();

  const stateLoading = useSelector((state) => state.usersState.loading);

  const fetchData = async (id) => {
    dispatch(fetchRequest());
    await axios
      .get(`${URL}/users/${id}`)
      .then(({ data }) => {
        setDemo(data);
        dispatch(fetchSuccess(data));
      })
      .catch((error) => dispatch(fetchFailure(error)));
  };

  useEffect(() => {
    fetchData(id);
  }, []);

  // Style
  const topPart = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    mt: "100px",
    mb: "150px",
  };

  return (
    <Container maxWidth="xl">
      {stateLoading ? (
        <Box align="center" mt={10}>
          <Spinner />
        </Box>
      ) : (
        <>
          <Box sx={topPart}>
            <Typography variant="h3">مشخصات</Typography>
            <Link to="/users">
              <KeyboardBackspace fontSize="large" color="warning" />
            </Link>
          </Box>
          {demo !== null && <UserDetail users={demo} />}
        </>
      )}
    </Container>
  );
};
export default UserID;
