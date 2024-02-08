"use client";
import { withLayout } from '@/shared/layout';
import {
  type MenuItem,
  TopLevelCategory,
} from '@/shared/types';

interface CoursesPagePageProps extends Record<string, unknown> {
  menu?: MenuItem[];
  firstCategory?: TopLevelCategory;
}

async function CoursesPage({ menu }: CoursesPagePageProps) {
  return (
    <>
      CoursesPage
      {menu && menu.length}
    </>
  );
}

export default withLayout(CoursesPage);



