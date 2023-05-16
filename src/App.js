
import './App.css';
// eslint-disable-next-line
import AddBlog from './components/AddBlog';
// eslint-disable-next-line
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar/> 
     {/* <HomePage/>*/}
     {/*<AddBlog/>*/}
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/add' element={<AddBlog/>}/>
      </Routes>
    </div>
  );
}

export default App;
