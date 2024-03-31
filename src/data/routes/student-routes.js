import Svgs from "svgs";
import AllCourses from "views/student/all-courses";
import Dashboard from "views/student/dashboard";

export const studentRouteList = [
  {
    path: "/student/",
    element: <Dashboard />,
    name: "Home",
  },
  {
    path: "/student/all-courses",
    element: <AllCourses />,
    name: "All Courses",
  },
];
