import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadGames } from '../actions/gameAction'
import Game from './../components/Game'
import styled from 'styled-components'
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import GameDetail from '../components/GameDetail'
import { useLocation } from 'react-router-dom'

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`

function Home() {
  const location = useLocation()
  const pathId = location.pathname.split('/')[2]

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadGames())
  }, [dispatch])

  const { popular, newGames, upcoming, isLoading, searched } = useSelector(
    (state) => state.games
  )
  return (
    <>
      {!isLoading && (
        <GameList>
          <AnimateSharedLayout type="crossfade">
            <AnimatePresence>
              {pathId && <GameDetail pathId={pathId} />}
            </AnimatePresence>
            {searched.length ? (
              <div className="searched">
                <h2>Searched Games</h2>
                <Games>
                  {searched.map((game) => (
                    <Game
                      name={game.name}
                      released={game.released}
                      id={game.id}
                      key={game.id}
                      image={game.background_image}
                    />
                  ))}
                </Games>
              </div>
            ) : (
              ''
            )}
            <h2>Upcoming Games</h2>
            <Games>
              {upcoming.map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  key={game.id}
                  image={game.background_image}
                />
              ))}
            </Games>
            <h2>Popular Games</h2>
            <Games>
              {popular.map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  key={game.id}
                  image={game.background_image}
                />
              ))}
            </Games>
            <h2>New Games</h2>
            <Games>
              {newGames.map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  key={game.id}
                  image={game.background_image}
                />
              ))}
            </Games>
          </AnimateSharedLayout>
        </GameList>
      )}
    </>
  )
}

export default Home
