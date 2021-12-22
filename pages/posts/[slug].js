// Next by default uses a react hook called SWR
// Reference blog post: https://nextjs.org/blog/markdown
import { getPostBySlug, getAllPosts } from 'pages/api';
import markdownToHtml from 'lib/markdownToHTML';
import styles from '@/styles/post.module.css';

export default function Post({post}) {
  const date = new Date(post.date);
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  return (
    <div className="container main">
      <article className={styles.post}>
        <h1 className="text-xl">{post.title}</h1>
        <time datetime={post.date}>{date.toLocaleDateString('EN-gb', options)}</time>
        <div dangerouslySetInnerHTML={{ __html: post.content }}/>
      </article>
    </div>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
