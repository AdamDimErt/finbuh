/** @format */

import React from "react";

import { useAuth } from "../hooks/use-Auth";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const { auth, name } = useAuth();

  return (
    <div>
      AdminPanel
      <h3>Добро пажаловать {name}</h3>
    </div>
  );
};

export default AdminPanel;
