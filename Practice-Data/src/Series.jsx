import React from 'react'
import seriesData from './api/seriesData.json'
import SeriesCard from './SeriesCard'
import './index.css'
import './App.css'

function Series() {
  return (
    <div className="series-container">
      <ul className="card-grid">
        {seriesData.map((val, idx) => (
          <SeriesCard key={idx} val={val} />
        ))}
      </ul>
    </div>
  );
}

export default Series