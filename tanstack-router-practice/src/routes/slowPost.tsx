import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/slowPost")({
    
  component: RouteComponent,
  loader:fetchSlowPosts,
});

function RouteComponent() {
    const data=Route.useLoaderData()
//   const { data, isPending } = useQuery({
//     //see useLoader
//     queryKey: ["slowPosts"],
//     queryFn: fetchSlowPosts,
//   });
//   return isPending ? <h1>Pending....</h1> : <div>{JSON.stringify(data)}</div>;

    return <div>{JSON.stringify(data)}</div>
}

async function fetchSlowPosts() {
  return new Promise((resolve) => {
    setTimeout(async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/`,
        );
        const data = await res.json();
        resolve(data)
        console.log(data);
        
    },1000);
  });
};
