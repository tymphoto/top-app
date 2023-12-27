import { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from './styles.module.scss';

interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

export const Header = ({
  ...props
}: HeaderProps): JSX.Element => {
  return (
    <div
      className={styles.Header}
      {...props}
    >
      Header
    </div>
  );
};
