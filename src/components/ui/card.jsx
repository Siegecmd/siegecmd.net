import * as React from "react";
import { cn } from "@/lib/utils";

function Card({ className, variant = "default", size = "default", ...props }) {
  return (
    <div
      data-slot="card"
      data-size={size}
      className={cn(
        "group/card flex flex-col overflow-hidden rounded-xl text-sm text-white",
        variant === "glass" &&
          "bg-black/60 border border-black/30 backdrop-blur-sm shadow-[0_4px_30px_rgba(0,0,0,0.1)]",
        variant === "default" &&
          "bg-card text-card-foreground ring-1 ring-foreground/10",
        "gap-4 py-4",
        className
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }) {
  return (
    <div
      data-slot="card-header"
      className={cn("grid auto-rows-min items-start gap-1 px-4", className)}
      {...props}
    />
  );
}

function CardContent({ className, ...props }) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-4", className)}
      {...props}
    />
  );
}

export { Card, CardHeader, CardContent };
