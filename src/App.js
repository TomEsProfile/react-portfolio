import { Route, Routes } from 'react-router-dom';
import Nav from './views/Nav';
import Footer from './views/Footer';
import Profile from './views/Profile';

function App() {
  return (
    <div className="App">
      <Nav />
      <main className="container-fluid p-0 m-0">
        <Routes>
          <Route path={`/`} element={<Profile />} />
          {/* <Route path={`/search`} element={<SearchResults />} />
          <Route path={`/recipe/:id`} element={<Recipe />} /> */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
