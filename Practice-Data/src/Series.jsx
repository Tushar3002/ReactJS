import React from 'react'
import seriesData from './api/seriesData.json'

function Series() {
  return (
    <div>
        <ul>
            {
                seriesData.map((val,idx)=>{
                    return(
                        <div style={{margin:"30px",border:"2px solid green",padding:"30px",borderRadius:"30px"}}>
                            <li key={idx}>
                            <div>
                                <img src={val.img_url} alt="" style={{width:"350px"}} />
                            </div>
                            <h2>Name : {val.name} </h2>
                            <h3>Rating : {val.rating}</h3>
                            <p>Description : {val.description} </p>
                            <p>Cast : {val.cast} </p>
                            <p>Genre : {val.genre} </p>
                            <a href={val.watch_url}>
                                <button style={{border:"2px solid blue",backgroundColor:"green",borderRadius:"30px"}}>Watch Now</button>
                            </a>
                        </li>
                        </div>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default Series