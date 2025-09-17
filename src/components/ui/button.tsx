import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "!h-12 inline-flex  items-center !tracking-wide justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "uppercase bg-white text-black font-bold border-slate-200 border-2 border-b-4 active:border-b-2 hover:bg-slate-100 hover:text-slate-500 text-[#1BA9EC]",
        primary:
          "uppercase bg-sky-400 text-primary-foreground font-bold hover:bg-sky-400/90 border-sky-500 border-b-4 active:border-b-0",
        primaryOutline:
          "uppercase bg-white text-sky-500 hover:bg-slate-100 font-bold",
        secondary:
          "uppercase bg-[#57CA02] text-primary-foreground font-bold hover:bg-[#57CA02]/90 border-[#43c000] border-b-4 active:border-b-0",
        secondaryOutline:
          "uppercase bg-white text-[#57CA02] hover:bg-slate-100 font-bold",
        danger:
          "uppercase bg-rose-500 text-primary-foreground font-bold hover:bg-rose-500/90 border-rose-600 border-b-4 active:border-b-0",
        dangerOutline:
          "uppercase bg-white text-rose-500 hover:bg-slate-100 font-bold",
        super:
          "uppercase bg-indigo-500 text-primary-foreground font-bold hover:bg-indigo-500/90 border-indigo-600 border-b-4 active:border-b-0",
        superOutline:
          "uppercase bg-white text-indigo-500 hover:bg-slate-100 font-bold",
        ghost:
          "uppercase font-bold bg-transparent text-slate-500 border-transparent border-0 hover:bg-slate-100",
        sidebar:
          "uppercase bg-transparent font-bold text-slate-500 border-transparent border-0 hover:bg-slate-100 transition-none",
        sidebarOutline:
          "uppercase bg-sky-500/15 text-sky-500 border-sky-300 font-bold border-2 hover:bg-sky-500/30 transition-none",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        rounded: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
