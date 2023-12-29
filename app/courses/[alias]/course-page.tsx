"use client";
import { withLayout } from '@/layout';
import {
  type MenuItem,
  type TopPageModel,
  type ProductModel,
} from '@/shared';

interface CoursePageProps extends Record<string, unknown> {
  menu?: MenuItem[];
  firstCategory?: number;
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



