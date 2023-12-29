"use client";
import { withLayout } from '@/layout';
import {
  type MenuItem,
  type TopPageModel,
  type ProductModel,
  TopLevelCategory,
} from '@/shared';

interface CoursePageProps extends Record<string, unknown> {
  menu?: MenuItem[];
  firstCategory?: TopLevelCategory;
  page?: TopPageModel;
  products?: ProductModel[]
}

async function CoursePage({ products }: CoursePageProps) {
  return (
    <>
      {products && products.length}
    </>
  );
}

export default withLayout(CoursePage);



