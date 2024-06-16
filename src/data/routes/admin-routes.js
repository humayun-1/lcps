import Svgs from "svgs";
import Dashboard from "views/admin/dashboard";
import Teachers from "views/admin/teachers";
import Students from "views/admin/students";
import Courses from "views/admin/courses";
import Department from "views/admin/department";
import Contact from "views/admin/contact";

export const adminRouteList = [
  {
    path: "/admin/",
    element: <Dashboard />,
    name: "Home",
    icon: <Svgs.Home />,
  },
  {
    path: "/admin/teachers/",
    element: <Teachers />,
    name: "Teachers",
    icon: <Svgs.Teachers />,
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
  {
    path: "/admin/department/",
    element: <Department />,
    name: "Department",
    icon: <Svgs.Department />,
  },
  {
    path: "/admin/contact/",
    element: <Contact />,
    name: "Contact",
    icon: <Svgs.Contact />,
  },
];
