import { ButtonHTMLAttributes, InputHTMLAttributes, forwardRef } from "react";

const Button = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, className, ...props }, ref) => {
  return (
    <button ref={ref} className={`bg-red-500 p-2 ${className}`} {...props}>
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
