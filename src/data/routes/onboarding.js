import Svgs from "svgs";
import Login from "views/onboarding/login";
import Reset from "views/onboarding/reset";
import Signup from "views/onboarding/signup";

export const onboarding = [
  {
    path: "/login/",
    element: <Login />,
    name: "Login",
  },
  {
    path: "/signup/",
    element: <Signup />,
    name: "Signup",
  },
  {
    path: "/reset/",
    element: <Reset />,
    name: "Reset",
  },
];
