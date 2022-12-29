import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Card from './Componenet/Card';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Card />} />
    </Routes>
  </Router>
);
