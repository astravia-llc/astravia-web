"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";

const buttonVariants = cva(
  "hover:cursor-pointer inline-flex items-center justify-center gap-2 rounded-full transition-all duration-300 font-geist font-normal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-0",
  {
    variants: {
      variant: {
        gradient:
          "text-white bg-gradient-to-r from-teal-500/20 to-orange-600/20 hover:from-teal-500/50 hover:to-orange-700/50 border border-neutral-700 hover:border-neutral-500",
        outline:
          "border border-neutral-700 hover:border-neutral-600 hover:bg-neutral-900/50 text-sm text-neutral-200",
        neutral:
          "bg-neutral-700/50 border border-neutral-700 hover:border-neutral-600 hover:bg-neutral-400/50 text-neutral-100",
        ghost:
          "bg-transparent text-neutral-300 hover:bg-neutral-900/40 border border-transparent",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-sm",
        lg: "px-8 py-4 text-base",
      },
    },
    defaultVariants: {
      variant: "outline",
      size: "md",
    },
  }
);

type AnchorButtonProps = React.ComponentPropsWithoutRef<"a"> & {
  href: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
} & VariantProps<typeof buttonVariants>;

type NativeButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  href?: undefined;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
} & VariantProps<typeof buttonVariants>;

export type ButtonProps = AnchorButtonProps | NativeButtonProps;

export function Button(props: ButtonProps) {
  const { variant, size } = props;
  const classes = clsx(buttonVariants({ variant, size }), props.className);

  if ("href" in props && props.href) {
    const {
      href,
      leftIcon,
      rightIcon,
      children,
      className,
      onClick,
      ...anchorProps
    } = props as AnchorButtonProps;
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      onClick?.(e);
      if (e.defaultPrevented) return;
      if (href.startsWith("#")) {
        e.preventDefault();
        const targetId = href.slice(1);
        const target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          history.replaceState(null, "", href);
        }
      }
    };
    return (
      <a href={href} className={classes} onClick={handleClick} {...anchorProps}>
        {leftIcon ? <span className="shrink-0">{leftIcon}</span> : null}
        {children}
        {rightIcon ? <span className="shrink-0">{rightIcon}</span> : null}
      </a>
    );
  }

  const { leftIcon, rightIcon, children, className, ...buttonProps } =
    props as NativeButtonProps;
  return (
    <button className={classes} {...buttonProps}>
      {leftIcon ? <span className="shrink-0">{leftIcon}</span> : null}
      {children}
      {rightIcon ? <span className="shrink-0">{rightIcon}</span> : null}
    </button>
  );
}

export default Button;
