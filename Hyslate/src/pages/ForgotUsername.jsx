import React, { useState, useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {Link } from "react-router-dom";
import * as Yup from "yup";
import "../App.css";

const ForgotUsername = () => {
  const [success, setSuccess] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const errRef = useRef();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
  });

  return (
    <div className="grid grid-cols-2 w-[60%] h-[60vh] border border-gray-400 overflow-hidden mx-auto mt-10">
      <div className="w-full h-full">
        <img src="/logo.png" alt="Login" className="w-full h-full object-cover" />
      </div>

      <div className="p-8">
        {success ? (
          <section className="text-center">
            <h1 className="text-2xl font-semibold mb-4">Success!</h1>
            <p className="text-sm text-gray-600">Your username reset link has been sent to your email.</p>
            <div className="Login">
                <Link to="/Login">Return to Login</Link>
            </div>
          </section>
        ) : (
          <>
            <h2 className="text-2xl font-semibold mb-4 text-center">Forgot Username</h2>
            <p className="text-sm text-gray-600 mb-6 text-center">
              Enter your email address below, and we'll send you a link to reset your Username or password.
            </p>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">
              {errMsg}
            </p>

            <Formik
              initialValues={{ email: "" }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                console.log("Submitted:", values);
                setSuccess(true);
                setErrMsg(""); 
                setSubmitting(false);
                resetForm();
              }}
            >
              {({ isSubmitting }) => (
                <Form className="w-full max-w-sm p-6 bg-white rounded shadow-md">
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium">
                      Enter your Email
                    </label>
                    <Field
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      className="w-full p-2 border rounded mt-1"
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-1" />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-500 text-white p-2 rounded mt-2"
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </Form>
              )}
            </Formik>
            <div className="flex items-center justify-center bg-gray-200 text-[6px] text-center p-1">
        <img
          src="/logo1.png" 
          alt="Login"
          className="w-full h-full object-cover"
        />
      </div>
          </>
          
        )}
      </div>
    </div>
  );
};

export default ForgotUsername;

