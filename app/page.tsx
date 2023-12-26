import { Button, Htag } from '@/shared'
import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <Htag tag='h1'>
        Home
      </Htag>
      <Button
        variant='primary'
      >
        CLICK
      </Button>
      <Button
        variant='ghost'
      >
        CLICK
      </Button>
    </main>
  )
}
