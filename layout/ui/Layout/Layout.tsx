import { ReactNode } from 'react';
import { Header } from '../Header';
import { Sidebar } from '../Sidebar';
import { Footer } from '../Footer';
import styles from './styles.module.scss';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({
  children,
}: LayoutProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <div className={styles.body} >
        {children}
      </div>
      <Footer className={styles.footer} />
    </div>
  );
};
