import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './styles/NavLink.module.css';

const NavLink = (props) => {
  const router = useRouter();
  console.log(styles.active);
  return (
    <Link href={props.path}>
      <a className={ router.pathname === props.path ? styles.active : ""} >
        { props.text }
      </a>
    </Link>
  );
};

export default NavLink;
