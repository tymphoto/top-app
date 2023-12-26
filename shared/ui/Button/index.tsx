import { ReactNode } from "react";
import styles from './styles.module.scss';
import cn from 'classnames';

interface ButtonProps {
  className?: string;
  children: ReactNode;
  variant: 'primary' | 'ghost';
}

export const Button = ({
  className,
  variant = 'primary',
  children,
}: ButtonProps): ReactNode => {


  return (
    <button
      className={cn(
        styles.button,
        {
          [styles.primary]: variant === 'primary',
          [styles.ghost]: variant === 'ghost',
        },
        className
      )}
    >
      {children}
    </button>
  )
};
