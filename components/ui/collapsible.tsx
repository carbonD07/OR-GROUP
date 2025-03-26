"use client"

// @ts-ignore
import * as React from "react"
// @ts-ignore
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"

// Fallback implementations if Collapsible modules aren't available
const FallbackRoot = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { open?: boolean; onOpenChange?: (open: boolean) => void }
>(({ children, open, ...props }, ref) => (
  <div ref={ref} data-state={open ? "open" : "closed"} {...props}>
    {children}
  </div>
));

const FallbackTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ children, ...props }, ref) => (
    <button ref={ref} type="button" {...props}>
      {children}
    </button>
  )
);

const FallbackContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { forceMount?: boolean }>(
  ({ children, forceMount, ...props }, ref) => {
    const parentElement = React.useRef<HTMLElement | null>(null);
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
      if (ref && 'current' in ref && ref.current) {
        parentElement.current = ref.current.parentElement;
        const openState = parentElement.current?.getAttribute('data-state') === 'open';
        setOpen(openState || forceMount || false);
      }
    }, [ref, forceMount]);

    if (!open && !forceMount) return null;

    return (
      <div ref={ref} data-state={open ? "open" : "closed"} {...props}>
        {children}
      </div>
    );
  }
);

// Use real components or fallbacks
const Collapsible = CollapsiblePrimitive?.Root || FallbackRoot;
const CollapsibleTrigger = CollapsiblePrimitive?.CollapsibleTrigger || FallbackTrigger;
const CollapsibleContent = CollapsiblePrimitive?.CollapsibleContent || FallbackContent;

// Set display names
if (CollapsiblePrimitive?.Root) {
  Collapsible.displayName = CollapsiblePrimitive.Root.displayName;
  CollapsibleTrigger.displayName = CollapsiblePrimitive.CollapsibleTrigger.displayName;
  CollapsibleContent.displayName = CollapsiblePrimitive.CollapsibleContent.displayName;
} else {
  Collapsible.displayName = "Collapsible";
  CollapsibleTrigger.displayName = "CollapsibleTrigger";
  CollapsibleContent.displayName = "CollapsibleContent";
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
