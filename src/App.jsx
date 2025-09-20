import { createHashRouter, RouterProvider } from "react-router";
import "./App.css";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home/Home";
import Appointment from "./Pages/Appointment/Appointment";
import Doctors from "./Pages/Doctors/Doctors";
import Favourite from "./Pages/Favourite/Favourite";
import Specialist from "./Pages/Specialist/Specialist";
import Search from "./Pages/Search/Search";
import Mappage from "./Pages/Map/Mappage";
import SearchLocation from "./Pages/Search/SearchLocation";
import LoadingMap from "./Pages/Search/LoadingMap";
import SearchResult from "./Pages/Search/SearchResult";
import PhoneMap from "./Pages/Map/PhoneMap";

function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "doctors",
          element: <Doctors />,
        },
        {
          path: "favourite",
          element: <Favourite />,
        },
        {
          path: "specialist",
          element: <Specialist />,
        },
        {
          path: "search",
          element: <Search />,
        },
        {
          path: "map",
          element: <Mappage />,
        },
        {
          path: "searchlocation",
          element: <SearchLocation />,
        },

        {
          path: "loadingmap",
          element: <LoadingMap />,
        },
        {
          path: "searchresult",
          element: <SearchResult />,
        },
        {
          path: "the map",
          element: <PhoneMap />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
