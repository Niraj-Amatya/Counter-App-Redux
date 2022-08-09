import classes from './Header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/auth';

const Header = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(authActions.logout());
  };

  const isLoggedIn = isAuth && (
    <nav>
      <ul>
        <li>
          <a href="/" className={classes.linkUnclickable}>
            My Products
          </a>
        </li>
        <li>
          <a href="/">My Sales</a>
        </li>
        <li>
          <button onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </nav>
  );
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>

      {isLoggedIn}
    </header>
  );
};

export default Header;
