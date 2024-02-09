import { KeyboardEvent, ReactNode, useRef, useState } from 'react';
import cn from 'classnames';
import { UpButton } from '@/shared/ui';
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
  const [isSkipLinkShow, setIsSkipLinkShow] = useState<boolean>(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  const skipContentAction = (e: KeyboardEvent) => {
    if (e.code == 'Space' || e.code == 'Enter') {
      bodyRef.current?.focus();
    }
    setIsSkipLinkShow(false);
  };

  return (
    <div className={styles.wrapper}>
      <a
        onFocus={() => setIsSkipLinkShow(true)}
        tabIndex={1}
        className={cn(styles.skipLink, {
          [styles.isSkipLinkShow]: isSkipLinkShow
        })}
        onKeyDown={(e) => skipContentAction(e)}
      >
        Сразу к содержанию
      </a>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <main
        className={styles.body}
        ref={bodyRef}
        tabIndex={0}
        role='main'
      >
        {children}
      </main>
      <Footer className={styles.footer} />
      <UpButton />
    </div>
  );
};
