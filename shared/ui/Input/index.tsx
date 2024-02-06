import { ForwardedRef, forwardRef } from 'react';
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';
import cn from 'classnames';
import styles from './styles.module.scss';

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  error?: FieldError;
}

export const Input = forwardRef((
  { className, error, ...props }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
): JSX.Element => {
  return (
    <div className={cn(className, styles.inputWrapper)}>
      <input className={cn(styles.input, {
        [styles.error]: error
      })} ref={ref} {...props} />
      {error && (
        <span
          role="alert"
          className={styles.errorMessage}
        >
          {error.message}
        </span>
      )}
    </div>
  );
});
