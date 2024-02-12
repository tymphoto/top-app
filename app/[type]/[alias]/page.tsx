import axios from 'axios';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { notFound } from 'next/navigation';
import { ParsedUrlQuery } from 'querystring';
import {
  type TopPageModel,
  type MenuItem,
  ProductModel,
  TopLevelCategory
} from '@/shared/types';
import { firstLevelMenu } from '@/helpers';
import CoursePage from './course-page';

const getPage = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return notFound();
  }

  const firstCategoryItem = firstLevelMenu.find((el) => el.route === params.type);

  if (!params.type) {
    return notFound();
  }

  try {
    const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
      firstCategory: firstCategoryItem?.id,
    });
    if (menu.length === 0) {
      return notFound();
    }
    const { data: page } = await axios.get<TopPageModel>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + params?.alias);
    const { data: products } = await axios.post<ProductModel[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find', {
      category: page.category,
      limit: 10,
    });

    return {
      menu,
      firstCategory: firstCategoryItem?.id,
      page,
      products,
    };
  } catch {
    notFound();
  }
};

export async function generateStaticParams() {
  let paths: { type: string; alias: string }[] = [];
  for (const m of firstLevelMenu) {
    const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
      firstCategory: m.id,
    });

    paths = paths.concat(menu.flatMap((el) => el.pages.map((page) => ({
      type: page.category,
      alias: page.alias,
    }))));
  }

  return paths;
}

export default async function Alias({
  params
}: {
  params: { alias: string }
}) {
  const { menu, page, products } = await getPage({ params });
  return (
    <>
      <Head>
        <title>{page?.metaTitle}</title>
        <meta name="description" content={page?.metaDescription} />
        <meta property="og:title" content={page?.metaTitle} />
        <meta property="og:description" content={page?.metaDescription} />
        <meta property="og:type" content="article" />
      </Head>
      <main>
        <CoursePage menu={menu || []} page={page} products={products} firstCategory={TopLevelCategory.Courses} />
      </main>
    </>
  );
}
