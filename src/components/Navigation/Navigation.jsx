import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectToken } from '../../redux/auth/auth-selectors.js';

export const Navigation = () => {
  const token = useSelector(selectToken);
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        {token && (
          <li>
            <NavLink to="users">Users</NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};
