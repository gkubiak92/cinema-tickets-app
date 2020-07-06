export type PaymentFormValues = {
  email: string;
  firstName: string;
  lastName: string;
};

export type PaymentFormErrors = {
  email?: string;
  firstName?: string;
  lastName?: string;
};

export interface IFormErrorMsgs {
  email: string;
  firstName: string;
  lastName: string;
}
