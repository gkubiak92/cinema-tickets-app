import React from "react";
import { TextInputProps } from "./types";

const TextInput: React.FC<TextInputProps> = ({
  input,
  meta,
  ...rest
}: TextInputProps) => {
  const errorMsg = meta.error && meta.touched && meta.error;

  return (
    <div>
      <input type="text" {...input} {...rest} />

      <p className="errorMsg">{errorMsg}</p>
    </div>
  );
};

export default TextInput;
