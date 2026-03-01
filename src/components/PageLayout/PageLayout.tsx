import type { PropsWithChildren } from "react";
import styles from "./PageLayout.module.scss";

type PageLayoutProps = PropsWithChildren<{
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
}>;

export default function PageLayout({ title, subtitle, actions, children }: PageLayoutProps) {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerText}>
          <h1>{title}</h1>
          {subtitle ? <p>{subtitle}</p> : null}
        </div>
        {actions ? <div className={styles.actions}>{actions}</div> : null}
      </header>

      <section className={styles.content}>{children}</section>
    </div>
  );
}