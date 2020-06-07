export interface ICustomButtonProps {
  onClick?: Function;
  to?: string;
  block: boolean;
  type: "submit" | "button";
  disabled?: boolean;
}
