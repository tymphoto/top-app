import { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from './styles.module.scss';
import { Menu } from '../Menu';

interface SidebarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

export const Sidebar = ({
  ...props
}: SidebarProps): JSX.Element => {
  return (
    <div
      className={styles.Sidebar}
      {...props}
    >
      <Menu />
    </div>
  );
};
