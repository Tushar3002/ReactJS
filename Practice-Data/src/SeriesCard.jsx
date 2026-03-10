import React from "react";

function SeriesCard({ val }) {
  return (
    <li className="card">
      <div className="card-image">
        <img src={val.img_url} alt={val.name} />
      </div>

      <div className="card-content">
        <h2>{val.name}</h2>
        <h3>⭐ {val.rating}</h3>
        <p>{val.description}</p>
        <p><strong>Cast:</strong> {val.cast.join(", ")}</p>
        <p><strong>Genre:</strong> {val.genre.join(", ")}</p>
        
        <a href={val.watch_url} target="_blank" rel="noreferrer">
          <button className="watch-btn">Watch Now</button>
        </a>
        
      </div>
    </li>
  );
}

export default SeriesCard;