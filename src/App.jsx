import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import Web from './components/WebPage/WebPage.jsx';
import Dashboard from "./components/Verification/Verify.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Web />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard*" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
