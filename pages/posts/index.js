import Head from 'next/head';
import styles from '../../styles/Post.module.css';
import { getAllPosts } from '../api';
import PostCard from '@/components/Posts/PostCard';

export default function Posts({allPosts}) {
  return (
    <div className="container main">
      <h1 data-testid="custom-element" className="text-xl">Sometimes I write things</h1>
      <ul className={styles.postsList}>
        {
          allPosts.map((post, index) => {
            return <li key={index}><PostCard post={post} /></li>
          })
        }
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
