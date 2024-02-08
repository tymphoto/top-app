"use client";
import { withLayout } from '@/layout';
import { TopPageComponent } from '@/page-components';
import {
  type MenuItem,
  type TopPageModel,
  type ProductModel,
  TopLevelCategory,
} from '@/shared/types';

interface CoursePageProps extends Record<string, unknown> {
  menu?: MenuItem[];
  firstCategory?: TopLevelCategory;
  page?: TopPageModel;
  products?: ProductModel[];
}

async function CoursePage({ firstCategory, page, products }: CoursePageProps) {
  return (
    <TopPageComponent
      firstCategory={firstCategory}
      page={page}
      products={products}
    />
  );
}

export default withLayout(CoursePage);



