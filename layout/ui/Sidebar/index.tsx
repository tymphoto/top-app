import { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from './styles.module.scss';

interface SidebarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

export const Sidebar = ({
  ...props
}: SidebarProps): JSX.Element => {
  return (
    <div
      className={styles.Sidebar}
      {...props}
    >
      Sidebar
    </div>
  );
};
