import styles from '../../styles/Footer.module.css';

const Footer = () => {
  const links = [
    {
      href: 'https://github.com/mccannsean421',
      text: 'Github',
      rel: 'nofollow'
    },
    {
      href: 'https://www.linkedin.com/in/cormac-mccann-70052283/',
      text: 'LinkedIn',
      rel: 'nofollow'
    }
  ];

  return (
    <footer className={styles.footer}>
      <div>&copy; 2021 Cormac McCann</div>
      <div>
        <ul>
          {
            links.map((link) => {
              return <li><a href={link.href} target="_blank" rel={link.rel}>{link.text}</a></li>
            })
          }
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
