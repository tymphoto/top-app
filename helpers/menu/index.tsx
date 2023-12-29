import CoursesIcon from '@/shared/assets/graduation-hat.svg';
import CloudIcon from '@/shared/assets/cloud.svg';
import BookIcon from '@/shared/assets/book.svg';
import BoxIcon from '@/shared/assets/box.svg';
import { FirstLevelMenuItem, TopLevelCategory } from '@/shared';

export const firstLevelMenu: FirstLevelMenuItem[] = [
  { route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
  { route: 'services', name: 'Сервисы', icon: <CloudIcon />, id: TopLevelCategory.Services },
  { route: 'books', name: 'Книги', icon: <BookIcon />, id: TopLevelCategory.Books },
  { route: 'products', name: 'Продукты', icon: <BoxIcon />, id: TopLevelCategory.Products },
];
