import Link from 'next/link';
import { useRouter } from 'next/router';

const NavLink = (props) => {
  const router = useRouter();
  return (
    <Link href={props.path}>
      <a className={router.pathname == "/" ? "active-link" : ""}>
        { props.text }
      </a>
    </Link>
  );
};

export default NavLink;
