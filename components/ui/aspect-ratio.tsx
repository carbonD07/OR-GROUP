"use client"

// @ts-ignore
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio"
// Fallback if module is not available
// @ts-ignore
import * as React from "react"

// Use the real component if available, otherwise use a fallback
const AspectRatio = AspectRatioPrimitive?.Root || 
  React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { ratio?: number }>(
    ({ ratio = 1, style, ...props }, ref) => (
      <div
        ref={ref}
        style={{
          position: 'relative',
          width: '100%',
          paddingBottom: `${100 / ratio}%`,
          ...style,
        }}
        {...props}
      />
    )
  )

export { AspectRatio }
