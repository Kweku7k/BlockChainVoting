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
import SubCategoriespage from './Pages/SubCategoriesPage';
import NewElection from './Pages/NewElection';
import NewElectionPage from './Pages/NewElectionPage';
import NewCategoryPage from './Pages/NewCategoryPage';
import NewElectionCategory from './Pages/NewElectionCategory';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/admin-nomination' element={<AdminNominationPage />} />
        <Route path='/home' element={<Homepage />} />
        <Route path='/:election' element={<Categoriespage />} />
        <Route path='/new' element={<NewElectionPage/>} />
        <Route path='/new-category' element={<NewElectionCategory/>} />
        <Route path='/newcategory' element={<NewCategoryPage />} />
        <Route exact path='/:election/:category' element={<Selectedcategory/>} />
        <Route exact path='/:election/:category/:subcategory' element={<Candidates/>} />
        <Route exact path='/:election/:category/:subcategory/:candidateId' element={<Candidates/>} />
        {/* <Route path='/candidates' element={<Candidates />} /> */}

        <Route path='/selected-candidate' element={<Selectedcandidate/>} />
      </Routes>
    </div>
  );
}

export default App;
