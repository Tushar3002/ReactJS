export const getMoviesDetails=async({params})=>{    //here as this is A function 
    const id=params.movieId
    try {
        const res=await fetch(`https://www.omdbapi.com/?i=${id}&apikey=1c12799f`)
        const data=res.json()
        return data
    } catch (error) {
        console.log(error);
        
    }
}