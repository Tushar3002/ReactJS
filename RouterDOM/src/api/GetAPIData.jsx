export const getMoviesData=async()=>{
    try {
        const res=await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=1c12799f&s=interstellar&page=1")
        const data=res.json()
        return data
    } catch (error) {
        console.log(error);
        
    }
}