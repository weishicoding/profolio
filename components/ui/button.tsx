import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex font-family items-center text-accent justify-center whitespace-nowrap shadow-lg duration-300 rounded-2xl transiton ease-in hover:-translate-y-1 hover:bg-accent hover:text-primary",
  {
    variants: {
      variant: {
        default: "border-4 border-accent font-extrabold text-2xl  ",
        sm: "border-2 border-accent font-seimbold text-xl",
      },
      size: {
        default: "px-4 py-3.5 ",
        sm: "px-3",
        lg: "px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
