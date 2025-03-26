"use client"

// @ts-ignore
import * as React from "react"
// @ts-ignore
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

// Fallback implementations if modules aren't available
const createFallbackComponent = (displayName: string) => {
  const Component = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
      <div ref={ref} className={className} {...props} />
    )
  );
  Component.displayName = displayName;
  return Component;
};

// Use real components if available, otherwise use fallbacks
const Avatar = AvatarPrimitive?.Root || createFallbackComponent("Avatar");
const AvatarImage = AvatarPrimitive?.Image || React.forwardRef<HTMLImageElement, React.ImgHTMLAttributes<HTMLImageElement>>(
  ({ className, ...props }, ref) => (
    <img ref={ref} className={cn("aspect-square h-full w-full", className)} {...props} />
  )
);
const AvatarFallback = AvatarPrimitive?.Fallback || createFallbackComponent("AvatarFallback");

// Set displayNames if using real components
if (AvatarPrimitive?.Root) {
  Avatar.displayName = AvatarPrimitive.Root.displayName;
  AvatarImage.displayName = AvatarPrimitive.Image.displayName;
  AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;
}

export { Avatar, AvatarImage, AvatarFallback }
