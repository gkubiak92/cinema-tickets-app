import React from "react";
import "./paymentform.styles.scss";
import CustomButton from "components/custom-button/custombutton.component";
import { IPaymentFormProps } from "./types";

const PaymentForm = ({
  formData,
  handleInputChange,
  handleSubmit,
}: IPaymentFormProps) => {
  return (
    <form className="payment-form" onSubmit={handleSubmit}>
      <label htmlFor="email">E-mail</label>
      <input
        type="text"
        name="email"
        id="email"
        value={formData.email}
        onChange={handleInputChange}
      />
      <label htmlFor="firstname">First name</label>
      <input
        type="text"
        name="firstName"
        id="firstName"
        value={formData.firstName}
        onChange={handleInputChange}
      />
      <label htmlFor="lastname">Last name</label>
      <input
        type="text"
        name="lastName"
        id="lastName"
        value={formData.lastName}
        onChange={handleInputChange}
      />
      <CustomButton type="submit" onClick={handleSubmit} block>
        Confirm payment
      </CustomButton>
    </form>
  );
};

export default PaymentForm;
