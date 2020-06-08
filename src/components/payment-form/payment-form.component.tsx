import React, { useState, FormEvent, ChangeEvent } from "react";
import "./paymentform.styles.scss";
import CustomButton from "components/custom-button/custombutton.component";

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData({ email: "", firstName: "", lastName: "" });
  };
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormData({
      ...formData,
      [name]: value,
    });
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
      <CustomButton type="submit" block>
        Confirm payment
      </CustomButton>
    </form>
  );
};

export default PaymentForm;
