import Head from 'next/head';
import styles from '../styles/About.module.css';

const Home = () => (
  <div  className={`container main ${styles.aboutPage}`}>
    <h1 data-testid="custom-element">About</h1>

    <p className="text-s">Hi, I'm Cormac. Nice to meet you.</p>

    {/*  Image here? */}

    <h2 className="text-m">Who am I?</h2>

    <p className="text-s">
      I'm a web developer from Dublin Ireland. I've been working been working primarily
      as a frontend developer since January 2016. Since then I have worked in a variety of industries,
    </p>

    <h2 className="text-m">Outside of work</h2>

    <p className="text-s">
      During my down time I try to get away from the computer desk and spend as much
      time as I can exploring my hobbies. Right now I'm learning photography so I've mainly been
      going on nature walks to practice that.

      If the weather isn't on my side, I'm usually at home either playing a video game or watching something on Netflix
      (right now season 2 of The Witcher).
    </p>
  </div>
)

export default Home;
