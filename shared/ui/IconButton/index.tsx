import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps
} from 'react';
import cn from 'classnames';
import up from './up.svg';
import close from './close.svg';
import menu from './menu.svg';
import styles from './styles.module.scss';

const icons = {
  up,
  close,
  menu
};

type IconName = keyof typeof icons;

interface ButtonIconProps extends DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement
> {
  icon: IconName;
  variant: 'primary' | 'white';
}

export const IconButton = ({
  variant,
  icon,
  className,
  ...props
}: ButtonIconProps): JSX.Element => {
  const IconComp = icons[icon];

  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: variant == 'primary',
        [styles.white]: variant == 'white',
      })}
      {...props}
    >
      <IconComp />
    </button>
  );
};
