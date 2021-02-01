import './App.scss';
import Home from './Conteiners/Home/Home';
import WrapperApp from './UI/WrapperApp/WrapperApp'


function App() {
  return (
    <div className="App">
      <WrapperApp>
        <Home />
      </WrapperApp>
    </div>
  );
}

export default App;
