import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import RootLayout from "./components/layouts/RootLayout";
import LandingPage from "./pages/landingPage/LandingPage";
import AboutUs from "./pages/about/AboutUs";
import ContactUs from "./pages/contact/ContactUs";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import CourseLandingPage from "./pages/courseLandingPage/CourseLandingPage";
import CoursesPage from "./pages/coursesPage/CoursesPage";
import CourseDetailsPage from "./pages/courseDetailsPage/CourseDetailsPage";
import TrainingForm from "./pages/trainingForm/TrainingForm";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            { index: true, element: <LandingPage /> },
            { path: "about", element: <AboutUs /> },
            { path: "contact", element: <ContactUs /> },
            { path: "login", element: <Login /> },
            { path: "signup", element: <Signup /> },
            { path: "courses-overview", element: <CourseLandingPage /> },
            { path: "courses", element: <CoursesPage /> },
            { path: "courses/:courseId", element: <CourseDetailsPage /> },
            { path: "courses/:courseId/apply", element: <TrainingForm /> },
            { path: "*", element: <div>Page not found</div> },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
