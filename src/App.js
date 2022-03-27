import './App.css';
import { Header } from './components/header/Header';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import Feedback from './components/feedback/feedback';
import HotelPage from './components/hotel_page/hotel_page';

function App() {
  return (
    <>
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}/>
        <Route path="layout" element={<Layout/>}/> 
        <Route path="/feedback" element={<Feedback/>}/>
        <Route path="/hotel_page" element={<HotelPage/>}/>
      </Routes>
    </div>
    </>
  );
}

export default App;
