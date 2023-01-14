import logo from "./logo.svg";
import "./App.css";
import Container from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContexts";

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            // Makes it so everything can see the auth context
            <Switch>
              {/* All of our pages are gonna go here and we link between them using the <Link> tag */}
              {/* <Route path="/nameOffile" component={nameOfComponent}/> */}
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;
