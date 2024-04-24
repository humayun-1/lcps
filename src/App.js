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
import { Toaster } from "react-hot-toast";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

function App() {
  const stripePromise = loadStripe(
    "pk_test_51P8tAlDu4xIvxfbEAYvC4omPzxLAMO3vPgXjmi21p7tBnm5BCF885pUvgFBSrO9TlEz1D3G70JIm43NiwXwZgOv000vQQjjCjK"
  );
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Elements stripe={stripePromise}>
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
      </Elements>
      <Toaster position="top-center" containerClassName="!z-[999999999999]" reverseOrder={false} />
    </QueryClientProvider>
  );
}

export default App;
