"use client";
import {
  DetailedHTMLProps,
  HTMLAttributes,
  KeyboardEvent,
  useState
} from 'react';
import { useRouter } from 'next/navigation';
import cn from 'classnames';
import { Input } from '../Input';
import { Button } from '../Button';
import GlassIcon from './glass.svg';
import styles from './styles.module.scss';

interface SearchProps extends DetailedHTMLProps<
  HTMLAttributes<HTMLFormElement>, HTMLFormElement
> { }

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
  const [search, setSearch] = useState<string>('');
  const router = useRouter();

  const goToSearch = () => {
    router.push('/search');
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key == 'Enter') {
      goToSearch();
    }
  };

  return (
    <form className={cn(className, styles.search)} {...props} role="search">
      <Input
        className={styles.input}
        placeholder="Поиск..."
        value={search}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button
        variant="primary"
        className={styles.button}
        onClick={goToSearch}
        aria-label="Искать по сайту"
      >
        <GlassIcon />
      </Button>
    </form>
  );
};
