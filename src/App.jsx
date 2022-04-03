import { Route, Routes } from 'react-router-dom';
import Layout from './views/Layout';
import Home from './components/Home';
import Profile from './components/Profile';
import './App.scss';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Routes>
        <Route path={`/`} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
