import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link } from "react-router-dom";
import { registerUser } from "../api/apiService";
import "../styles/Registration.css";

const RegistrationForm = () => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [timezones, setTimezones] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")
      .then(response => {
        const countryNames = response.data.map(country => country.name.common).sort();
        setCountries(countryNames);
      })
      .catch(error => console.error("Error fetching countries:", error));
  }, []);

  const handleCountryChange = async (country, setFieldValue) => {
    setFieldValue("country", country);
    setStates([]);

    if (country === "United States") { 
      axios.get("https://api.example.com/states/US")
        .then(response => setStates(response.data))
        .catch(error => console.error("Error fetching states:", error));
    }
    
  };

  useEffect(() => {
    setTimezones(Intl.supportedValuesOf('timeZone'));
  }, []);

  const validationSchema = Yup.object({
    firstName: Yup.string().required("required"),
    lastName: Yup.string().required("required"),
    dob: Yup.date().required("required"),
    gender: Yup.string().required("required"),
    country: Yup.string().required("required"),
    state: Yup.string().required("required"),
    pinCode: Yup.string()
      .matches(/^[0-9]{5,6}$/, "Invalid Pin Code")
      .required("required"),
    timeZone: Yup.string().required("required"),
    email: Yup.string().email("Invalid email format").required("required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Enter a valid 10-digit phone number")
      .required("required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(/[A-Z]/, "Must contain at least one uppercase letter")
      .matches(/[a-z]/, "Must contain at least one lowercase letter")
      .matches(/[0-9]/, "Must contain at least one number")
      .matches(/[!@#$%^&*]/, "Must contain at least one special character")
      .required("required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("required"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await registerUser(values);
      setMessage("Registration successful!");
      console.log(response);
      resetForm();
    } catch (error) {
      setMessage(error.message || "Registration failed. Please try again.");
    }
    setSubmitting(false);
  };

  return (
    <div className="registration-container">
      <div className="top-bar">
        <img src="/logo.png" alt="HInfinity Logo" className="logo" />
        <p className="login-link">
          Already a member? <Link to="/login">Login</Link>
        </p>
      </div>

      <div className="content">
        <div className="form-container">
          <h3 className="form-title">General Details</h3>

          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              dob: "",
              gender: "",
              country: "",
              state: "",
              pinCode: "",
              timeZone: "",
              email: "",
              phone: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              console.log("Registration Data:", values);
              alert("Registration Successful!");
              setSubmitting(false);
              resetForm();
            }}
          >
            {({ isSubmitting, setFieldValue }) => (
              <Form>
                <div className="form-grid">
                  <div className="form-group">
                    <label>First Name *</label>
                    <Field type="text" name="firstName" placeholder="First Name" />
                    <ErrorMessage name="firstName" component="div" className="error" />
                  </div>

                  <div className="form-group">
                    <label>Last Name *</label>
                    <Field type="text" name="lastName" placeholder="Last Name" />
                    <ErrorMessage name="lastName" component="div" className="error" />
                  </div>

                  <div className="form-group">
                    <label>Date of Birth *</label>
                    <Field type="date" name="dob" />
                    <ErrorMessage name="dob" component="div" className="error" />
                  </div>

                  <div className="form-group">
                    <label>Gender *</label>
                    <Field as="select" name="gender">
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </Field>
                    <ErrorMessage name="gender" component="div" className="error" />
                  </div>

                  <div className="form-group">
                    <label>Country/Region *</label>
                    <Field as="select" name="country" onChange={(e) => handleCountryChange(e.target.value, setFieldValue)}>
                      <option value="">Select</option>
                      {countries.map((country, index) => (
                        <option key={index} value={country}>{country}</option>
                      ))}
                    </Field>
                    <ErrorMessage name="country" component="div" className="error" />
                  </div>

                  <div className="form-group">
                    <label>State *</label>
                    <Field as="select" name="state">
                      <option value="">Select State</option>
                      {states.map((state, index) => (
                        <option key={index} value={state}>{state}</option>
                      ))}
                    </Field>
                    <ErrorMessage name="state" component="div" className="error" />
                  </div>

                  <div className="form-group">
                    <label>Pin Code *</label>
                    <Field type="text" name="pinCode" placeholder="Enter Pin Code" />
                    <ErrorMessage name="pinCode" component="div" className="error" />
                  </div>

                  <div className="form-group">
                    <label>Time Zone *</label>
                    <Field as="select" name="timeZone">
                      <option value="">Select</option>
                      {timezones.map((tz, index) => (
                        <option key={index} value={tz}>{tz}</option>
                      ))}
                    </Field>
                    <ErrorMessage name="timeZone" component="div" className="error" />
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <Field type="email" name="email" placeholder="Email address" />
                    <ErrorMessage name="email" component="div" className="error" />
                  </div>

                  <div className="form-group">
                    <label>Phone Number *</label>
                    <Field type="tel" name="phone" placeholder="Phone number" />
                    <ErrorMessage name="phone" component="div" className="error" />
                  </div>

                  <div className="form-group">
                    <label>Create Password *</label>
                    <Field type="password" name="password" placeholder="************" />
                    <ErrorMessage name="password" component="div" className="error" />
                  </div>

                  <div className="form-group">
                    <label>Confirm Password *</label>
                    <Field type="password" name="confirmPassword" placeholder="************" />
                    <ErrorMessage name="confirmPassword" component="div" className="error" />
                  </div>

                </div>

                <div className="button-group">
                  <button type="submit" disabled={isSubmitting} className="register-btn">
                    {isSubmitting ? "Registering..." : "Register"}
                  </button>
                  <button type="reset" className="cancel-btn">Cancel</button>
                </div>
              </Form>
            )}
          </Formik>
          {message && <p className="submission-message">{message}</p>}
        </div>
        <div className="logo3">
          <img src="/logo3.png" alt="right-side" />
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
