import axios from "axios";
import { firstLevelMenu } from "@/helpers";
import { MenuItem, TopLevelCategory } from "@/shared/types";
import CoursesPage from "./courses-page";
import { notFound } from "next/navigation";
import { ParsedUrlQuery } from "querystring";
import { GetStaticPropsContext } from "next";

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

    return {
      menu,
      firstCategory: firstCategoryItem?.id,
    };
  } catch {
    notFound();
  }
};

export async function generateStaticParams() {
  return firstLevelMenu.map((el) => ({ type: el.route }));
}

export default async function Type({
  params
}: {
  params: { alias: string }
}) {
  const data = await getPage({ params });
  return (
    <main>
      <CoursesPage menu={data?.menu || []} firstCategory={TopLevelCategory.Courses} />
    </main>
  );
}
