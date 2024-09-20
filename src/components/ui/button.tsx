import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex relative overflow-hidden items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 active:ring-2 active:ring-offset-2 active:ring-offset-background active:ring-ring active:ring-opacity-50 group select-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:opacity-70 hover:ring-4 hover:ring-primary/10",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        subtle: "border border-input bg-accent/20 hover:bg-white/10 hover:text-accent-foreground",
        secondary: "text-secondary-foreground btn-secondary font-normal",
        // secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-white/10 hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        white: "bg-foreground text-background hover:opacity-70",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-4",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

export interface Props {
  icon: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
);

const BorderButton = ({ icon: Icon, ...props }: Props) => {
  return (
    <button {...props} className="relative inline-flex h-10 overflow-hidden rounded-md p-[1px] focus:!outline-none focus:outline-0 focus:outline-transparent focus:ring-2 border border-border/80 hover:border-foreground/50 active:scale-95 active:ring-2 active:ring-offset-2 active:ring-offset-background active:ring-ring active:ring-opacity-50 outline-none">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#404040_0%,#404040_50%,#171717_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-background px-5 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        Start for free
        {Icon}
      </span>
    </button>
  )
};

Button.displayName = "Button"

BorderButton.displayName = "BorderButton"

export { Button, BorderButton, buttonVariants };
