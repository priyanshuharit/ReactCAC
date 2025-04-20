import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Changer from './components/Changer'

function App() {
 

  return (
    <>
     
     <div className='flex bg-transparent '>
     
      <Changer color='text-green-400' name ='green'/>
      <Changer color='text-blue-400' name ='blue'/>
      <Changer color='text-black-400' name ='black'/>
      <Changer color='text-orange-400' name ='orange'/>
      <Changer color='text-lavender-400' name ='lavender'/>
      <Changer color='text-purple-400' name ='purple'/>
      <Changer color='text-white-400' name ='white'/>

     </div>

    </>
  )
}

export default App
