
import "./App.css"
import HomePage from './Layout/Home';
import {Route,BrowserRouter, Switch} from "react-router-dom"
import Details from "./Components/Details";
import Header from "./Components/Header/header";
import Footer from "./Components/Footer";
function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/detail/:newId"  component={Details} />
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
