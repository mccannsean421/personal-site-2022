import React from 'react';
import styles from '../../styles/Navbar.module.css';
import NavLink from './NavLink';
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
        }
      ]
    };
  }

  render() {
    const items = this.state.items.map(({text, path}, index) =>
      <li key={index}>
        <NavLink text={text} path={path} />
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
