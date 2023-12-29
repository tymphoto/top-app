import { useContext } from 'react';
import cn from 'classnames';
import { AppContext } from '@/context';
import { FirstLevelMenuItem, PageItem, TopLevelCategory } from '@/shared';
import CoursesIcon from '@/shared/assets/graduation-hat.svg';
import CloudIcon from '@/shared/assets/cloud.svg';
import BookIcon from '@/shared/assets/book.svg';
import BoxIcon from '@/shared/assets/box.svg';
import styles from './styles.module.scss';

const firstLevelMenu: FirstLevelMenuItem[] = [
  { route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
  { route: 'services', name: 'Сервисы', icon: <CloudIcon />, id: TopLevelCategory.Services },
  { route: 'books', name: 'Книги', icon: <BookIcon />, id: TopLevelCategory.Books },
  { route: 'products', name: 'Продукты', icon: <BoxIcon />, id: TopLevelCategory.Products },
];

export const Menu = (): JSX.Element => {
  const {
    menu,
    // setMenu,
    firstCategory
  } = useContext(AppContext);

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map((el) => (
          <div key={el.route}>
            <a href={`/${el.route}`}>
              <div className={cn(styles.firstLevel, {
                [styles.firstLevelActive]: el.id === firstCategory,
              })}>
                {el.icon}
                <span>
                  {el.name}
                </span>
              </div>
            </a>
            {el.id === firstCategory && buildSecondLevel(el)}
          </div>
        ))}
      </>
    );

  };

  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <div className={styles.secondBlock}>
        {menu.map((el) => (
          <div key={el._id.secondCategory}>
            <div className={styles.secondLevel}>
              {el._id.secondCategory}
              <div className={cn(styles.secondLevelBlock, {
                [styles.secondLevelBlockOpened]: el.isOpened
              })}>
                {buildThirdLevel(el.pages, menuItem.route)}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return (
      <div>
        {pages.map((page) => (
          <a
            href={`/${route}/${page.alias}`}
            className={cn(styles.thirdLevel, {
              [styles.thirdLevelActive]: false,
            })}
          >
            {page.category}
          </a>
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
