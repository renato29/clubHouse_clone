
import './App.css';
import PlanLayout from './pages/layout/PlanLayout';
import Welcome from './pages/Welcome';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PhoneConf from './pages/PhoneConf';


function App() {
  return (
    <Router>
        <PlanLayout>
          <Route exact path='/' component={Welcome}/>
          <Route exact path='/invite' component={PhoneConf}/>
        </PlanLayout>
    </Router>
  );
}

export default App;
