import { useContext, KeyboardEvent } from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import cn from 'classnames';
import { FirstLevelMenuItem, PageItem } from '@/shared/types';
import { AppContext } from '@/context';
import { firstLevelMenu } from '@/helpers';
import styles from './styles.module.scss';

export const Menu = (): JSX.Element => {
  const {
    menu,
    setMenu,
    firstCategory
  } = useContext(AppContext);

  const pathname = usePathname();

  const variants = {
    visible: {
      marginBottom: 20,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1,
      }
    },
    hidden: { marginBottom: 0 }
  };

  const variantsChildren = {
    visible: {
      display: 'block',
      opacity: 1,
      height: 29,
    },
    hidden: {
      display: 'none',
      opacity: 0,
      height: 0,
    }
  };

  const openSecondLevel = (secondCategory: string) => {
    setMenu && setMenu(menu.map((el) => {
      if (el._id.secondCategory === secondCategory) {
        el.isOpened = !el.isOpened;
      }
      return el;
    }));
  };

  const openSecondLevelKey = (key: KeyboardEvent, secondCategory: string) => {
    if (key.code == 'Space' || key.code == 'Enter') {
      openSecondLevel(secondCategory);
    }
  };

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map((el) => (
          <div key={el.route}>
            <Link href={`/${el.route}`}>
              <div className={cn(styles.firstLevel, {
                [styles.firstLevelActive]: el.id === firstCategory,
              })}>
                {el.icon}
                <span>
                  {el.name}
                </span>
              </div>
            </Link>
            {el.id === firstCategory && buildSecondLevel(el)}
          </div>
        ))}
      </>
    );

  };

  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <div className={styles.secondBlock}>
        {menu.map((el) => {
          if (el.pages.map((pages) => pages.alias).includes(pathname.split('/')[2])) {
            el.isOpened = true;
          }
          return (
            <div key={el._id.secondCategory}>
              <div
                tabIndex={0}
                onKeyDown={(key: KeyboardEvent) => openSecondLevelKey(key, el._id.secondCategory)}
                className={styles.secondLevel}
                onClick={() => openSecondLevel(el._id.secondCategory)}
              >
                {el._id.secondCategory}
                <motion.div
                  layout
                  variants={variants}
                  initial={el.isOpened ? 'visible' : 'hidden'}
                  animate={el.isOpened ? 'visible' : 'hidden'}
                  className={cn(styles.secondLevelBlock)}
                >
                  {buildThirdLevel(el.pages, menuItem.route, el.isOpened ?? false)}
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string, isOpened: boolean) => {
    return (
      <div>
        {pages.map((page) => (
          <motion.div
            key={page._id}
            variants={variantsChildren}
          >
            <Link
              tabIndex={isOpened ? 0 : -1}
              href={`/${route}/${page.alias}`}
              className={cn(styles.thirdLevel, {
                [styles.thirdLevelActive]: `/${route}/${page.alias}` === pathname,
              })}>
              {page.category}
            </Link>
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <div className={styles.menu}>
      {buildFirstLevel()}
    </div>
  );
};
