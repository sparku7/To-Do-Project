import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './pages/Navbar';
import HomePage from './pages/HomePage'
import Tasks from './pages/Tasks'
import AddTasks from './pages/AddTasks';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/Tasks' element={<Tasks />} />
          <Route path='/AddTasks' element={<AddTasks />} />
        </Routes>       
      </BrowserRouter>

    </div>
  );
}

export default App;
