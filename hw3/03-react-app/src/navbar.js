import { Link, Route, Routes } from 'react-router-dom';
import Houses from './houses';
import Home from './home';
import Search from './search';

export default function NavBar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Home
          </Link>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/search" className="nav-link">
                Search
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/houses" className="nav-link">
                Houses
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search characters={props.data} />} />
        <Route path="/houses" element={<Houses characters={props.data} />} />
      </Routes>
    </div>
  );
}
