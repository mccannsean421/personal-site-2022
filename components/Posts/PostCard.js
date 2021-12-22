import styles from './styles/PostCard.module.css';
import Link from 'next/link';

export default function PostCard(props) {
    return (
      <div className={styles.postCard}>
        <Link href={`/posts/${props.post.slug}`}>
          {props.post.title}
        </Link>
      </div>
    )
}
