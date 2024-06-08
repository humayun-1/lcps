import Svgs from "svgs";
import AboutUs from "views/student/about-us";
import AllCourses from "views/student/all-courses";
import Cart from "views/student/cart";
import Checkout from "views/student/checkout";
import ContactUs from "views/student/contact-us";
import CourseDetails from "views/student/course-details";
import Dashboard from "views/student/dashboard";
import MyLearning from "views/student/my-learning";
import StudentForm from "views/student/student-form";
import Video from "views/student/video";

export const studentRouteList = [
  {
    path: "/student/",
    element: <Dashboard />,
    name: "Home",
  },
  {
    path: "/student/video/:id",
    element: <Video />,
    name: "Video",
  },
  {
    path: "/student/cart",
    element: <Cart />,
    name: "Cart",
  },
  {
    path: "/student/checkout",
    element: <Checkout />,
    name: "Checkout",
  },
  {
    path: "/student/my-learning",
    element: <MyLearning />,
    name: "MyLearning",
  },
  {
    path: "/student-form",
    element: <StudentForm />,
    name: "StudentForm",
  },
];
