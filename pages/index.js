import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { HeaderMarketPlace } from '../devlink/HeaderMarketPlace';

export default function Home() {
  return (
    <div className={styles.container}>
      <HeaderMarketPlace/>
    </div>
  );
}
