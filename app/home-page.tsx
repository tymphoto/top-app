"use client";
import { useState } from 'react';
import { withLayout } from '@/layout';
import {
  Button,
  Htag,
  Paragraph,
  Rating,
  Tag,
  type MenuItem
} from '@/shared';

interface HomeWidgetProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory?: number;
}

async function HomePage({ menu }: HomeWidgetProps) {
  const [rating, setRating] = useState<number>(4);
  return (
    <main>
      <Htag tag='h1'>
        Home
      </Htag>
      <Button
        variant='primary'
        arrow='right'
      >
        CLICK
      </Button>
      <Button
        variant='ghost'
        arrow='down'
      >
        CLICK
      </Button>
      <Paragraph size='l'>
        Большой
      </Paragraph>
      <Paragraph size='m'>
        Средний
      </Paragraph>
      <Paragraph size='s'>
        маленький
      </Paragraph>
      <Tag color='red' href='http://hh.ru'>
        hh.ru
      </Tag>
      <Rating
        rating={rating}
        setRating={setRating}
        isEditable
      />
      <ul>
        {menu.map((el) => (
          <li key={el._id.secondCategory}>
            {el._id.secondCategory}
          </li>
        ))}
      </ul>
    </main>
  );
}

export default withLayout(HomePage);



