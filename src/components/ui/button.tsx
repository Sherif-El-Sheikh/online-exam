import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils/tailwind-merge"

// Added custom variants: auth, register, startQuiz, start, addQuestion,back, next, add
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        auth: "bg-main w-4/5 sm:w-[410px] hover:bg-submain text-base font-poppins font-normal text-white shadow-primary-auth transition-all duration-300",
        register:
          "h-10 w-32 rounded-2xl border border-slate-300 bg-transparent text-main hover:bg-slate-100/70 transition-all duration-300 shadow-auth-input font-inter font-normal text-base sm:text-xl p-4 sm:p-5",
        startQuiz:
          "h-10 sm:h-12 md:h-14 w-24 md:w-36 min-[990px]:w-44 xl:w-48 rounded-[20px] bg-main hover:bg-submain transition-all duration-400 sm:py-4 sm:px-8 font-poppins font-semibold text-xs sm:text-sm md:text-base lg:text-lg text-white",
        start:
          "h-6 w-20 rounded-xl py-3 px-6 bg-main hover:bg-submain font-inter font-medium text-sm transition-all duration-300 text-white",
        addQuestion:
          "h-6 w-32 rounded-xl py-3 px-6 bg-main hover:bg-submain font-inter font-medium text-sm transition-all duration-300 text-white",
        back: "h-12 w-72 bg-transparent hover:bg-transparent border text-main border-main py-3 px-6 rounded-3xl font-roboto font-medium text-base sm:text-xl",
        next: "h-12 w-72 bg-main hover:bg-submain text-white py-3 px-6 rounded-3xl transition-all duration-300 font-roboto font-medium text-base sm:text-xl",
        add: "h-8 w-48 rounded-xl py-2 px-14 bg-main hover:bg-submain text-white transition-all duration-300 font-inter font-bold sm:text-base ",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-12 sm:h-14 rounded-[20px] p-2",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
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
)
Button.displayName = "Button"

export { Button, buttonVariants }
