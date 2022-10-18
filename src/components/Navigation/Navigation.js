import { Link } from './Navigation.styled';
import { useAuth } from 'hooks';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      {isLoggedIn 
      ? <Link to="/contacts">Contacts</Link>
      : <Link to="/">Home</Link>
      }
    </nav>
  );
};
