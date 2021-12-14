import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home = () => (
  <div  className={styles.home}>
    <h1 data-testid="custom-element">About page</h1>
  </div>
)

export default Home;
