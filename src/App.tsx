import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'

function App() {
  return (
    <div className='h-screen'>
      <Header/>
      <main className='pt-32.5 p-5'>
        <Outlet/>
      </main>
    </div>
  )
}

export default App
