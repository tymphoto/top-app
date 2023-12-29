import { useContext } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import cn from 'classnames';
import { AppContext } from '@/context';
import { firstLevelMenu } from '@/helpers';
import { FirstLevelMenuItem, PageItem } from '@/shared';
import styles from './styles.module.scss';

export const Menu = (): JSX.Element => {
  const {
    menu,
    setMenu,
    firstCategory
  } = useContext(AppContext);

  const pathname = usePathname();

  const openSecondLevel = (secondCategory: string) => {
    setMenu && setMenu(menu.map((el) => {
      if (el._id.secondCategory === secondCategory) {
        el.isOpened = !el.isOpened;
      }
      return el;
    }));
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
                className={styles.secondLevel}
                onClick={() => openSecondLevel(el._id.secondCategory)}
              >
                {el._id.secondCategory}
                <div className={cn(styles.secondLevelBlock, {
                  [styles.secondLevelBlockOpened]: el.isOpened,
                })}>
                  {buildThirdLevel(el.pages, menuItem.route)}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return (
      <div>
        {pages.map((page) => (
          <Link
            href={`/${route}/${page.alias}`}
            className={cn(styles.thirdLevel, {
              [styles.thirdLevelActive]: `/${route}/${page.alias}` === pathname,
            })}>
            {page.category}
          </Link>
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
