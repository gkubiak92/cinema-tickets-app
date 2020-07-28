import React from "react";
import "./styles.scss";
import CustomButton from "components/CustomButton/CustomButton";
import { Form, Field } from "react-final-form";
import { PaymentFormValues, MappedDispatch } from "./types";
import TextInput from "./Fields/TextInput";
import { validateErrors } from "./utils";
import { connect } from "react-redux";
import { addReservationStart } from "redux/reservation/actions";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import StyledCardElement from "./Fields/StyledCardElement";

const PaymentForm = ({ addReservationStart }: MappedDispatch) => {
  const stripe = useStripe();
  const elements = useElements();

  const initialValues: PaymentFormValues = {
    email: "",
    firstName: "",
    lastName: "",
  };

  const onSubmit = async (values: PaymentFormValues) => {
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (!card) {
      return;
    }

    try {
      //TODO: change this to use some backend to pay or some serverless functions
      const payload = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
      console.log("Succesfully paid with [PaymentMethod]: ", payload);
      addReservationStart(values);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={initialValues}
      validate={(values) => validateErrors(values)}
      render={({ handleSubmit, submitting, pristine, valid }) => (
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
          <div className="card-row">
            <StyledCardElement />
          </div>
          <CustomButton type="submit" block disabled={submitting || pristine || !stripe || !valid}>
            Confirm payment
          </CustomButton>
        </form>
      )}
    />
  );
};

const mapDispatchToProps = {
  addReservationStart,
};

export default connect(null, mapDispatchToProps)(PaymentForm);
