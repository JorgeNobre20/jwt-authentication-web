import { ButtonHTMLAttributes } from "react";

export type ButtonVariants = "button" | "link";

export type ButtonProps = ButtonHTMLAttributes<HTMLInputElement> & {
    label?: string;
    variant?: ButtonVariants;
}
