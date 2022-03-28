import './App.css';
import { Routes, Route } from "react-router-dom";
import Categoriespage from './Pages/CategoriesPage';
import Homepage from './Pages/HomePage';
import Selectedcategory from './Pages/SelectCategory';
import Candidates from './Pages/Candidates';
import Selectedcandidate from './Pages/SelectedCandidate';
import LandingPage from './Pages/LandingPage2';
import LearningPage from './Pages/LearningPage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<Homepage />} />
        <Route path='/category' element={<Categoriespage />} />
        <Route path='/select-category' element={<Selectedcategory/>} />
        <Route path='/candidates' element={<Candidates />} />
        <Route path='/selected-candidate' element={<Selectedcandidate/>} />
      </Routes>
    </div>
  );
}

export default App;
