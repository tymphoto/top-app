import CoursesIcon from './assets/Graduation-hat.svg';
import CloudIcon from './assets/Cloud.svg';
import BookIcon from './assets/Book.svg';
import BoxIcon from './assets/Box.svg';
import { FirstLevelMenuItem, TopLevelCategory } from '@/shared/types';

export const firstLevelMenu: FirstLevelMenuItem[] = [
  { route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
  { route: 'services', name: 'Сервисы', icon: <CloudIcon />, id: TopLevelCategory.Services },
  { route: 'books', name: 'Книги', icon: <BookIcon />, id: TopLevelCategory.Books },
  { route: 'products', name: 'Продукты', icon: <BoxIcon />, id: TopLevelCategory.Products },
];
