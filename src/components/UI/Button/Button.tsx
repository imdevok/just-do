import { splitProps, JSX } from 'solid-js';
import styles from "./Button.module.css"

interface ButtonProps extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

const Button = (props: ButtonProps) => {
  const [local, buttonProps] = splitProps(props, ['children']);
  return (
    <button class={styles.btn} {...buttonProps}>
      {local.children}
    </button>
  );
};

export default Button