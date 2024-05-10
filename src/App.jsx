import { Outlet } from 'react-router-dom'
import './App.css'
import FlightForm from './components/FlightForm'
import Header from './components/Header'

function App() {


  return (
    <div className='container md:px-14 max-w-screen-2xl mx-auto'>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  )
}

export default App
