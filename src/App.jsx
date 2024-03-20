import { useState } from 'react'
import './App.css'
import NavigationBar from './components/NavigationBar'
import DashBorad from './components/DashBorad'

function App() {
  

  return (
    <>
      <div className='flex'>
        <NavigationBar/>
        <main>
          <DashBorad/>
        </main>
      </div>
      
    </>
  )
}

export default App
