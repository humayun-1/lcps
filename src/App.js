import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import { adminRouteList } from "data/routes/admin-routes";
import { teacherRouteList } from "data/routes/teacher-routes";
import { studentRouteList } from "data/routes/student-routes";
import { onboarding } from "data/routes/onboarding";
import Home from "views/home";

function App() {
  return (
    <Router>
      <Routes>
        {[
          ...onboarding,
          ...adminRouteList,
          ...teacherRouteList,
          ...studentRouteList,
        ].map(({ path, element }, index) => (
          <Route path={path} element={element} key={index} />
        ))}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
