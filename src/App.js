import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Items from './Components/Items';
function App() {
  return (
    <div className="App">
   
    <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/dashboard/:id" element={<Items/>} />
        </Routes>
      </Router>
    </div>
    
    
  );
}

export default App;
