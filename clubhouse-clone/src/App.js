
import './App.css';
import PlanLayout from './pages/layout/PlanLayout';
import Welcome from './pages/Welcome';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PhoneConf from './pages/PhoneConf';
import CodeConfirm from './pages/CodeConfirm'
import AllowNotif from './pages/AllowNotif'
import Home from './pages/Home';
import AppLayout from './pages/layout/AppLayout'

function App() {
  return (
    <BrowserRouter>
      <Route
        exact
        path={['/',
          '/invite',
          '/get_username',
          '/code_confirm',
          '/allow_notif']}
      >
        <PlanLayout>
          <Switch>
            <Route exact path='/' component={Welcome} />
            <Route exact path='/invite' component={PhoneConf} />
            <Route exact path='/code_confirm' component={CodeConfirm} />
            <Route exact path='/allow_notif' component={AllowNotif} />
          </Switch>
        </PlanLayout>
      </Route>
      <Route exact path={['/home']} >
        <AppLayout>
          <Switch>
            <Route exact path='/home' component={() => <Home />}>  </Route>
          </Switch>
        </AppLayout>
      </Route>
    </BrowserRouter>
  );
}

export default App;
