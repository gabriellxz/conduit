import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'

function App() {
  return (
    <div className='bg-dark h-screen'>
      <Header/>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default App
