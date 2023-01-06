
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import Header from './components/Header';
import './bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <div className='pages'>
          <Routes>
            <Route path="/" element={<HomeScreen/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
