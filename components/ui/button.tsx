import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-[var(--border-radius-md)] px-[18px] py-2 text-[14px] font-normal leading-[1.5] transition disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 active:scale-[0.98]',
  {
    variants: {
      variant: {
        default:
          'border-0 bg-primary text-primary-foreground font-medium hover:opacity-90',
        secondary:
          'border bg-transparent text-foreground hover:bg-muted',
        ghost: 'border-0 bg-transparent text-muted-foreground hover:bg-muted hover:text-foreground',
      },
      size: {
        default: 'min-h-9',
        sm: 'min-h-8 px-3 py-1.5 text-[13px]',
        lg: 'min-h-10 px-5 py-2',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
