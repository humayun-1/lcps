import Svgs from "svgs";
import Dashboard from "views/admin/dashboard";
import Professors from "views/admin/professors";
import Students from "views/admin/students";
import Courses from "views/admin/courses";

export const adminRouteList = [
  {
    path: "/admin/",
    element: <Dashboard />,
    name: "Home",
    icon: <Svgs.Home />,
  },
  {
    path: "/admin/professors/",
    element: <Professors />,
    name: "Professors",
    icon: <Svgs.Professors />,
  },
  {
    path: "/admin/students/",
    element: <Students />,
    name: "Students",
    icon: <Svgs.Students />,
  },
  {
    path: "/admin/courses/",
    element: <Courses />,
    name: "Courses",
    icon: <Svgs.Courses />,
  },
];
