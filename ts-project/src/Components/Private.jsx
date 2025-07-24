import { Navigate } from 'react-router-dom';

function Private({ isAuth, children }) {
  return isAuth ? children : <Navigate to="/login"/>;
}

export default Private;