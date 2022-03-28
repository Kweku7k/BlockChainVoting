import './App.css';
import { Routes, Route } from "react-router-dom";
import Categoriespage from './Pages/CategoriesPage';
import Homepage from './Pages/HomePage';
import Selectedcategory from './Pages/SelectCategory';
import Candidates from './Pages/Candidates';
import Selectedcandidate from './Pages/SelectedCandidate';
import LandingPage from './Pages/LandingPage2';
import LearningPage from './Pages/LearningPage';
import AdminNominationPage from './Pages/AdminNominationPage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/admin-nomination' element={<AdminNominationPage />} />
        <Route path='/home' element={<Homepage />} />
        <Route path='/:election' element={<Categoriespage />} />
        <Route path='/:election/:cateogory' element={<Selectedcategory/>} />
        <Route path='/candidates' element={<Candidates />} />
        <Route path='/selected-candidate' element={<Selectedcandidate/>} />
      </Routes>
    </div>
  );
}

export default App;
