import { Link, Route, Routes } from 'react-router-dom';
import Houses from './houses';
import Home from './home';
import Search from './search';

export default function NavBar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="/houses">Houses</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/houses" element={<Houses />} />
      </Routes>
    </div>
  );
}
