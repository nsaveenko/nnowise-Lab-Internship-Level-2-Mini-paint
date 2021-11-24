import { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignUp from '../pages/Auth/SignUp/SignUp';
import SignIn from '../pages/Auth/SignIn/SignIn';
import Dashboard from '../pages/Dashboard/Dashboard';
import Editor from '../pages/Editor/Editor';
import PrivateRoute from './PrivateRoute';

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/signup' exact component={SignUp} />
        <Route path='/signin' exact component={SignIn} />
        <PrivateRoute path='/' exact component={Dashboard} />
        <PrivateRoute path='/editor' exact component={Editor} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
