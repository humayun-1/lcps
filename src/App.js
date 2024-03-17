import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import { routeList } from "data/routes/admin-routes";
import Home from "views/home";

function App() {
  return (
    <Router>
      <Routes>
        {routeList.map(({ path, element }, index) => (
          <Route path={path} element={element} key={index} />
        ))}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
