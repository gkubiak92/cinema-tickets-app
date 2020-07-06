import { addReservationStart } from "redux/reservation/actions";

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

export type MappedDispatch = {
  addReservationStart: typeof addReservationStart;
};
