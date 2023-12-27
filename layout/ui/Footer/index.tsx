import { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from './styles.module.scss';

interface FooterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

export const Footer = ({
  ...props
}: FooterProps): JSX.Element => {
  return (
    <div
      className={styles.Footer}
      {...props}
    >
      Footer
    </div>
  );
};
