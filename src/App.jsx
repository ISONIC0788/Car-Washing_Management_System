
import './App.css';
import BookingPage from './pages/BookingPage';
import DashboardPage from './pages/DashboardPage';
import HomePage from './pages/HomePage';
import NoPages from './pages/NoPages';
import Header from './components/Header';
import {BrowserRouter , Routes , Route } from 'react-router-dom';
import Card3D from './components/Card3D';
import DataTable from './pages/DataTable';


function App() {
  return (
    <>
    <div className='bg-white  dark:bg-gray-800'>
      
    <BrowserRouter>
    
      <Routes>
        <Route index element={<HomePage/>}  />
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/dashboard' element={<DashboardPage/>}/>
        <Route path='/booking' element={<BookingPage/>}/>
       <Route path='/data' element={<DataTable/>}/>
        <Route  path='*' element={<NoPages/>}/>
        
      </Routes>
     </BrowserRouter>
    </div>
     
    </>
  )
}

export default App
