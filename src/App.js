import './App.css';
import SignUpPage from './modules/auth/signup/SignUpPage';
import CheckCardUser from './modules/users/checkCard/CardUser';

function App() {
  return (
    <div className="App">
      {/* <SignUpPage/> */}
      <CheckCardUser/>
    </div>
  );
}

export default App;
