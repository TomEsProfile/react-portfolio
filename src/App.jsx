import { Route, Routes } from 'react-router-dom';
import Layout from './views/Layout';
import Home from './components/Home';
import './App.scss';
import Profile from './views/Profile';

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
