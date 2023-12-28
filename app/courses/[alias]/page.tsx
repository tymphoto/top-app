import axios from 'axios';
import { GetStaticPropsContext } from 'next';
import { type TopPageModel, type MenuItem, ProductModel } from '@/shared';
import CoursePage from './course-page';
import { ParsedUrlQuery } from 'querystring';

const firstCategory = 0;

const getPage = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true,
    };
  }
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory,
  });
  const { data: page } = await axios.get<TopPageModel>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + params?.alias);
  const { data: products } = await axios.post<ProductModel[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find', {
    category: page.category,
    limit: 10,
  });
  return {
    menu,
    firstCategory,
    page,
    products,
  };
};

export async function generateStaticParams() {
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory,
  });

  return menu.flatMap((el) => el.pages.map((page) => ({
    alias: page.alias,
  })));
}

export default async function Home(
  { params }: { params: { alias: string } }
) {
  const { menu, page, products } = await getPage({ params });
  return (
    <main>
      <CoursePage menu={menu} page={page} products={products} />
    </main>
  );
}
