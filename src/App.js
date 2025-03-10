import Container from './components/Container/Container'
import { Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import Home from './components/Home/Home'
//import SearchForm from './components/SearchForm/SearchForm'
import List from './components/List/List'
import NavBar from './components/NavBar/NavBar'
import PageNotFound from './components/PageNotFound/PageNotFound';
import Favorite from './components/Favorite/Favorite'

const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/list/:listId" element={<List />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Container>
    </main>
  );

};

export default App;
