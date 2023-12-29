import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';
import { Menu } from '../Menu';
import Logo from '@/shared/assets/SidebarLogo.svg';

interface SidebarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

export const Sidebar = ({
  className,
  ...props
}: SidebarProps): JSX.Element => {
  return (
    <div
      className={cn(className, styles.sidebar)}
      {...props}
    >
      <Logo className={styles.logo} />
      <div>
        Поиск
      </div>
      <Menu />
    </div>
  );
};
