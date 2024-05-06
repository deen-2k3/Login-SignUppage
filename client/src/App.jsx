import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Signup.jsx'; // Corrected file extension
import Register from './Register.jsx'; // Corrected import statement
import Home from './Home.jsx';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Signup />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
