import React from 'react';
import { TopPageAdvantage } from '@/shared/types';
import CheckIcon from './check.svg';
import styles from './styles.module.scss';

interface AdvantagesProps {
  advantages: TopPageAdvantage[]
}

export const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {
  return (
    <>
      {advantages.map(a => (
        <div key={a._id} className={styles.advantage}>
          <CheckIcon />
          <div className={styles.title}>{a.title}</div>
          <hr className={styles.vline} />
          <div>{a.description}</div>
        </div>
      ))}
    </>
  );
};
