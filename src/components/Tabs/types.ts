import { ReactElement } from "react";

export interface ITabProps {
  name: string;
  isActive: boolean;
  onClickHandler: Function;
}

export interface ITabData {
  name: string;
  content: any;
}

export interface ITabsProps {
  tabs: ITabData[];
}
