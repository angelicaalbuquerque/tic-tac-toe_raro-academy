import { ReactNode } from "react";
import "./Button.css";

type BtnProps = {
  children: React.ReactNode;
  onClick: () => void;
};

export const Button = ({ children, onClick }: BtnProps) => (
  <button className="BtnPlay">{children}</button>
);
