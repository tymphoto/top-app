import {
  DetailedHTMLProps,
  ForwardedRef,
  TextareaHTMLAttributes,
  forwardRef
} from 'react';
import { FieldError } from 'react-hook-form';
import cn from 'classnames';
import styles from './styles.module.scss';

export interface TextareaProps extends DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement
> {
  error?: FieldError;
}

export const Textarea = forwardRef((
  {
    error,
    className,
    ...props
  }: TextareaProps,
  ref: ForwardedRef<HTMLTextAreaElement>
): JSX.Element => {
  return (
    <div className={cn(styles.textareaWrapper, className)}>
      <textarea
        className={cn(styles.textarea, {
          [styles.error]: error
        })}
        ref={ref}
        {...props}
      />
      {error && (
        <span role="alert" className={styles.errorMessage}>
          {error.message}
        </span>
      )}
    </div>
  );
});
