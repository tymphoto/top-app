import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

export interface DividerProps extends DetailedHTMLProps<
  HTMLAttributes<HTMLHRElement>, HTMLHRElement
> { }

export const Divider = ({ className, ...props }: DividerProps): JSX.Element => {
  return (
    <hr className={cn(className, styles.hr)} {...props} />
  );
};
