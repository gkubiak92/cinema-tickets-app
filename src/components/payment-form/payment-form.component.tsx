import React, { useState, FormEvent, ChangeEvent } from "react";
import "./paymentform.styles.scss";
import CustomButton from "components/custom-button/custombutton.component";
import { IFormErrorMsgs } from "./types";
import { validateEmail, validateName } from "./utils";

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    errors: {
      email: "",
      firstName: "",
      lastName: "",
    },
    isFormValid: false,
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData({
      email: "",
      firstName: "",
      lastName: "",
      errors: { email: "", firstName: "", lastName: "" } as IFormErrorMsgs,
      isFormValid: false,
    });
  };
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    const errors = validateInput(e);
    const isFormValid = validateForm(errors);

    setFormData({
      ...formData,
      [name]: value,
      errors,
      isFormValid,
    });
  };

  const validateInput = (e: ChangeEvent<HTMLInputElement>) => {
    const errors: IFormErrorMsgs = { ...formData.errors };
    const { name, value } = e.target as HTMLInputElement;

    switch (name) {
      case "email":
        if (!value) {
          errors.email = "Field cannot be empty";
        } else {
          errors.email = validateEmail(value)
            ? ""
            : "Enter proper e-mail address";
        }
        break;
      case "firstName":
      case "lastName":
        if (!value) {
          errors[name] = "Field cannot be empty";
        } else {
          errors[name] = validateName(value) ? "" : "Enter only letters";
        }
        break;
      default:
        break;
    }

    return errors;
  };

  const validateForm = (errors: IFormErrorMsgs) => {
    for (let [, value] of Object.entries(errors)) {
      if (value !== "") {
        return false;
      }
    }

    return true;
  };

  return (
    <form className="payment-form" onSubmit={handleSubmit}>
      <label htmlFor="email">E-mail</label>
      <input
        type="text"
        name="email"
        id="email"
        value={formData.email}
        onChange={handleInputChange}
        required
      />
      <p className="errorMsg">{formData.errors.email}</p>
      <label htmlFor="firstname">First name</label>
      <input
        type="text"
        name="firstName"
        id="firstName"
        value={formData.firstName}
        onChange={handleInputChange}
        required
      />
      <p className="errorMsg">{formData.errors.firstName}</p>
      <label htmlFor="lastname">Last name</label>
      <input
        type="text"
        name="lastName"
        id="lastName"
        value={formData.lastName}
        onChange={handleInputChange}
        required
      />
      <p className="errorMsg">{formData.errors.lastName}</p>

      <CustomButton type="submit" block disabled={!formData.isFormValid}>
        Confirm payment
      </CustomButton>
    </form>
  );
};

export default PaymentForm;
