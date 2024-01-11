import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Home';
import MyFrom from "./MyForm";
import FormEntry from "./EntryTable";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<MyFrom />} />
          <Route path="/table" element={<FormEntry />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
