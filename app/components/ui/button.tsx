import { ButtonHTMLAttributes, InputHTMLAttributes, forwardRef } from "react";

const button = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, className, ...props }, ref) => {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
});

button.displayName = "Button";
export default button;
