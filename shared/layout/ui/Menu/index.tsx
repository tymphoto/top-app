import { useContext, KeyboardEvent, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
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

  const [announce, setAnnounce] = useState<'closed' | 'opened' | undefined>();
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  const variants = {
    visible: {
      marginBottom: 20,
      transition: shouldReduceMotion ? {} : {
        when: 'beforeChildren',
        staggerChildren: 0.1
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
      opacity: shouldReduceMotion ? 1 : 0,
      height: 0,
    }
  };

  const openSecondLevel = (secondCategory: string) => {
    setMenu && setMenu(menu.map(page => {
      if (page._id.secondCategory == secondCategory) {
        setAnnounce(page.isOpened ? 'closed' : 'opened');
        page.isOpened = !page.isOpened;
      }
      return page;
    }));
  };

  const openSecondLevelKey = (key: KeyboardEvent, secondCategory: string) => {
    if (key.code == 'Space' || key.code == 'Enter') {
      openSecondLevel(secondCategory);
    }
  };

  const buildFirstLevel = () => {
    return (
      <ul className={styles.firstLevelList}>
        {firstLevelMenu.map((el) => (
          <li
            key={el.route}
            aria-expanded={el.id == firstCategory}
          >
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
          </li>
        ))}
      </ul>
    );
  };

  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <ul className={styles.secondBlock}>
        {menu.map((el) => {
          if (el.pages.map((pages) => pages.alias).includes(pathname.split('/')[2])) {
            el.isOpened = true;
          }
          return (
            <li key={el._id.secondCategory}>
              <button
                onKeyDown={(key: KeyboardEvent) => openSecondLevelKey(key, el._id.secondCategory)}
                className={styles.secondLevel}
                onClick={() => openSecondLevel(el._id.secondCategory)}
                aria-expanded={el.isOpened}
              >{el._id.secondCategory}</button>
              <motion.ul
                layout
                variants={variants}
                initial={el.isOpened ? 'visible' : 'hidden'}
                animate={el.isOpened ? 'visible' : 'hidden'}
                className={styles.secondLevelBlock}
              >
                {buildThirdLevel(el.pages, menuItem.route, el.isOpened ?? false)}
              </motion.ul>
            </li>
          );
        })}
      </ul>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string, isOpened: boolean) => {
    return (
      pages.map((page) => (
        <motion.li
          key={page._id}
          variants={variantsChildren}
        >
          <Link
            tabIndex={isOpened ? 0 : -1}
            href={`/${route}/${page.alias}`}
            className={cn(styles.thirdLevel, {
              [styles.thirdLevelActive]: `/${route}/${page.alias}` === pathname,
            })}
            aria-current={`/${route}/${page.alias}` === pathname ? 'page' : false}
          >
            {page.category}
          </Link>
        </motion.li>
      ))
    );
  };

  return (
    <nav
      className={styles.menu}
      role="navigation"
    >
      {announce && (
        <span
          role="log"
          className="visuallyHidden"
        >
          {announce == 'opened' ? 'развернуто' : 'свернуто'}
        </span>
      )}
      {buildFirstLevel()}
    </nav>
  );
};
