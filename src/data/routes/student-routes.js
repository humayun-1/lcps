import Svgs from "svgs";
import AboutUs from "views/student/about-us";
import AllCourses from "views/student/all-courses";
import Cart from "views/student/cart";
import Checkout from "views/student/checkout";
import ContactUs from "views/student/contact-us";
import CourseDetails from "views/student/course-details";
import Dashboard from "views/student/dashboard";
import Video from "views/student/video";

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
  {
    path: "/student/course-details/:id",
    element: <CourseDetails />,
    name: "Course Details",
  },
  {
    path: "/student/video",
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
    path: "/contact",
    element: <ContactUs />,
    name: "ContactUs",
  },
  {
    path: "/about",
    element: <AboutUs />,
    name: "AboutUs",
  },
];
