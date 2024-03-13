
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './Components/AddUser';
import Home from './Components/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/adduser' element={<AddUser />} />
          <Route path='/adduser/:id' element={<AddUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
