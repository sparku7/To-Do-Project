import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import add_task from './pages/add_task'
import display_task from './pages/display_task'
import Navbar from './pages/navbar';
import HomePage from './pages/home';
import ThemedComponent from "./component/ThemedComponent";
import { ThemeProvider } from "./pages/ThemeContext";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/addtask' element={<add_task />} />
        <Route path='/displaytasks' element={<display_task />} />          
        </Routes>
      </BrowserRouter>
      <div className="App">
      <ThemeProvider>
        <ThemedComponent />
      </ThemeProvider>
    </div>
    </div>);
}

export default App;
