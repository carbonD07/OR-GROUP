"use client"

import * as React from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

// Check if Radix UI is available
let CheckboxPrimitive: any;
try {
  CheckboxPrimitive = require("@radix-ui/react-checkbox");
} catch (e) {
  // Fallback when Radix is not available
  CheckboxPrimitive = null;
}

// Type for checked state
type CheckedState = boolean | "indeterminate";

// Fallback checkbox if Radix UI is not available
const FallbackCheckbox = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    checked?: CheckedState;
    defaultChecked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
  }
>(({ className, checked, onCheckedChange, children, ...props }, ref) => (
  <button
    ref={ref}
    type="button"
    role="checkbox"
    aria-checked={checked === "indeterminate" ? "mixed" : checked}
    data-state={checked === "indeterminate" ? "indeterminate" : checked ? "checked" : "unchecked"}
    className={className}
    onClick={() => onCheckedChange?.(checked === true ? false : true)}
    {...props}
  >
    {children}
  </button>
));

const FallbackIndicator = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={className} {...props} />
  )
);

// CheckIcon component for fallback
const CheckIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
    <path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="currentColor" />
  </svg>
);

// Determine which component to use
const Root = CheckboxPrimitive?.Root || FallbackCheckbox;
const Indicator = CheckboxPrimitive?.Indicator || FallbackIndicator;

// Main Checkbox component
const Checkbox = React.forwardRef<
  React.ElementRef<typeof Root>,
  React.ComponentPropsWithoutRef<typeof Root>
>(({ className, ...props }, ref) => (
  <Root
    ref={ref}
    className={cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    )}
    {...props}
  >
    <Indicator className={cn("flex items-center justify-center text-current")}>
      {typeof Check !== 'undefined' ? <Check className="h-4 w-4" /> : <CheckIcon />}
    </Indicator>
  </Root>
));
Checkbox.displayName = "Checkbox";

export { Checkbox }
