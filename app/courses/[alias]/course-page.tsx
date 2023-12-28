"use client";
import { withLayout } from '@/layout';
import {
  type MenuItem,
  type TopPageModel,
  type ProductModel,
} from '@/shared';

interface CoursePagetProps extends Record<string, unknown> {
  menu?: MenuItem[];
  firstCategory?: number;
  page?: TopPageModel;
  products?: ProductModel[]
}

async function CoursePage({ products }: CoursePagetProps) {
  return (
    <>
      {products && products.length}
    </>
  );
}

export default withLayout(CoursePage);



