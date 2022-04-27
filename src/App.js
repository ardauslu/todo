import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Items from './Components/Items';
import { useState } from 'react';
import ItemDetail from './Components/ItemDetail';
function App() {

  const DUMMY_ITEMS = [
    {
      id: 'e1',
      title: 'Item 1',
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', 
      title: 'Item 2',
      date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Item 3',
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'Item 4',
      date: new Date(2021, 5, 12),
    },
  ];
  const [items, setItems] = useState(DUMMY_ITEMS);
  return (
    <div className="App">
   
    <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/dashboard/:id" element={<Items data={items}/>} />
        </Routes>
      </Router>
    </div>
    
    
  );
}

export default App;
