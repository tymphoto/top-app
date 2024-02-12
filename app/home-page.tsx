"use client";
import { withLayout } from '@/shared/layout';
import {
  Card,
  Divider,
  Htag,
  Paragraph
} from '@/shared/ui';
import styles from './styles.module.scss';

async function HomePage() {
  return (
    <main>
      <Card className={styles.card}>
        <Htag tag='h1'>
          Добро пожаловать в приложение Top-app!
        </Htag>
        <Divider />
        <Htag tag='h3'>
          С помощью этого приложения Вы сможете выбрать и сравнить различные обучающие курс.
        </Htag>
        <Paragraph>
          Переходите в интересующий Вас раздел и ознакомьтесь с ценами и отзывами на различные предложения.
        </Paragraph>
        <Paragraph>
          Также Вы можете оставить отзыв о курсе, которым уже воспользовались.
        </Paragraph>
      </Card>
    </main>
  );
}

export default withLayout(HomePage);



