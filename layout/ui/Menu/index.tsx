import { useContext } from 'react';
import { AppContext } from '@/context';
// import styles from './styles.module.scss';

export const Menu = (): JSX.Element => {
  const { 
    menu,
    // setMenu,
    // firstCategory
  } = useContext(AppContext);

  return (
    <div>
      {menu.map((el) => (
        <li key={el._id.secondCategory}>
          {el._id.secondCategory}
        </li>
      ))}
    </div>
  );
};
