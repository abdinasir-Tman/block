
import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
function App() {
  return (
    <div className='mt-[7rem]'>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default App