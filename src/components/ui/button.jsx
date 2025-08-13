import React from "react";
import { cn } from "../../lib/utils";

export const Button = React.forwardRef(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 disabled:opacity-50",
      className
    )}
    {...props}
  />
));
Button.displayName = "Button";
