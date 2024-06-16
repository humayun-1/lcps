import Svgs from "svgs";
import Dashboard from "views/teacher/dashboard";
// import Courses from "views/admin/courses";
// import Students from "views/teacher/students";
import Students from "views/admin/students";
import Courses from "views/admin/courses";
import Lectures from "views/teacher/lectures";
import Announcement from "views/teacher/announcement";
import Assignment from "views/teacher/assignment";

export const teacherRouteList = [
  {
    path: "/teacher/",
    element: <Dashboard />,
    name: "Home",
    icon: <Svgs.Home />,
  },
  {
    path: "/teacher/students/",
    element: <Students type="teacher" />,
    name: "Students",
    icon: <Svgs.Students />,
  },
  {
    path: "/teacher/courses/",
    element: <Courses type={"teacher"} />,
    name: "Courses",
    icon: <Svgs.Courses />,
  },
  {
    path: "/teacher/lectures/",
    element: <Lectures />,
    name: "Lectures",
    icon: <Svgs.Lectures />,
  },
  {
    path: "/teacher/Announcement/",
    element: <Announcement />,
    name: "Announcement",
    icon: <Svgs.Announcements />,
  },
  {
    path: "/teacher/Assignment/",
    element: <Assignment />,
    name: "Assignment",
    icon: <Svgs.Assignments />,
  },
];
