import { Route, Routes } from 'react-router-dom';
import Layout from './views/Layout';
import Home from './components/Home';
import Profile from './components/Profile';
import './App.scss';

function App() {
  return (
    <>
      <Routes>
        <Route path={`/`} element={<Layout />}>
          <Route index element={<Profile />} />
        </Route>
        {/* <Route path={`/search`} element={<SearchResults />} />
          <Route path={`/recipe/:id`} element={<Recipe />} /> */}
      </Routes>
    </>
  );
}

export default App;
