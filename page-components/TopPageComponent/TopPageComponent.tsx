import { useEffect, useReducer } from 'react';
import { useReducedMotion } from 'framer-motion';
import { Product } from '@/widgets';
import {
  Advantages,
  HhDataCard,
  Htag,
  Sort,
  Tag,
} from '@/shared/ui';
import {
  ProductModel,
  SortEnum,
  TopLevelCategory,
  TopPageModel
} from '@/shared/types';
import { sortReducer } from './reducer';
import styles from './styles.module.scss';

interface TopPageComponentProps {
  firstCategory?: TopLevelCategory;
  page?: TopPageModel;
  products?: ProductModel[];
}

export const TopPageComponent = ({
  page,
  products,
  firstCategory
}: TopPageComponentProps): JSX.Element => {
  const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(
    sortReducer,
    { products: products || [], sort: SortEnum.Rating }
  );
  const shouldReduceMotion = useReducedMotion();

  const setSort = (sort: SortEnum) => {
    dispatchSort({ type: sort });
  };

  useEffect(() => {
    dispatchSort({ type: 'reset', initialState: products || [] });
  }, [products]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag='h1'>{page?.title}</Htag>
        {products && (
          <Tag
            color='grey'
            size='m'
            aria-label={products.length + 'элементов'}
          >
            {products.length}
          </Tag>
        )}
        <Sort sort={sort} setSort={setSort} />
      </div>
      <div role='list'>
        {sortedProducts && sortedProducts.map((p) => (
          <div key={p._id}>
            {p.title}
          </div>
        ))}
      </div>
      <div role='list'>
        {sortedProducts && sortedProducts.map(p => (
          <Product
            role='listitem'
            layout={shouldReduceMotion ? false : true}
            key={p._id}
            product={p}
          />
        ))}
      </div>
      <div className={styles.hhTitle}>
        <Htag tag='h2'>Вакансии - {page?.category}</Htag>
        <Tag color='red' size='m'>hh.ru</Tag>
      </div>

      {firstCategory == TopLevelCategory.Courses
        && page?.hh
        && <HhDataCard {...page.hh} />}
      {page?.advantages && page.advantages.length > 0 && (
        <>
          <Htag tag='h2'>Преимущества</Htag>
          <Advantages advantages={page.advantages} />
        </>
      )}
      {page?.seoText && (
        <div
          className={styles.seo}
          dangerouslySetInnerHTML={{ __html: page.seoText }}
        />
      )}
      <Htag tag='h2'>
        Получаемые навыки
      </Htag>
      {page?.tags.map(t => (
        <Tag key={t} color='primary'>
          {t}
        </Tag>
      ))}
    </div>
  );
};
