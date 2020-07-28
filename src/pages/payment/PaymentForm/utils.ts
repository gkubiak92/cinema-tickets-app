import { PaymentFormValues, PaymentFormErrors } from "./types";

export const validateEmail = (email: string) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const validateName = (name: string) => {
  const re = /^[a-zA-Z]+$/;
  return re.test(String(name));
};

export const validateErrors = (values: PaymentFormValues): PaymentFormErrors => {
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