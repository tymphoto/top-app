import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import ArrowIcon from '../../assets/Arrow.svg';
import styles from './styles.module.scss';
import cn from 'classnames';

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  variant: 'primary' | 'ghost';
  arrow?: 'right' | 'down';
}

export const Button = ({
  className,
  variant = 'primary',
  children,
  arrow,
  ...props
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
      {...props}
    >
      {children}
      {arrow && (
        <span className={cn(styles.arrow, {
          [styles.down]: arrow === 'down'
        })}>
          <ArrowIcon />
        </span>
      )}
    </button>
  )
};
