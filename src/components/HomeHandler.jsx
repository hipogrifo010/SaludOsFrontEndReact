import { Link } from 'react-router-dom';

function HomeDisplay() {
  return (
    <header>
      <h1>que se yo</h1>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/Product'>Productos</Link>
          </li>
          <li>
            <Link to='/movies'>movies</Link>
          </li>
        </ul>
        <li>
          <Link to='/auth/login'>login</Link>
        </li>
      </nav>
    </header>
  );
}
export default HomeDisplay;
