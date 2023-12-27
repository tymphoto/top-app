"use client";
import { withLayout } from '@/layout';
import { Button, Htag, Paragraph, Rating, Tag } from '@/shared';
import { useState } from 'react';

function Home() {
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
    </main>
  );
}

export default withLayout(Home);
