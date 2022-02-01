
import './App.css';
import Profile from "./pages/Profile"
import {Switch, Route} from "react-router-dom"
import Header from './components/Header';
import SearchBar from './pages/SearchBar';

function App() {


  return (
    <>
    <Header/>
      <Switch>
        <Route exact path="/">
          <Profile myprofile="buraLimit"/>
        </Route>
        <Route exact path="/search">
          <SearchBar/>
        </Route>
        <Route exact path="/search/:userId">
          <Profile />
        </Route>
      </Switch>
    </> 
    
  );
}

export default App;
