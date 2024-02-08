import axios from 'axios';
import { MenuItem } from '@/shared/types';
import HomePage from './home-page';

const firstCategory = 0;

const getMenu = async () => {
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
      <HomePage menu={menu} firstCategory={firstCategory}/>
    </main>
  );
}
