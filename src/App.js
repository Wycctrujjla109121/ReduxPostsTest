import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header, Post, Slider } from './modules';

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Slider />} />
        <Route path='/post'>
          <Route index element={<Post />} />
          <Route path=':id' element={<Post />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
