import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-normal transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 select-none",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-br from-orange-500 to-orange-600 border-t border-foreground/60 text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        subtle: "border-t border-b-0 border-x-0 border-foreground/20 bg-white/10 backdrop-blur-md text-foreground rounded-full",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground badge-outline border-none",
      },
      size: {
        default: "px-2.5 py-0.5 text-xs",
        sm: "px-4 py-1.5 text-sm",
        lg: "px-5 py-1.5 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof badgeVariants> { }


function Badge({ className, size, variant, ...props }: BadgeProps) {
  return (
    <>
      <div className={cn(badgeVariants({ size, variant }), className, "relative z-20")} {...props} />
    </>
  )
}

export { Badge, badgeVariants }
