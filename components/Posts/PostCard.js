import styles from './styles/PostCard.module.css';
import Link from 'next/link';

export default function PostCard({post}) {
  const date = new Date(post.date);
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const imgSrc = '';

  return (
    <div className={styles.postCard}>

      { imgSrc ? <img src={imgSrc} alt="" /> : '' }
      <div>
        <Link href={`/posts/${post.slug}`}>
          <h3 className="text-m">{post.title}</h3>
        </Link>
        <p>{ post.excerpt }</p>
        <time dateTime={post.date}>{date.toLocaleDateString('EN-gb', options)}</time>
      </div>
    </div>
  )
}
