import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: 's' | 'm';
  children: ReactNode;
  color?: 'ghost' | 'red' | 'grey' | 'green' | 'primary';
  href?: string;
}

export const Tag = ({
  size = 's',
  children,
  color = 'ghost',
  href,
  className,
  ...props
}: TagProps): ReactNode => {
  return (
    <div
      className={cn(styles.tag, className, {
        [styles.s]: size == 's',
        [styles.m]: size == 'm',
        [styles.ghost]: color == 'ghost',
        [styles.red]: color == 'red',
        [styles.grey]: color == 'grey',
        [styles.green]: color == 'green',
        [styles.primary]: color == 'primary',
      })}
      {...props}
    >
      {
        href
          ? <a href={href} target='_blank'>{children}</a>
          : <>{children}</>
      }
    </div>
  );
};
