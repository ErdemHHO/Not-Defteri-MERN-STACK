
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import Header from './components/Header';
import './bootstrap.min.css'

import {useAuthContext} from './hooks/useAuthContext';

function App() {
  const {kullanici}=useAuthContext();
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <div className='pages'>
          <Routes>
            <Route path="/" element={kullanici  ? <HomeScreen/> : <Navigate to="/login" />}/>
            <Route path="/login" element={!kullanici ?  <LoginScreen/> : <Navigate to="/" />}/>
            <Route path="/signup" element={!kullanici ?  <SignUpScreen/> : <Navigate to="/" />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
