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
import { QueryClient, QueryClientProvider } from "react-query";
import Login from "views/onboarding/login";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
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
          <Route path="*" element={<Login />} />
        </Routes>
      </Router>
      <ToastContainer />
    </QueryClientProvider>
  );
}

export default App;
