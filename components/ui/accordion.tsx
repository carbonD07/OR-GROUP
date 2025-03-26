"use client"

/// <reference types="react" />
// @ts-ignore
import * as React from "react"

const Accordion = ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="accordion" {...props}>
      {children}
    </div>
  )
}

const AccordionItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={`accordion-item border-b ${className || ''}`}
    {...props}
  >
    {children}
  </div>
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => (
  <div className="accordion-header flex">
    <button
      ref={ref}
      className={`accordion-trigger flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline ${className || ''}`}
      {...props}
    >
      {children}
      <svg className="h-4 w-4 transition-transform duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </button>
  </div>
))
AccordionTrigger.displayName = "AccordionTrigger"

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { isOpen?: boolean }
>(({ className, children, isOpen, ...props }, ref) => (
  <div
    ref={ref}
    className={`accordion-content overflow-hidden text-sm transition-all ${isOpen ? 'open' : 'closed'} ${className || ''}`}
    {...props}
  >
    <div className={`pb-4 pt-0`}>{children}</div>
  </div>
))

AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
