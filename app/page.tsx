import axios from 'axios';
import { type MenuItem } from '@/shared';
import HomePage from './home-page';

const getMenu = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory,
  });
  return {
    menu,
    firstCategory,
  };
};

export default async function Home() {
  const { menu } = await getMenu();
  return (
    <main>
      <HomePage menu={menu} />
    </main>
  );
}
