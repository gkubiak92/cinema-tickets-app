import { FormEvent, ChangeEvent } from "react";

export interface IPaymentFormProps {
  formData: {
    email: string;
    firstName: string;
    lastName: string;
  };
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}
