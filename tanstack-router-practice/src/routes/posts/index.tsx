import { useQuery } from '@tanstack/react-query'
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/posts/')({
  component: RouteComponent,
})

function RouteComponent() {
    const {data:posts}=useQuery({
        queryKey:['posts'],
        queryFn:async()=>{
            const res=await fetch('https://jsonplaceholder.typicode.com/posts')
            const data=await res.json()
            console.log(data)
            return data as Post[]
        },
    })
  return (
    <div>
        {posts?.map((post) => (
  <PostCard key={post.id} post={post} />
))}
    </div>
  )

  function PostCard({post}:{post:Post}){
    const {id,body,title}=post

    return(
        <Link to={'/posts/$postId'} params={{postId:String(id)}}>
            <div>
            <span>ID : {id}</span>
            <span>Title : {title}</span>
            <span>Body : {body}</span>
            </div>
        </Link>
    )
  }
}

type Post={
    userId:number,
    id:number,
    body:string,
    title:string
}
