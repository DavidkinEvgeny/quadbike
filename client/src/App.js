import './App.scss';
import Home from './Conteiners/Home/Home';
import Price from './Conteiners/Price/Price';
import Regulatuins from './Conteiners/Regulations/Regulations';
import Contacts from './Conteiners/Contacts/Contacts';
import Present from './Conteiners/Present/Present';
import Photos from './Conteiners/Photos/Photos';
import WrapperApp from './UI/WrapperApp/WrapperApp'
import { Switch, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <WrapperApp>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/price' component={Price} />
          <Route path='/regulations' component={Regulatuins} />
          <Route path='/contacts' component={Contacts} />
          <Route path='/present' component={Present} />
          <Route path='/photos' component={Photos} />
        </Switch>
      </WrapperApp>
    </div>
  );
}

export default App;
