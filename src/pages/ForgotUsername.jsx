import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../App.css";

const ForgotUsername = () => {

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
  });

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-box">
        <img src="/logo.png" alt="Logo" className="forgot-password-logo" />
    <Formik
      initialValues={{ email: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log("Submitted:", values);
        setSubmitting(false);
        resetForm(); 
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <h2>Forgot Username</h2>

          
          <div>
            <label htmlFor="email"></label>
            <Field name="email" type="email" placeholder="Enter your email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>

          
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </Form>
      )}
    </Formik>
    </div>
    </div>
  );
};

export default ForgotUsername;
