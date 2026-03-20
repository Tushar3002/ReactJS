import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/posts/$postId')({
  component: RouteComponent,
})

function RouteComponent() {
    const {postId}=Route.useParams()
    const {data}=useQuery({ //see useLoader 
        queryKey:['posts',postId],
        queryFn:()=>fetchPosts(postId)
    })
  return <div>{JSON.stringify(data)}</div>
}


const fetchPosts=async(postId:string)=>{
    const res= await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    const data=await res.json()
    return data
}   