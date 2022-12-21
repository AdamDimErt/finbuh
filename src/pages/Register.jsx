/** @format */

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import React from "react";

const Register = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const registerUser = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <input type='email' onChange={(e) => setEmail(e.target.value)} />
      <input type='email' onChange={(e) => setPassword(e.target.value)} />
      <button onClick={registerUser}>register</button>
    </div>
  );
};

export default Register;
