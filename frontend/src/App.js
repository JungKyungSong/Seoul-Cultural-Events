import './App.css';
import { Route,  BrowserRouter, Routes } from 'react-router-dom';
import Home from './components/Home';
import Recommend from './components/Recommend';
import Congestion from './components/Congestion';
import Detail from './components/Detail';
import Area from './components/Area';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/Recommend' element={<Recommend/>}/>
              <Route path='/Congestion' element={<Congestion/>}/>
              <Route path='/Detail/:id' element={<Detail/>}/>
              <Route path='/Area/:id' element={<Area/>}/>
              <Route path='*' element={"Not found"}/>
            </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
