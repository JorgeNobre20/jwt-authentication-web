import { FormHTMLAttributes } from "react";

export type FormProps = FormHTMLAttributes<HTMLFormElement> & {
    title: string;
}