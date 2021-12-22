import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import { getAllPosts } from '../api'

export default function Posts({allPosts}) {
  return (
    <div>
      <h1 data-testid="custom-element">Posts page</h1>
      <p>Sometimes I enjoy writing things</p>
      <ul>
        {
          allPosts.map((post, index) => {
            return <li key={index}>{post.title}</li>
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
