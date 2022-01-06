import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import NotFound from 'pages/not-found/not-found';
import Login from 'pages/login/login';
import Signup from 'pages/signup/signup';

function App() {
  return (
    <BrowserRouter basename="/short-vid">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/register" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
