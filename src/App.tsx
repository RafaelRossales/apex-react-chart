import Body from './components/body';
import Login from './components/login/Login';
import Home from './components/Home/Home';
import './App.css';
import './index.css'
import ChartsPage from './components/ChartsPage';

function App() {
  return (
      <div className="content">
        {/* <Login/> */}
        {/* <Home/> */}
        <ChartsPage/>
      </div>
  );
}

export default App;
