import React, { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../../utils/firebase/firebase.utils";
import SignInForm from "../../sign-in-form/sign-in-form";
import SignUpForm from "../../sign-up-form/sign-up-form";

import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
