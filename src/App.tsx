import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className='h-screen'>
      <Header />
      <main className='pt-32.5 p-5'>
        <Outlet />
      </main>
      <Footer/>
    </div>
  )
}

export default App
