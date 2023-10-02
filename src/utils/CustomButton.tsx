import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

function CustomButton({ children, className }: Props) {
  const defaultClassName =
    "rounded-lg py-[14px] px-8 bg-purple-20 text-white cursor-pointer hover:bg-purple-25 transition hover:duration-150 ease-in-out";

  const combinedClassName = className
    ? `${defaultClassName} ${className}`
    : defaultClassName;

  return <div className={combinedClassName}>{children}</div>;
}

export default CustomButton;
