import {
  DetailedHTMLProps,
  ForwardedRef,
  HTMLAttributes,
  forwardRef,
  useRef,
  useState
} from 'react';
import { motion } from 'framer-motion';
import cn from 'classnames';
import Image from 'next/image';
import { declOfNum, priceRu } from '@/helpers/price';
import { ReviewForm } from '@/features';
import { Review } from '@/entities';
import {
  Tag,
  Rating,
  Divider,
  Button,
  Card
} from '@/shared/ui';
import { ProductModel } from '@/shared/types';
import styles from './styles.module.scss';

interface ProductProps extends DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>, HTMLDivElement
> {
  product: ProductModel;
}

export const Product = motion(forwardRef(
  ({ product, className, ...props }: ProductProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);
    const reviewRef = useRef<HTMLDivElement>(null);

    const variants = {
      visible: { opacity: 1, height: 'auto' },
      hidden: { opacity: 0, height: 0 }
    };

    const scrollToReview = () => {
      setIsReviewOpened(true);
      reviewRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      reviewRef.current?.focus();
    };

    return (
      <div
        className={className}
        {...props}
        ref={ref}
      >
        <Card className={styles.product}>
          <div className={styles.logo}>
            <Image
              src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
              alt={product.title}
              width={70}
              height={70}
            />
          </div>
          <div className={styles.title}>
            {product.title}
          </div>
          <div className={styles.price}>
            <span>
              {priceRu(product.price)}
            </span>
            {product.oldPrice && (
              <Tag className={styles.oldPrice} color="green">
                <span className="visualyHidden">
                  скидка
                </span>
                {' '}
                {priceRu(product.price - product.oldPrice)}
              </Tag>
            )}
          </div>
          <div className={styles.credit}>
            {priceRu(product.credit)}/<span className={styles.month}>мес</span>
          </div>
          <div className={styles.rating}>
            <span className="visualyHidden">
              {`рейтинг ${Number(product.reviewAvg).toFixed(2) ?? Number(product.initialRating).toFixed(2)}`}
            </span>
            <Rating rating={product.reviewAvg ?? product.initialRating} />
          </div>
          <div className={styles.tags}>
            {product.categories.map((category) => (
              <Tag
                key={category}
                className={styles.category}
                color='ghost'
              >
                {category}
              </Tag>
            ))}
          </div>
          <div
            className={styles.priceTitle}
            aria-hidden={true}
          >
            цена
          </div>
          <div
            className={styles.creditTitle}
            aria-hidden={true}
          >
            кредит
          </div>
          <div className={styles.rateTitle}>
            <a
              href="#ref"
              onClick={scrollToReview}
            >
              {product.reviewCount} {declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}
            </a>
          </div>
          <Divider className={styles.hr} />
          <div className={styles.description}>
            {product.description}
          </div>
          <div className={styles.feature}>
            {product.characteristics.map((item) => (
              <div
                key={item.name}
                className={styles.characteristics}
              >
                <span className={styles.characteristicsName}>{item.name}</span>
                <span className={styles.characteristicsDots}></span>
                <span className={styles.characteristicsValue}>{item.value}</span>
              </div>
            ))}
          </div>
          <div className={styles.advBlock}>
            {product.advantages && (
              <div className={styles.advantages}>
                <div className={styles.advTitle}>Преимущества</div>
                <div>{product.advantages}</div>
              </div>
            )}
            {product.disadvantages && (
              <div className={styles.disadvantages}>
                <div className={styles.advTitle}>Недостатки</div>
                <div>{product.disadvantages}</div>
              </div>
            )}
          </div>
          <Divider className={cn(styles.hr, styles.hr2)} />
          <div className={styles.actions}>
            <Button variant='primary'>
              Узнать подробнее
            </Button>
            <Button
              variant='ghost'
              arrow={isReviewOpened ? 'down' : 'right'}
              className={styles.reviewButton}
              onClick={() => setIsReviewOpened(!isReviewOpened)}
              aria-expanded={isReviewOpened}
            >
              Читать отзывы
            </Button>
          </div>
        </Card>
        <motion.div
          animate={isReviewOpened ? 'visible' : 'hidden'}
          variants={variants}
          initial='hidden'
        >
          <Card
            color='blue'
            className={styles.reviews}
            ref={reviewRef}
            tabIndex={isReviewOpened ? 0 : -1}
          >
            {product.reviews.map(review => (
              <div key={review._id}>
                <Review review={review} />
                <Divider />
              </div>
            ))}
            <ReviewForm
              productId={product._id}
              isOpened={isReviewOpened} />
          </Card>
        </motion.div>
      </div>
    );
  }));
