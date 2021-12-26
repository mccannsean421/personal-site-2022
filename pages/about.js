import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home = () => (
  <div  className="container main">
    <h1 data-testid="custom-element">About</h1>

    <p>Hi, I'm Cormac. Nice to meet you.</p>

    {/*  Image here? */}

    <h2 className="text-m">Who am I?</h2>

    <p className="text-s">
      I'm a web developer from Dublin Ireland. I've been working been working primarily
      as a frontend developer since January 2016.
    </p>
  </div>
)

export default Home;
