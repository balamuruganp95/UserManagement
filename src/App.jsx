import './App.css'
import {BrowserRouter , Routes, Route} from "react-router-dom";
import Login from './pages/Login/Login'
import ForgetPassword from './pages/Forget-Password/ForgetPassword';


function App() {

  return (
    <>
      <section id="center">
        
        <BrowserRouter>

          <Routes>

              <Route path="/" element={<Login />} />

              <Route path="/forget-password" element={<ForgetPassword />} />
              
          </Routes>
        
        
        </BrowserRouter>
        
      </section>     
    </>
  )
}

export default App
