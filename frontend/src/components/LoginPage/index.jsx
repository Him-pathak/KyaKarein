import React from "react";
import "./Login.css";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase"

function LoginPage() {
  const handleSubmit = async () => {
    await signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="login-container">
      <div className="login-content">
        
        <button onClick={handleSubmit} className="btn-login">
          Login With Google 
         </button>
      </div>
    </div>
  );
}

export default LoginPage;
