import logo from './logo.svg';
import './App.css';
import {BrowserRouter , link ,Route ,Routes} from "react-router-dom";
import Movie from './components/Movie';
import NavBar from './components/NavBar';
import MovieRoute from './components/MovieRoute';
function App() {
 

  return (
   <div className='app'>
    <NavBar />

 <BrowserRouter >
     <Routes>
      <Route exact path="/" element={<Movie />} />
      <Route path="/:id" element={<MovieRoute />} />
     </Routes>
 </BrowserRouter>

   
   </div>
  );
}

export default App;
