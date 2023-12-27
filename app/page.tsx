"use client";
import { Button, Htag, Paragraph, Rating, Tag } from '@/shared';
import styles from './page.module.scss';
import { useState } from 'react';

export default function Home() {
  const [rating, setRating] = useState<number>(4)
  return (
    <main className={styles.main}>
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
