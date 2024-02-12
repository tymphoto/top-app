"use client";
import { withLayout } from '@/shared/layout';
import { Loader } from '@/shared/ui';
import styles from './styles.module.scss';

function Loading() {
  return (
    <div className={styles.loaderWrapper} >
      <Loader />
    </div>
  );
}

export default withLayout(Loading);



