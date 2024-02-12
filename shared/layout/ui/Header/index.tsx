import {
  useEffect,
  useState,
  DetailedHTMLProps,
  HTMLAttributes
} from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import cn from 'classnames';
import { IconButton } from '@/shared/ui';
import Logo from '../../../assets/SidebarLogo.svg';
import { Sidebar } from '../Sidebar';
import styles from './styles.module.scss';

export interface HeaderProps extends DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement
  >, HTMLDivElement> { }

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setIsOpened(false);
  }, [router]);

  const variants = {
    opened: {
      opacity: 1,
      x: 0,
      transition: {
        stiffness: 20
      }
    },
    closed: {
      opacity: shouldReduceMotion ? 1 : 0,
      x: '100%',
    }
  };

  return (
    <header className={cn(className, styles.header)} {...props}>
      <Logo />
      <IconButton
        variant='white'
        icon='menu'
        className={styles.menuOpen}
        onClick={() => setIsOpened(true)}
        aria-label="Открыть меню"
      />
      <motion.div
        className={styles.mobileMenu}
        variants={variants}
        initial={'closed'}
        animate={isOpened ? 'opened' : 'closed'}
      >
        <Sidebar />
        <IconButton
          className={styles.menuClose}
          variant='white'
          icon='close'
          onClick={() => setIsOpened(false)}
          aria-label="Закрыть меню"
        />
      </motion.div>
    </header>
  );
};
