import{BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import { useState } from 'react'

import './App.css'
import ReviewList from './components/ReviewList'
import EditReview from './components/EditReview'
import AddReview from './components/AddReview'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        
            <nav className='container mb-2 border'>
          <Link to="/" className='btn btn-primary m-2'>Home</Link>
          {/* <Link to="/edit" className='btn btn-success m-2'>EditReview</Link>
          <Link to="/delete" className='btn btn-danger m-2'>DeleteReview</Link>  */}
          <Link to="/add" className='btn btn-warning m-2'>AddReview</Link>
          </nav>
          
        <Routes>
          <Route path="/" element={<ReviewList/>}></Route>
          <Route path="/edit/:id" element={<EditReview/>}></Route>
         <Route path="/delete" element={<ReviewList/>}></Route> 
          <Route path="/add" element={<AddReview/>}></Route>

        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
