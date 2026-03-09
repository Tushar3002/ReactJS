import React from 'react'
import Movie from './pages/Movie'
import { getPost } from './api/PostApi'
import { useEffect } from 'react'
import Posts from './components/Posts'

function App() {

  return (
    <div>
      <Posts/>
    </div>
  )
}

export default App