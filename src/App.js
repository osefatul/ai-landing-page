
import './App.css';
import Main from './components/main/Main';
import { Routes, Route } from "react-router-dom";
import Categories from './pages/categories/Categories';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path='/categories' element={<Categories/>}> </Route>
      </Routes>
    </div>
  );
}

export default App;
