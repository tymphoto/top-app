'use client';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useScrollY } from '@/shared/hooks';
import { IconButton } from '../IconButton';
import styles from './styles.module.scss';

export const UpButton = (): JSX.Element => {
  const controls = useAnimation();
  const y = useScrollY();

  useEffect(() => {
    controls.start({ opacity: y / document.body.scrollHeight });
  }, [y, controls]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.div
      className={styles.up}
      animate={controls}
      initial={{ opacity: 0 }}
    >
      <IconButton
        variant='primary'
        icon='up'
        aria-label="Наверх"
        onClick={scrollToTop}
      />
    </motion.div>
  );
};
