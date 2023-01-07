
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import Header from './components/Header';
import './bootstrap.min.css'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <div className='pages'>
          <Routes>
            <Route path="/" element={<HomeScreen/>} exach/>
            <Route path="/login" element={<LoginScreen/>}/>
            <Route path="/signup" element={<SignUpScreen/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
