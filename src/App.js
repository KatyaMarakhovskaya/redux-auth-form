
import './App.css';
//import Auth from './components/Auth'
import AuthContainer from './components/AuthContainer'
//import Reg from './components/Reg'
import RegContainer from './components/RegContainer'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './store/reducers'

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <div className = "container ">
            <AuthContainer/>
            <RegContainer/>
          </div>

        </header>
      </div>
    </Provider>
  );
}

export default App;
