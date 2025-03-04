import React, { useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import {Link } from "react-router-dom";
import "../App.css";

const FORGOT_PASSWORD_URL = "/forgot-password";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Required"),
});

const ForgotPassword = () => {
  const errRef = useRef();
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  return (
    <div
      className="flex w-[50px] h-[50px] overflow-hidden border border-gray-400"
      style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
    >
      
      <div className="w-full h-full">
        <img
          src="/logo.png" 
          alt="Login"
          className="w-full h-full object-cover"
        />
        <div className="p-8">
          {success ? (
            <section className="text-center">
              <h1 className="text-2xl font-semibold mb-4">Success!</h1>
              <p className="text-sm text-gray-600"></p>
              <div className="Login">
                        <Link to="/Login">Return to Login</Link>
                    </div>
            </section>
          ) : (
            <>
              <h2 className="text-2xl font-semibold mb-4 text-center">Forgot Password</h2>
              <p className="text-sm text-gray-600 mb-6 text-center">
                Enter your email address below, and we'll send you a link to reset your password.
              </p>
              <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">
                {errMsg}
              </p>

              <Formik
                initialValues={{ email: "" }}
                validationSchema={validationSchema}
                onSubmit={async (values, { setSubmitting }) => {
                  try {
                    const response = await axios.post(FORGOT_PASSWORD_URL, { email: values.email });
                    console.log(response.data);
                    setSuccess(true);
                  } catch (err) {
                    if (!err?.response) setErrMsg("No Server Response");
                    else if (err.response?.status === 404) setErrMsg("Email not found");
                    else setErrMsg("Something went wrong. Try again.");
                    errRef.current?.focus();
                  }
                  setSubmitting(false);
                }}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-sm font-medium"></label>
                      <Field name="email" type="email" placeholder="Enter your email" className="w-full px-4 py-2 border rounded" />
                      <ErrorMessage name="email" component="div" className="text-red-500 text-xs" />
                    </div>

                    
                    <button type="submit" disabled={isSubmitting} className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                      {isSubmitting ? "Sending..." : "Reset Password"}
                    </button>

                    <div className="Login">
                        <Link to="/Login">Return to Login</Link>
                    </div>
                  </Form>
                )}
              </Formik>
            </>
          )}
        </div>
      </div>
      <div className="flex items-center justify-center bg-gray-200 text-[6px] text-center p-1">
        <img
          src="/logo2.png" 
          alt="Login"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ForgotPassword;
