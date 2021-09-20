import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import PostsList from '../PostsList/PostsList'

export default function Home() {
  const { darkMode } = useContext(ThemeContext)

  return (

  <div className='Home'>
    <h1 className={darkMode ? "text-white-50" : ""}>Posts by <em>Andrei</em></h1>

    <PostsList />
  </div>
  )
}