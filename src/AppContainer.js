import UserID from "frontEnd/components/user";
import Users from "frontEnd/components/users";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const AppContainer = () => {
  return (
    <>
      <Routes>
        <Route path="/users/:id" element={<UserID />} />
        <Route path="/users" element={<Users />} />
        <Route path="/*" element={<Navigate to="/users" />} />
      </Routes>
    </>
  );
};

export default AppContainer;
