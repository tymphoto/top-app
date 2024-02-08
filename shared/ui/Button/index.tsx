import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactNode
} from "react";
import { motion } from "framer-motion";
import ArrowIcon from '../../assets/Arrow.svg';
import styles from './styles.module.scss';
import cn from 'classnames';

interface ButtonProps extends Omit<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  'onAnimationStart' | 'onDragStart' | 'onDragEnd' | 'onDrag' | 'ref'
> {
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
    <motion.button
      whileHover={{ scale: 1.05 }}
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
    </motion.button>
  );
};
