import "./App.css";
import ContentPage from "./Components/ContentPage";
import RegisterPage from "./Components/RegisterPage";
import SigninPage from "./Components/SigninPage";

// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    // <Router>
    //   <Switch>
    //     <Route path="/SigninPage">
    //       <SigninPage />
    //     </Route>

    //     <Route path="/RegisterPage">
    //       <RegisterPage />
    //     </Route>

    //     <Route path="/ContentPage">
    //       <ContentPage />
    //     </Route>
    //   </Switch>
    // </Router>
    // <SigninPage />
    <RegisterPage />
  );
}

export default App;
