import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Import miscellaneous routes and other requirements
import App from './pages/App';
import NotFoundPage from './components/pages/not-found-page';

// Import static pages
import HomePage from './containers/HomePage';
import MoviesPage from './containers/MoviesPage';

// Import authentication related pages
import Register from './components/auth/register';
import Login from './components/auth/login';
import Logout from './components/auth/logout';
import ForgotPassword from './components/auth/forgot_password';
import ResetPassword from './components/auth/reset_password';
 


// Import admin pages
import AdminDashboard from './components/admin/dashboard';
import Welcome from './components/admin/welcome';
import Dashboard from './components/Dashboard';


// Import higher order components
import RequireAuth from './components/auth/require_auth';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    
    <Route path="register" component={Register} />
    <Route path="login" component={Login} />
    <Route path="logout" component={Logout} />
    <Route path="forgot-password" component={ForgotPassword} />
    <Route path="reset-password/:resetToken" component={ResetPassword} />
    
    <Route path="dashboard" component={Dashboard} />
    <Route path="movies" component={MoviesPage} />
    <Route path="welcome" component={RequireAuth(Welcome)} />
    <Route path="admin" component={RequireAuth(AdminDashboard)} />

    <Route path="*" component={NotFoundPage} />
  </Route>
);
