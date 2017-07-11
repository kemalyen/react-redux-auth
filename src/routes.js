import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Import miscellaneous routes and other requirements
import App from './pages/App';
import NotFoundPage from './components/pages/not-found-page';

// Import static pages
import HomePage from './pages/HomePage';

import ComponentSamplesPage from './components/pages/component-samples';

// Import authentication related pages
import Register from './components/auth/register';
import Login from './components/auth/login';
import Logout from './components/auth/logout';
import ForgotPassword from './components/auth/forgot_password';
import ResetPassword from './components/auth/reset_password';

/*// Import dashboard pages
import Dashboard from './components/dashboard/dashboard';
import ViewProfile from './components/dashboard/profile/view-profile';
import Inbox from './components/dashboard/messaging/inbox';
import Conversation from './components/dashboard/messaging/conversation';
import ComposeMessage from './components/dashboard/messaging/compose-message';
import BillingSettings from './components/billing/settings';
*/
// Import billing pages
//import InitialCheckout from './components/billing/initial-checkout';

// Import admin pages
import AdminDashboard from './components/admin/dashboard';
import Welcome from './components/admin/welcome';
import Dashboard from './components/Dashboard';


import MovieList from './components/movies/MovieList';



// Import higher order components
import RequireAuth from './components/auth/require_auth';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    
    <Route path="component-samples" component={RequireAuth(ComponentSamplesPage)} />
    <Route path="register" component={Register} />
    <Route path="login" component={Login} />
    <Route path="logout" component={Logout} />
    <Route path="forgot-password" component={ForgotPassword} />
    <Route path="reset-password/:resetToken" component={ResetPassword} />
    
    <Route path="dashboard" component={Dashboard} />
    
    <Route path="movies" component={RequireAuth(MovieList)} />

    <Route path="welcome" component={RequireAuth(Welcome)} />
    <Route path="admin" component={RequireAuth(AdminDashboard)} />

    <Route path="*" component={NotFoundPage} />
  </Route>
);
