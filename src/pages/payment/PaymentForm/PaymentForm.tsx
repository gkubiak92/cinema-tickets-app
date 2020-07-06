import React, { useState } from "react";
import "./styles.scss";
import CustomButton from "components/CustomButton/CustomButton";
import { Form, Field } from "react-final-form";
import { PaymentFormValues } from "./types";
import TextInput from "./Fields/TextInput";

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
  });

  const onSubmit = (values: PaymentFormValues) => {
    console.log(values);
  };

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={formData}
      render={({ handleSubmit, submitting, pristine }) => (
        <form className="payment-form" onSubmit={handleSubmit}>
          <label htmlFor="email">E-mail</label>
          <Field name="email" required component={TextInput} />
          {/* <p className="errorMsg">{formData.errors.email}</p> */}
          <label htmlFor="firstname">First name</label>
          <Field name="firstName" required component={TextInput} />
          {/* <p className="errorMsg">{formData.errors.firstName}</p> */}
          <label htmlFor="lastname">Last name</label>
          <Field name="lastName" required component={TextInput} />
          {/* <p className="errorMsg">{formData.errors.lastName}</p> */}

          <CustomButton type="submit" block disabled={submitting || pristine}>
            Confirm payment
          </CustomButton>
        </form>
      )}
    />
  );
};

export default PaymentForm;
