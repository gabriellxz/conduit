import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'

function App() {
  return (
    <div className='bg-dark h-screen'>
      <Header/>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default App
