import Home from "./pages/Home"
import Movie from "./pages/Movie"
import ErrorPage from "./pages/ErrorPage"
import Actors from "./pages/Actors"
import Directors from "./pages/Directors"


const routes = [
   {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
   },
   {
    path: "/actors",
    element: <Actors />,
    errorElement: <ErrorPage />
   },
   {
    path: "/directors",
    element: <Directors />,
    errorElement: <ErrorPage />
   },
   {
    path: "/movie/:id",
    element: <Movie />,
    errorElement: <ErrorPage />
   }
  ];

export default routes;

