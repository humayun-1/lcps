import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import FullLoader from "components/common/elements/loaders/full-screen-loader";
import { onboarding } from "data/routes/onboarding";
import Login from "views/onboarding/login";
import { studentRouteList } from "data/routes/student-routes";
import { adminRouteList } from "data/routes/admin-routes";
import { teacherRouteList } from "data/routes/teacher-routes";
import ProtectedRoute from "views/routes/protected-route";
import Dashboard from "views/student/dashboard";
import AllCourses from "views/student/all-courses";
import CourseDetails from "views/student/course-details";
import ContactUs from "views/student/contact-us";
import AboutUs from "views/student/about-us";

function App() {
  const stripePromise = loadStripe(
    "pk_test_51P8tAlDu4xIvxfbEAYvC4omPzxLAMO3vPgXjmi21p7tBnm5BCF885pUvgFBSrO9TlEz1D3G70JIm43NiwXwZgOv000vQQjjCjK"
  );
  const queryClient = new QueryClient();
  const [Loader, setLoader] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 1000);
  }, []);

  const studentRoles = ['student'];
  const teacherRoles = ['teacher'];
  const adminRoles = ['admin'];

  return (
    <QueryClientProvider client={queryClient}>
      <Elements stripe={stripePromise}>




        <Router>
          <Routes>
            {onboarding.map(({ path, element }, index) => (
              <Route key={index} path={path} element={element} />
            ))}

            {/* Protected routes */}
            {
              studentRouteList.map(({ path, element }, index) => (
                <Route
                  key={index}
                  path={path}
                  element={
                    <ProtectedRoute roles={studentRoles}>{element}</ProtectedRoute>
                  }
                />
              ))
            }
            {
              adminRouteList.map(({ path, element }, index) => (
                <Route
                  key={index}
                  path={path}
                  element={
                    <ProtectedRoute roles={adminRoles}>{element}</ProtectedRoute>
                  }
                />
              ))
            }
            {
              teacherRouteList.map(({ path, element }, index) => (
                <Route
                  key={index}
                  path={path}
                  element={
                    <ProtectedRoute roles={teacherRoles}>{element}</ProtectedRoute>
                  }
                />
              ))
            }

            {
              [{
                path: "/student/all-courses",
                element: <AllCourses />,
                name: "All Courses",
              },
              {
                path: "/student/course-details/:id",
                element: <CourseDetails />,
                name: "Course Details",
              },
              {
                path: "/contact",
                element: <ContactUs />,
                name: "ContactUs",
              },
              {
                path: "/",
                element: <Dashboard />,
                name: "Dashboard",
              },
              {
                path: "/about",
                element: <AboutUs />,
                name: "AboutUs",
              }].map(ele=>{
              return <Route path={ele.path} element={ele.element} />    
              })
            }

            
            
            {/* Catch-all route for unauthorized access */}
            <Route path="*" element={<Login />} />


          </Routes>
        </Router>



      </Elements>
      <Toaster position="top-center" containerClassName="!z-[999999999999]" reverseOrder={false} />
      {
        Loader && <FullLoader />
      }
    </QueryClientProvider>
  );
}

export default App;
