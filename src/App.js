import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bar from "./Components/Bar";
import Props from "./Components/props";
import Events from "./Components/Events";
import Conditionalrendering from "./Components/ConditionalRendering";
import Hooks from "./Components/Hooks";
import Statemanagment from "./Components/StateManagment";
import Welcome from "./Components/Welcome";
import Container from "./Components/UI/Container";

function App() {
//I'm creating e-commerce using mern stack, can anybody help me
  return (
    <Router>
      <div className="App">
        <Bar />
        <Container>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/props" element={<Props />} />

            <Route path="/events" element={<Events />} />
            <Route path="/rendering" element={<Conditionalrendering />} />
            <Route path="/hooks" element={<Hooks />} />
            <Route path="/state-managment" element={<Statemanagment />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
