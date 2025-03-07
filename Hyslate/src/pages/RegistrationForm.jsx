import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import '../styles/Registration.css'; 

const RegistrationForm = () => {
  const [submissionMessage, setSubmissionMessage] = useState('');

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    dateOfBirth: Yup.date().required('Date of birth is required'),
    gender: Yup.string().required('Gender is required'),
    country: Yup.string().required('Country/Region is required'),
    state: Yup.string().required('State is required'),
    pinCode: Yup.string().matches(/^\d{6}$/, 'Invalid Pin Code').required('Pin Code is required'),
    timezone: Yup.string().required('Time zone is required'),
    email: Yup.string().email('Invalid email format').required('Email address is required'),
    phoneNumber: Yup.string().matches(/^\d{10}$/, 'Invalid phone number').required('Phone number is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .matches(/[A-Z]/, 'Must contain at least one uppercase letter')
      .matches(/[a-z]/, 'Must contain at least one lowercase letter')
      .matches(/[0-9]/, 'Must contain at least one number')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await axios.post('http://localhost:5000/register', values, {
        headers: { 'Content-Type': 'application/json' },
      });

      console.log('Success:', response.data);
      setSubmissionMessage('Registration successful!');
      resetForm();
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
      setSubmissionMessage('Registration failed. Please try again.');
    }
    setSubmitting(false);
  };

  return (
    <div className="full-frame">
      <div className="top-container">
        <img src="/logo.png" alt="Logo" className="top-logo" />
        <a href="/login" className="login-link">Already a member? Login</a>
      </div>
      <div className="container">
        <h2>Let’s get you started</h2>
        <p>Enter the details to get going</p>
      </div>
      <div className="main-frame">
  <div className="left-container">
    <h2 className="form-heading">General Details</h2>

    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        gender: '',
        country: '',
        state: '',
        pinCode: '',
        timezone: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="registration-form">
          <div className="form-grid">
            {[
              ['firstName', 'First Name *'],
              ['lastName', 'Last Name'],
              ['dateOfBirth', 'Date of Birth *'],
              ['gender', 'Gender *', 'select', ['Male', 'Female', 'Other']],
              ['country', 'Country/Region *'],
              ['state', 'State *'],
              ['pinCode', 'Pin Code *'],
              ['timezone', 'Time Zone *'],
              ['email', 'Email Address *'],
              ['phoneNumber', 'Phone Number *'],
              ['password', 'Create Password *', 'password'],
              ['confirmPassword', 'Confirm Password *', 'password'],
            ].map(([name, label, type = 'text', options], index) => (
              <div key={index} className="form-group">
                <label htmlFor={name}>{label}</label>
                {options ? (
                  <Field as="select" name={name} className="input-field">
                    <option value="">Select {label.split('*')[0]}</option>
                    {options.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </Field>
                ) : (
                  <Field name={name} type={type} className="input-field" />
                )}
                <ErrorMessage name={name} component="div" className="error" />
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="button-group">
            <button type="submit" disabled={isSubmitting} className="btn-primary">
              {isSubmitting ? 'Registering...' : 'Save'}
            </button>
            <button type="button" onClick={() => window.location.reload()} className="btn-secondary">
              Cancel
            </button>
          </div>
        </Form>
      )}
    </Formik>

        {submissionMessage && <p className="submission-message">{submissionMessage}</p>}
       </div>
        <div className="right-container">
          <img src="/logo3.png" alt="Side Image" width="530px" height="419px"/>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
