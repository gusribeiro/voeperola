import { ReactNode } from "react";

import style from "@/stylesheet/components/button.module.css";

import { classNames } from "@/utils";

interface IButton {
  type: "button" | "submit" | "reset";
  variant: "primary" | "secondary" | "tertiary" | "link";
  success?: boolean;
  warning?: boolean;
  danger?: boolean;
  children: ReactNode;
}

const Button = ({
  type,
  variant,
  success,
  warning,
  danger,
  children,
}: IButton) => {
  const getButtonStyle = (): any => {
    if (success) return style.success;
    if (warning) return style.warning;
    if (danger) return style.danger;
  };

  return (
    <>
      <button
        type={type}
        className={classNames(
          style.button,
          style[variant || "primary"],
          getButtonStyle()
        )}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
