import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loadGames } from '../actions/gameAction'

function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadGames())
  })

  return <div>HOME</div>
}

export default Home
