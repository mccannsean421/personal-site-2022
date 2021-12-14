import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Navbar.module.css';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          text: 'Home',
          path: '/',
        },
        {
          text: 'About',
          path: '/about',
        },
        {
          text: 'Posts',
          path: '/posts',
        },
        {
          text: 'Projects',
          path: '/projects',
        },
      ]
    };
  }

  render() {
    const items = this.state.items.map(({text, path}, index) =>
      <li key={index}>
        <Link href={path}>{ text }</Link>
      </li>
    );

    return (
      <nav className={styles.navbar} data-testid="navbar-element" >
        <ul>
          { items }
        </ul>
      </nav>
    );
  }
}

export default Navbar;
