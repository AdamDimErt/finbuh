/** @format */

import { useSelector } from "react-redux";

export function useAuth() {
  const { email, accessToken, id } = useSelector((state) => state.user);

  const auth = Boolean(localStorage.getItem("jwt-auth"));
  console.log(auth);

  return {
    auth,
    email,
    accessToken,
    id,
  };
}
