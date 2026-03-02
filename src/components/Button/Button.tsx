import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

type ButtonProps = {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  
};

export default function Button({ children, to, onClick, type = "button" }: ButtonProps) {
  if (to) {
    return (
      <Link className={styles.button} to={to}>
        {children}
      </Link>
    );
  }

  return (
    <button className={styles.button}  type={type} onClick={onClick}>
      {children}
    </button>
  );
}