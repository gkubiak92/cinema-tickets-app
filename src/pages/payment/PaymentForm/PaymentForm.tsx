import React from "react";
import "./styles.scss";
import CustomButton from "components/CustomButton/CustomButton";
import { Form, Field } from "react-final-form";
import { PaymentFormValues, PaymentFormErrors } from "./types";
import TextInput from "./Fields/TextInput";
import { validateEmail, validateName } from "./utils";

const PaymentForm = () => {
  const initialValues: PaymentFormValues = {
    email: "",
    firstName: "",
    lastName: "",
  };

  const onSubmit = (values: PaymentFormValues) => {
    console.log(values);
  };

  const validateErrors = (values: PaymentFormValues): PaymentFormErrors => {
    const errors: PaymentFormErrors = {};
    const { email, firstName, lastName } = values;
    if (!email) {
      errors.email = "Email is required";
    } else if (!validateEmail(email)) {
      errors.email = "Email must be in email format with @ sign";
    }
    if (!firstName) {
      errors.firstName = "First name is required";
    } else if (!validateName(firstName)) {
      errors.firstName = "First name must contain only letters";
    }
    if (!lastName) {
      errors.lastName = "Last name is required";
    } else if (!validateName(lastName)) {
      errors.lastName = "Last name must contain only letters";
    }
    return errors;
  };

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={initialValues}
      validate={(values) => validateErrors(values)}
      render={({ handleSubmit, submitting, pristine }) => (
        <form className="payment-form" onSubmit={handleSubmit}>
          <label htmlFor="email">E-mail</label>
          <Field
            name="email"
            render={({ input, meta }) => (
              <TextInput input={input} meta={meta} />
            )}
          />
          <label htmlFor="firstname">First name</label>
          <Field
            name="firstName"
            render={({ input, meta }) => (
              <TextInput input={input} meta={meta} />
            )}
          />
          <label htmlFor="lastname">Last name</label>
          <Field
            name="lastName"
            render={({ input, meta }) => (
              <TextInput input={input} meta={meta} />
            )}
          />
          <CustomButton type="submit" block disabled={submitting || pristine}>
            Confirm payment
          </CustomButton>
        </form>
      )}
    />
  );
};

export default PaymentForm;
