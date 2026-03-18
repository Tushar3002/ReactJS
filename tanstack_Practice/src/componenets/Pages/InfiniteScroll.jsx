import React from 'react'
import {useInfiniteQuery} from '@tanstack/react-query'
import { fetchUsers } from '../API/api'
import { useEffect } from 'react'
import {useInView} from 'react-intersection-observer'
function InfiniteScroll() {

  const {data,hasNextPage,fetchNextPage,isFetchingNextPage}=useInfiniteQuery({
    queryKey:['users'],
    queryFn:fetchUsers,
    getNextPageParam:(lastPages,allPages)=>{
      return lastPages.length===10?allPages.length + 1 : undefined
    }
  })

  console.log(data);

  // const handleScroll=()=>{
  //   const bottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight -1

  //   if(bottom && hasNextPage){
  //     fetchNextPage()
  //   }
  // }

  const [ref,inView]=useInView({
    threshold:1
  })

  // useEffect(()=>{
  //   window.addEventListener('scroll',handleScroll)
  //   return ()=>window.removeEventListener('scroll',handleScroll)
  // },[hasNextPage])
  
  useEffect(()=>{
    if(inView&&hasNextPage){
      fetchNextPage();
    }
  },[hasNextPage,fetchNextPage,inView])

  return (
    <div>
       <h1>Infinite Scroll with React Query v5</h1>

      {data?.pages?.map((page, index) => (
        <ul key={index}>
          {page.map((user) => (
            <li
              key={user.id}
              style={{ padding: "10px", border: "1px solid #ccc" }}
            >
              <p>{user.login}</p>
              <img
                src={user.avatar_url}
                alt={user.login}
                width={50}
                height={50}
              />
            </li>
          ))}
        </ul>
      ))}
      <div ref={ref}>{isFetchingNextPage && <div>Loading ...</div>}</div>
    </div>
  )
}

export default InfiniteScroll