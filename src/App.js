import { Route, Routes } from 'react-router';
import DetailPage from './components/Detailpage';
import Homepage from './components/Homepage';
import './App.css';

const App = () => (
  <>
    <div className="container">
      <Routes>
        <Route path="/" element={<Homepage itemsPerPage={24} />} />
        <Route path="/:id" element={<DetailPage />} />
      </Routes>

    </div>
  </>
);

export default App;
