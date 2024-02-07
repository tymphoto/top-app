import {
  DetailedHTMLProps,
  HTMLAttributes,
  ReactNode,
  ForwardedRef,
  forwardRef
} from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  color?: 'white' | 'blue';
  children: ReactNode;
}

export const Card = forwardRef((
  {
    color = 'white',
    children,
    className,
    ...props
  }: CardProps,
  ref: ForwardedRef<HTMLDivElement>
): JSX.Element => {
  return (
    <div className={cn(styles.card, className, {
      [styles.blue]: color == 'blue'
    })}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
});
