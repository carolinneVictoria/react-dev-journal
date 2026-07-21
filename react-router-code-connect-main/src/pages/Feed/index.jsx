import { AppLayout } from "../../layouts/App"
import { CardPost } from "../../components/CardPost"
import styles from './feed.module.css'
import { useEffect, useState } from "react"
import { http } from "../../api"

export const Feed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        http.get('blog-posts')
            .then(response => setPosts(response.data))
    }, [])

    return (
        <AppLayout>
            <main className={styles.grid}>
                {posts.map(post => <CardPost key={post.slug} post={post} />)}
            </main>
        </AppLayout>
    )
}