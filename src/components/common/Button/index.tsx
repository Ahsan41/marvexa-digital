import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "text";

type CommonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  /** Optional leading/trailing icon */
  icon?: ReactNode;
  iconPosition?: "start" | "end";
};

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    "className" | "children" | "href"
  > & {
    href: string;
    onClick?: AnchorHTMLAttributes<HTMLAnchorElement>["onClick"];
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClass: Record<ButtonVariant, string> = {
  primary: "btnn--primary",
  secondary: "btnn--secondary",
  ghost: "btnn--ghost",
  text: "btnn--text",
};

/**
 * Reusable Button — Link or button element.
 * Variants: primary | secondary | ghost | text
 */
const Button = ({
  children,
  variant = "primary",
  className = "",
  icon,
  iconPosition = "end",
  ...props
}: ButtonProps) => {
  const classes = ["btnn", variantClass[variant], className]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {icon && iconPosition === "start" ? (
        <span className="btnn__icon" aria-hidden>
          {icon}
        </span>
      ) : null}
      <span className="btnn__label">{children}</span>
      {icon && iconPosition === "end" ? (
        <span className="btnn__icon" aria-hidden>
          {icon}
        </span>
      ) : null}
    </>
  );

  if ("href" in props && props.href) {
    const { href, ...rest } = props;
    const isExternal =
      href.startsWith("http") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:");

    if (isExternal) {
      return (
        <a className={classes} href={href} {...rest}>
          {content}
        </a>
      );
    }

    return (
      <Link className={classes} href={href} {...rest}>
        {content}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button
      type={buttonProps.type ?? "button"}
      className={classes}
      {...buttonProps}
    >
      {content}
    </button>
  );
};

export default Button;
